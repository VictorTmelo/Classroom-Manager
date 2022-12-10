using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Script.Services;
using DatabaseController;

namespace SOAP
{
    /// <summary>
    /// Descrição resumida de ClassRoomManager
    /// </summary>
    [WebService(Namespace = "http://classroom_manager.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    // Para permitir que esse serviço da web seja chamado a partir do script, usando ASP.NET AJAX, remova os comentários da linha a seguir. 
    // [System.Web.Script.Services.ScriptService]
    public class ClassRoomManager : System.Web.Services.WebService
    {

        [WebMethod]
        public Professor GetProfessorById(string id)
        {

            return Controller.get_professor_by_id(id);
        }

        [WebMethod]
        public string CreateProfessor(string name)
        {

            return Controller.create_professor(name);
        }

        [WebMethod]
        public Professor GetProfessor(string name)
        {

            return Controller.get_professor(name);
        }

        [WebMethod]
        public List<Professor> GetProfessors()
        {

            return Controller.get_professors();
        }

        [WebMethod]
        public bool UpdateProfessor(string name,string new_name)
        {

            return Controller.update_professor(name,new_name);
        }

        [WebMethod]
        public bool DeleteProfessor(string name)
        {

            return Controller.delete_professor(name);
        }

        [WebMethod]
        public string GetProfessorIdByName(string name)
        {

            return Controller.get_professor_id_by_name(name);
        }

        [WebMethod]
        public Professor GetProfessorOfCourse(string course_name)
        {

            return Controller.get_professor_of_course(course_name);
        }

        [WebMethod]
        public string GetProfessorIdOfCourse(string course_id)
        {

            return Controller.get_professor_id_of_course(course_id);
        }


        [WebMethod]
        public string CreateCourse(string name,string horario)
        {
            return Controller.create_course(name,horario);
        }

        [WebMethod]
        public Disciplina GetCourse(string name)
        {
            return Controller.get_course(name);
        }

        [WebMethod]
        public List<Disciplina> GetCourses()
        {
            return Controller.get_courses();
        }

        [WebMethod]
        public bool UpdateCourse(string name, string new_name)
        {
            return Controller.update_course(name, new_name);
        }

        [WebMethod]
        public bool DeleteCourse(string name)
        {
            return Controller.delete_course(name);
        }

        [WebMethod]
        public Disciplina GetCourseById(string course_id)
        {
            return Controller.get_course_by_id(course_id);
        }

        [WebMethod]
        public List<Disciplina> GetCoursesOfStudent(string student_name)
        {
            return Controller.get_courses_of_student(student_name);
        }

        [WebMethod]
        public List<string> GetCourseIdOfStudent(string student_id)
        {
            return Controller.get_courses_id_of_student(student_id);
        }

        [WebMethod]
        public List<Disciplina> GetCoursesOfProfessor(string professor_name)
        {
            return Controller.get_courses_of_professor(professor_name);
        }

        [WebMethod]
        public List<string> GetCoursesIdOfProfessor(string professor_id)
        {
            return Controller.get_courses_id_of_professor(professor_id);
        }

        [WebMethod]
        public string CreateStudent(string name, string idade, string email, string telefone)
        {
            return Controller.create_student(name,idade,email,telefone);
        }

        [WebMethod]
        public Aluno GetStudent(string name)
        {
            return Controller.get_student(name);
        }

        [WebMethod]
        public List<Aluno> GetStudents()
        {
            return Controller.get_students();
        }

        [WebMethod]
        public bool UpdateStudent(string name, string new_name)
        {
            return Controller.update_student(name, new_name);
        }

        [WebMethod]
        public bool DeleteStudent(string name)
        {
            return Controller.delete_student(name);
        }

        [WebMethod]
        public Aluno GetStudentById(string id)
        {
            return Controller.get_student_by_id(id);
        }

        [WebMethod]
        public string GetStudentIdByName(string name)
        {
            return Controller.get_student_id_by_name(name);
        }

        [WebMethod]
        public List<Aluno> GetStudentsOfCourse(string course_name)
        {
            return Controller.get_students_of_course(course_name);
        }

        [WebMethod]
        public List<string> GetStudentsIdOfCourse(string course_id)
        {
            return Controller.get_students_id_of_course(course_id);
        }
    }
}
