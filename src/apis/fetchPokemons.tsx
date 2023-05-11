//https://unpkg.com/pokemons@1.1.0/pokemons.json

import { Pokemon } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json'); 

  if(!response.ok){
    throw new Error("Failed to fectch pokemons")
  }
  const results = await response.json();
  console.log(results);

  const pokemons = results.results.map ((pokemon: any) => ({
    name:pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(pokemon.name.toLowerCase())}.gif`
  }));


  const uniquePokemons = pokemons.filter(
    (pokemon:any, index: number) => pokemons.findIndex((p: any) => p.id === pokemon.id) === index
  ); 

  return uniquePokemons;

} 