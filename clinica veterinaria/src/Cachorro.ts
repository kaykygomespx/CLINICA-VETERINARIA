import { Animal} from "./Animal";

export class Cachorro extends Animal {

constructor (
    nome: string,
    idade: number,
    tutor: string,
)
{
     super(nome,idade,tutor);
}
public emitirSom(): string {
    return this.getnome() + "diz: au au!";
}

public descreverCuidados(): string {
    return this.getnome()+ " precisa de passeio diário";
}

}

