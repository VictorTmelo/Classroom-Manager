const { ApolloServer, gql } = require("apollo-server");
const uuid = require("uuid/v4");
const db = require("./database.json");

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

    addDisciplina(nome: String!): Disciplinas
    editDisciplina(id: ID!, nome: String!): Disciplinas
    deleteDisciplina(id: ID!): DeleteResponse

    addAluno(nome: String!): Alunos
    editAluno(id: ID!, nome: String!): Alunos
    deleteAluno(id: ID!): DeleteResponse

    addDisciplinasProfessor(nome: String!): DisciplinasProfessores
    editDisciplinasProfessor(id: ID!, nome: String!): DisciplinasProfessores
    deleteDisciplinasProfessor(id: ID!): DeleteResponse

    addDisciplinasAluno(nome: String!): DisciplinasAlunos
    editDisciplinasAluno(id: ID!, nome: String!): DisciplinasAlunos
    deleteDisciplinasAluno(id: ID!): DeleteResponse

  }

  type DeleteResponse {

    ok: Boolean!

  }
  
`;

console.log(db)

const professores = db.Professores;

console.log(professores)

const addProfessor = (professor) => {

  const id = uuid();
  return (professores[id] = { ...professor, id });
  
};

const resolvers = {

  Query: {

    professores: () => Object.values(professores),

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

    

  },

};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {

  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console

});
