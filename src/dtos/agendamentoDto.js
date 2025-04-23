export class AgendamentoDto {
    constructor(agendamento) {
        this.id = agendamento._id || agendamento.id;
        this.paciente = agendamento.paciente;
        this.profissional = agendamento.profissional;
        this.procedimento = agendamento.procedimento;
        this.dataHora = agendamento.dataHora;
        this.status = agendamento.status;
    }

    static fromRequest(body) {
        return {
            paciente: body.paciente,
            profissional: body.profissional,
            procedimento: body.procedimento,
            dataHora: body.dataHora,
            status: body.status,
        };
    }
}