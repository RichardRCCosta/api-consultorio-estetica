import mongoose from "mongoose";
import { profissionalSchema } from "./Profissional.js";

const agendamentoSchema = new mongoose.Schema({
    // paciente: pacienteSchema,
    profissional: profissionalSchema,
    // procedimento: procedimentoSchema,
    dataHora:{
        type: Date,
        required: [true, "Data e hora do agendamento é obrigatório"]
    },
    status: { type: String },
},
    {
        versionKey: false,
        timestamps: true,
    }
);


const agendamento = mongoose.model("agendamento", agendamentoSchema);
export default agendamento;