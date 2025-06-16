import Procedimento from '../models/Procedimento.js';

const procedimentoRepository = {
  findAll: () => Procedimento.find(),
  findById: (id) => Procedimento.findById(id),
  create: (dados) => Procedimento.create(dados),
  update: (id, dados) => Procedimento.findByIdAndUpdate(id, dados, { new: true }),
  delete: (id) => Procedimento.findByIdAndDelete(id)
};

export default procedimentoRepository;
