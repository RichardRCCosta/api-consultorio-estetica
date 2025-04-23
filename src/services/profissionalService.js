import { ProfissionalRepository } from "../repositories/profissionalRepository.js";
import { ProfissionalDto } from "../dtos/profissionalDto.js";

export class ProfissionalService {
    constructor() {
        this.profissionalRepository = new ProfissionalRepository();
    }
    
    createProfissional = async (profissionalData) => {
        const profissional = ProfissionalDto.fromRequest(profissionalData);
        return await this.profissionalRepository.create(profissional);
    }

    getAllProfissionais = async () => {
        return await this.profissionalRepository.findAll();
    }

    getProfissionalById = async (id) => {
        const foundProfissional = await this.profissionalRepository.findById(id);
        if (!foundProfissional) {
            throw new Error("Profissional não encontrado!");
        }
        return foundProfissional;
    }

    updateProfissional = async (id, profissionalData) => {
        const updatedProfissional = await this.profissionalRepository.update(id, profissionalData);
        if (!updatedProfissional) {
            throw new Error("Profissional não encontrado!");
        }
        return updatedProfissional;
    }

    deleteProfissional = async (id) => {
        const deleteProfissional = await this.profissionalRepository.delete(id);
        if (!deleteProfissional) {
            throw new Error("Profissional não encontrado!");
        }
        return deleteProfissional;
    }

    searchProfissionalByName = async (name) => {
        if (!name || name.trim() === "") {
            throw new Error("Informar o nome da profissional para busca.");
        }
        return await this.profissionalRepository.searchByName(name);
    }
}