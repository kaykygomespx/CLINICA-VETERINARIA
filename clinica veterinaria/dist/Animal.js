"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    nome;
    idade;
    tutor;
    constructor(nome, idade, tutor) {
        this.nome = nome;
        this.idade = idade;
        this.tutor = tutor;
    }
    getnome() {
        return this.nome;
    }
    getidade() {
        return this.idade;
    }
    gettutor() {
        return this.tutor;
    }
    setnome(nome) {
        this.nome = nome;
    }
    setidade(idade) {
        idade = idade;
    }
    settutor(tutor) {
        tutor = tutor;
    }
    exibirDados() {
        console.log("-------------------");
        console.log("nome:" + this.nome);
        console.log("idade:+ this.idade");
        console.log("tutor:" + this.tutor);
        console.log("-------------------");
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map