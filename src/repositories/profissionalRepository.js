import { BaseRepository } from "./baseRepository.js";
import { profissional } from "../models/Profissional.js";

export class ProfissionalRepository extends BaseRepository {
    constructor() {
        super(profissional);
    }

    async searchByName(name) {
        return await this.model.find({
            name: { $regex: name, $options: "i" },
        });
    }
}




