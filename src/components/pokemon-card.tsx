import { FC } from "react";
import {
  Link,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Flex,
  Box,
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

const typeIcons: Record<string, JSX.Element> = {
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

const typeColors: Record<string, string> = {
  normal: "gray.500",
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
  types: string[];
  url: string;
  id: number;
}

export const PokemonCard: FC<PokemonCardProps> = ({
  name,
  types,
  url,
  id,
  image,
}) => {
  const formattedId = `N°${id.toString().padStart(3, "0")}`;
  return (
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
          {name}
        </Text>
      </CardHeader>
      <CardBody>
        <Image
          src={image}
          alt={name}
          boxSize="100px"
          objectFit="cover"
          mx="auto"
          _hover={{ transform: "scale(1.1)" }}
          transition="transform 0.2s"
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
              <Box color="white">{type}</Box>
            </Box>
          );
        })}
      </Flex>
      <CardFooter>
        <Link
          href={name}
          color="white"
          textAlign="center"
          w="100%"
          bgColor="gray.500"
          mx={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50px"
          p="2"
          fontWeight="semibold"
          textDecoration="none"
        >
          Ver Detalhes
        </Link>
      </CardFooter>
    </Card>
  );
};
