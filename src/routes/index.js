import express from "express";
import agendamento from "./agendamentoRoutes.js";
import profissionais from "./profissionalRoutes.js";
import pacientes from "./pacienteRoutes.js";
import procedimentos from "./procedimentoRoutes.js";
import auth from "./authRoutes.js"; 

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Node.js com Express"));

  app.use(express.json());

  // Montar os módulos com prefixos:
  app.use('/', auth); // <-- Adicione esta linha
  app.use('/pacientes', pacientes);
  app.use('/procedimentos', procedimentos);
  app.use('/agendamentos', agendamento);
  app.use('/profissionais', profissionais);
};

export default routes;