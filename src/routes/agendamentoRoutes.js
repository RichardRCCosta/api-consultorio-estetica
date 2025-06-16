import express from 'express';
import controller from '../controllers/agendamentoController.js';

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
 *         paciente:
 *           type: object
 *           properties:
 *             nome:
 *               type: string
 *             telefone:
 *               type: string
 *         profissional:
 *           type: string
 *         procedimento:
 *           type: string
 *         dataHora:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *       example:
 *         id: "abc123"
 *         paciente:
 *           nome: "Richard"
 *           telefone: "41984811706"
 *         profissional: "684f64b1aeaecf733f799eea"
 *         procedimento: "684f646aaeaecf733f799ee8"
 *         dataHora: "2025-08-20T14:30:00.000Z"
 *         status: "Agendado"
 *
 *     AgendamentoInput:
 *       type: object
 *       required:
 *         - paciente
 *         - profissional
 *         - procedimento
 *         - dataHora
 *         - status
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
 *         procedimento:
 *           type: string
 *         dataHora:
 *           type: string
 *           format: date-time
 *         status:
 *           type: string
 *       example:
 *         paciente:
 *           nome: "Richard"
 *           telefone: "41984811706"
 *         profissional: "684f64b1aeaecf733f799eea"
 *         procedimento: "684f646aaeaecf733f799ee8"
 *         dataHora: "2025-08-20T14:30:00.000Z"
 *         status: "Agendado"
 */

/**
 * @swagger
 * tags:
 *   name: Agendamentos
 *   description: Gerenciamento de agendamentos de procedimentos
 */

/**
 * @swagger
 * /agendamentos:
 *   get:
 *     summary: Retorna a lista de todos os agendamentos
 *     tags: [Agendamentos]
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Agendamento'
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   get:
 *     summary: Busca um agendamento pelo ID
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do agendamento
 *     responses:
 *       200:
 *         description: Agendamento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       404:
 *         description: Agendamento não encontrado
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /agendamentos:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags: [Agendamentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgendamentoInput'
 *     responses:
 *       201:
 *         description: Agendamento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   put:
 *     summary: Atualiza um agendamento
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do agendamento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AgendamentoInput'
 *     responses:
 *       200:
 *         description: Agendamento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Agendamento'
 *       404:
 *         description: Agendamento não encontrado
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /agendamentos/{id}:
 *   delete:
 *     summary: Remove um agendamento
 *     tags: [Agendamentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do agendamento
 *     responses:
 *       204:
 *         description: Agendamento removido com sucesso
 *       404:
 *         description: Agendamento não encontrado
 */
router.delete('/:id', controller.remover);

export default router;
