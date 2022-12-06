const { ApolloServer, gql } = require("apollo-server");
const uuid = require("uuid/v4");
const fs = require("fs");
let data = fs.readFileSync("database.json");
var db = JSON.parse(data);

const getAlunosDisciplina1 = () => {
  if (db.DisciplinasAlunos[0]) {
    let idAlunos = [];
    for (let i = 0; i < db.DisciplinasAlunos[0].idAluno.length; i++) {
      const foundAluno = db.Alunos.find(
        (aluno) => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i]
      );
      idAlunos.push(foundAluno);
    }
    return idAlunos;
  }
};

const getAlunosDisciplina2 = () => {
  if (db.DisciplinasAlunos[1]) {
    let idAlunos = [];
    for (let i = 0; i < db.DisciplinasAlunos[1].idAluno.length; i++) {
      const foundAluno = db.Alunos.find(
        (aluno) => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i]
      );
      idAlunos.push(foundAluno);
    }
    return idAlunos;
  }
};

const getAlunosDisciplina3 = () => {
  if (db.DisciplinasAlunos[2]) {
    let idAlunos = [];
    for (let i = 0; i < db.DisciplinasAlunos[2].idAluno.length; i++) {
      const foundAluno = db.Alunos.find(
        (aluno) => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i]
      );
      idAlunos.push(foundAluno);
    }
    return idAlunos;
  }
};

const getAlunosDisciplina4 = () => {
  if (db.DisciplinasAlunos[3]) {
    let idAlunos = [];
    for (let i = 0; i < db.DisciplinasAlunos[3].idAluno.length; i++) {
      const foundAluno = db.Alunos.find(
        (aluno) => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i]
      );
      idAlunos.push(foundAluno);
    }
    return idAlunos;
  }
};

const getAlunosDisciplina5 = () => {
  if (db.DisciplinasAlunos[4]) {
    let idAlunos = [];
    for (let i = 0; i < db.DisciplinasAlunos[4].idAluno.length; i++) {
      const foundAluno = db.Alunos.find(
        (aluno) => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i]
      );
      idAlunos.push(foundAluno);
    }
    return idAlunos;
  }
};

const getAlunosDisciplina6 = () => {
  if (db.DisciplinasAlunos[5]) {
    let idAlunos = [];
    for (let i = 0; i < db.DisciplinasAlunos[5].idAluno.length; i++) {
      const foundAluno = db.Alunos.find(
        (aluno) => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i]
      );
      idAlunos.push(foundAluno);
    }
    return idAlunos;
  }
};

let db1 = getAlunosDisciplina1();
let db2 = getAlunosDisciplina2();
let db3 = getAlunosDisciplina3();
let db4 = getAlunosDisciplina4();
let db5 = getAlunosDisciplina5();
let db6 = getAlunosDisciplina6();

