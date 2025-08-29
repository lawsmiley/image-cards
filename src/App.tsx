import { useState } from "react";
import { ImageCardStack } from "./components/features/ImageStack";
import { motion } from "motion/react";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Dynamic background themes based on category
  const getBackgroundTheme = (category: string) => {
    switch (category) {
      case "Straw Hat Pirates":
        return {
          gradient: "from-orange-900 via-red-800 to-yellow-800",
          elements: ["👒", "🏴‍☠️", "⚓", "💎"],
          colors: ["#FF6B35", "#FFD700", "#FF69B4", "#4CAF50"]
        };
      case "Allies":
        return {
          gradient: "from-blue-900 via-purple-800 to-indigo-800",
          elements: ["🤝", "⭐", "💙", "🔵"],
          colors: ["#3B82F6", "#8B5CF6", "#6366F1", "#06B6D4"]
        };
      case "Villains":
        return {
          gradient: "from-red-900 via-purple-900 to-black",
          elements: ["💀", "☠️", "⚔️", "🖤"],
          colors: ["#DC2626", "#7C3AED", "#1F2937", "#EF4444"]
        };
      default:
        return {
          gradient: "from-amber-900 via-yellow-800 to-orange-900",
          elements: ["🏴‍☠️", "💎", "💰", "⚓"],
          colors: ["#D97706", "#CA8A04", "#EA580C", "#F59E0B"]
        };
    }
  };

  const theme = getBackgroundTheme(selectedCategory);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Dynamic themed background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${theme.gradient}`}
        key={selectedCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Floating themed elements */}
        <div className="absolute inset-0 opacity-20">
          {theme.elements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute text-6xl animate-bounce"
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 15}%`,
                animationDuration: `${3 + index}s`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              {element}
            </motion.div>
          ))}
        </div>
        
        {/* Themed treasure elements */}
        <div className="absolute inset-0 opacity-25">
          {theme.colors.map((color, index) => (
            <motion.div
              key={index}
              className="absolute w-4 h-4 rounded-full animate-bounce"
              style={{
                backgroundColor: color,
                left: `${15 + index * 25}%`,
                top: `${40 + index * 20}%`,
                animationDuration: `${2.5 + index * 0.5}s`,
                animationDelay: `${index * 0.3}s`
              }}
            />
          ))}
        </div>
        
        {/* Themed glow effect */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ 
            backgroundColor: theme.colors[0] + '20',
            animationDuration: '8s'
          }}
        />
        
        {/* Category indicator */}
        <motion.div
          className="absolute top-10 left-10 text-4xl opacity-40 animate-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {theme.elements[0]}
        </motion.div>
      </motion.div>
      
      {/* Main content */}
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <ImageCardStack onCategoryChange={setSelectedCategory} />
      </div>
    </div>
  );
}
