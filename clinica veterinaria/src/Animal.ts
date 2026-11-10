export abstract class Animal{
private nome: string;
private idade: number;
private tutor: string;

constructor(
    nome: string,
    idade: number,
    tutor: string,
)
{
    this.nome = nome ;
    this.idade = idade;
    this.tutor = tutor
}

public getnome (): string{
    return this.nome;
}
public getidade() : number{
    return this.idade;
}
public gettutor(): string{
    return this.tutor;
}
public setnome(nome: string): void{
    this.nome = nome;
}
public setidade(idade: number): void {
    idade = idade;
}
public settutor(tutor: string): void{
    tutor = tutor;
}
public abstract descreverCuidados(): string;
public abstract emitirSom(): string;
 
public exibirDados(): void{
    console.log("-------------------");
    console.log("nome:"+ this.nome);
    console.log("idade:+ this.idade");
    console.log("tutor:" + this.tutor);
    console.log("-------------------");
}


}