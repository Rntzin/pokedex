"use client";

import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getPokemonList, Pokemon } from "@/lib/pokemonAPI";
import { FilterPokemon } from "./filter";
import { useEffect, useState } from "react";

interface PokemonKantoProps {
  pokemonDetails: Pokemon[];
}

export function PokemonKanto({ pokemonDetails }: PokemonKantoProps) {
  const [data, setData] = useState<Pokemon[]>(pokemonDetails);
  useEffect(() => {
    setData(pokemonDetails || []);
  }, [pokemonDetails]);
  return (
    <>
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
          <FilterPokemon />
        </Text>
        <Flex
          as="div"
          display="flex"
          textAlign="center"
          textDecoration="none"
          flexDirection="column"
        >
          <SimpleGrid columns={[1, 2, 3]} spacing={6}>
            {data.map((pokemon) => {
              return (
                <h1 key={pokemon.id}>{pokemon.name}</h1>
                // <PokemonCard
                //   id={pokemon.id}
                //   key={pokemon.name}
                //   name={pokemon.name}
                //   url={pokemon.url}
                //   image={pokemon.image}
                //   types={[pokemon.types]}
                //   height={pokemon.height}
                //   weight={pokemon.weight}
                //   weaknesses={pokemon.weaknesses}
                //   moves={pokemon.moves}
                // />
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const pokemonDetails = await getPokemonList();
    return {
      props: { pokemonDetails },
    };
  } catch (error) {
    return {
      props: { pokemonDetails: [] },
    };
  }
};
