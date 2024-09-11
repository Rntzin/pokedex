/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { PokemonCard } from "./pokemon-card";
import { getPokemonList, PokemonDetail } from "@/lib/pokemonAPI";
import { FilterPokemon } from "./filter";
import { useState, useEffect } from "react";

interface PokemonKantoProps {
  pokemonDetails: PokemonDetail[];
}

export function PokemonKanto({ pokemonDetails }: PokemonKantoProps) {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>(pokemonDetails);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const loadMorePokemons = async () => {
      if (loading) return;

      setLoading(true);
      const limit = 10;
      const { results } = await getPokemonList(limit, offset);
      setPokemons((prev) => [...prev, ...results]);
      setLoading(false);
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        loading
      ) {
        return;
      }
      setOffset((prev) => prev + 10); // Incrementa o offset para carregar mais dados
    };

    window.addEventListener("scroll", handleScroll);

    // Carrega mais Pokémon quando o componente é montado
    loadMorePokemons();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, offset]);
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
            {pokemonDetails.map((pokemon: any) => {
              return (
                <PokemonCard
                  id={pokemon.id}
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  image={pokemon.image}
                  types={[pokemon.types]}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  weaknesses={pokemon.weaknesses}
                  moves={pokemon.moves}
                />
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const pokemonDetails = await getPokemonList();
  return {
    props: { pokemonDetails },
  };
};
