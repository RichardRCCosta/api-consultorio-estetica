import { ProfissionalService } from "../services/profissionalService.js";
import { ProfissionalDto } from "../dtos/profissionalDto.js";
import { profissional } from "../models/Profissional.js";

class ProfissionalController {
    constructor() {
        this.profissionalService = new ProfissionalService();
    }

    createProfissional = async (req, res) => {
        try {
            const newProfissional = await this.profissionalService.createProfissional(req.body);
            res.status(201).json({
                message: "Profissional criado com sucesso!",
                profissional: new ProfissionalDto(newProfissional),
            })
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    getAllProfissionais = async (req, res) => {
        try {
            const listProfissionais = await this.profissionalService.getAllProfissionais();
            res.status(200).json(listProfissionais.map((profissional) => new ProfissionalDto(profissional)));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    getProfissionalById = async (req, res) => {
        try {
            const profissionalById = await this.profissionalService.getProfissionalById(req.params.id);
            if (!profissionalById) {
                return res.status(404).send("Profissional não encontrado!");
            }
            res.status(200).json(new ProfissionalDto(profissionalById));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    getProfissionalById = async(req, res) =>{
        try {
            const profissional = await this.profissionalService.findById(req.params.id);
            if (!profissional) {
                return res.status(404).send("Profissional não encontrado!");
            }
            res.status(200).json(new ProfissionalDto(profissional));
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    updateProfissional = async(req, res) => {
        try {
            const updatedProfissional = await this.profissionalService.updateProfissional(
                req.params.id,
                req.body, {new: true});
            if (!updatedProfissional) {
                return res.status(404).send("Profissional não encontrado!");
            }
            res.status(201).json({
                message: "Profissional atualizado com sucesso!",
                profissional: new ProfissionalDto(updatedProfissional),
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    deleteProfissional = async(req, res) => {
        try {
            deletedProfissional = await this.profissionalService.deleteProfissional(req.params.id);
            if (!deletedProfissional) {
                return res.status(404).json({
                    message: "Profissional não encontrado!"
                });
            }
            res.status(200).json({
                message: "Profissional removido com sucesso!"
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    searchProfissionalByName = async(req, res) => {
        try {
            const{name} = req.params;
            const profissionais = await this.profissionalService.searchProfissionalByName(name);

            if(profissionais.length === 0){
                return res.status(404).json({
                    message: "Nenhum profissional encontrado com o nome informado.",
                    name: name,
                })
            }

            res.status(200).json(profissionais.map((profissional) => new ProfissionalDto(profissional)));
            
        } catch (error) {
            res.status(500).send(error.message);
            
        }
    }

}

export default new ProfissionalController();