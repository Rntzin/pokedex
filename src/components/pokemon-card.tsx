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
import { FaFire, FaWater, FaLeaf } from "react-icons/fa";

// Define um tipo para os tipos de Pokémon
type PokemonType = "fire" | "water" | "grass";

const typeIcons: Record<PokemonType, JSX.Element> = {
  fire: <FaFire />,
  water: <FaWater />,
  grass: <FaLeaf />,
};

interface PokemonCardProps {
  name: string;
  image: string;
  types: PokemonType[];
  url: string;
}

export const PokemonCard: FC<PokemonCardProps> = ({
  name,
  types,
  url,
  image,
}) => {
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
          boxSize="150px"
          objectFit="cover"
          mx="auto"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.2)" }}
        />
        <Flex mt={3} justify="center" wrap="wrap">
          {types.map((type) => (
            <Box key={type} mx={1} color="gray.500">
              {typeIcons[type] || <Text as="span">{type}</Text>}
            </Box>
          ))}
        </Flex>
      </CardBody>
      <CardFooter>
        <Link href={url} color="gray.500" textAlign="center" w="100%">
          Ver detalhes
        </Link>
      </CardFooter>
    </Card>
  );
};
