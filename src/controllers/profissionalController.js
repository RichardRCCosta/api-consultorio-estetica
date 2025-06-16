// Em src/controllers/profissionalController.js

import service from '../services/profissionalService.js';

const profissionalController = {
  listar: async (req, res) => {
    
    const profissionais = await service.listar();
    res.json(profissionais);
  },

  buscarPorId: async (req, res) => {
    
    const profissional = await service.buscarPorId(req.params.id);
    if (!profissional) return res.status(404).send('Profissional não encontrado');
    res.json(profissional);
  },

  criar: async (req, res) => {
    
    const novo = await service.criar(req.body);
    res.status(201).json(novo);
  },

  atualizar: async (req, res) => {
    
    const atualizado = await service.atualizar(req.params.id, req.body);
    if (!atualizado) return res.status(404).send('Profissional não encontrado');
    res.json(atualizado);
  },

  remover: async (req, res) => {
    
    const removido = await service.remover(req.params.id);
    if (!removido) return res.status(404).send('Profissional não encontrado');
    res.status(204).send();
  },
  
  buscarPorNome: async (req, res) => {
    
    const { nome } = req.query; 
    const profissionais = await service.buscarPorNome(nome);
    res.json(profissionais);
  }
};

export default profissionalController;