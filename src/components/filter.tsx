"use client";

import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

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
      <Flex as="form" alignItems="center" gap="1.5">
        <InputGroup>
          <InputLeftElement color="gray.900">
            <CiSearch size="25px" onClick={handleTextClick} cursor="pointer" />
          </InputLeftElement>
          <Input
            type="text"
            color="gray.900"
            placeholder="Search Pokemon..."
            borderColor="gray.400"
            borderRadius="40px"
            sx={{
              "::placeholder": {
                color: "gray.400",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "sm",
              },
            }}
            ref={inputRef}
            pl="10"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
}
