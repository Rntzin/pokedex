"use client";

import { Flex } from "@chakra-ui/react";
import { SiPokemon } from "react-icons/si";

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
        <SiPokemon color="white" size="150px" />
      </Flex>
    </>
  );
}
