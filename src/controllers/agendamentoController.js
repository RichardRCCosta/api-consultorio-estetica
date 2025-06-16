import service from '../services/agendamentoService.js';

const agendamentoController = {
  listar: async (req, res) => {
    const agendamentos = await service.listar();
    res.json(agendamentos);
  },

  buscarPorId: async (req, res) => {
    const agendamento = await service.buscarPorId(req.params.id);
    if (!agendamento) {
      return res.status(404).send('Agendamento não encontrado');
    }
    res.json(agendamento);
  },

  criar: async (req, res) => {
    try {
      const novo = await service.criar(req.body);
      res.status(201).json(novo);
    } catch (error) {
      // Erros de validação do service (ex: "Profissional não encontrado")
      // serão capturados aqui.
      res.status(400).send({ message: error.message });
    }
  },

  atualizar: async (req, res) => {
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) {
      return res.status(404).send('Agendamento não encontrado');
    }
    res.json(atualizado);
  },

  remover: async (req, res) => {
    const removido = await service.remover(req.params.id);
    if (!removido) {
      return res.status(404).send('Agendamento não encontrado');
    }
    res.status(204).send();
  }
};

export default agendamentoController;