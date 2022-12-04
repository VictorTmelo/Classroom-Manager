import grpc
from concurrent import futures
import service_classroomManager_pb2 as pb2
import service_classroomManager_pb2_grpc as pb2_grpc
import db_controller as controller


class ClassroomManagerServer(pb2_grpc.classroomManagerServicer):
    def __init__(self):
        pass

    def addProfessor(self, request, context):
        controller.create_professor(request.professor.name)
        print('Professor:', request.professor.name, 'foi adicionado')
        return pb2.GenericResponse(msg='Professor adicionado com sucesso')

    def updateProfessor(self, request, context):
        if controller.update_professor(request.oldName, request.newName):
            print('Professor:', request.oldName, 'foi atualizado para', request.newName)
            return pb2.GenericResponse(msg='Nome do professor atualizado com sucesso')

        return pb2.GenericResponse(msg=f'Professor: {request.oldName} nao encontrado')

    def deleteProfessor(self, request, context):
        if controller.delete_professor(request.name):
            print('Professor:', request.name, 'foi deletado')
            return pb2.GenericResponse(msg='Professor deletado com sucesso')

        return pb2.GenericResponse(msg=f'Professor: {request.name} nao encontrado')

    def getProfessor(self, request, context):
        professor = controller.get_professor(request.name)
        if professor:
            return pb2.professorResponse(professor={'name': professor['nome']})
        return pb2.professorResponse(professor={'name': 'Professor nao encontrado'})

    def getProfessors(self, request, context):
        professors = controller.get_professors()
        professors_list = []
        for professor in professors:
            professors_list.append({'name': professor['nome']})
        return pb2.professorsGenericResponse(professor=professors_list)

    def getProfessorsFromCourse(self, request, context):
        professor = controller.get_professor_of_course(request.name)
        if professor:
            return pb2.professorResponse(professor={'name': professor['nome']})
        return pb2.professorResponse(professor={'name': 'Professor nao encontrado'})

    def addCourse(self, request, context):
        controller.create_course(request.course.name, request.course.time)
        print('Curso:', request.course.name, 'foi adicionado')
        return pb2.GenericResponse(msg='Curso adicionado com sucesso')

    def updateCourse(self, request, context):
        if controller.update_course(request.oldName, request.newName):
            print('Curso:', request.oldName, 'foi atualizado para', request.newName)
            return pb2.GenericResponse(msg='Nome do curso atualizado com sucesso')

        return pb2.GenericResponse(msg=f'Curso: {request.oldName} nao encontrado')

    def deleteCourse(self, request, context):
        if controller.delete_course(request.name):
            print('Curso:', request.name, 'foi deletado')
            return pb2.GenericResponse(msg='Curso deletado com sucesso')

        return pb2.GenericResponse(msg=f'Curso: {request.name} nao encontrado')

    def getCourse(self, request, context):
        course = controller.get_course(request.name)
        if course:
            return pb2.courseResponse(course={'name': course['nome'], 'time': course['horario']})
        return pb2.courseResponse(course={'name': 'Curso nao encontrado'})

    def getCourses(self, request, context):
        courses = controller.get_courses()
        courses_list = []
        for course in courses:
            courses_list.append({'name': course['nome'], 'time': course['horario']})

        return pb2.coursesGenericResponse(course=courses_list)

    def getCoursesFromProfessor(self, request, context):
        courses = controller.get_courses_of_professor(request.name)
        courses_list = []
        if courses:
            for course in courses:
                courses_list.append({'name': course['nome'], 'time': course['horario']})

            print(courses_list)
            return pb2.coursesGenericResponse(course=courses_list)

        return pb2.coursesGenericResponse(course=[{'name': 'Professor nao encontrado', 'time': 'None'}])

    def getCoursesFromStudent(self, request, context):
        courses = controller.get_courses_of_student(request.name)
        courses_list = []
        if courses:
            for course in courses:
                courses_list.append({'name': course['nome'], 'time': course['horario']})

            print(courses_list)
            return pb2.coursesGenericResponse(course=courses_list)

        return pb2.coursesGenericResponse(course=[{'name': 'Aluno nao encontrado', 'time': 'None'}])

    def addStudent(self, request, context):
        controller.create_student(request.student.name)
        print('Aluno:', request.student.name, 'foi adicionado')
        return pb2.GenericResponse(msg='Aluno adicionado com sucesso')

    def updateStudent(self, request, context):
        if controller.update_student(request.oldName, request.newName):
            print('Aluno:', request.oldName, 'foi atualizado para', request.newName)
            return pb2.GenericResponse(msg='Nome do aluno atualizado com sucesso')

        return pb2.GenericResponse(msg=f'Aluno: {request.oldName} nao encontrado')

    def deleteStudent(self, request, context):
        if controller.delete_student(request.name):
            print('Aluno:', request.name, 'foi deletado')
            return pb2.GenericResponse(msg='Aluno deletado com sucesso')

        return pb2.GenericResponse(msg=f'Aluno: {request.name} nao encontrado')

    def getStudent(self, request, context):
        student = controller.get_student(request.name)
        if student:
            return pb2.studentResponse(student={'name': student['nome']})
        return pb2.studentResponse(student={'name': 'Aluno nao encontrado'})

    def getStudents(self, request, context):
        students = controller.get_students()
        students_list = []
        for student in students:
            students_list.append({'name': student['nome']})
        return pb2.studentsGenericResponse(student=students_list)

    def getStudentsFromCourse(self, request, context):
        students = controller.get_students_of_course(request.name)
        students_list = []
        if students:
            for student in students:
                students_list.append({'name': student['nome']})

            print(students_list)
            return pb2.studentsGenericResponse(student=students_list)

        return pb2.studentsGenericResponse(student=[{'name': 'Curso nao encontrado'}])



def server():
    print('Servidor inicializado....')
    server_ = grpc.server(futures.ThreadPoolExecutor(max_workers=100))
    pb2_grpc.add_classroomManagerServicer_to_server(ClassroomManagerServer(), server_)
    server_.add_insecure_port('[::]:50051')
    server_.start()
    server_.wait_for_termination()


if __name__ == '__main__':
    server()
