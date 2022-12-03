import json


def load_db():
    with open('database.json') as f:
        return json.load(f)


def save_db(db):
    with open('database.json', 'w') as f:
        json.dump(db, f)


def save_data_db(key, item, method):
    new_data = get_data()
    if method == 'delete':
        new_data[key].remove(item)
    elif method == 'post':
        new_data[key].append(item)
    else:
        new_data[key] = item

    save_db(new_data)


def get_data():
    db = load_db()
    return db


def get_professor_by_id(id):
    professors = get_professors()
    for professor in professors:
        if professor['id'] == id:
            return professor


def create_professor(name):
    professors = get_professors()
    professor_id = int(professors[-1]['id']) + 1
    professor = {'id': str(professor_id), 'nome': name}
    save_data_db('Professores', professor, 'post')


def get_professors():
    db = load_db()
    return db['Professores']


def update_professor(name, new_name):
    professors = get_professors()
    for professor in professors:
        if professor['nome'] == name:
            professor['nome'] = new_name
            save_data_db('Professores', professors, 'put')

    print(get_data())


def delete_professor(name):
    professors = get_professors()
    for professor in professors:
        if professor['nome'] == name:
            professors.remove(professor)
            save_data_db('Professores', professor, 'delete')
    print(get_data())


def get_professor_id_by_name(name):
    professors = get_professors()
    for professor in professors:
        if professor['nome'] == name:
            return professor['id']


def get_professor_of_course(course_name):
    course_id = get_course_by_name(course_name)['id']
    professor_id = get_professor_id_of_course(course_id)
    return get_professor_by_id(professor_id)


def get_professor_id_of_course(course_id):
    db = load_db()
    professor_id = [c_id['idProfessor'] for c_id in db['DisciplinasProfessores'] if c_id['idDisciplina'] == course_id][
        0]
    return professor_id


def create_course(name, horario):
    courses = get_courses()
    course_id = int(courses[-1]['id']) + 1
    course = {'id': str(course_id), 'nome': name, 'horario': horario}
    save_data_db('Disciplinas', course, 'post')


def get_courses():
    db = load_db()
    return db['Disciplinas']


def update_course(name, new_name):
    courses = get_courses()
    for course in courses:
        if course['nome'] == name:
            course['nome'] = new_name
            save_data_db('Disciplinas', course, 'put')


def delete_course(name):
    courses = get_courses()
    for course in courses:
        if course['nome'] == name:
            courses.remove(course)
            save_data_db('Disciplinas', course, 'delete')
    print(get_data())


def get_course_by_name(course_name):
    courses = get_courses()
    for course in courses:
        if course['nome'] == course_name:
            return course


def get_course_by_id(course_id):
    courses = get_courses()
    for course in courses:
        if course['id'] == course_id:
            return course


def get_courses_of_student(student_name):
    courses = []
    student_id = get_student_id_by_name(student_name)
    courses_id = get_courses_id_of_student(student_id)
    for course_id in courses_id:
        courses.append(get_course_by_id(course_id))

    return courses


def get_courses_id_of_student(student_id):
    db = load_db()
    courses_id = [c_id['idDisciplina'] for c_id in db['DisciplinasAlunos'] if student_id in c_id['idAluno']]
    return courses_id


def get_courses_of_professor(professor_name):
    courses = []
    professor_id = get_professor_id_by_name(professor_name)
    courses_id = get_courses_id_of_professor(professor_id)
    for course_id in courses_id:
        courses.append(get_course_by_id(course_id))

    return courses


def get_courses_id_of_professor(professor_id):
    db = load_db()
    courses_id = [c_id['idDisciplina'] for c_id in db['DisciplinasProfessores'] if c_id['idProfessor'] == professor_id]
    return courses_id


def create_student(name):
    students = get_students()
    student_id = int(students[-1]['matricula']) + 1
    student = {'matricula': str(student_id), 'nome': name}
    save_data_db('Alunos', student, 'post')


def get_students():
    db = load_db()
    return db['Alunos']


def update_student(name, new_name):
    students = get_students()
    for student in students:
        if student['nome'] == name:
            student['nome'] = new_name
            save_data_db('Alunos', student, 'put')


def delete_student(name):
    students = get_students()
    for student in students:
        if student['nome'] == name:
            students.remove(student)
            save_data_db('Alunos', student, 'delete')
    print(get_data())


def get_student_by_id(id):
    students = get_students()
    for student in students:
        if student['matricula'] == id:
            return student


def get_student_id_by_name(name):
    students = get_students()
    for student in students:
        if student['nome'] == name:
            return student['matricula']


def get_students_of_course(course_name):
    students = []
    course_id = get_course_by_name(course_name)['id']
    students_id = get_students_id_of_course(course_id)
    for student_id in students_id:
        students.append(get_student_by_id(student_id))

    return students


def get_students_id_of_course(course_id):
    db = load_db()
    student_id = [c_id['idAluno'] for c_id in db['DisciplinasAlunos'] if c_id['idDisciplina'] == course_id][0]
    return student_id


if __name__ == '__main__':
    delete_professor('Wilson Wagner Junior')
