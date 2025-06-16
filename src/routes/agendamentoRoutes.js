import express from 'express';
import controller from '../controllers/agendamentoController.js';

const router = express.Router();

router.get('/', controller.listar);
router.post('/', controller.criar);
router.get('/:id', controller.buscarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

export default router;