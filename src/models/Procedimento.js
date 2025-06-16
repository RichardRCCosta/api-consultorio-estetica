import mongoose from 'mongoose';

const procedimentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  preco: { type: Number, required: true },
  duracao: { type: Number } // duração em minutos, por exemplo
});

const Procedimento = mongoose.model('Procedimento', procedimentoSchema);

export default Procedimento;
