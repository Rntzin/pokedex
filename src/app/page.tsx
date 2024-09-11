import { HeaderPokemon } from "@/_components/header";
import { PokemonKanto } from "@/_components/pokemon-kanto";
import { getPokemonList } from "@/lib/pokemonAPI";
import { Flex } from "@chakra-ui/react";

export default async function Home() {
  const { results: pokemonDetails } = await getPokemonList();

  return (
    <>
      <HeaderPokemon />
      <Flex as="div" bgColor="#F2F2F2">
        <PokemonKanto pokemonDetails={pokemonDetails} />
      </Flex>
    </>
  );
}
