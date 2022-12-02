'use strict';

module.exports = function (app) {

   const controller = require('../controllers/msgController');

   app.route('/')
      .get(controller.listarTudo);
   
   app.route('/professores')
      .get(controller.listarProfessores)
      .post(controller.criarProfessor);

   app.route('/alunos')
      .get(controller.listarAlunos)
      .post(controller.criarAluno);

   app.route('/disciplinas')
      .get(controller.listarDisciplinas)
      .post(controller.criarDisciplina);

   app.route('/alunosDaDisciplina/:nome')
      .get(controller.listarAlunosDeDisciplina)

   app.route('/disciplinasDoAluno/:nome')
      .get(controller.listarDisciplinasDeAluno)

   app.route('/disciplinasDoProfessor/:nome')
      .get(controller.listarDisciplinasDeProfessor)

};


