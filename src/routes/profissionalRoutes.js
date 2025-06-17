import express from 'express';
import controller from '../controllers/profissionalController.js';
import verifyJWT from '../middlewares/authMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Profissional:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *       properties:
 *         id:
 *           type: string
 *           description: O ID gerado automaticamente do profissional.
 *         nome:
 *           type: string
 *           description: O nome do profissional.
 *         email:
 *           type: string
 *           description: O e-mail do profissional.
 *         telefone:
 *           type: string
 *           description: O telefone de contato do profissional.
 * 
 *     ProfissionalInput:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *         - telefone
 *       properties:
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         telefone:
 *           type: string
 */

/**
 * @swagger
 * /profissionais:
 *   get:
 *     summary: Retorna a lista de todos os profissionais
 *     tags: [Profissionais]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de profissionais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profissional'
 */
router.get('/', verifyJWT, controller.listar);

/**
 * @swagger
 * /profissionais/{id}:
 *   get:
 *     summary: Busca um profissional pelo ID
 *     tags: [Profissionais]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do profissional
 *     responses:
 *       '200':
 *         description: Dados do profissional
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       '404':
 *         description: Profissional não encontrado
 */
router.get('/:id', verifyJWT, controller.buscarPorId);

/**
 * @swagger
 * /profissionais:
 *   post:
 *     summary: Cria um novo profissional
 *     tags: [Profissionais]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfissionalInput'
 *     responses:
 *       '201':
 *         description: Profissional criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       '400':
 *         description: Erro na requisição
 */
router.post('/', verifyJWT, controller.criar);

/**
 * @swagger
 * /profissionais/{id}:
 *   put:
 *     summary: Atualiza um profissional existente
 *     tags: [Profissionais]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do profissional
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfissionalInput'
 *     responses:
 *       '200':
 *         description: Profissional atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       '404':
 *         description: Profissional não encontrado
 */
router.put('/:id', verifyJWT, controller.atualizar);

/**
 * @swagger
 * /profissionais/{id}:
 *   delete:
 *     summary: Remove um profissional
 *     tags: [Profissionais]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do profissional
 *     responses:
 *       '204':
 *         description: Profissional removido com sucesso
 *       '404':
 *         description: Profissional não encontrado
 */
router.delete('/:id', verifyJWT, controller.remover);

export default router;
