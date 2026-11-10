import { Animal } from "./Animal";
import { funcionario } from "./Funcionario";
import { Veterinario } from "./Veterinario";
import { Consulta } from "./Consulta";

export class Clinica {
    private nome: string;
    private funcionarios: funcionario[];
    private animais: Animal[];
    private consultas: Consulta[];

    constructor(
        nome: string,
    )
    {
        this.nome = nome;
        this.funcionarios = [];
        this.animais = [];
        this.consultas = [];
    }

    public getnome(): string {
        return this.nome;
    }
    public getfuncionarios(): funcionario[] {
        return this.funcionarios;
    }
    public getanimais(): Animal[] {
        return this.animais;
    }
    public getconsultas(): Consulta[] {
        return this.consultas;
    }

    public setnome(nome: string): void {
        this.nome = nome;
    }

    public cadastrarAnimal(animal: Animal): void {
        this.animais.push(animal);
    }

    public contratarFuncionario(funcionario: funcionario): void {
        this.funcionarios.push(funcionario);
    }

    public registrarConsulta(animal: Animal, veterinario: Veterinario, data: Date): Consulta {
        if (!this.animais.includes(animal)) {
            throw new Error("Animal não cadastrado na clínica.");
        }
        if (!this.funcionarios.includes(veterinario)) {
            throw new Error("Veterinário não trabalha na clínica.");
        }
        veterinario.realizarConsulta(animal);
        const consulta = new Consulta(animal, veterinario, data);
        this.consultas.push(consulta);
        return consulta;
    }
}