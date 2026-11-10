"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const Funcionario_1 = require("./Funcionario");
class Veterinario extends Funcionario_1.funcionario {
    consultasRealizadas;
    constructor(nome, matricula, salario) {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }
    getconsultasRealizadas() {
        return this.consultasRealizadas;
    }
    setconsultasRealizadas(consultasRealizadas) {
        this.consultasRealizadas = consultasRealizadas;
    }
    realizarConsulta(animal) {
        this.consultasRealizadas++;
        return this.getnome() + " atendeu " + animal.getnome() + ".";
    }
    prescreverTratamento(animal, tratamento) {
        return "Tratamento para " + animal.getnome() + ": " + tratamento + ".";
    }
    calcularBonus() {
        return this.consultasRealizadas * 50;
    }
}
exports.Veterinario = Veterinario;
//# sourceMappingURL=Veterinario.js.map