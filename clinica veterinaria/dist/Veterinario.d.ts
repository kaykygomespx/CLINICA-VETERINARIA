import { funcionario } from "./Funcionario";
import { Animal } from "./Animal";
export declare class Veterinario extends funcionario {
    private consultasRealizadas;
    constructor(nome: string, matricula: number, salario: number);
    getconsultasRealizadas(): number;
    setconsultasRealizadas(consultasRealizadas: number): void;
    realizarConsulta(animal: Animal): string;
    prescreverTratamento(animal: Animal, tratamento: string): string;
    calcularBonus(): number;
}
//# sourceMappingURL=Veterinario.d.ts.map