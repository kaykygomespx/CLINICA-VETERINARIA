import { Animal } from "./Animal";
export class Aves extends Animal{

constructor(
    nome: string,
    idade: number,
    tutor: string,
)
{
    super(nome,idade,tutor)
}
public emitirSom(): string {
    return this.getnome()+"canta: piu piu!";
}
public descreverCuidados(): string {
    return this.getnome()+"precisa de gaiola";
}

}