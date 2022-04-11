import { PokemonPrototype } from "../interfaces/PokemonPrototype";

export class Chikorita implements PokemonPrototype {
  level: number;
  public type: string;
  public attacks: string[] = [];

  public learAttack(attackName: string): void {
    this.attacks.push(attackName)
  }

  clone(): PokemonPrototype {
    const chikorita = new Chikorita()
    chikorita.level = this.level
    chikorita.type = this.type
    chikorita.attacks = [... this.attacks]
    return chikorita
  }
  
}