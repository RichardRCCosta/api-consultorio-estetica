import mongoose from 'mongoose';

const pacienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  dataNascimento: { type: Date },
  endereco: { type: String }
});

const Paciente = mongoose.model('Paciente', pacienteSchema);

export default Paciente;
