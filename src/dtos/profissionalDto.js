//Data Transfer Object
export class ProfissionalDto {
    constructor(profissional) {
        this.id = profissional._id || profissional.id;
        this.name = profissional.name;
        this.email = profissional.email;
        this.telefone = profissional.telefone;
    }

    static fromRequest(body) {
        return {
            name: body.name,
            email: body.email,
            telefone: body.telefone,
        };
    }
}