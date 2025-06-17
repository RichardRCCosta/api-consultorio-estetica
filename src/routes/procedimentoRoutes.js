import express from 'express';
import controller from '../controllers/procedimentoController.js';
import verifyJWT from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Procedimento:
 *       type: object
 *       required:
 *         - nome
 *         - preco
 *       properties:
 *         id:
 *           type: string
 *           description: O ID gerado automaticamente do procedimento.
 *         nome:
 *           type: string
 *           description: O nome do procedimento.
 *         descricao:
 *           type: string
 *           description: A descrição detalhada do procedimento.
 *         preco:
 *           type: number
 *           format: float
 *           description: O preço do procedimento.
 *         duracao:
 *           type: integer
 *           description: A duração do procedimento em minutos.
 * 
 *     ProcedimentoInput:
 *       type: object
 *       required:
 *         - nome
 *         - preco
 *       properties:
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 *         preco:
 *           type: number
 *           format: float
 *         duracao:
 *           type: integer
 */

/**
 * @swagger
 * /procedimentos:
 *   get:
 *     summary: Retorna a lista de todos os procedimentos
 *     tags: [Procedimentos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de procedimentos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Procedimento'
 */
router.get('/', verifyJWT, controller.listar);

/**
 * @swagger
 * /procedimentos/{id}:
 *   get:
 *     summary: Busca um procedimento pelo ID
 *     tags: [Procedimentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do procedimento
 *     responses:
 *       '200':
 *         description: Dados do procedimento
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedimento'
 *       '404':
 *         description: Procedimento não encontrado
 */
router.get('/:id', verifyJWT, controller.buscarPorId);

/**
 * @swagger
 * /procedimentos:
 *   post:
 *     summary: Cria um novo procedimento
 *     tags: [Procedimentos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProcedimentoInput'
 *     responses:
 *       '201':
 *         description: Procedimento criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedimento'
 *       '400':
 *         description: Erro na requisição
 */
router.post('/', verifyJWT, controller.criar);

/**
 * @swagger
 * /procedimentos/{id}:
 *   put:
 *     summary: Atualiza um procedimento existente
 *     tags: [Procedimentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do procedimento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProcedimentoInput'
 *     responses:
 *       '200':
 *         description: Procedimento atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Procedimento'
 *       '404':
 *         description: Procedimento não encontrado
 */
router.put('/:id', verifyJWT, controller.atualizar);

/**
 * @swagger
 * /procedimentos/{id}:
 *   delete:
 *     summary: Remove um procedimento
 *     tags: [Procedimentos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do procedimento
 *     responses:
 *       '204':
 *         description: Procedimento removido com sucesso
 *       '404':
 *         description: Procedimento não encontrado
 */
router.delete('/:id', verifyJWT, controller.remover);

export default router;
