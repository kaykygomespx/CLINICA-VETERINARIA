export abstract class funcionario{
    private nome: string;
    private matricula: number;
    private salario: number;

constructor(
    nome: string,
    matricula: number,
    salario: number,
)
{
    this.nome = nome;
    this.matricula = matricula;
    this.salario = 0;
    this.alterarSalario(salario);

}
public getnome():string{
    return this.nome;
}
public getmatricula():number{
    return this.matricula;
}
public getsalario():number{
    return this.salario;
}

public setnome(nome: string):void {
     this.nome = nome;
}
public setmatricula(matricula:number): void{
    this.matricula = matricula;
}
public setsalario(salario:number): void{
    this.salario = salario;
}

public alterarSalario(novoSalario: number): void {
        if (novoSalario <= 0) {
            throw new Error("Salário inválido: deve ser maior que zero.");
        }
        this.salario = novoSalario;
    }

    public abstract calcularBonus(): number;

    public exibirDados(): void{
        console.log("---------------------");
        console.log("nome:"+ this.nome);
        console.log("matricula:"+ this.matricula);
        console.log("this.salario:"+ this.salario);
        console.log("---------------------");
    }



} 