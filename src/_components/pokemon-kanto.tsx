"use client";

import { Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getPokemonList, Pokemon } from "@/lib/pokemonAPI";
import { FilterPokemon } from "./filter";
import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemon-card";

interface PokemonKantoProps {
  pokemonDetails: Pokemon[];
}

export function PokemonKanto({ pokemonDetails }: PokemonKantoProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>(pokemonDetails);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setLoading(true);
        const data = await getPokemonList(10);
        setPokemons(data);
      } catch (err) {
        setError("Erro ao buscar a lista de Pokémons");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) {
    return <Spinner color="blue.500" />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

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
            {pokemons.map((pokemon) => {
              return (
                <PokemonCard
                  id={pokemon.id}
                  key={pokemon.name}
                  number={pokemon.number}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={[pokemon.types]}
                  height={pokemon.height.maximum}
                  weight={pokemon.weight.maximum}
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
