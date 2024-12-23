import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface IDrawer {
  children: React.ReactNode;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}

export default function MovesDrawer({ children, moves }: IDrawer) {
  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{moves.length} moves</DrawerTitle>
          <DrawerDescription>Select a move</DrawerDescription>
        </DrawerHeader>
        <div className="grid grid-cols-10 gap-2 p-5 max-h-[200px] overflow-auto">
          {moves.map((move) => {
            return <div key={move.move.name}>{move.move.name}</div>;
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
