import Pokemons from "@/components/pokemons";

export default async function Home() {
  return (
    <div>
      <div className="font-bold p-5">
        <h1>Welcome to the Pokedex!</h1>
      </div>
      <div className="p-2">
        <Pokemons />
      </div>
    </div>
  );
}
