"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aves = void 0;
const Animal_1 = require("./Animal");
class Aves extends Animal_1.Animal {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        return this.getnome() + "canta: piu piu!";
    }
    descreverCuidados() {
        return this.getnome() + "precisa de gaiola";
    }
}
exports.Aves = Aves;
//# sourceMappingURL=aves.js.map