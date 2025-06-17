import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function verifyJWT(req, res, next) {
    // Procura o token no cabeçalho de autorização
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }

    // O token é enviado no formato "Bearer <token>"
    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ message: 'Erro no formato do token.' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ message: 'Token mal formatado. Deve ser do tipo Bearer.' });
    }

    // Verifica se o token é válido
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido ou expirado.' });
        }

        // Se o token for válido, adiciona o ID do utilizador à requisição para uso futuro
        req.userId = decoded.id;
        return next(); // Permite que a requisição continue para o controlador
    });
}

export default verifyJWT;
