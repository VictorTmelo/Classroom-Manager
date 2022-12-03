'use strict';

module.exports = function (app) {

   const controller = require('../controllers/msgController');

   app.route('/')
      .get(controller.listarTudo);

   app.route('/professores')
      .get(controller.listarProfessores)
      .post(controller.criarProfessor);

   app.route('/professores/:nome')
      .put(controller.editarProfessor)
      .delete (controller.deletarProfessor);

   app.route('/alunos')
      .get(controller.listarAlunos)
      .post(controller.criarAluno);

   app.route('/alunos/:nome')
      .put(controller.editarAluno)
      .delete(controller.deletarAluno);

   app.route('/disciplinas')
      .get(controller.listarDisciplinas)
      .post(controller.criarDisciplina);

   app.route('/disciplinas/:nome')
      .put(controller.editarDisciplina)
      .delete (controller.deletarDisciplina);

   app.route('/alunosDaDisciplina/:nome')
      .get(controller.listarAlunosDeDisciplina)

   app.route('/disciplinasDoAluno/:nome')
      .get(controller.listarDisciplinasDeAluno)

   app.route('/disciplinasDoProfessor/:nome')
      .get(controller.listarDisciplinasDeProfessor)

};


