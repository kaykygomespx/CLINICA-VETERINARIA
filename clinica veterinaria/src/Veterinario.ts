import { funcionario } from "./Funcionario";
import { Animal } from "./Animal";

export class Veterinario extends funcionario {
    private consultasRealizadas: number;

    constructor(
        nome: string,
        matricula: number,
        salario: number,
    )
    {
        super(nome, matricula, salario);
        this.consultasRealizadas = 0;
    }

    public getconsultasRealizadas(): number {
        return this.consultasRealizadas;
    }

    public setconsultasRealizadas(consultasRealizadas: number): void {
        this.consultasRealizadas = consultasRealizadas;
    }

    public realizarConsulta(animal: Animal): string {
        this.consultasRealizadas++;
        return this.getnome() + " atendeu " + animal.getnome() + ".";
    }

    public prescreverTratamento(animal: Animal, tratamento: string): string {
        return "Tratamento para " + animal.getnome() + ": " + tratamento + ".";
    }

    public calcularBonus(): number {
        return this.consultasRealizadas * 50;
    }
}