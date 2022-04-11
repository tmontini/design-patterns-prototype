import HashTable from "../interfaces/HashTable";
import { PokemonPrototype } from "../interfaces/PokemonPrototype";
import { Charmander } from "../models/charmander";
import { Chikorita } from "../models/chikorita";

export class Pokemon {
  public pokemons: HashTable<PokemonPrototype> = {}

  constructor() {
    this.init()
  }

  public createPokemon(name: string): PokemonPrototype {
    return this.pokemons[name].clone()
  }

  private init(): void {
    const chikorita = new Chikorita();
    chikorita.level = 5
    chikorita.type = 'Grass'
    chikorita.attacks.push('thunder wave')
    chikorita.attacks.push('rapid attack') 

    this.pokemons['chikorita'] = chikorita

    const charmander = new Charmander()
    charmander.level = 5
    charmander.type = 'fire'
    charmander.attacks.push('ember')
    charmander.attacks.push('tackle')

    this.pokemons['charmander'] = charmander
  }
}