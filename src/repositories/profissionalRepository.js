import Profissional from '../models/Profissional.js';

const profissionalRepository = {
  findAll: () => Profissional.find(),
  findById: (id) => Profissional.findById(id),
  create: (dados) => Profissional.create(dados),
  update: (id, dados) => Profissional.findByIdAndUpdate(id, dados, { new: true }),
  delete: (id) => Profissional.findByIdAndDelete(id),
  
  // Método customizado mantido, mas adaptado ao novo formato
  searchByName: (nome) => Profissional.find({
    nome: { $regex: nome, $options: "i" }
  })
};

export default profissionalRepository;