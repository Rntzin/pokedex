/* eslint-disable jsx-a11y/alt-text */

import { HeaderPokemon } from "@/components/header";
import { PokemonKanto } from "@/components/pokemon-kanto";
import { getPokemonList } from "@/lib/pokemonAPI";
import { Flex } from "@chakra-ui/react";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <>
      <HeaderPokemon />
      <Flex as="div" bgColor="#F2F2F2">
        <PokemonKanto pokemonList={pokemonList} />
      </Flex>
    </>
  );
}
