import { funcionario } from "./Funcionario";
import { Animal } from "./Animal";
export declare class Recepcionista extends funcionario {
    private agendamentosConfirmados;
    constructor(nome: string, matricula: number, salario: number);
    getagendamentosConfirmados(): number;
    setagendamentosConfirmados(agendamentosConfirmados: number): void;
    agendarAtendimento(animal: Animal, data: Date): string;
    calcularBonus(): number;
}
//# sourceMappingURL=Recepcionista.d.ts.map