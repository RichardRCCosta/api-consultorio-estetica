import repo from '../repositories/pacienteRepository.js';
import dto from '../dtos/pacienteDto.js';

const pacienteService = {
  listar: async () => (await repo.findAll()).map(dto),
  buscarPorId: async (id) => dto(await repo.findById(id)),
  criar: async (dados) => dto(await repo.create(dados)),
  atualizar: async (id, dados) => dto(await repo.update(id, dados)),
  remover: async (id) => await repo.delete(id)
};

export default pacienteService;
