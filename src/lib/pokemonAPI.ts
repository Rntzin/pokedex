const POKEMON_API = "http://pokeapi.co/api/v2/";

export async function getPokemonList() {
  const res = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
  const data = await res.json();
  return data.results;
}
