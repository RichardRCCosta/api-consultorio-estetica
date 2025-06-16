import express from "express";
import connectToDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import { swaggerUi, swaggerSpec } from "./config/swagger.js"; // 🚨 adicione isso

const connection = await connectToDatabase();

connection.on("error", (error) => {
    console.error("Erro de conexão: ", error);
});

connection.once("open", () => {
    console.log("Conexão com o mongo atlas realizada com sucesso!");
});

const app = express();

// Middleware para JSON
app.use(express.json());

// Rota para documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // 🚨 adicione isso


routes(app);

export default app;
