import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";

export class Consulta {
    private animal: Animal;
    private veterinario: Veterinario;
    private data: Date;

    constructor(
        animal: Animal,
        veterinario: Veterinario,
        data: Date,
    )
    {
        if (!animal || !veterinario) {
            throw new Error("Consulta exige um animal e um veterinário.");
        }
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
    }

    public getanimal(): Animal {
        return this.animal;
    }
    public getveterinario(): Veterinario {
        return this.veterinario;
    }
    public getdata(): Date {
        return this.data;
    }

    public setdata(data: Date): void {
        this.data = data;
    }

    public exibirDados(): void {
        console.log("---------------------------");
        console.log("animal: " + this.animal.getnome());
        console.log("veterinario: " + this.veterinario.getnome());
        console.log("data: " + this.data.toLocaleDateString("pt-BR"));
        console.log("---------------------------");
    }
}