"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Clinica_1 = require("./Clinica");
const Cachorro_1 = require("./Cachorro");
const Gato_1 = require("./Gato");
const aves_1 = require("./aves");
const Veterinario_1 = require("./Veterinario");
const Recepcionista_1 = require("./Recepcionista");
const clinica = new Clinica_1.Clinica("Clínica da Dona Marta");
const rex = new Cachorro_1.Cachorro("Rex", 4, "João");
const mia = new Gato_1.Gato("Mia", 2, "Ana");
const piu = new aves_1.Aves("Piu", 1, "Carlos");
clinica.cadastrarAnimal(rex);
clinica.cadastrarAnimal(mia);
clinica.cadastrarAnimal(piu);
const vet = new Veterinario_1.Veterinario("Paula", 1001, 5000);
const rec = new Recepcionista_1.Recepcionista("Lucas", 2001, 2500);
clinica.contratarFuncionario(vet);
clinica.contratarFuncionario(rec);
for (const a of clinica.getanimais()) {
    console.log(a.emitirSom());
    console.log(a.descreverCuidados());
}
console.log(rec.agendarAtendimento(rex, new Date()));
const c = clinica.registrarConsulta(rex, vet, new Date());
c.exibirDados();
console.log(vet.prescreverTratamento(rex, "vermífugo"));
for (const f of clinica.getfuncionarios()) {
    console.log(f.getnome() + " - bônus: " + f.calcularBonus());
}
vet.alterarSalario(5500);
try {
    vet.alterarSalario(-1);
}
catch (e) {
    console.log(e.message);
}
//# sourceMappingURL=main.js.map