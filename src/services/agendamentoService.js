import repo from '../repositories/agendamentoRepository.js';
import agendamentoDto, { agendamentoParaRequisicaoDto } from '../dtos/agendamentoDto.js';
// Vamos precisar dos outros repositórios para validar os IDs
import profissionalRepo from '../repositories/profissionalRepository.js';
import procedimentoRepo from '../repositories/procedimentoRepository.js';

const agendamentoService = {
  listar: async () => {
    const agendamentos = await repo.findAll();
    return agendamentos.map(agendamentoDto);
  },

  buscarPorId: async (id) => {
    const agendamento = await repo.findById(id);
    return agendamentoDto(agendamento);
  },

  criar: async (dados) => {
    const dadosFiltrados = agendamentoParaRequisicaoDto(dados);

    // Validação: checa se os IDs existem antes de criar
    const profissionalExiste = await profissionalRepo.findById(dadosFiltrados.profissional);
    if (!profissionalExiste) throw new Error('Profissional não encontrado.');

    const procedimentoExiste = await procedimentoRepo.findById(dadosFiltrados.procedimento);
    if (!procedimentoExiste) throw new Error('Procedimento não encontrado.');

    const novoAgendamento = await repo.create(dadosFiltrados);
    return agendamentoDto(await repo.findById(novoAgendamento._id)); // Busca novamente para popular
  },

  atualizar: async (id, dados) => {
    const dadosFiltrados = agendamentoParaRequisicaoDto(dados);
    const agendamentoAtualizado = await repo.update(id, dadosFiltrados);
    return agendamentoDto(agendamentoAtualizado);
  },

  remover: async (id) => {
    return await repo.delete(id);
  }
};

export default agendamentoService;