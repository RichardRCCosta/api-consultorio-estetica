// DTOs para formatar os dados de Profissional e Procedimento
function profissionalDto(profissional) {
  if (!profissional) return null;
  return {
    id: profissional._id,
    nome: profissional.nome,
  };
}

function procedimentoDto(procedimento) {
  if (!procedimento) return null;
  return {
    id: procedimento._id,
    nome: procedimento.nome,
    preco: procedimento.preco,
  };
}

// DTO principal para o Agendamento
function agendamentoDto(agendamento) {
  if (!agendamento) return null;
  return {
    id: agendamento._id,
    paciente: agendamento.paciente,
    dataHora: agendamento.dataHora,
    status: agendamento.status,
    // Formata os dados populados
    profissional: profissionalDto(agendamento.profissional),
    procedimento: procedimentoDto(agendamento.procedimento),
  };
}

// DTO para filtrar dados de entrada da requisição
export function agendamentoParaRequisicaoDto(body) {
  return {
    paciente: body.paciente,
    profissional: body.profissional, // Espera-se um ID aqui
    procedimento: body.procedimento, // Espera-se um ID aqui
    dataHora: body.dataHora,
    status: body.status,
  };
}

export default agendamentoDto;