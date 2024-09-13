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

export const capitalizeEachWord = (up: string): string => {
  return String(up)
    .toLowerCase()
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ");
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

export type PokemonTypes =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export const getIconByType = (type: PokemonTypes) => {
  return typeIcons[type];
};

export const typeIcons = {
  normal: FaStar,
  fire: FaFire,
  water: FaWater,
  grass: FaLeaf,
  electric: FaBolt,
  ice: FaSnowflake,
  fighting: FaFistRaised,
  poison: FaSkull,
  ground: FaMountain,
  flying: FaFeather,
  psychic: FaBrain,
  bug: FaBug,
  rock: FaGem,
  ghost: FaGhost,
  dragon: FaDragon,
  dark: FaMoon,
  steel: FaShieldAlt,
  fairy: FaMagic,
};

export const formatId = (id: string) => `N°${id.toString().padStart(3, "0")}`;
