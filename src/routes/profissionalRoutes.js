import express from 'express';
import controller from '../controllers/profissionalController.js';

const router = express.Router();

// As rotas agora são relativas ao ponto onde o router for montado
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

// Nota: Se você tiver o método "buscarPorNome" no seu controller,
// você pode adicionar uma rota para ele também:
// router.get('/buscar/por-nome', controller.buscarPorNome);

export default router;