using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using Newtonsoft.Json;

namespace DatabaseController
{
    public class Controller
    {
        static void Main(string[] args)
        {
            //Console.WriteLine(get_student_by_id("2017000009"));
            Console.WriteLine(get_professor_id_by_name("Nabor das Chagas"));
            //Console.WriteLine(string.Join(", ", get_courses_id_of_professor("1")));
            Console.Read();
        }

        static dynamic data()
        {
            using (StreamReader file = new StreamReader("C:\\Users\\Renato Vidal\\source\\repos\\SOAP\\database.json"))
            {

                dynamic json = JsonConvert.DeserializeObject(file.ReadToEnd());

                return json;


            }
        }

        public static Professor get_professor_by_id( string id)
        {
            dynamic professors = get_professors();
            foreach(dynamic professor in professors)
            {
                if(professor["id"] == id)
                {
                    return professor;
                }
            }

            return null;
        }
        //TODO CREATE PROFESSOR

        public static Professor get_professor(string name)
        {
            List<Professor> professors = get_professors();
            foreach (Professor professor in professors)
            {
                if (professor.nome == name)
                {
                    return professor;
                }
            }

            return null;
        }

        public static List<Professor> get_professors()
        {

            dynamic dados = data()["Professores"];
            List<Professor> professors = new List<Professor>();

            foreach(dynamic dado in dados)
            {
                Professor p = new Professor();
                p.id = dado["id"];
                p.nome = dado["nome"];

                professors.Add(p);
            }

            return professors;

        }




        //TODO UPDATE PROFESSOR

        //TODO DELETE PROFESSOR

        static string get_professor_id_by_name(string name)
        {
            List<Professor> professors = get_professors();
            foreach (Professor professor in professors)
            {
                if (professor.nome == name)
                {
                    return professor.id;
                }
            }

            return "-1";
        }

        //TODO get_professor_of_course

        //TODO get_professor_id_of_course

        //TODO create_course

        static Object get_course(string name)
        {
            dynamic courses = get_courses();
            foreach(dynamic course in courses)
            {
                if(course["nome"] == name)
                {
                    return course;
                }
            }
            return 0;
        }

        static Object get_courses()
        {
            dynamic dados = data();

            return dados["Disciplinas"];
        }

        //TODO UPDATE COURSE

        //TODO DELETE COURSE

        static Object get_course_by_id(string course_id)
        {
            dynamic courses = get_courses();

            foreach(dynamic course in courses)
            {
                if(course["id"] == course_id)
                {
                    return course;
                }
            }

            return 0;
        }

        /*static dynamic get_courses_of_student(string student_name)
        {

        }

        static dynamic get_courses_id_of_student(string student_id)
        {

        }

        static dynamic get_courses_of_professor(string professor_name)
        {
            List<Object> courses = new List<Object>();
            string professor_id = get_professor_id_by_name(professor_name);

            if (professor_id != "-1")
            {
                string course_id = get
            }

        }*/

        static dynamic get_courses_id_of_professor(string professor_id)
        {
            dynamic dados = data();
            List<Object> courses_id = new List<Object>();

            foreach (dynamic c_id in dados["DisciplinasProfessores"])
            {
                if(c_id["idProfessor"] == professor_id)
                {
                    courses_id.Add(c_id["idDisciplina"]); 
                }
            }

            return courses_id;
        }

        //TODO CREATE STUDENT

        static Object get_student(string name)
        {
            dynamic students = get_students();

            foreach(dynamic student in students)
            {
                if(student["nome"] == name)
                {
                    return student;
                }
            }

            return 0;
        }

        static Object get_students()
        {
            dynamic dados = data();

            return dados["Alunos"];
        }

        //TODO UPDATE STUDENT

        //TODO DELETE STUDENT

        static Object get_student_by_id(string id)
        {
            dynamic students = get_students();

            foreach(dynamic student in students)
            {
                if(student["matricula"] == id)
                {
                    return student;
                }
            }

            return 0;
        }

        static Object get_student_id_by_name()
        {
            dynamic students = get_students();

            return students;
        }



    }
}
