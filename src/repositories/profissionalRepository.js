import Profissional from '../models/Profissional.js';

const profissionalRepository = {
  findAll: () => Profissional.find(),
  findById: (id) => Profissional.findById(id),
  create: (dados) => Profissional.create(dados),
  update: (id, dados) => Profissional.findByIdAndUpdate(id, dados, { new: true }),
  delete: (id) => Profissional.findByIdAndDelete(id),
  
  searchByName: (nome) => Profissional.find({
    nome: { $regex: nome, $options: "i" }
  }),

  
  searchByEmail: (email) => Profissional.findOne({ email: email })
};

export default profissionalRepository;
