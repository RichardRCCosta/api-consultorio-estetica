import jwt from 'jsonwebtoken';
import profissionalRepository from '../repositories/profissionalRepository.js';
import dotenv from 'dotenv';

dotenv.config();

const authController = {
  login: async (req, res) => {
    try {
      const { email, senha } = req.body; // A senha é o telefone

      
      const profissional = await profissionalRepository.searchByEmail(email);

      if (!profissional) {
        return res.status(401).json({ message: 'Credenciais inválidas. Profissional não encontrado.' });
      }

      if (senha !== profissional.telefone) {
        return res.status(401).json({ message: 'Credenciais inválidas. Senha incorreta.' });
      }

      const token = jwt.sign(
        { id: profissional._id, nome: profissional.nome },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({ message: "Login bem-sucedido!", token });

    } catch (error) {
      console.error("Erro no login:", error); // Adicionado log para depuração
      res.status(500).json({ message: 'Erro interno no servidor.', error: error.message });
    }
  }
};

export default authController;
