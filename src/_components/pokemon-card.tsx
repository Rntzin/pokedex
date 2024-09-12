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

import { TbPokeball } from "react-icons/tb";
import { RiWeightLine } from "react-icons/ri";
import { AiOutlineColumnHeight } from "react-icons/ai";

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
  id: string;
  number: string;
  weight: string;
  height: string;
  classification: string;
  resistant: string[];
  weaknesses: string[];
}

export const PokemonCard: FC<PokemonCardProps> = ({
  name,
  image,
  types,
  weight,
  height,
  number,
  classification,
  resistant,
  weaknesses,
}) => {
  const capitalizeEachWord = (up: string): string => {
    return up
      .toLowerCase()
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formattedId = `N°${number.toString().padStart(3, "0")}`;

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
            const icon = typeIcons[normalizedType] || <FaStar />;

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
                w="100px"
                borderRadius="90px"
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
                  {icon}
                </Box>
                <Box color="white">{capitalizeEachWord(type)}</Box>
              </Box>
            );
          })}
        </Flex>

        <CardFooter alignItems="center" justifyContent="center">
          <Button onClick={onOpen} w="68%" colorScheme="teal">
            Show Details
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader gap="2">
            <Box>
              <Flex alignItems="center" justify="center" flexDirection="column">
                {capitalizeEachWord(name)}
                <Box
                  as="h2"
                  fontSize="sm"
                  textTransform="capitalize"
                  color="gray.600"
                >
                  {formattedId}
                </Box>
                <Flex mt={3} justify="center" wrap="wrap">
                  {flatTypes.map((type, index) => {
                    const normalizedType = type.toLowerCase();
                    const color = typeColors[normalizedType] || "gray.500";
                    const icon = typeIcons[normalizedType] || <FaStar />;

                    return (
                      <Box
                        key={index}
                        mx={2}
                        p={1}
                        bgColor={color}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        gap="2"
                        maxW="200px"
                        w="100px"
                        borderRadius="8px"
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
                          {icon}
                        </Box>
                        <Box color="white">{capitalizeEachWord(type)}</Box>
                      </Box>
                    );
                  })}
                </Flex>
              </Flex>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent="center" alignItems="center">
              <Image src={image} alt={name} mb={4} objectFit="contain" />
            </Flex>
            <Flex gap={10} alignItems="center" justifyContent="center">
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  gap={1.5}
                  color="gray.500"
                  mt={3}
                  mb={1.5}
                >
                  <RiWeightLine />
                  <Text as="h2" fontSize="x-small">
                    WEIGHT:
                  </Text>
                </Flex>
                <Flex
                  px="5"
                  py="1"
                  border="1px solid"
                  borderRadius="8px"
                  borderColor="gray.500"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="medium"
                  color="gray.600"
                >
                  {weight}
                </Flex>
              </Box>
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  gap={1.5}
                  color="gray.500"
                  mt={3}
                  mb={1.5}
                >
                  <AiOutlineColumnHeight />
                  <Text as="h2" fontSize="x-small">
                    HEIGHT:
                  </Text>
                </Flex>
                <Flex
                  px="5"
                  py="1"
                  border="1px solid"
                  borderRadius="8px"
                  borderColor="gray.500"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="medium"
                  color="gray.600"
                >
                  {height}
                </Flex>
              </Box>
            </Flex>
            <Flex gap={10} alignItems="center" justifyContent="center">
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  gap={1.5}
                  color="gray.500"
                  mt={3}
                  mb={1.5}
                >
                  <TbPokeball />
                  <Text as="h2" fontSize="x-small">
                    CATEGORY:
                  </Text>
                </Flex>
                <Flex
                  px="5"
                  py="1"
                  border="1px solid"
                  borderRadius="8px"
                  borderColor="gray.500"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="medium"
                  color="gray.600"
                >
                  {classification}
                </Flex>
              </Box>
            </Flex>
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
                Weaknesses
              </Flex>
              <Flex
                alignContent="center"
                justifyContent="center"
                flexWrap="wrap"
                my={3}
              >
                {flatWeaknesses.map((weaknesses, index) => {
                  const normalizedWeaknesses = weaknesses.toLowerCase();
                  const color = typeColors[normalizedWeaknesses] || "gray.500";
                  const icon = typeIcons[normalizedWeaknesses] || <FaStar />;

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
                        {icon}
                      </Flex>
                      <Flex color="white">
                        {capitalizeEachWord(weaknesses)}
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Box>
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
                Registrant
              </Flex>
              <Flex
                alignContent="center"
                justifyContent="center"
                flexWrap="wrap"
                my={3}
              >
                {flatResistant.map((resistant, index) => {
                  const normalizedResistant = resistant.toLowerCase();
                  const color = typeColors[normalizedResistant] || "gray.500";
                  const icon = typeIcons[normalizedResistant] || <FaStar />;

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
                        {icon}
                      </Flex>
                      <Flex color="white">{capitalizeEachWord(resistant)}</Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Box>
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
