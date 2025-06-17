import express from 'express';
import controller from '../controllers/agendamentoController.js';
import verifyJWT from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Agendamento:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: O ID gerado automaticamente do agendamento.
 *         paciente:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *             telefone:
 *               type: string
 *         profissional:
 *           $ref: '#/components/schemas/Profissional'
 *         procedimento:
 *           $ref: '#/components/schemas/Procedimento'
 *         dataHora:
 *           type: string
 *           format: date-time
 *           description: Data e hora do agendamento.
 *         status:
 *           type: string
 *           description: O status do agendamento.
 *           enum: [Agendado, Confirmado, Cancelado, Realizado]
 * 
 *     AgendamentoInput:
 *       type: object
 *       required:
 *         - paciente
 *         - profissional
 *         - procedimento
 *         - dataHora
 *       properties:
 *         paciente:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *             telefone:
 *               type: string
 *         profissional:
 *           type: string
 *           description: O ID do profissional.
 *         procedimento:
 *           type: string
 *           description: O ID do procedimento.
 *         dataHora:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *           enum: [Agendado, Confirmado, Cancelado, Realizado]
 *           default: Agendado
 */

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Retorna a lista de todos os agendamentos
 *     tags: [Agendamentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de agendamentos com dados populados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agendamento'
 */
router.get('/', verifyJWT, controller.listar);

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgendamentoInput'
 *     responses:
 *       '201':
 *         description: Agendamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       '400':
 *         description: "Erro na requisição (ex: Profissional ou Procedimento não encontrado)"
 */
router.post('/', verifyJWT, controller.criar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   get:
 *     summary: Busca um agendamento pelo ID
 *     tags: [Agendamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do agendamento
 *     responses:
 *       '200':
 *         description: Dados do agendamento
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       '404':
 *         description: Agendamento não encontrado
 */
router.get('/:id', verifyJWT, controller.buscarPorId);

/**
 * @swagger
 * /agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento existente
 *     tags: [Agendamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do agendamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgendamentoInput'
 *     responses:
 *       '200':
 *         description: Agendamento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       '404':
 *         description: Agendamento não encontrado
 */
router.put('/:id', verifyJWT, controller.atualizar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Remove um agendamento
 *     tags: [Agendamentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do agendamento
 *     responses:
 *       '204':
 *         description: Agendamento removido com sucesso
 *       '404':
 *         description: Agendamento não encontrado
 */
router.delete('/:id', verifyJWT, controller.remover);

export default router;
