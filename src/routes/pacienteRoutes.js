// ✅ Correto para ES Modules
import express from 'express';
import controller from '../controllers/pacienteController.js';

const router = express.Router();

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

export default router;
