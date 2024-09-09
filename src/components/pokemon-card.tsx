import { Link, Text } from "@chakra-ui/react";

interface PokemonCardProps {
  //   id: number;
  name: string;
  //   height: number;
  //   weight: number;
  //   sprites: {
  //     front_default: string;
  //   };
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link href={name} border="transparent" flexDirection="column">
      <Text
        as="h2"
        fontSize="2xl"
        fontWeight="semibold"
        textAlign="center"
        m="3"
      >
        {name}
      </Text>
    </Link>
  );
}
