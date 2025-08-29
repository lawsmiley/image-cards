import { CardStack } from "../core/CardStack";
import type { StackableItem } from "../../lib/types";

interface ImageCard extends StackableItem {
  img: string;
  name: string;
  role: string;
}

export function ImageCardStack() {
  const items: ImageCard[] = [
    { id: 1, img: "/Luffy 🔥.jpeg", name: "Monkey D. Luffy", role: "Captain" },
    { id: 2, img: "/zoro.jpeg", name: "Roronoa Zoro", role: "Swordsman" },
    { id: 3, img: "/Sanji Chibi.jpeg", name: "Sanji", role: "Cook" },
    { id: 4, img: "/Nami Chibi.jpeg", name: "Nami", role: "Navigator" },
  ];

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-amber-100 mb-3 drop-shadow-lg">
          🏴‍☠️ Straw Hat Pirates
        </h1>
        <p className="text-amber-200 text-lg font-medium drop-shadow-md">
          Drag the cards to interact with your crew!
        </p>
      </div>
      
      <CardStack 
        items={items}
        containerClassName="relative h-80 w-80"
        cardClassName="absolute h-80 w-80 cursor-grab hover:scale-105 transition-transform duration-200"
        stackConfig={{ rotation: 6, scale: 0.08, perspective: 800 }}
      >
        {(card) => (
          <div className="relative h-full w-full group">
            <img
              src={card.img as string}
              alt={`${card.name} - ${card.role}`}
              width={1000}
              height={1000}
              className="h-full w-full rounded-xl object-cover shadow-2xl border-4 border-amber-300/60 backdrop-blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold text-amber-200 drop-shadow-lg">{card.name}</h3>
                <p className="text-sm text-amber-100 opacity-90">{card.role}</p>
              </div>
            </div>
          </div>
        )}
      </CardStack>
      
      <div className="text-center text-sm text-amber-200 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-amber-300/30">
        <p>💡 Tip: Drag cards beyond the edge to reorder them!</p>
      </div>
    </div>
  );
}
