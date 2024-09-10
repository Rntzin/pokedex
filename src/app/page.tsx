/* eslint-disable jsx-a11y/alt-text */

import { PokemonKanto } from "@/components/pokemon-kanto";
import { Flex, Text } from "@chakra-ui/react";
import { getPokemonList } from "@/lib/pokemonAPI";
import { FilterPokemon } from "@/components/filter";

export default async function Home() {
  const pokemonList = await getPokemonList();
  return (
    <>
      <Flex
        as="header"
        h="10px"
        p="10"
        alignItems="center"
        justify="space-between"
        bg="red.500"
      >
        <Text as="a" fontSize="4xl" color="gray.100" href="/">
          Pokedex
        </Text>
        <FilterPokemon />
      </Flex>
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
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="semibold"
          textAlign="center"
          mt="10"
          fontFamily="mono"
          color="gray.500"
        >
          Coleção de Pokemon
        </Text>
        <PokemonKanto pokemonList={pokemonList} />
      </Flex>
    </>
  );
}
