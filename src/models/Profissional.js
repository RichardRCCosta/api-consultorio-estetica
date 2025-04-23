import mongoose from "mongoose";

const profissionalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nome da profissional é obrigatório"]
    },
    email: {
        type: String,
        required: [true, "E-mail da profissional é obrigatório"]
    },
    telefone: {
        type: String,
        required: [true, "Telefone da profissional é obrigatório"]
    },
},
    {
        versionKey: false,
        timestamps: true
    });

const profissional = mongoose.model("profissional", profissionalSchema);
export { profissional, profissionalSchema };