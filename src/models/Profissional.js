import mongoose from 'mongoose';

const profissionalSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true }
});

const Profissional = mongoose.model('Profissional', profissionalSchema);

export default Profissional;