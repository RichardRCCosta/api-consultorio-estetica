import express from "express";
import agendamento from "./agendamentoRoutes.js";
import profissionais from "./profissionalRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Node.js com Express"));

    app.use(express.json(), agendamento, profissionais);
};

export default routes;