const getDisciplinaAluno1 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Victor Torres de Melo") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno2 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Renato Vidal Moura") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno3 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Davi Pereira") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno4 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Gabriel de Oliveira") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno5 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Maycon Bezerra Batista") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno6 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Matias Santos Junior") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno7 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Junior Fernandes Neto") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno8 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Miguel Rocha da Silva") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno9 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Arthur Sampaio") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno10 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Gael Lopes Filho") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno11 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Heitor Teles Saraiva") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno12 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Helena Gomes") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno13 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Alice Lima") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno14 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Theo Borges") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno15 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Laura Ulisses") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno16 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Lara Santos") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno17 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Livia Silva") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno18 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Lorena Lima") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno19 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Samuel Bola") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaAluno20 = () => {
  let idAluno;

  db.Alunos.forEach((aluno) => {
    if (aluno.nome == "Maria Alice") {
       idAluno = aluno.matricula
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasAlunos.forEach((disciplina) => {
    if (disciplina.idAluno.includes(idAluno)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

// console.log(getDisciplinaAluno2());

let db7 = getDisciplinaAluno1();
let db8 = getDisciplinaAluno2();
let db9 = getDisciplinaAluno3();
let db10 = getDisciplinaAluno4();
let db11 = getDisciplinaAluno5();
let db12 = getDisciplinaAluno6();
let db13 = getDisciplinaAluno7();
let db14 = getDisciplinaAluno8();
let db15 = getDisciplinaAluno9();
let db16 = getDisciplinaAluno10();
let db17 = getDisciplinaAluno11();
let db18 = getDisciplinaAluno12();
let db19 = getDisciplinaAluno13();
let db20 = getDisciplinaAluno14();
let db21 = getDisciplinaAluno15();
let db22 = getDisciplinaAluno16();
let db23 = getDisciplinaAluno17();
let db24 = getDisciplinaAluno18();
let db25 = getDisciplinaAluno19();
let db26 = getDisciplinaAluno20();

const getDisciplinaProfessor1 = () => {
  let idProfessor;

  db.Professores.forEach((professor) => {
    if (professor.nome == "Nabor das Chagas") {
       idProfessor = professor.id
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasProfessores.forEach((disciplina) => {
    if (disciplina.idProfessor.includes(idProfessor)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaProfessor2 = () => {
  let idProfessor;

  db.Professores.forEach((professor) => {
    if (professor.nome == "José Alzir Bruno") {
       idProfessor = professor.id
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasProfessores.forEach((disciplina) => {
    if (disciplina.idProfessor.includes(idProfessor)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaProfessor3 = () => {
  let idProfessor;

  db.Professores.forEach((professor) => {
    if (professor.nome == "Ronaldo Gonçalves") {
       idProfessor = professor.id
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasProfessores.forEach((disciplina) => {
    if (disciplina.idProfessor.includes(idProfessor)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaProfessor4 = () => {
  let idProfessor;

  db.Professores.forEach((professor) => {
    if (professor.nome == "Wilson Wagner") {
       idProfessor = professor.id
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasProfessores.forEach((disciplina) => {
    if (disciplina.idProfessor.includes(idProfessor)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

const getDisciplinaProfessor5= () => {
  let idProfessor;

  db.Professores.forEach((professor) => {
    if (professor.nome == "Caio Pontes") {
       idProfessor = professor.id
    }
 })

  let idsDisciplinas = [];

  db.DisciplinasProfessores.forEach((disciplina) => {
    if (disciplina.idProfessor.includes(idProfessor)) {
      idsDisciplinas.push(disciplina.idDisciplina);
    }
  });

  let disciplinas = [];

  db.Disciplinas.forEach((disciplina) => {
    if (idsDisciplinas.includes(disciplina.id)) {
      disciplinas.push(disciplina);
    }
  });

  return disciplinas;
};

let db27 = getDisciplinaProfessor1();
let db28 = getDisciplinaProfessor2();
let db29 = getDisciplinaProfessor3();
let db30 = getDisciplinaProfessor4();
let db31 = getDisciplinaProfessor5();

const typeDefs = gql`
  type Professores {
    id: ID!
    nome: String!
  }

  type Disciplinas {
    id: ID!
    nome: String!
    horario: String!
  }

  type Alunos {
    nome: String!
    matricula: String!
  }

  type DisciplinasProfessores {
    idDisciplina: ID!
    idProfessor: String!
  }

  type DisciplinasAlunos {
    idDisciplina: ID!
    idAluno: [String]
  }

  type GetAlunosDisciplina1 {
    nome: String!
    matricula: String!
  }

  type GetAlunosDisciplina2 {
    nome: String!
    matricula: String!
  }

  type GetAlunosDisciplina3 {
    nome: String!
    matricula: String!
  }

  type GetAlunosDisciplina4 {
    nome: String!
    matricula: String!
  }

  type GetAlunosDisciplina5 {
    nome: String!
    matricula: String!
  }

  type GetAlunosDisciplina6 {
    nome: String!
    matricula: String!
  }

  type GetDadosDisciplinasAluno1 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno2 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno3 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno4 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno5 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno6 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno7 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno8 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno9 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno10 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno11 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno12 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno13 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno14 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno15 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno16 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno17 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno18 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno19 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasAluno20 {
    id: ID!
    nome: String!
    horario: String!
  }

  type GetDadosDisciplinasProfessor1 {
    id: ID!
    nome: String!
  }

  type GetDadosDisciplinasProfessor2 {
    id: ID!
    nome: String!
  }

  type GetDadosDisciplinasProfessor3 {
    id: ID!
    nome: String!
  }

  type GetDadosDisciplinasProfessor4 {
    id: ID!
    nome: String!
  }

  type GetDadosDisciplinasProfessor5 {
    id: ID!
    nome: String!
  }

  type Query {
    professores: [Professores]

    disciplinas: [Disciplinas]

    alunos: [Alunos]

    disciplinasProfessores: [DisciplinasProfessores]

    disciplinasAlunos: [DisciplinasAlunos]

    getAlunosDisciplina1_: [GetAlunosDisciplina1]

    getAlunosDisciplina2_: [GetAlunosDisciplina2]

    getAlunosDisciplina3_: [GetAlunosDisciplina3]

    getAlunosDisciplina4_: [GetAlunosDisciplina4]

    getAlunosDisciplina5_: [GetAlunosDisciplina5]

    getAlunosDisciplina6_: [GetAlunosDisciplina6]

    getDadosDisciplinasAluno1: [GetDadosDisciplinasAluno1]

    getDadosDisciplinasAluno2: [GetDadosDisciplinasAluno2]

    getDadosDisciplinasAluno3: [GetDadosDisciplinasAluno3]

    getDadosDisciplinasAluno4: [GetDadosDisciplinasAluno4]

    getDadosDisciplinasAluno5: [GetDadosDisciplinasAluno5]

    getDadosDisciplinasAluno6: [GetDadosDisciplinasAluno6]

    getDadosDisciplinasAluno7: [GetDadosDisciplinasAluno7]

    getDadosDisciplinasAluno8: [GetDadosDisciplinasAluno8]

    getDadosDisciplinasAluno9: [GetDadosDisciplinasAluno9]

    getDadosDisciplinasAluno10: [GetDadosDisciplinasAluno10]

    getDadosDisciplinasAluno11: [GetDadosDisciplinasAluno11]

    getDadosDisciplinasAluno12: [GetDadosDisciplinasAluno12]

    getDadosDisciplinasAluno13: [GetDadosDisciplinasAluno13]

    getDadosDisciplinasAluno14: [GetDadosDisciplinasAluno14]

    getDadosDisciplinasAluno15: [GetDadosDisciplinasAluno15]

    getDadosDisciplinasAluno16: [GetDadosDisciplinasAluno16]

    getDadosDisciplinasAluno17: [GetDadosDisciplinasAluno17]

    getDadosDisciplinasAluno18: [GetDadosDisciplinasAluno18]

    getDadosDisciplinasAluno19: [GetDadosDisciplinasAluno19]

    getDadosDisciplinasAluno20: [GetDadosDisciplinasAluno20]
    
    getDadosDisciplinasProfessor1: [GetDadosDisciplinasProfessor1]

    getDadosDisciplinasProfessor2: [GetDadosDisciplinasProfessor2]

    getDadosDisciplinasProfessor3: [GetDadosDisciplinasProfessor3]

    getDadosDisciplinasProfessor4: [GetDadosDisciplinasProfessor4]

    getDadosDisciplinasProfessor5: [GetDadosDisciplinasProfessor5]
  }

  type Mutation {
    getAlunosDisciplina1_: GetAlunosDisciplina1

    getAlunosDisciplina2_: GetAlunosDisciplina2

    getAlunosDisciplina3_: GetAlunosDisciplina3

    getAlunosDisciplina4_: GetAlunosDisciplina4

    getAlunosDisciplina5_: GetAlunosDisciplina5

    getAlunosDisciplina6_: GetAlunosDisciplina6

    getDadosDisciplinasAluno1: GetDadosDisciplinasAluno1

    getDadosDisciplinasAluno2: GetDadosDisciplinasAluno2

    getDadosDisciplinasAluno3: GetDadosDisciplinasAluno3

    getDadosDisciplinasAluno4: GetDadosDisciplinasAluno4

    getDadosDisciplinasAluno5: GetDadosDisciplinasAluno5

    getDadosDisciplinasAluno6: GetDadosDisciplinasAluno6

    getDadosDisciplinasAluno7: GetDadosDisciplinasAluno7

    getDadosDisciplinasAluno8: GetDadosDisciplinasAluno8

    getDadosDisciplinasAluno9: GetDadosDisciplinasAluno9

    getDadosDisciplinasAluno10: GetDadosDisciplinasAluno10

    getDadosDisciplinasAluno11: GetDadosDisciplinasAluno11

    getDadosDisciplinasAluno12: GetDadosDisciplinasAluno12

    getDadosDisciplinasAluno13: GetDadosDisciplinasAluno13

    getDadosDisciplinasAluno14: GetDadosDisciplinasAluno14

    getDadosDisciplinasAluno15: GetDadosDisciplinasAluno15

    getDadosDisciplinasAluno16: GetDadosDisciplinasAluno16

    getDadosDisciplinasAluno17: GetDadosDisciplinasAluno17

    getDadosDisciplinasAluno18: GetDadosDisciplinasAluno18

    getDadosDisciplinasAluno19: GetDadosDisciplinasAluno19

    getDadosDisciplinasAluno20: GetDadosDisciplinasAluno20

    getDadosDisciplinasProfessor1: GetDadosDisciplinasProfessor1

    getDadosDisciplinasProfessor2: GetDadosDisciplinasProfessor2

    getDadosDisciplinasProfessor3: GetDadosDisciplinasProfessor3

    getDadosDisciplinasProfessor4: GetDadosDisciplinasProfessor4

    getDadosDisciplinasProfessor5: GetDadosDisciplinasProfessor5

    addProfessor(nome: String!): Professores
    editProfessor(id: ID!, nome: String!): Professores
    deleteProfessor(id: ID!): DeleteResponse

    addDisciplina(nome: String!, horario: String!): Disciplinas
    editDisciplina(id: ID!, nome: String!, horario: String!): Disciplinas
    deleteDisciplina(id: ID!): DeleteResponse

    addAluno(nome: String!, matricula: String!): Alunos
    editAluno(nome: String!, matricula: String!): Alunos
    deleteAluno(nome: String!, matricula: String!): DeleteResponse

    addDisciplinasProfessor(
      idDisciplina: ID!
      idProfessor: String!
    ): DisciplinasProfessores
    editDisciplinasProfessor(
      idDisciplina: ID!
      idProfessor: String!
    ): DisciplinasProfessores
    deleteDisciplinasProfessor(idDisciplina: ID!): DeleteResponse

    addDisciplinasAluno(idDisciplina: ID!, idAluno: String!): DisciplinasAlunos
    editDisciplinasAluno(idDisciplina: ID!, idAluno: String!): DisciplinasAlunos
    deleteDisciplinasAluno(idDisciplina: ID!): DeleteResponse
  }

  type DeleteResponse {
    ok: Boolean!
  }
`;

const professores = db.Professores;
const alunos = db.Alunos;
const disciplinas = db.Disciplinas;
const disciplinasAlunos = db.DisciplinasAlunos;
const disciplinasProfessores = db.DisciplinasProfessores;
const getAlunosDisciplina1_ = db1;
const getAlunosDisciplina2_ = db2;
const getAlunosDisciplina3_ = db3;
const getAlunosDisciplina4_ = db4;
const getAlunosDisciplina5_ = db5;
const getAlunosDisciplina6_ = db6;

const getDadosDisciplinasAluno1 = db7;
const getDadosDisciplinasAluno2 = db8;
const getDadosDisciplinasAluno3 = db9;
const getDadosDisciplinasAluno4 = db10;
const getDadosDisciplinasAluno5 = db11;
const getDadosDisciplinasAluno6 = db12;
const getDadosDisciplinasAluno7 = db13;
const getDadosDisciplinasAluno8 = db14;
const getDadosDisciplinasAluno9 = db15;
const getDadosDisciplinasAluno10 = db16;
const getDadosDisciplinasAluno11 = db17;
const getDadosDisciplinasAluno12 = db18;
const getDadosDisciplinasAluno13 = db19;
const getDadosDisciplinasAluno14 = db20;
const getDadosDisciplinasAluno15 = db21;
const getDadosDisciplinasAluno16 = db22;
const getDadosDisciplinasAluno17 = db23;
const getDadosDisciplinasAluno18 = db24;
const getDadosDisciplinasAluno19 = db25;
const getDadosDisciplinasAluno20 = db26;

const getDadosDisciplinasProfessor1 = db27;
const getDadosDisciplinasProfessor2 = db28;
const getDadosDisciplinasProfessor3 = db29;
const getDadosDisciplinasProfessor4 = db30;
const getDadosDisciplinasProfessor5 = db31;

const addProfessor = (professor) => {
  const id = uuid();
  return (professores[id] = { ...professor, id });
};

const addDisciplina = (disciplina) => {
  const id = uuid();
  return (disciplinas[id] = { ...disciplina, id });
};

const resolvers = {
  Query: {
    professores: () => Object.values(professores),
    alunos: () => Object.values(alunos),
    disciplinas: () => Object.values(disciplinas),
    disciplinasProfessores: () => Object.values(disciplinasProfessores),
    disciplinasAlunos: () => Object.values(disciplinasAlunos),
    getAlunosDisciplina1_: () => Object.values(getAlunosDisciplina1_),
    getAlunosDisciplina2_: () => Object.values(getAlunosDisciplina2_),
    getAlunosDisciplina3_: () => Object.values(getAlunosDisciplina3_),
    getAlunosDisciplina4_: () => Object.values(getAlunosDisciplina4_),
    getAlunosDisciplina5_: () => Object.values(getAlunosDisciplina5_),
    getAlunosDisciplina6_: () => Object.values(getAlunosDisciplina6_),
    getDadosDisciplinasAluno1: () => Object.values(getDadosDisciplinasAluno1),
    getDadosDisciplinasAluno2: () => Object.values(getDadosDisciplinasAluno2),
    getDadosDisciplinasAluno3: () => Object.values(getDadosDisciplinasAluno3),
    getDadosDisciplinasAluno4: () => Object.values(getDadosDisciplinasAluno4),
    getDadosDisciplinasAluno5: () => Object.values(getDadosDisciplinasAluno5),
    getDadosDisciplinasAluno6: () => Object.values(getDadosDisciplinasAluno6),
    getDadosDisciplinasAluno7: () => Object.values(getDadosDisciplinasAluno7),
    getDadosDisciplinasAluno8: () => Object.values(getDadosDisciplinasAluno8),
    getDadosDisciplinasAluno9: () => Object.values(getDadosDisciplinasAluno9),
    getDadosDisciplinasAluno10: () => Object.values(getDadosDisciplinasAluno10),
    getDadosDisciplinasAluno11: () => Object.values(getDadosDisciplinasAluno11),
    getDadosDisciplinasAluno12: () => Object.values(getDadosDisciplinasAluno12),
    getDadosDisciplinasAluno13: () => Object.values(getDadosDisciplinasAluno13),
    getDadosDisciplinasAluno14: () => Object.values(getDadosDisciplinasAluno14),
    getDadosDisciplinasAluno15: () => Object.values(getDadosDisciplinasAluno15),
    getDadosDisciplinasAluno16: () => Object.values(getDadosDisciplinasAluno16),
    getDadosDisciplinasAluno17: () => Object.values(getDadosDisciplinasAluno17),
    getDadosDisciplinasAluno18: () => Object.values(getDadosDisciplinasAluno18),
    getDadosDisciplinasAluno19: () => Object.values(getDadosDisciplinasAluno19),
    getDadosDisciplinasAluno20: () => Object.values(getDadosDisciplinasAluno20),
    getDadosDisciplinasProfessor1: () => Object.values(getDadosDisciplinasProfessor1),
    getDadosDisciplinasProfessor2: () => Object.values(getDadosDisciplinasProfessor2),
    getDadosDisciplinasProfessor3: () => Object.values(getDadosDisciplinasProfessor3),
    getDadosDisciplinasProfessor4: () => Object.values(getDadosDisciplinasProfessor4),
    getDadosDisciplinasProfessor5: () => Object.values(getDadosDisciplinasProfessor5),
  },

  Mutation: {
    addProfessor: async (parent, professor) => {
      return addProfessor(professor);
    },
    editProfessor: async (parent, { id, ...professor }) => {
      if (!professores[id]) {
        throw new Error("Professor doesn't exist");
      }
      professores[id] = {
        ...professores[id],
        ...professor,
      };
      return professores[id];
    },
    deleteProfessor: async (parent, { id }) => {
      const ok = Boolean(professores[id]);
      delete professores[id];
      return { ok };
    },

    getAlunosDisciplina1_: (parent, aluno) => {
      return getAlunosDisciplina1_(aluno);
    },

    addDisciplina: async (parent, disciplina) => {
      return addDisciplina(disciplina);
    },
    editDisciplina: async (parent, { id, ...disciplina }) => {
      if (!disciplinas[id]) {
        throw new Error("Disciplina doesn't exist");
      }
      disciplinas[id] = {
        ...disciplinas[id],
        ...disciplina,
      };
      return disciplinas[id];
    },
    deleteDisciplina: async (parent, { id }) => {
      const ok = Boolean(disciplinas[id]);
      delete disciplinas[id];
      return { ok };
    },

    addAluno: async (parent, aluno) => {
      return addAluno(aluno);
    },
    editAluno: async (parent, { id, ...aluno }) => {
      if (!alunos[id]) {
        throw new Error("Aluno doesn't exist");
      }
      alunos[id] = {
        ...alunos[id],
        ...aluno,
      };
      return professores[id];
    },
    deleteAluno: async (parent, { id }) => {
      const ok = Boolean(alunos[id]);
      delete alunos[id];
      return { ok };
    },

    addDisciplinasProfessor: async (parent, disciplinasProfessor) => {
      return addDisciplinasProfessor(disciplinasProfessor);
    },
    editDisciplinasProfessor: async (
      parent,
      { id, ...disciplinasProfessor }
    ) => {
      if (!disciplinasProfessores[id]) {
        throw new Error("DisciplinasProfessores doesn't exist");
      }
      disciplinasProfessores[id] = {
        ...disciplinasProfessores[id],
        ...disciplinasProfessor,
      };
      return disciplinasProfessores[id];
    },
    deleteDisciplinasProfessor: async (parent, { id }) => {
      const ok = Boolean(disciplinasProfessores[id]);
      delete disciplinasProfessores[id];
      return { ok };
    },

    addDisciplinasAluno: async (parent, disciplinasAluno) => {
      return addDisciplinasAluno(disciplinasAluno);
    },
    editDisciplinasAluno: async (parent, { id, ...disciplinasAluno }) => {
      if (!disciplinasAlunos[id]) {
        throw new Error("DisciplinasAlunos doesn't exist");
      }
      disciplinasAlunos[id] = {
        ...disciplinasAlunos[id],
        ...disciplinasAluno,
      };
      return disciplinasAlunos[id];
    },
    deleteDisciplinasAluno: async (parent, { id }) => {
      const ok = Boolean(disciplinasAlunos[id]);
      delete disciplinasAlunos[id];
      return { ok };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
