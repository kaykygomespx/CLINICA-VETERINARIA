import { funcionario } from "./Funcionario";
import { Animal } from "./Animal";

export class Recepcionista extends funcionario {
    private agendamentosConfirmados: number;

    constructor(
        nome: string,
        matricula: number,
        salario: number,
    )
    {
        super(nome, matricula, salario);
        this.agendamentosConfirmados = 0;
    }

    public getagendamentosConfirmados(): number {
        return this.agendamentosConfirmados;
    }

    public setagendamentosConfirmados(agendamentosConfirmados: number): void {
        this.agendamentosConfirmados = agendamentosConfirmados;
    }

    public agendarAtendimento(animal: Animal, data: Date): string {
        this.agendamentosConfirmados++;
        return this.getnome() + " agendou " + animal.getnome() + " para " + data.toLocaleDateString("pt-BR") + ".";
    }

    public calcularBonus(): number {
        return this.agendamentosConfirmados * 20;
    }
}