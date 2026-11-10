"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const Animal_1 = require("./Animal");
class Cachorro extends Animal_1.Animal {
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    emitirSom() {
        return this.getnome() + "diz: au au!";
    }
    descreverCuidados() {
        return this.getnome() + " precisa de passeio diário";
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map