"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recepcionista = void 0;
const Funcionario_1 = require("./Funcionario");
class Recepcionista extends Funcionario_1.funcionario {
    agendamentosConfirmados;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = 0;
    }
    getagendamentosConfirmados() {
        return this.agendamentosConfirmados;
    }
    setagendamentosConfirmados(agendamentosConfirmados) {
        this.agendamentosConfirmados = agendamentosConfirmados;
    }
    agendarAtendimento(animal, data) {
        this.agendamentosConfirmados++;
        return this.getnome() + " agendou " + animal.getnome() + " para " + data.toLocaleDateString("pt-BR") + ".";
    }
    calcularBonus() {
        return this.agendamentosConfirmados * 20;
    }
}
exports.Recepcionista = Recepcionista;
//# sourceMappingURL=Recepcionista.js.map