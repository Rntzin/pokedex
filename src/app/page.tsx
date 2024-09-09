/* eslint-disable jsx-a11y/alt-text */

import { PokemonKanto } from "@/components/pokemon-kanto";
import { Flex, Text } from "@chakra-ui/react";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  return (
    <>
      <Flex
        as="div"
        minH="screen"
        flexDirection="column"
        alignItems="center"
        justify="space-between"
        p="16"
      >
        <Text as="h3" fontSize="2xl" fontWeight="bold" mb="10">
          Pokedex
        </Text>
        <Flex
          as="div"
          gap="10"
          w="100%"
          justify="space-between"
          alignItems="center"
          minH="screen"
          fontFamily="monospace"
          flexDirection="column"
        >
          <PokemonKanto pokemonList={pokemonList} />
        </Flex>
      </Flex>
    </>
  );
}
