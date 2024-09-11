"use client";
import { FC } from "react";
import {
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaFire,
  FaWater,
  FaLeaf,
  FaBolt,
  FaSnowflake,
  FaFistRaised,
  FaSkull,
  FaMountain,
  FaFeather,
  FaBrain,
  FaBug,
  FaGem,
  FaGhost,
  FaDragon,
  FaMoon,
  FaShieldAlt,
  FaMagic,
  FaStar,
} from "react-icons/fa";

export const typeIcons: Record<string, JSX.Element> = {
  normal: <FaStar />,
  fire: <FaFire />,
  water: <FaWater />,
  grass: <FaLeaf />,
  electric: <FaBolt />,
  ice: <FaSnowflake />,
  fighting: <FaFistRaised />,
  poison: <FaSkull />,
  ground: <FaMountain />,
  flying: <FaFeather />,
  psychic: <FaBrain />,
  bug: <FaBug />,
  rock: <FaGem />,
  ghost: <FaGhost />,
  dragon: <FaDragon />,
  dark: <FaMoon />,
  steel: <FaShieldAlt />,
  fairy: <FaMagic />,
};

export const typeColors: Record<string, string> = {
  normal: "#919AA2",
  fire: "red.500",
  water: "blue.500",
  grass: "green.500",
  electric: "yellow.500",
  ice: "cyan.500",
  fighting: "orange.500",
  poison: "purple.500",
  ground: "#D97845",
  flying: "blue.300",
  psychic: "pink.500",
  bug: "#91C12F",
  rock: "gray.600",
  ghost: "purple.600",
  dragon: "#0B6DC3",
  dark: "black",
  steel: "silver",
  fairy: "pink.300",
};

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[][];
  url: string;
  id: number;
  weight: number;
  height: number;
  moves: string[];
  weaknesses: string[];
}

export const PokemonCard: FC<PokemonCardProps> = ({
  id,
  name,
  image,
  types,
  height,
  weight,
  weaknesses,
  moves,
}) => {
  const capitalizeEachWord = (up: string): string => {
    return up
      .toLowerCase()
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formattedId = `N°${id.toString().padStart(3, "0")}`;
  const [type1] = types[0];
  const backgroundColor = typeColors[type1] || "black";
  return (
    <>
      <Card
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        boxShadow="md"
        maxW="360px"
      >
        <CardHeader fontSize="sm" textAlign="center">
          <Text
            as="h2"
            fontWeight="semibold"
            textTransform="capitalize"
            color="gray.600"
          >
            {formattedId}
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
          <Box
            position="absolute"
            top="50%"
            left="50%"
            width="60%"
            height="60%"
            zIndex={0}
            display="flex"
            alignItems="center"
            justifyContent="center"
            pointerEvents="none"
            opacity="0.2"
            transform="translate(-50%, -50%)"
            borderRadius="50%"
            p={50}
            bg={backgroundColor}
          />
          <Image
            position="relative"
            src={image}
            alt={name}
            boxSize="100px"
            objectFit="cover"
            mx="auto"
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
            zIndex={2}
            cursor="pointer"
            w="80%"
            h="80%"
          />
        </CardBody>

        <Flex mt={3} justify="center" wrap="wrap">
          {types[0].map((type, index) => {
            const normalizedType = type;
            const icon = typeIcons[normalizedType];
            const color = typeColors[normalizedType] || "gray.500";

            return (
              <Box
                key={index}
                mx={2}
                bgColor={color}
                p={2}
                flex="1"
                display="flex"
                alignItems="center"
                justifyContent="center"
                maxW="150px"
                gap="2"
                borderRadius="90px"
              >
                <Box
                  bgColor="white"
                  border="white"
                  borderRadius="50%"
                  p="3px"
                  color={color}
                >
                  {icon}
                </Box>
                <Box color="white">{capitalizeEachWord(type)}</Box>
              </Box>
            );
          })}
        </Flex>

        <CardFooter>
          <Button onClick={onOpen} w="100%" colorScheme="teal">
            Show Details
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{capitalizeEachWord(name)} Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={name} boxSize="150px" mx="auto" mb={4} />

            <Text fontSize="lg" fontWeight="bold" textTransform="capitalize">
              {capitalizeEachWord(name)} ({formattedId})
            </Text>

            <Text mt={4}>
              <Text as="strong">Type:</Text>{" "}
              {capitalizeEachWord(types.join(", "))}
            </Text>

            <Text mt={4}>
              <Text as="strong">Weight:</Text> {weight / 10} kg{" "}
            </Text>

            <Text mt={4}>
              <Text as="strong">Height:</Text> {height / 10} m{" "}
            </Text>

            <Text mt={4}>
              <Text as="strong">Moves:</Text>{" "}
              {capitalizeEachWord(moves.slice(0, 5).join(", "))}
            </Text>

            <Text mt={4}>
              <Text as="strong">Weaknesses:</Text>{" "}
              {capitalizeEachWord(weaknesses.join(", "))}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
