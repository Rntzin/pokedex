import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface PokemonStatsProps {
  icon: IconType;
  label: string;
  value: string;
}

export const PokemonStats = ({ icon, label, value }: PokemonStatsProps) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        gap={1.5}
        color="gray.500"
        mt={3}
        mb={1.5}
      >
        <Icon as={icon} />
        <Text as="h2" fontSize="x-small">
          {label}
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
        {value}
      </Flex>
    </Box>
  );
};
