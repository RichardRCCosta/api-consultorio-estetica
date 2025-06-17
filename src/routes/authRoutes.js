import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login para obter um token JWT
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: E-mail do profissional para login.
 *               senha:
 *                 type: string
 *                 format: password
 *                 description: Senha do profissional (neste exemplo, o telefone).
 *             example:
 *               email: "carlos.silva@example.com"
 *               senha: "11912345678"
 *     responses:
 *       '200':
 *         description: Login bem-sucedido, retorna o token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       '401':
 *         description: Credenciais inválidas.
 */
router.post('/login', authController.login);

export default router;
