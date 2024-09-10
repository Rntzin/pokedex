export async function getPokemonList(limit: number = 151) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const detailRes = await fetch(pokemon.url);
      const detailData = await detailRes.json();
      return {
        id: detailData.id,
        name: detailData.name,
        image: detailData.sprites.front_default,
        url: pokemon.url,
        types: detailData.types.map(
          (type: { type: { name: string } }) => type.type.name
        ),
      };
    })
  );

  return {
    ...data,
    results: pokemonDetails,
  };
}
