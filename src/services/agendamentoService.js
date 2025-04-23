import { AgendamentoRepository } from "../repositories/agendamentoRepository.js";
import { ProfissionalRepository } from "../repositories/profissionalRepository.js";
// Procedimento Repository
// Paciente Repository
import { AgendamentoDto } from "../dtos/agendamentoDto.js";

export class AgendamentoService {
    agendamentoRepository = new AgendamentoRepository();
    profissionalRepository = new ProfissionalRepository();

    getAllAgendamentos = async () => {
        return await this.agendamentoRepository.findAll();
    }

    createAgendamento = async (agendamentoData) => {
        const foundProfissional = await this.profissionalRepository.findById(agendamentoData.profissional);

        if (!foundProfissional) {
            throw new Error("Profissional informado não existe.");
        }

        const completeAgendamento = {
            ...AgendamentoDto.fromRequest(agendamentoData),
            profissional: { ...foundProfissional._doc },
        }

        return await this.agendamentoRepository.create(completeAgendamento);
    }

    getAgendamentoById = async (id) => {
        const agendamento = await this.agendamentoRepository.findById(id);
        if (!agendamento) {
            throw new Error("Agendamento não encontrado");
        }
        return agendamento;
    }

    updateAgendamento = async (id, agendamentoData) => {
        let updateData = { ...agendamentoData };
        if (agendamentoData.profissional) {
            const foundProfissional = await this.profissionalRepository.findById(agendamentoData.profissional);
            if (!foundProfissional) {
                throw new Error("Profissional não encontrado!");
            }
            updateData.profissional = { ...foundProfissional._doc };
        }

        const updatedAgendamento = await this.agendamentoRepository.update(id, updateData);
        if (!updatedAgendamento) {
            throw new Error("Agendamento não encontrado");
        }
        return updatedAgendamento;
    }

    deleteAgendamento = async (id) => {
        const deleteAgendamento = await this.agendamentoRepository.delete(id);
        if (!deleteAgendamento) {
            throw new Error("Agendamento não encontrado");
        }
        return deleteAgendamento;
    }

}