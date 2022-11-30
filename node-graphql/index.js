const { ApolloServer, gql } = require("apollo-server");
const uuid = require("uuid/v4");
const db = require("../database.json");

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

  type Query {

    professores: [Professores]
    
    disciplinas: [Disciplinas]

    alunos: [Alunos]

    disciplinasProfessores: [DisciplinasProfessores]

    disciplinasAlunos: [DisciplinasAlunos]

  }

  type Mutation {

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

console.log(db)

const professores = db.Professores;
const alunos = db.Alunos;
const disciplinas = db.Disciplinas;
const disciplinasAlunos = db.DisciplinasAlunos;
const disciplinasProfessores = db.DisciplinasProfessores;

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
