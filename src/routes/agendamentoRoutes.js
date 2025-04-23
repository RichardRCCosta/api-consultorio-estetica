import express from "express";
import AgendamentoController from "../controllers/agendamentoController.js";

const routes = express.Router();

routes.get("/agendamentos", AgendamentoController.getAllAgendamentos);
routes.post("/agendamentos", AgendamentoController.createAgendamento);
routes.get("/agendamentos/:id", AgendamentoController.getAgendamentoById);
routes.delete("/agendamentos/:id", AgendamentoController.deleteAgendamento);
routes.put("/agendamentos/:id", AgendamentoController.updateAgendamento);

export default routes;