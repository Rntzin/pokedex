"use client";
import { capitalizeEachWord } from "@/_commons/utils";
import {
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
} from "@chakra-ui/react";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { RiWeightLine } from "react-icons/ri";
import { TbPokeball } from "react-icons/tb";
import { PokemonTags } from "./pokemon-tags";
import { PokemonStats } from "./pokemon-stats";

interface PokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  id: string;
  types: string[];
  weight: string;
  height: string;
  image: string;
  classification: string;
  flatWeaknesses: string[];
  flatResistant: string[];
}

export const PokemonModal = ({
  isOpen,
  onClose,
  name,
  id,
  weight,
  height,
  image,
  classification,
  flatWeaknesses,
  flatResistant,
}: PokemonModalProps) => {
  return (
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
                {id}
              </Box>
            </Flex>
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="center" alignItems="center">
            <Image src={image} alt={name} mb={4} objectFit="contain" />
          </Flex>
          <Flex gap={10} alignItems="center" justifyContent="center">
            <PokemonStats label="WEIGHT:" value={weight} icon={RiWeightLine} />
            <PokemonStats
              label="HEIGHT:"
              value={height}
              icon={AiOutlineColumnHeight}
            />
          </Flex>
          <Flex gap={10} alignItems="center" justifyContent="center">
            <PokemonStats
              label="CATEGORY:"
              value={classification}
              icon={TbPokeball}
            />
          </Flex>
          <PokemonTags title="Weaknesses" tags={flatWeaknesses} />
          <PokemonTags title="Registrant" tags={flatResistant} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
