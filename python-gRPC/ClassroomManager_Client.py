import grpc
import service_classroomManager_pb2 as pb2
import service_classroomManager_pb2_grpc as pb2_grpc


class ClassroomManagerClient(object):
    def __init__(self):
        self.channel = grpc.insecure_channel('localhost:50051')
        self.stub = pb2_grpc.classroomManagerStub(self.channel)

    def addProfessor(self, professor):
        response = self.stub.addProfessor(pb2.addProfessorRequest(professor=professor))
        return response

    def updateProfessor(self, professor):
        response = self.stub.updateProfessor(
            pb2.updateNameRequest(oldName=professor['oldName'], newName=professor['newName']))
        return response

    def deleteProfessor(self, professor):
        response = self.stub.deleteProfessor(pb2.nameRequest(name=professor['name']))
        return response

    def getProfessor(self, professor):
        response = self.stub.getProfessor(pb2.nameRequest(name=professor['name']))
        return response

    def getProfessors(self):
        response = self.stub.getProfessors(pb2.Empty())
        return response

    def getProfessorsFromCourse(self, course):
        response = self.stub.getProfessorsFromCourse(pb2.nameRequest(name=course['name']))
        return response

    def addCourse(self, course):
        response = self.stub.addCourse(pb2.addCourseRequest(course=course))
        return response

    def updateCourse(self, course):
        response = self.stub.updateCourse(
            pb2.updateNameRequest(oldName=course['oldName'], newName=course['newName']))
        return response

    def deleteCourse(self, course):
        response = self.stub.deleteCourse(pb2.nameRequest(name=course['name']))
        return response

    def getCourse(self, course):
        response = self.stub.getCourse(pb2.nameRequest(name=course['name']))
        return response

    def getCourses(self):
        response = self.stub.getCourses(pb2.Empty())
        return response

    def getCoursesFromProfessor(self, professor):
        response = self.stub.getCoursesFromProfessor(pb2.nameRequest(name=professor['name']))
        return response

    def getCoursesFromStudent(self, student):
        response = self.stub.getCoursesFromStudent(pb2.nameRequest(name=student['name']))
        return response

    def addStudent(self, student):
        response = self.stub.addStudent(pb2.addStudentRequest(student=student))
        return response

    def updateStudent(self, student):
        response = self.stub.updateStudent(
            pb2.updateNameRequest(oldName=student['oldName'], newName=student['newName']))
        return response

    def deleteStudent(self, student):
        response = self.stub.deleteStudent(pb2.nameRequest(name=student['name']))
        return response

    def getStudent(self, student):
        response = self.stub.getStudent(pb2.nameRequest(name=student['name']))
        return response

    def getStudents(self):
        response = self.stub.getStudents(pb2.Empty())
        return response

    def getStudentsFromCourse(self, course):
        response = self.stub.getStudentsFromCourse(pb2.nameRequest(name=course['name']))
        return response


if __name__ == '__main__':
    client = ClassroomManagerClient()
    # response = client.addProfessor({'nome': 'Professor 2'})
    # response = client.updateProfessor({'oldName': 'Professor 2', 'newName': 'Professor 4'})
    # response = client.deleteProfessor({'name': 'Professor 1'})
    # response = client.getProfessor({'name': 'Nabor das Chagas'})
    # response = client.getProfessors()
    # response = client.getProfessorsFromCourse({'name': 'Estrutura'})
    # response = client.addCourse({'name': 'Algoritmo', 'time': 'M24AB'})
    # response = client.updateCourse({'oldName': 'Estrutura de Dados', 'newName': 'Algoritmo'})
    # response = client.deleteCourse({'name': 'Algoritmo'})
    # response = client.getCourse({'name': 'Projeto Final Integrador 2'})
    # response = client.getCourses()
    # response = client.getCoursesFromProfessor({'name': 'Nabor das Chaga'})
    # response = client.getCoursesFromStudent({'name': 'Renato Vidal Mour'})
    # response = client.addStudent({'name': 'Renato Vidal Mouraa'})
    # response = client.updateStudent({'oldName': 'Renato Vidal Moura', 'newName': 'Renato Vidal Mouraaa'})
    # response = client.deleteStudent({'name': 'Renato Vidal Mouraaaa'})
    # response = client.getStudent({'name': 'Victor Torres de Melo'})
    # response = client.getStudents()
    response = client.getStudentsFromCourse({'name': 'Projeto Final Integrador 1'})
    print(response)
