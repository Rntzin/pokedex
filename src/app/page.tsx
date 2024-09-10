/* eslint-disable jsx-a11y/alt-text */

import { HeaderPokemon } from "@/components/header";
import { PokemonKanto } from "@/components/pokemon-kanto";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <>
      <HeaderPokemon />
      <PokemonKanto pokemonList={pokemonList} />
    </>
  );
}
