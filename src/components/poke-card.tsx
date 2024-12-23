import axios from "axios";
import { ArrowUp, ChartBar, Zap } from "lucide-react";
import Image from "next/image";
import MovesDrawer from "./drawer";
import Evolutions from "./drawerEvo";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface IPokeCard {
  id: number;
  name: string;
  url: string;
}

export default async function PokeCard({ id, name, url }: IPokeCard) {
  const { data } = await axios.get(url);
  const abilities = data.abilities.map(
    (ability: { ability: { name: string } }) => ability.ability.name
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle>POKEMON - {name}</CardTitle>
        <CardDescription>
          #{id}{" "}
          <span className="space-x-2 space-y-2">
            {abilities.map((ab: string) => (
              <Badge key={ab}>{ab}</Badge>
            ))}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          alt={`${name}-sprite`}
          src={data.sprites.front_default}
          width={150}
          height={150}
        />
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <MovesDrawer moves={data.moves}>
          <Button>
            <Zap />
            Moves
          </Button>
        </MovesDrawer>
        <Evolutions pokeId={id}>
          <Button>
            <ArrowUp />
            Evolutions
          </Button>
        </Evolutions>
        <Button className="col-span-2">
          <ChartBar />
          Stats
        </Button>
      </CardFooter>
    </Card>
  );
}
