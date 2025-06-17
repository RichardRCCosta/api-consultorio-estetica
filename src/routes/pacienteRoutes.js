import express from 'express';
import controller from '../controllers/pacienteController.js';
import verifyJWT from '../middlewares/authMiddleware.js'; // 1. Importar o middleware

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Paciente:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: O ID gerado automaticamente do paciente.
 *         nome:
 *           type: string
 *           description: O nome do paciente.
 *         email:
 *           type: string
 *           description: O e-mail do paciente.
 *         telefone:
 *           type: string
 *           description: O telefone de contato do paciente.
 *         dataNascimento:
 *           type: string
 *           format: date
 *           description: A data de nascimento do paciente.
 *         endereco:
 *           type: string
 *           description: O endereço do paciente.
 *       example:
 *         id: "60d0fe4f5311236168a109ca"
 *         nome: "Joana Doe"
 *         email: "joana.doe@example.com"
 *         telefone: "11987654321"
 *         dataNascimento: "1990-01-15"
 *         endereco: "Rua das Flores, 123"
 *
 *     PacienteInput:
 *       type: object
 *       required:
 *         - nome
 *         - email
 *       properties:
 *         nome:
 *           type: string
 *         email:
 *           type: string
 *         telefone:
 *           type: string
 *         dataNascimento:
 *           type: string
 *           format: date
 *         endereco:
 *           type: string
 *       example:
 *         nome: "Joana Doe"
 *         email: "joana.doe@example.com"
 *         telefone: "11987654321"
 *         dataNascimento: "1990-01-15"
 *         endereco: "Rua das Flores, 123"
 */

/**
 * @swagger
 * tags:
 *   - name: Pacientes
 *     description: API para gerenciamento de pacientes
 *   - name: Autenticação
 *     description: Operações de autenticação
 */

/**
 * @swagger
 * /pacientes:
 *   get:
 *     summary: Retorna a lista de todos os pacientes
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de pacientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
router.get('/', verifyJWT, controller.listar);

/**
 * @swagger
 * /pacientes/{id}:
 *   get:
 *     summary: Busca um paciente pelo ID
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do paciente
 *     responses:
 *       '200':
 *         description: Dados do paciente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       '404':
 *         description: Paciente não encontrado
 */
router.get('/:id', verifyJWT, controller.buscarPorId);

/**
 * @swagger
 * /pacientes:
 *   post:
 *     summary: Cria um novo paciente
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PacienteInput'
 *     responses:
 *       '201':
 *         description: Paciente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       '400':
 *         description: Erro na requisição
 */
router.post('/', verifyJWT, controller.criar);

/**
 * @swagger
 * /pacientes/{id}:
 *   put:
 *     summary: Atualiza um paciente existente
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do paciente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PacienteInput'
 *     responses:
 *       '200':
 *         description: Paciente atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       '404':
 *         description: Paciente não encontrado
 */
router.put('/:id', verifyJWT, controller.atualizar);

/**
 * @swagger
 * /pacientes/{id}:
 *   delete:
 *     summary: Remove um paciente
 *     tags: [Pacientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: O ID do paciente
 *     responses:
 *       '204':
 *         description: Paciente removido com sucesso (sem conteúdo)
 *       '404':
 *         description: Paciente não encontrado
 */
router.delete('/:id', verifyJWT, controller.remover);

export default router;
