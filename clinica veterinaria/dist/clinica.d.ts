import { Animal } from "./Animal";
import { funcionario } from "./Funcionario";
import { Veterinario } from "./Veterinario";
import { Consulta } from "./Consulta";
export declare class Clinica {
    private nome;
    private funcionarios;
    private animais;
    private consultas;
    constructor(nome: string);
    getnome(): string;
    getfuncionarios(): funcionario[];
    getanimais(): Animal[];
    getconsultas(): Consulta[];
    setnome(nome: string): void;
    cadastrarAnimal(animal: Animal): void;
    contratarFuncionario(funcionario: funcionario): void;
    registrarConsulta(animal: Animal, veterinario: Veterinario, data: Date): Consulta;
}
//# sourceMappingURL=Clinica.d.ts.map