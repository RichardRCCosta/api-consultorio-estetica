import Agendamento from '../models/Agendamento.js';

const agendamentoRepository = {
  // O .populate() busca os dados dos modelos referenciados
  findAll: () => Agendamento.find().populate('profissional').populate('procedimento'),
  
  findById: (id) => Agendamento.findById(id).populate('profissional').populate('procedimento'),
  
  create: (dados) => Agendamento.create(dados),
  
  update: (id, dados) => Agendamento.findByIdAndUpdate(id, dados, { new: true }),
  
  delete: (id) => Agendamento.findByIdAndDelete(id)
};

export default agendamentoRepository;