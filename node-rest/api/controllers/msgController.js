'use strict';

const database = require('../../../database.json')

exports.listarTudo = function (req, res) {
   try {
      res.json(database)
   }
   catch (error) {
      res.json(error)
   }
};

// Professores

exports.listarProfessores = function (req, res) {
   try {
      res.json(database.Professores)
   }
   catch (error) {
      res.json(error)
   }
};

exports.criarProfessor = function (req, res) {

   const professor = req.body;
   
   try {
      if (database.Professores.includes(professor)) {
         res.json("Professor já cadastrado")
      } else {
         database.Professores.push(professor)
         res.json(professor)
      }
   }
   catch (error) {
      res.json(error)
   }
};

exports.editarProfessor = function (req, res) {

   const nome = req.body.nome
   const professor = req.body;

   try {

      database.Professores.forEach((professor) => {
         if (professor.nome === nome) {
            professor = req.body
         } else {
            res.json("Professor não encontrado")
         }
      })

      res.json(professor)

   } catch (error) {
      res.json(error)
   }
};

exports.deletarProfessor = function (req, res) {

   const nome = req.body.nome

   try {

      database.Professores.forEach((professor) => {
         if (professor.nome === nome) {
            database.Professores.splice(database.Professores.indexOf(professor), 1)
         } else {
            res.json("Professor não encontrado")
         }
      })

      res.json(database.Professores)

   } catch (error) {
      res.json(error)
   }

};

// Alunos

exports.listarAlunos = function (req, res) {
   try {
      res.json(database.Alunos)
   }
   catch (error) {
      res.json(error)
   }
};

exports.criarAluno = function (req, res) {

   const aluno = req.body;
   
   try {
      if (database.Alunos.includes(aluno)) {
         res.json("Aluno já cadastrado")
      } else {
         database.Alunos.push(aluno)
         res.json(aluno)
      }
   }
   catch (error) {
      res.json(error)
   }
};

exports.editarAluno = function (req, res) {

   const nome = req.body.nome
   const aluno = req.body;

   try {

      database.Alunos.forEach((aluno) => {
         if (aluno.nome === nome) {
            aluno = req.body
         } else {
            res.json("Aluno não encontrado")
         }
      })

      res.json(aluno)

   } catch (error) {
      res.json(error)
   }

};

exports.deletarAluno = function (req, res) {

   const nome = req.body.nome

   try {

      database.Alunos.forEach((aluno) => {
         if (aluno.nome === nome) {
            database.Alunos.splice(database.Alunos.indexOf(aluno), 1)
         } else {
            res.json("Aluno não encontrado")
         }
      })

      res.json(database.Alunos)

   } catch (error) {
      res.json(error)
   }

};

exports.listarAlunosDeDisciplina = function (req, res) {

   const nome = req.params.nome

   let idDisciplina;

   database.Disciplinas.forEach((disciplina) => {
      if (disciplina.nome === nome) {
         idDisciplina = disciplina.id
      }
   })

   let idsAlunos;

   database.DisciplinasAlunos.forEach((disciplina) => {
      if (disciplina.idDisciplina === idDisciplina) {
         idsAlunos = disciplina.idAluno
      }
   })

   let alunos = []

   database.Alunos.forEach((aluno) => {

      if (idsAlunos.includes(aluno.matricula)) {
         alunos.push(aluno)
      }
   })

   res.json(alunos)

};

// Disciplinas

exports.listarDisciplinas = function (req, res) {
   try {
      res.json(database.Disciplinas)
   }
   catch (error) {
      res.json(error)
   }
};

exports.criarDisciplina = function (req, res) {

   const disciplina = req.body;
   
   try {
      if (database.Disciplinas.includes(disciplina)) {
         res.json("Disciplina já cadastrada")
      } else {
         database.Disciplinas.push(disciplina)
         res.json(disciplina)
      }
   }
   catch (error) {
      res.json(error)
   }
};

exports.editarDisciplina = function (req, res) {

   const nome = req.body.nome
   const disciplina = req.body;

   try {

      database.Disciplinas.forEach((disciplina) => {
         if (disciplina.nome === nome) {
            disciplina = req.body
         } else {
            res.json("Disciplina não encontrada")
         }
      })

      res.json(disciplina)

   } catch (error) {
      res.json(error)
   }

};

exports.deletarDisciplina = function (req, res) {

   const nome = req.body.nome

   try {

      database.Disciplinas.forEach((disciplina) => {
         if (disciplina.nome === nome) {
            database.Disciplinas.splice(database.Disciplinas.indexOf(disciplina), 1)
         } else {
            res.json("Disciplina não encontrada")
         }
      })

      res.json(database.Disciplinas)

   } catch (error) {
      res.json(error)
   }

};

exports.listarDisciplinasDeAluno = function (req, res) {

   const nome = req.params.nome

   let idAluno;

   database.Alunos.forEach((aluno) => {
      if (aluno.nome === nome) {
         idAluno = aluno.matricula
      }
   })

   let idsDisciplinas = []

   database.DisciplinasAlunos.forEach((disciplina) => {
      if (disciplina.idAluno.includes(idAluno)) {
         idsDisciplinas.push(disciplina.idDisciplina)
      }
   })

   let disciplinas = []

   database.Disciplinas.forEach((disciplina) => {

      if (idsDisciplinas.includes(disciplina.id)) {
         disciplinas.push(disciplina)
      }
   })

   res.json(disciplinas)

};

exports.listarDisciplinasDeProfessor = function (req, res) {

   const nome = req.params.nome

   let idProfessor;

   database.Professores.forEach((professor) => {
      if (professor.nome === nome) {
         idProfessor = professor.id
      }
   })

   let idsDisciplinas = []

   database.DisciplinasProfessores.forEach((disciplina) => {
      if (disciplina.idProfessor === idProfessor) {
         idsDisciplinas.push(disciplina.idDisciplina)
      }
   })

   let disciplinas = []

   database.Disciplinas.forEach((disciplina) => {

      if (idsDisciplinas.includes(disciplina.id)) {
         disciplinas.push(disciplina)
      }
   })

   res.json(disciplinas)
};