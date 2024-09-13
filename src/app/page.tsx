import { HeaderPokemon } from "@/_components/header";
import { PokemonKanto } from "@/_components/pokemon-kanto";
import { Flex } from "@chakra-ui/react";

export default async function Home() {
  return (
    <>
      <HeaderPokemon />
      <Flex p={8} as="div" bgColor="#F2F2F2">
        <PokemonKanto />
      </Flex>
    </>
  );
}
