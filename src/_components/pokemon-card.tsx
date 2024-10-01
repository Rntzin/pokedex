"use client";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Image,
  Flex,
  Box,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";

import { TbPokeball } from "react-icons/tb";

import { PokemonModal } from "./pokemon-modal";
import {
  capitalizeEachWord,
  formatId,
  getIconByType,
  PokemonTypes,
  typeColors,
} from "@/_commons/utils";
import { FaStar } from "react-icons/fa";

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[][];
  id: string;
  number: string;
  weight: string;
  height: string;
  classification: string;
  resistant: string[];
  weaknesses: string[];
}

export const PokemonCard = ({
  name,
  image,
  types,
  weight,
  height,
  number,
  classification,
  resistant,
  weaknesses,
}: PokemonCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const flatTypes = types.flat();
  const flatResistant = resistant.flat();
  const flatWeaknesses = weaknesses.flat();

  return (
    <>
      <Card
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
        maxW="360px"
        w="300px"
        onClick={onOpen}
        _hover={{ cursor: "pointer" }}
        p={4}
      >
        <CardHeader fontSize="sm" textAlign="center">
          <Text
            as="h2"
            fontWeight="semibold"
            textTransform="capitalize"
            color="gray.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="5px"
          >
            <TbPokeball color="gray.600" />
            {formatId(number)}
          </Text>
          <Text
            as="h1"
            fontSize="xl"
            fontWeight="semibold"
            textTransform="capitalize"
            color="gray.700"
          >
            {capitalizeEachWord(name)}
          </Text>
        </CardHeader>

        <CardBody
          as="button"
          position="relative"
          cursor="default"
          onClick={onOpen}
        >
          <Image
            position="relative"
            src={image}
            alt={name}
            aspectRatio="3/2"
            objectFit="contain"
            mx="auto"
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
            zIndex={2}
            cursor="pointer"
            w="80%"
          />
        </CardBody>

        <Flex mt={3} justify="center" wrap="wrap">
          {flatTypes.map((type, index) => {
            const normalizedType = type.toLowerCase();
            const color = typeColors[normalizedType] || "gray.500";
            const icon = getIconByType(type as PokemonTypes) || FaStar;

            return (
              <Box
                key={index}
                mx={2}
                bgColor={color}
                p={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="2"
                maxW="200px"
                w="105px"
                borderRadius="9px"
                fontSize="medium"
                fontWeight="bold"
              >
                <Box
                  bgColor="white"
                  border="white"
                  borderRadius="50%"
                  p="3px"
                  color={color}
                >
                  <Icon w="20px" as={icon} />
                </Box>
                <Box color="white">{capitalizeEachWord(type)}</Box>
              </Box>
            );
          })}
        </Flex>
      </Card>

      <PokemonModal
        isOpen={isOpen}
        onClose={onClose}
        id={formatId(number)}
        name={name}
        types={flatTypes}
        classification={classification}
        flatResistant={flatResistant}
        flatWeaknesses={flatWeaknesses}
        height={height}
        weight={weight}
        image={image}
      />
    </>
  );
};
