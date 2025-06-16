import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    // A mensagem de log informa o endereço completo, facilitando o acesso.
    console.log(`Servidor escutando em http://localhost:${PORT}`);
});
