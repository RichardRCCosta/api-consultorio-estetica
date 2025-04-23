import express from "express";
import ProfissionalController from "../controllers/profissionalController.js";

const routes = express.Router();

routes.get("/profissionais", ProfissionalController.getAllProfissionais);
routes.post("/profissionais", ProfissionalController.createProfissional);
routes.get("/profissionais/:id", ProfissionalController.getProfissionalById);
routes.put("/profissionais/:id", ProfissionalController.updateProfissional);
routes.delete("/profissionais/:id", ProfissionalController.deleteProfissional);

export default routes;
