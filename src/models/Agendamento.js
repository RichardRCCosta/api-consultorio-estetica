import mongoose from 'mongoose';

const agendamentoSchema = new mongoose.Schema({
  
  paciente: {
    nome: { type: String, required: true },
    telefone: { type: String }
  },
  
  // Referência correta para os outros modelos
  profissional: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profissional', 
    required: true
  },
  
  procedimento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Procedimento', 
    required: true
  },

  dataHora: {
    type: Date,
    required: true
  },
  
  status: {
    type: String,
    required: true,
    enum: ['Agendado', 'Confirmado', 'Cancelado', 'Realizado'],
    default: 'Agendado'
  }
});

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

export default Agendamento;