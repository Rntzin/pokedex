import axios from "axios";

export interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  url: string;
  types: string[][];
  weight: number;
  height: number;
  moves: string[];
  weaknesses: string[];
}

export const getPokemonList = async (
  limit: number = 10,
  offset: number = 0
): Promise<{ results: PokemonDetail[] }> => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const pokemonDetails: PokemonDetail[] = [];
  for (const pokemon of data.results) {
    const { data: detailData } = await axios.get(pokemon.url);

    const types = detailData.types.map(
      (type: { type: { name: string } }) => type.type.name
    );
    const weaknesses: string[] = [];

    for (const type of detailData.types) {
      const { data: typeData } = await axios.get(type.type.url);
      const typeWeaknesses = typeData.damage_relations.double_damage_from.map(
        (weakness: { name: string }) => weakness.name
      );
      weaknesses.push(...typeWeaknesses);
    }

    pokemonDetails.push({
      id: detailData.id,
      name: detailData.name,
      image: detailData.sprites.front_default,
      url: pokemon.url,
      types,
      weight: detailData.weight,
      height: detailData.height,
      moves: detailData.moves.map(
        (move: { move: { name: string } }) => move.move.name
      ),
      weaknesses,
    });
  }

  return { results: pokemonDetails };
};
