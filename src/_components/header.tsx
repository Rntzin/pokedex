"use client";

import { Flex, Text } from "@chakra-ui/react";

export async function HeaderPokemon() {
  return (
    <>
      <Flex
        as="header"
        h="10px"
        p="10"
        alignItems="center"
        justify="space-between"
        bg="teal"
      >
        <Text as="a" fontSize="4xl" color="gray.100" href="/">
          Pokedex
        </Text>
      </Flex>
    </>
  );
}
