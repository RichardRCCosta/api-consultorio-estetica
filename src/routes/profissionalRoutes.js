import express from 'express';
import controller from '../controllers/profissionalController.js';

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
 *       example:
 *         id: "60d0fe4f5311236168a109cb"
 *         nome: "Dr. Carlos Silva"
 *         email: "carlos.silva@example.com"
 *         telefone: "11912345678"
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
 *       example:
 *         nome: "Dr. Carlos Silva"
 *         email: "carlos.silva@example.com"
 *         telefone: "11912345678"
 */

/**
 * @swagger
 * tags:
 *   name: Profissionais
 *   description: API para gerenciamento de profissionais
 */

/**
 * @swagger
 * /profissionais:
 *   get:
 *     summary: Retorna a lista de todos os profissionais
 *     tags: [Profissionais]
 *     responses:
 *       200:
 *         description: Lista de profissionais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profissional'
 */
router.get('/', controller.listar);

/**
 * @swagger
 * /profissionais/{id}:
 *   get:
 *     summary: Busca um profissional pelo ID
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do profissional
 *     responses:
 *       200:
 *         description: Dados do profissional
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       404:
 *         description: Profissional não encontrado
 */
router.get('/:id', controller.buscarPorId);

/**
 * @swagger
 * /profissionais:
 *   post:
 *     summary: Cria um novo profissional
 *     tags: [Profissionais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfissionalInput'
 *     responses:
 *       201:
 *         description: Profissional criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       400:
 *         description: Erro na requisição
 */
router.post('/', controller.criar);

/**
 * @swagger
 * /profissionais/{id}:
 *   put:
 *     summary: Atualiza um profissional existente
 *     tags: [Profissionais]
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
 *       200:
 *         description: Profissional atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profissional'
 *       404:
 *         description: Profissional não encontrado
 */
router.put('/:id', controller.atualizar);

/**
 * @swagger
 * /profissionais/{id}:
 *   delete:
 *     summary: Remove um profissional
 *     tags: [Profissionais]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do profissional
 *     responses:
 *       204:
 *         description: Profissional removido com sucesso
 *       404:
 *         description: Profissional não encontrado
 */
router.delete('/:id', controller.remover);

export default router;
