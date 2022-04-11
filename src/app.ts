import { PokemonPrototype } from "./interfaces/PokemonPrototype";
import { Pokemon } from "./factory/pokemon";

const pokemon = new Pokemon()

const chikorita: PokemonPrototype = pokemon.createPokemon('chikorita')

console.log(chikorita)

const chikoritaClone: PokemonPrototype = chikorita.clone()
chikoritaClone.attacks.push('razor leaf')
console.log(chikoritaClone)