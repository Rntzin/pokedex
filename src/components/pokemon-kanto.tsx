/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PokemonCard } from "./pokemon-card";

const schema = z.object({
  pokemon: z
    .string()
    .nonempty(
      "Este Pokemon não existe, certifique que escreveu o nome corretamente"
    ),
});

type FormData = z.infer<typeof schema>;

interface PokemonGridProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pokemonList: any;
}

export function PokemonKanto({ pokemonList }: PokemonGridProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  console.log(pokemonList);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <Flex as="div" flexDirection="column" flex="1" maxW="100%">
        <Text
          as="h3"
          fontSize="10sm"
          fontWeight="bold"
          py="2"
          textAlign="center"
        >
          Digite o nome do Pokemon!
        </Text>
        <Flex
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          display="grid"
          alignItems="center"
          gap="1.5"
        >
          <Input
            type="text"
            id="pokemonName"
            placeholder="Região Kanto"
            {...register("pokemon")}
          />
          <Button color="white" bgColor="gray.700" type="submit">
            Procurar
          </Button>
          {errors.pokemon && (
            <Text as="span" textAlign="center" w="250px">
              {errors.pokemon.message}
            </Text>
          )}
        </Flex>
      </Flex>
      <Flex
        as="div"
        display="flex"
        textAlign="center"
        textDecoration="none"
        flexDirection="column"
      >
        <Text as="h3" fontSize="2xl" textAlign="center">
          Coleção de Pokemon
        </Text>
        <Flex as="div">
          {pokemonList.map((pokemon: any) => {
            return <PokemonCard key={pokemon.id} name={pokemon.name} />;
          })}
        </Flex>
      </Flex>
    </>
  );
}
