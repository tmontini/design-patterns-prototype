import { PokemonPrototype } from "../interfaces/PokemonPrototype";

export class Charmander implements PokemonPrototype {
  public level: number
  public type: string;
  public attacks: string[] = [];

  clone(): PokemonPrototype {
    const charmander = new Charmander()
    charmander.level = this.level
    charmander.type = this.type
    charmander.attacks = [... this.attacks]
    return charmander
  }
  
}