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
  ground: "brown.500",
  flying: "blue.300",
  psychic: "pink.500",
  bug: "lime.500",
  rock: "gray.600",
  ghost: "purple.600",
  dragon: "indigo.500",
  dark: "black",
  steel: "silver",
  fairy: "pink.300",
};

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
  url: string;
}

export const PokemonCard: FC<PokemonCardProps> = ({
  name,
  types,
  url,
  image,
}) => {
  console.log(types);
  return (
    <Card border="1px" borderColor="gray.200" borderRadius="md" boxShadow="md">
      <CardHeader textAlign="center">
        <Text fontWeight="bold" textTransform="capitalize">
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
            <Box key={index} mx={1} color={color}>
              {icon}
            </Box>
          );
        })}
      </Flex>
      <CardFooter>
        <Link href={url} color="blue.500" textAlign="center" w="100%" mt={2}>
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  );
};
