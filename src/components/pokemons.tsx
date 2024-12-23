import axios from "axios";
import { Suspense } from "react";
import PokeCard from "./poke-card";
import { Skeleton } from "./ui/skeleton";

export default async function Pokemons() {
  const { data } = await axios.get<{
    results: Array<{ url: string; name: string }>;
  }>("https://pokeapi.co/api/v2/pokemon", {
    params: { limit: 150 },
  });
  const pokemons = data.results;
  return (
    <div className="grid grid-cols-4 gap-2">
      {pokemons.map(async (pokemon) => {
        return (
          <Suspense key={pokemon.url} fallback={<Skeleton />}>
            <PokeCard
              url={pokemon.url}
              id={Number(pokemon.url.split("/")[6])}
              name={pokemon.name}
            />
          </Suspense>
        );
      })}
    </div>
  );
}
