import { BaseRepository } from "./baseRepository.js";
import agendamento from "../models/Agendamento.js";

export class AgendamentoRepository extends BaseRepository {
    constructor() {
        super(agendamento)
    }

}
