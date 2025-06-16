import repo from '../repositories/procedimentoRepository.js';
import dto from '../dtos/procedimentoDto.js';

const procedimentoService = {
  listar: async () => (await repo.findAll()).map(dto),
  buscarPorId: async (id) => dto(await repo.findById(id)),
  criar: async (dados) => dto(await repo.create(dados)),
  atualizar: async (id, dados) => dto(await repo.update(id, dados)),
  remover: async (id) => await repo.delete(id)
};

export default procedimentoService;
