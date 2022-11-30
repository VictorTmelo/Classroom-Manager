const { ApolloServer, gql } = require("apollo-server");
const uuid = require("uuid/v4");
const fs = require("fs");
let data = fs.readFileSync("database.json");
// let data2 = fs.readFileSync("getDisciplinaAlunos1.json");
var db = JSON.parse(data);

console.log(db)

// var db1 = JSON.parse(data2);

// console.log(db1)

// const getAlunosDisciplina = () => {
//   for(let i = 0; i < db.DisciplinasAlunos.length; i++){
//     let idAlunos = []
//     for(let j = 0; j < db.DisciplinasAlunos[i].idAluno.length; j++){
//       const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[i].idAluno[j])
//       idAlunos.push(foundAluno)
//     }
//     console.log("Alunos encontrados na disciplina " + `${i}`, idAlunos)
//     return idAlunos[i]
//   }
// }

const getAlunosDisciplina1 = () => {

  if(db.DisciplinasAlunos[0]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[0].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

const getAlunosDisciplina2 = () => {
  if(db.DisciplinasAlunos[1]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[1].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

const getAlunosDisciplina3 = () => {
  if(db.DisciplinasAlunos[2]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[2].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

const getAlunosDisciplina4 = () => {
  if(db.DisciplinasAlunos[3]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[3].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

const getAlunosDisciplina5 = () => {
  if(db.DisciplinasAlunos[4]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[4].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

const getAlunosDisciplina6 = () => {
  if(db.DisciplinasAlunos[5]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[5].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

let db1 = getAlunosDisciplina1()
let db2 = getAlunosDisciplina2()
let db3 = getAlunosDisciplina3()
let db4 = getAlunosDisciplina4()
let db5 = getAlunosDisciplina5()
let db6 = getAlunosDisciplina6()

const getDisciplinasAluno1 = () => {
  if(db.DisciplinasAlunos[0]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[5].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

const getDisciplinasAluno2 = () => {
  if(db.DisciplinasAlunos[1]){
    let idAlunos = []
    for(let i = 0; i < db.DisciplinasAlunos[5].idAluno.length; i++){
      const foundAluno = db.Alunos.find(aluno => aluno.matricula === db.DisciplinasAlunos[0].idAluno[i])
      idAlunos.push(foundAluno)
    }
    return idAlunos
  }
}

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

  type GetDisciplinaAlunos1 {

    nome: String!
    matricula: String!

  }

  type GetDisciplinaAlunos2 {

    nome: String!
    matricula: String!

  }

  type GetDisciplinaAlunos3 {

    nome: String!
    matricula: String!

  }

  type GetDisciplinaAlunos4 {

    nome: String!
    matricula: String!

  }

  type GetDisciplinaAlunos5 {

    nome: String!
    matricula: String!

  }

  type GetDisciplinaAlunos6 {

    nome: String!
    matricula: String!

  }

  type Query {

    professores: [Professores]
    
    disciplinas: [Disciplinas]

    alunos: [Alunos]

    disciplinasProfessores: [DisciplinasProfessores]

    disciplinasAlunos: [DisciplinasAlunos]

    getDisciplinaAlunos1: [GetDisciplinaAlunos1]

    getDisciplinaAlunos2: [GetDisciplinaAlunos2]

    getDisciplinaAlunos3: [GetDisciplinaAlunos3]

    getDisciplinaAlunos4: [GetDisciplinaAlunos4]

    getDisciplinaAlunos5: [GetDisciplinaAlunos5]

    getDisciplinaAlunos6: [GetDisciplinaAlunos6]

  }

  type Mutation {

    getDisciplinaAlunos1: GetDisciplinaAlunos1

    getDisciplinaAlunos2: GetDisciplinaAlunos2

    getDisciplinaAlunos3: GetDisciplinaAlunos3

    getDisciplinaAlunos4: GetDisciplinaAlunos4

    getDisciplinaAlunos5: GetDisciplinaAlunos5

    getDisciplinaAlunos6: GetDisciplinaAlunos6

    addProfessor(nome: String!): Professores
    editProfessor(id: ID!, nome: String!): Professores
    deleteProfessor(id: ID!): DeleteResponse

    addDisciplina(nome: String!, horario: String!): Disciplinas
    editDisciplina(id: ID!, nome: String!, horario: String!): Disciplinas
    deleteDisciplina(id: ID!): DeleteResponse

    addAluno(nome: String!, matricula: String!): Alunos
    editAluno(nome: String!, matricula: String!): Alunos
    deleteAluno(nome: String!, matricula: String!): DeleteResponse

    addDisciplinasProfessor(idDisciplina: ID!, idProfessor: String!): DisciplinasProfessores
    editDisciplinasProfessor(idDisciplina: ID!, idProfessor: String!): DisciplinasProfessores
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
const getDisciplinaAlunos1 = db1
const getDisciplinaAlunos2 = db2
const getDisciplinaAlunos3 = db3
const getDisciplinaAlunos4 = db4
const getDisciplinaAlunos5 = db5
const getDisciplinaAlunos6 = db6

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
    getDisciplinaAlunos1: () => Object.values(getDisciplinaAlunos1),
    getDisciplinaAlunos2: () => Object.values(getDisciplinaAlunos2),
    getDisciplinaAlunos3: () => Object.values(getDisciplinaAlunos3),
    getDisciplinaAlunos4: () => Object.values(getDisciplinaAlunos4),
    getDisciplinaAlunos5: () => Object.values(getDisciplinaAlunos5),
    getDisciplinaAlunos6: () => Object.values(getDisciplinaAlunos6)

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

    getDisciplinaAlunos1: (parent, aluno) => {return getDisciplinaAlunos1(aluno)},

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
    editDisciplinasProfessor: async (parent, { id, ...disciplinasProfessor }) => {
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
