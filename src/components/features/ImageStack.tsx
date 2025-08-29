import { useState, useMemo } from "react";
import { CardStack } from "../core/CardStack";
import { CategoryFilter } from "./CategoryFilter";
import { CharacterCard } from "./CharacterCard";
import { characters, type Character } from "../../lib/characters";

interface ImageCardStackProps {
  onCategoryChange: (category: string) => void;
}

export function ImageCardStack({ onCategoryChange }: ImageCardStackProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter characters based on selected category
  const filteredCharacters = useMemo(() => {
    if (selectedCategory === "all") return characters;
    return characters.filter(char => char.category === selectedCategory);
  }, [selectedCategory]);

  // Update parent component when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-amber-100 mb-3 drop-shadow-lg">
          🏴‍☠️ One Piece Character Collection
        </h1>
        <p className="text-amber-200 text-lg font-medium drop-shadow-md mb-4">
          Explore your favorite characters with interactive cards!
        </p>
        
        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      
      {/* Character Stats */}
      <div className="text-center text-sm text-amber-200 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-amber-300/30">
        <p>📊 Showing {filteredCharacters.length} characters • Total: {characters.length}</p>
      </div>
      
      <CardStack 
        items={filteredCharacters}
        containerClassName="relative h-80 w-80"
        cardClassName="absolute h-80 w-80 cursor-grab hover:scale-105 transition-transform duration-200"
        stackConfig={{ rotation: 6, scale: 0.08, perspective: 800 }}
      >
        {(character, index) => (
          <CharacterCard 
            character={character}
            index={index}
            totalCards={filteredCharacters.length}
          />
        )}
      </CardStack>
      
      <div className="text-center text-sm text-amber-200 bg-black/30 px-6 py-3 rounded-full backdrop-blur-sm border border-amber-300/30">
        <p>💡 Hover over cards to see character details • Drag to reorder!</p>
      </div>
    </div>
  );
}
