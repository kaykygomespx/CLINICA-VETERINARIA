"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consulta = void 0;
class Consulta {
    animal;
    veterinario;
    data;
    constructor(animal, veterinario, data) {
        if (!animal || !veterinario) {
            throw new Error("Consulta exige um animal e um veterinário.");
        }
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }
    getanimal() {
        return this.animal;
    }
    getveterinario() {
        return this.veterinario;
    }
    getdata() {
        return this.data;
    }
    setdata(data) {
        this.data = data;
    }
    exibirDados() {
        console.log("---------------------------");
        console.log("animal: " + this.animal.getnome());
        console.log("veterinario: " + this.veterinario.getnome());
        console.log("data: " + this.data.toLocaleDateString("pt-BR"));
        console.log("---------------------------");
    }
}
exports.Consulta = Consulta;
//# sourceMappingURL=Consulta.js.map