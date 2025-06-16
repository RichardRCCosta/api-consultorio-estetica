import service from '../services/pacienteService.js';

const pacienteController = {
  listar: async (req, res) => {
    const pacientes = await service.listar();
    res.json(pacientes);
  },

  buscarPorId: async (req, res) => {
    const paciente = await service.buscarPorId(req.params.id);
    if (!paciente) return res.status(404).send('Paciente não encontrado');
    res.json(paciente);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).send('Paciente não encontrado');
    res.json(atualizado);
  },

  remover: async (req, res) => {
    await service.remover(req.params.id);
    res.status(204).send();
  }
};

export default pacienteController;
