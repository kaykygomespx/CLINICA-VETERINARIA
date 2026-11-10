import { Animal } from "./Animal";
import { Veterinario } from "./Veterinario";
export declare class Consulta {
    private animal;
    private veterinario;
    private data;
    constructor(animal: Animal, veterinario: Veterinario, data: Date);
    getanimal(): Animal;
    getveterinario(): Veterinario;
    getdata(): Date;
    setdata(data: Date): void;
    exibirDados(): void;
}
//# sourceMappingURL=Consulta.d.ts.map