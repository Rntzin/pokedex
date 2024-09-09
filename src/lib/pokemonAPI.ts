export async function getPokemonList(limit: number = 151) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();

  // Obtenha detalhes dos Pokémon
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const detailRes = await fetch(pokemon.url);
      const detailData = await detailRes.json();
      return {
        name: detailData.name,
        image: detailData.sprites.front_default, // URL da imagem
        url: pokemon.url,
      };
    })
  );

  return {
    ...data,
    results: pokemonDetails,
  };
}
