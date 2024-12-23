import axios from "axios";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

interface IEvolutionsProps {
  children: React.ReactNode;
  pokeId: number;
}

export default async function Evolutions({
  children,
  pokeId,
}: IEvolutionsProps) {
  const evolutionUrl = `https://pokeapi.co/api/v2/evolution-chain/${pokeId}`;
  const data = (await axios.get(evolutionUrl)).data.chain.species;
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Evolutions</DrawerTitle>
        </DrawerHeader>
        <div>{data.name}</div>
      </DrawerContent>
    </Drawer>
  );
}
