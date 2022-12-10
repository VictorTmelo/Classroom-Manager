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
             Console.WriteLine(get_students_of_course("Estrutura de Dados"));
            //Console.WriteLine(string.Join(", ", get_courses_id_of_professor("1")));
            Console.Read();
        }

        public static dynamic data()
        {
            using (StreamReader file = new StreamReader("C:\\Users\\Renato Vidal\\source\\repos\\SOAP\\database.json"))
            {

                dynamic json = JsonConvert.DeserializeObject(file.ReadToEnd());

                return json;


            }
        }

        public static Professor get_professor_by_id( string id)
        {
            List<Professor> professors = get_professors();
            foreach(Professor professor in professors)
            {
                if(professor.id == id)
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

        public static string get_professor_id_by_name(string name)
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


        public static Professor get_professor_of_course(string course_name)
        {
            Disciplina course = get_course(course_name);

            if(course != null)
            {
                string course_id = course.id;
                string professor_id = get_professor_id_of_course(course_id);
                return get_professor_by_id(professor_id);
            }

            return null;

        }


        public static string get_professor_id_of_course(string course_id)
        {
            dynamic dados = data();
            string professor_id = "-1";

            foreach(dynamic c_id in dados["DisciplinasProfessores"])
            {
                if(c_id["idDisciplina"] == course_id)
                {
                    professor_id = c_id["idProfessor"];
                }
            }

            return professor_id;
        }

        //TODO create_course

        public static Disciplina get_course(string name)
        {
            List<Disciplina> courses = get_courses();
            foreach(Disciplina course in courses)
            {
                if(course.nome == name)
                {
                    return course;
                }
            }
            return null;
        }

        public static List<Disciplina> get_courses()
        {
            dynamic dados = data()["Disciplinas"];
            List<Disciplina> courses = new List<Disciplina>();

            foreach (dynamic dado in dados)
            {
                Disciplina d = new Disciplina();
                d.id = dado["id"];
                d.nome = dado["nome"];

                courses.Add(d);
            }

            return courses;
        }

        //TODO UPDATE COURSE

        //TODO DELETE COURSE

        public static Disciplina get_course_by_id(string course_id)
        {
            List<Disciplina> courses = get_courses();

            foreach(Disciplina course in courses)
            {
                if(course.id == course_id)
                {
                    return course;
                }
            }

            return null;
        }

        public static List<Disciplina> get_courses_of_student(string student_name)
        {
            List<Disciplina> courses = new List<Disciplina>();
            string student_id = get_student_id_by_name(student_name);

            if (student_id != "-1")
            {
               
                List<string> courses_id = get_courses_id_of_student(student_id);
                foreach (string course_id in courses_id)
                {
                    courses.Add(get_course_by_id(course_id));
                }
                return courses;
            }

            return null;
        }

        public static List<string> get_courses_id_of_student(string student_id)
        {
            {
                dynamic dados = data();
                List<string> courses_id = new List<string>();

                foreach (dynamic c_id in dados["DisciplinasAlunos"])
                {
                    foreach (dynamic id in c_id["idAluno"])
                    {
                        if (id == student_id)
                        {
                            courses_id.Add(Convert.ToString(c_id["idDisciplina"]));
                        }
                    }
                }

                return courses_id;
            }
        }

        public static List<Disciplina> get_courses_of_professor(string professor_name)
        {
            List<Disciplina> courses = new List<Disciplina>();
            string professor_id = get_professor_id_by_name(professor_name);

            if (professor_id != "-1")
            {
                List<string> courses_id = get_courses_id_of_professor(professor_id);
                foreach(string course_id in courses_id)
                {
                    courses.Add(get_course_by_id(course_id));
                }

                return courses;
            }

            return null;

        }

        public static List<string> get_courses_id_of_professor(string professor_id)
        {
            dynamic dados = data();
            List<string> courses_id = new List<string>();

            foreach (dynamic c_id in dados["DisciplinasProfessores"])
            {
                if(c_id["idProfessor"] == professor_id)
                {
                    courses_id.Add(Convert.ToString(c_id["idDisciplina"])); 
                }
            }

            return courses_id;
        }

        //TODO CREATE STUDENT

        public static Aluno get_student(string name)
        {
            List<Aluno> students = get_students();

            foreach(Aluno student in students)
            {
                if(student.nome == name)
                {
                    return student;
                }
            }

            return null;
        }

        public static List<Aluno> get_students()
        {
            dynamic dados = data()["Alunos"];
            List<Aluno> students = new List<Aluno>();

            foreach (dynamic dado in dados)
            {
                Aluno s = new Aluno();
                s.matricula = dado["matricula"];
                s.nome = dado["nome"];

                students.Add(s);
            }

            return students;
        }
        

        //TODO UPDATE STUDENT

        //TODO DELETE STUDENT

        public static Aluno get_student_by_id(string id)
        {
            List<Aluno> students = get_students();

            foreach(Aluno student in students)
            {
                if(student.matricula == id)
                {
                    return student;
                }
            }

            return null;
        }

        public static string get_student_id_by_name(string name)
        {
            List<Aluno> students = get_students();

            foreach(Aluno student in students)
            {
                if(student.nome == name)
                {
                    return student.matricula;
                }
            }

            return "-1";
        }

        public static List<Aluno> get_students_of_course(string course_name)
        {
            List<Aluno> students = new List<Aluno>();
            Disciplina course = get_course(course_name);

            if(course != null)
            {
                string course_id = course.id;
                List<string> students_id = get_students_id_of_course(course_id);
                foreach (string student_id in students_id)
                {
                    students.Add(get_student_by_id(student_id));
                }

                return students;
            }

            return null;
        }

        public static List<string> get_students_id_of_course(string course_id)
        {
            dynamic dados = data();
            List<string> students_id = new List<string>();

            foreach (dynamic c_id in dados["DisciplinasAlunos"])
            {
                if (c_id["idDisciplina"] == course_id)
                {
                    foreach (string student_id in c_id["idAluno"])
                    {
                        students_id.Add(student_id);
                    }
                }
            }

            return students_id;
        }



    }
}
