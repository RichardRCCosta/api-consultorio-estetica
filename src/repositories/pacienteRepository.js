import Paciente from '../models/Paciente.js';

const pacienteRepository = {
  findAll: () => Paciente.find(),
  findById: (id) => Paciente.findById(id),
  create: (dados) => Paciente.create(dados),
  update: (id, dados) => Paciente.findByIdAndUpdate(id, dados, { new: true }),
  delete: (id) => Paciente.findByIdAndDelete(id)
};

export default pacienteRepository;
