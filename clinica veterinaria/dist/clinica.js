"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clinica = void 0;
const Consulta_1 = require("./Consulta");
class Clinica {
    nome;
    funcionarios;
    animais;
    consultas;
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
        this.animais = [];
        this.consultas = [];
    }
    getnome() {
        return this.nome;
    }
    getfuncionarios() {
        return this.funcionarios;
    }
    getanimais() {
        return this.animais;
    }
    getconsultas() {
        return this.consultas;
    }
    setnome(nome) {
        this.nome = nome;
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
    }
    contratarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    registrarConsulta(animal, veterinario, data) {
        if (!this.animais.includes(animal)) {
            throw new Error("Animal não cadastrado na clínica.");
        }
        if (!this.funcionarios.includes(veterinario)) {
            throw new Error("Veterinário não trabalha na clínica.");
        }
        veterinario.realizarConsulta(animal);
        const consulta = new Consulta_1.Consulta(animal, veterinario, data);
        this.consultas.push(consulta);
        return consulta;
    }
}
exports.Clinica = Clinica;
//# sourceMappingURL=Clinica.js.map