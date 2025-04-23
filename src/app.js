import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("Erro de conexão: ", error);
});

connection.once("open", () => {
    console.log("Conexão com o mongo atlas realizada com sucesso!");
});

const app = express();
routes(app);

export default app;

