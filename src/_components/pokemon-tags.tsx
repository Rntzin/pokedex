import {
  capitalizeEachWord,
  getIconByType,
  PokemonTypes,
  typeColors,
} from "@/_commons/utils";
import { Flex, Box, Icon } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export interface PokemonTagsProps {
  title: string;
  tags: string[];
}

export const PokemonTags = ({ title, tags }: PokemonTagsProps) => {
  return (
    <Box
      mt={3}
      border="1px solid"
      borderRadius="8px"
      borderColor="gray.200"
      bg="gray.100"
    >
      <Flex
        as="h2"
        fontSize="xl"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        borderRadius="8px"
        my="3"
        color="teal"
      >
        {title}
      </Flex>
      <Flex
        alignContent="center"
        justifyContent="center"
        flexWrap="wrap"
        my={3}
      >
        {tags.map((tag, index) => {
          const normalize = tag.toLowerCase();
          const color = typeColors[normalize] || "gray.500";
          const icon = getIconByType(normalize as PokemonTypes) || FaStar;

          return (
            <Flex
              key={index}
              mx={2}
              my={2}
              bgColor={color}
              p={2}
              alignContent="center"
              justifyContent="center"
              gap="2"
              maxW="200px"
              w="150px"
              borderRadius="8px"
              fontSize="medium"
              fontWeight="bold"
            >
              <Flex
                bgColor="white"
                border="white"
                borderRadius="50%"
                p="3px"
                color={color}
              >
                <Icon as={icon} />
              </Flex>
              <Flex color="white">{capitalizeEachWord(tag)}</Flex>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};
