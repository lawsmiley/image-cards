import { motion } from "motion/react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "All Characters", emoji: "🏴‍☠️" },
  { id: "Straw Hat Pirates", name: "Straw Hat Pirates", emoji: "👒" },
  { id: "Allies", name: "Allies", emoji: "🤝" },
  { id: "Villains", name: "Villains", emoji: "💀" },
  { id: "Other", name: "Other", emoji: "⭐" }
];

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? "bg-amber-500 text-white shadow-lg scale-105"
              : "bg-black/20 text-amber-200 hover:bg-black/30 hover:scale-105 border border-amber-300/30"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-2">{category.emoji}</span>
          {category.name}
        </motion.button>
      ))}
    </div>
  );
}
