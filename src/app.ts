import { PokemonPrototype } from "./interfaces/PokemonPrototype";
import { Pokemon } from "./models/pokemon";

const pokemon = new Pokemon()

const chikorita = pokemon.createPokemon('chikorita')

console.log(chikorita)

const chikoritaClone = chikorita.clone()
chikoritaClone.attacks.push('razor leaf')