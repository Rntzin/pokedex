"use client";

import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { getPokemonList, Pokemon } from "@/lib/pokemonAPI";
import { FilterPokemon } from "./filter";
import { useEffect, useState } from "react";
import { PokemonCard } from "./pokemon-card";

export function PokemonKanto() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadMorePokemons = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newPokemons = await getPokemonList(loadedCount + 9);
      if (newPokemons.length === loadedCount) {
        setHasMore(false);
      } else {
        setPokemons(newPokemons);
        setLoadedCount((prevCount) => prevCount + 9);
      }
    } catch (error) {
      console.error("Erro ao carregar os Pokémon:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMorePokemons();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMorePokemons();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadedCount, loading]);

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
                  classification={pokemon.classification}
                  resistant={pokemon.resistant}
                  weaknesses={pokemon.weaknesses}
                />
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
