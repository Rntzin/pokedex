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
} from "react-icons/fa";

const typeIcons: Record<string, JSX.Element> = {
  normal: <FaFeather />,
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
        {types.map((type) => (
          <Box key={type} mx={2} color="gray.500">
            {typeIcons[type] || typeIcons[type[0 && 1]]}
          </Box>
        ))}
      </Flex>
      <CardFooter>
        <Link
          href={url}
          color="blue.500"
          textAlign="center"
          w="100%"
          mt={2}
          display="block"
        >
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  );
};
