function profissionalDto(profissional) {
  return {
    id: profissional._id || profissional.id, // Garante compatibilidade com _id do Mongoose ou id
    nome: profissional.nome,
    email: profissional.email,
    telefone: profissional.telefone,
  };
}

export function profissionalParaRequisicaoDto(body) {
  return {
    nome: body.nome,
    email: body.email,
    telefone: body.telefone,
  };
}

// Exportamos a função principal como padrão para manter a consistência.
export default profissionalDto;