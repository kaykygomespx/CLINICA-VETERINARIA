import { Animal } from "./Animal";
export class Gato extends Animal{

    constructor(
        nome: string,
        idade: number,
        tutor: string,
    )
    {
        super(nome,idade,tutor);
    }
    public emitirSom(): string {
        return this.getnome()+ "Diz miau!";
    }
    public descreverCuidados(): string {
        return  this.getidade()+"precisa de aranhador";
    }
}