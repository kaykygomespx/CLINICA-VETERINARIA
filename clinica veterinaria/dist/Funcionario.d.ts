export declare abstract class funcionario {
    private nome;
    private matricula;
    private salario;
    constructor(nome: string, matricula: number, salario: number);
    getnome(): string;
    getmatricula(): number;
    getsalario(): number;
    setnome(nome: string): void;
    setmatricula(matricula: number): void;
    setsalario(salario: number): void;
    alterarSalario(novoSalario: number): void;
    abstract calcularBonus(): number;
    exibirDados(): void;
}
//# sourceMappingURL=Funcionario.d.ts.map