import service from '../services/procedimentoService.js';

const procedimentoController = {
  listar: async (req, res) => {
    const procedimentos = await service.listar();
    res.json(procedimentos);
  },

  buscarPorId: async (req, res) => {
    const procedimento = await service.buscarPorId(req.params.id);
    if (!procedimento) return res.status(404).send('Procedimento não encontrado');
    res.json(procedimento);
  },

  criar: async (req, res) => {
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).send('Procedimento não encontrado');
    res.json(atualizado);
  },

  remover: async (req, res) => {
    await service.remover(req.params.id);
    res.status(204).send();
  }
};

export default procedimentoController;
