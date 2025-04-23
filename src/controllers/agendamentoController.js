import { AgendamentoService } from "../services/agendamentoService.js";
import { AgendamentoDto } from "../dtos/agendamentoDto.js";
import agendamento from "../models/Agendamento.js";

class AgendamentoController {
    constructor() {
        this.agendamentoService = new AgendamentoService();
    }

    getAllAgendamentos = async (req, res) => {
        try {
            const listAgendamentos = await this.agendamentoService.getAllAgendamentos({});
            res.status(200).json(listAgendamentos);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    createAgendamento = async (req, res) => {
        try {
            const newAgendamento = await this.agendamentoService.createAgendamento(req.body);
            res.status(201).json({
                message: "Agendamento criado com sucesso!",
                agendamento: new AgendamentoDto(newAgendamento),
            })
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    getAgendamentoById = async (req, res) => {
        try {
            const agendamentoById = await this.agendamentoService.getAgendamentoById(req.params.id);
            if (!agendamentoById) {
                return res.status(404).send("Agendamento não encontrado!");
            }
            res.status(200).json(new AgendamentoDto(agendamentoById));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    updateAgendamento = async (req, res) => {
        try {
            const updateAgendamento = await this.agendamentoService.updateAgendamento(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updateAgendamento) {
                return res.status(404).send("Agendamento não encontrado!");
            }
            res.status(201).json({
                message: "Agendamento atualizado com sucesso!",
                agendamento: new AgendamentoDto(updateAgendamento),
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    deleteAgendamento = async(req, res) => {
        try {
            await this.agendamentoService.deleteAgendamento(req.params.id);
            res.status(200).send("Agendamento removido com sucesso!");
        } catch (error) {
            res.status(500).send(error.message);
        }        
    }
}

export default new AgendamentoController();
