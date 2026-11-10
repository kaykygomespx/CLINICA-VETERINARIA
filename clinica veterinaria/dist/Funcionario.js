"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcionario = void 0;
class funcionario {
    nome;
    matricula;
    salario;
    constructor(nome, matricula, salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = 0;
        this.alterarSalario(salario);
    }
    getnome() {
        return this.nome;
    }
    getmatricula() {
        return this.matricula;
    }
    getsalario() {
        return this.salario;
    }
    setnome(nome) {
        this.nome = nome;
    }
    setmatricula(matricula) {
        this.matricula = matricula;
    }
    setsalario(salario) {
        this.salario = salario;
    }
    alterarSalario(novoSalario) {
        if (novoSalario <= 0) {
            throw new Error("Salário inválido: deve ser maior que zero.");
        }
        this.salario = novoSalario;
    }
    exibirDados() {
        console.log("---------------------");
        console.log("nome:" + this.nome);
        console.log("matricula:" + this.matricula);
        console.log("this.salario:" + this.salario);
        console.log("---------------------");
    }
}
exports.funcionario = funcionario;
//# sourceMappingURL=Funcionario.js.map