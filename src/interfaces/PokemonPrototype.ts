export interface PokemonPrototype {
  level: number
  type: string
  attacks: string[]

  clone(): PokemonPrototype
}