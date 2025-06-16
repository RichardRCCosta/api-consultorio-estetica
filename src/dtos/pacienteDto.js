function pacienteDto(paciente) {
  return {
    id: paciente._id,
    nome: paciente.nome,
    email: paciente.email,
    telefone: paciente.telefone,
    dataNascimento: paciente.dataNascimento,
    endereco: paciente.endereco
  };
}

export default pacienteDto;
