export declare abstract class Animal {
    private nome;
    private idade;
    private tutor;
    constructor(nome: string, idade: number, tutor: string);
    getnome(): string;
    getidade(): number;
    gettutor(): string;
    setnome(nome: string): void;
    setidade(idade: number): void;
    settutor(tutor: string): void;
    abstract descreverCuidados(): string;
    abstract emitirSom(): string;
    exibirDados(): void;
}
//# sourceMappingURL=Animal.d.ts.map