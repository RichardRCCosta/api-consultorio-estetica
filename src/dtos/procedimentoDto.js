function procedimentoDto(procedimento) {
  return {
    id: procedimento._id,
    nome: procedimento.nome,
    descricao: procedimento.descricao,
    preco: procedimento.preco,
    duracao: procedimento.duracao
  };
}

export default procedimentoDto;
