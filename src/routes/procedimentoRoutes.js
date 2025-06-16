import express from 'express';
import controller from '../controllers/procedimentoController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Procedimento:
 *       type: object
 *       required:
 *         - nome
 *         - descricao
 *         - preco
 *         - duracao
 *       properties:
 *         id:
 *           type: string
 *           description: ID do procedimento
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 *         preco:
 *           type: number
 *         duracao:
 *           type: number
 *       example:
 *         id: "123"
 *         nome: "Limpeza de Pele"
 *         descricao: "Procedimento para limpeza profunda da pele"
 *         preco: 150.00
 *         duracao: 60
 *
 *     ProcedimentoInput:
 *       type: object
 *       required:
 *         - nome
 *         - descricao
 *         - preco
 *         - duracao
 *       properties:
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 *         preco:
 *           type: number
 *         duracao:
 *           type: number
 *       example:
 *         nome: "Limpeza de Pele"
 *         descricao: "Procedimento para limpeza profunda da pele"
 *         preco: 150.00
 *         duracao: 60
 */

/**
 * @swagger
 * tags:
 *   name: Procedimentos
 *   description: Gerenciamento de procedimentos estéticos
 */

/**
 * @swagger
 * /procedimentos:
 *   get:
 *     summary: Retorna a lista de todos os procedimentos
 *     tags: [Procedimentos]
 *     responses:
 *       200:
 *         description: Lista de procedimentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Procedimento'
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /procedimentos/{id}:
 *   get:
 *     summary: Busca um procedimento pelo ID
 *     tags: [Procedimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do procedimento
 *     responses:
 *       200:
 *         description: Procedimento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedimento'
 *       404:
 *         description: Procedimento não encontrado
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /procedimentos:
 *   post:
 *     summary: Cria um novo procedimento
 *     tags: [Procedimentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProcedimentoInput'
 *     responses:
 *       201:
 *         description: Procedimento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedimento'
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /procedimentos/{id}:
 *   put:
 *     summary: Atualiza um procedimento existente
 *     tags: [Procedimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do procedimento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProcedimentoInput'
 *     responses:
 *       200:
 *         description: Procedimento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedimento'
 *       404:
 *         description: Procedimento não encontrado
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /procedimentos/{id}:
 *   delete:
 *     summary: Remove um procedimento
 *     tags: [Procedimentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do procedimento
 *     responses:
 *       204:
 *         description: Procedimento removido com sucesso
 *       404:
 *         description: Procedimento não encontrado
 */
router.delete('/:id', controller.remover);

export default router;
