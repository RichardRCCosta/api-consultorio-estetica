import repo from '../repositories/profissionalRepository.js';
import profissionalDto, { profissionalParaRequisicaoDto } from '../dtos/profissionalDto.js';

const profissionalService = {
  
  listar: async () => {
    const profissionais = await repo.findAll();
    // Mapeia cada profissional para o formato do DTO
    return profissionais.map(profissionalDto);
  },

  buscarPorId: async (id) => {
    const profissional = await repo.findById(id);
    // Se o profissional for encontrado, formata com DTO; senão, retorna null
    return profissional ? profissionalDto(profissional) : null;
  },

  
  buscarPorNome: async (nome) => {
    const profissionais = await repo.searchByName(nome);
    return profissionais.map(profissionalDto);
  },

  
  criar: async (dados) => {
    // Usa o DTO de requisição para filtrar os dados antes de enviar ao repositório
    const dadosFiltrados = profissionalParaRequisicaoDto(dados);
    const novoProfissional = await repo.create(dadosFiltrados);
    return profissionalDto(novoProfissional);
  },

  
  atualizar: async (id, dados) => {
    const dadosFiltrados = profissionalParaRequisicaoDto(dados);
    const profissionalAtualizado = await repo.update(id, dadosFiltrados);
    return profissionalAtualizado ? profissionalDto(profissionalAtualizado) : null;
  },

  
  remover: async (id) => {
    // Apenas repassa a chamada para o repositório, como no exemplo
    return await repo.delete(id);
  }
};

export default profissionalService;