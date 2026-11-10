import { Clinica } from "./Clinica";
import { Cachorro } from "./Cachorro";
import { Gato } from "./Gato";
import { Aves } from "./aves";
import { Veterinario } from "./Veterinario";
import { Recepcionista } from "./Recepcionista";

const clinica = new Clinica("Clínica da Dona Marta");
const rex = new Cachorro("Rex", 4, "João");
const mia = new Gato("Mia", 2, "Ana");
const piu = new Aves("Piu", 1, "Carlos");
clinica.cadastrarAnimal(rex);
clinica.cadastrarAnimal(mia);
clinica.cadastrarAnimal(piu);

const vet = new Veterinario("Paula", 1001, 5000);
const rec = new Recepcionista("Lucas", 2001, 2500);
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
try { vet.alterarSalario(-1); } catch (e) { console.log((e as Error).message); }