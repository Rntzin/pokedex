/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Flex, SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PokemonCard } from "./pokemon-card";
import { getPokemonList } from "@/lib/pokemonAPI";
interface PokemonGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pokemonList: any;
}

export function PokemonKanto({ pokemonList }: PokemonGridProps) {
  return (
    <>
      <Flex
        as="div"
        display="flex"
        textAlign="center"
        textDecoration="none"
        flexDirection="column"
      >
        <SimpleGrid columns={[1, 2, 3]} spacing={6}>
          {pokemonList.results.map((pokemon: any) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                image={pokemon.image}
                types={[pokemon.types]}
              />
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemons = await getPokemonList();
  return {
    props: { pokemons },
  };
};
