"use client";

import { Flex, Input, Text } from "@chakra-ui/react";
import { useRef } from "react";

export function FilterPokemon() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTextClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <Flex
      as="div"
      flex="1"
      maxW="480px"
      justify="flex-end"
      align="center"
      gap={2}
    >
      <Text
        as="h3"
        fontSize="medium"
        fontWeight="bold"
        textAlign="center"
        onClick={handleTextClick}
        cursor="default"
        color="gray.100"
      >
        Digite aqui:
      </Text>
      <Flex as="form" alignItems="center" gap="1.5">
        <Input
          type="text"
          color="white"
          placeholder="Região Kanto"
          sx={{
            "::placeholder": {
              color: "gray.100",
            },
          }}
          ref={inputRef}
        />
      </Flex>
    </Flex>
  );
}
