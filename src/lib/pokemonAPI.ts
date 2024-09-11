export async function getPokemonList(limit: number = 151) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const detailRes = await fetch(pokemon.url);
      const detailData = await detailRes.json();
      const types = detailData.types.map(
        (type: { type: { name: string; url: string } }) => type.type.name
      );
      const weaknesses = await Promise.all(
        detailData.types.map(async (type: { type: { url: string } }) => {
          const typeRes = await fetch(type.type.url);
          const typeData = await typeRes.json();
          return typeData.damage_relations.double_damage_from.map(
            (weakness: { name: string }) => weakness.name
          );
        })
      );
      return {
        id: detailData.id,
        name: detailData.name,
        image: detailData.sprites.front_default,
        url: pokemon.url,
        types: types,
        weight: detailData.weight,
        height: detailData.height,
        moves: detailData.moves.map(
          (move: { move: { name: string } }) => move.move.name
        ),
        weaknesses: weaknesses.flat(),
      };
    })
  );

  return {
    ...data,
    results: pokemonDetails,
  };
}
