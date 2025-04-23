import mongoose from "mongoose";

const procedimentoSchema = new mongoose.Schema({
    // id: { type: mongoose.Schema.Types.ObjectId },
    name: {
        type: String,
        required: [true, "Nome do serviço é obrigatório"]
    },
    descricao: {
        type: String,
        required: [true, "Descrição do serviço é obrigatório"]
    },
    duracao: { type: Int32Array },
    preco: { type: Float64Array},


},
    {
        versionKey: false,
        timestamps: true
    });

const procedimento = mongoose.model("procedimento", procedimentoSchema);
export { procedimento, procedimentoSchema };