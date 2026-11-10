"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const Animal_1 = require("./Animal");
class Gato extends Animal_1.Animal {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        return this.getnome() + "Diz miau!";
    }
    descreverCuidados() {
        return this.getidade() + "precisa de aranhador";
    }
}
exports.Gato = Gato;
//# sourceMappingURL=Gato.js.map