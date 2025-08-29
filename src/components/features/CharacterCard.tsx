import { motion } from "motion/react";
import { useEffect, useState } from "react";
import type { Character } from "../../lib/characters";
import { SoundEffects } from "../../lib/soundEffects";

interface CharacterCardProps {
  character: Character;
  index: number;
  totalCards: number;
}

export function CharacterCard({ character, index, totalCards }: CharacterCardProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    SoundEffects.init();
  }, []);

  const handleHoverStart = () => {
    SoundEffects.playCardHover();
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Fallback content when image fails to load
  if (imageError) {
    return (
      <motion.div
        className="relative h-full w-full group cursor-pointer"
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          transition: { duration: 0.3 }
        }}
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ 
          delay: index * 0.1,
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        onHoverStart={handleHoverStart}
      >
        {/* Fallback themed background */}
        <div 
          className="absolute inset-0 rounded-xl opacity-20"
          style={{ 
            background: `linear-gradient(135deg, ${character.themeColor}20, ${character.themeColor}40)`,
            border: `2px solid ${character.themeColor}60`
          }}
        />
        
        {/* Fallback character display */}
        <div className="relative z-10 h-full w-full rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-white/80 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="text-6xl mb-4">👤</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: character.themeColor }}>
              {character.name}
            </h3>
            <p className="text-lg text-gray-300 mb-4">{character.role}</p>
            <div className="text-sm text-gray-400">
              Image not available
            </div>
          </div>
        </div>
        
        {/* Enhanced hover overlay with character information */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 p-4 text-white">
            {/* Character name and role */}
            <div className="mb-3">
              <motion.h3 
                className="text-xl font-bold mb-1" 
                style={{ color: character.themeColor }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {character.name}
              </motion.h3>
              <motion.p 
                className="text-sm text-gray-300"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {character.role}
              </motion.p>
            </div>
            
            {/* Bounty information */}
            <motion.div 
              className="mb-3 p-2 bg-yellow-500/20 rounded-lg border border-yellow-400/40"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-xs text-yellow-300 font-semibold">💰 BOUNTY</p>
              <p className="text-sm font-bold text-yellow-200">{character.bounty}</p>
            </motion.div>
            
            {/* Powers/Abilities */}
            <motion.div 
              className="mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xs text-blue-300 font-semibold mb-2">⚡ POWERS</p>
              <div className="flex flex-wrap gap-1">
                {character.powers.map((power, idx) => (
                  <motion.span 
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    {power}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* Character quote */}
            <motion.div 
              className="mb-3 p-2 bg-white/10 rounded-lg border border-white/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-xs text-gray-300 font-semibold mb-1">💬 QUOTE</p>
              <p className="text-sm italic text-white">"{character.quote}"</p>
            </motion.div>
            
            {/* Character description */}
            <motion.div 
              className="text-xs text-gray-300 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {character.description}
            </motion.div>
          </div>
        </motion.div>
        
        {/* Glowing border effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
          <div 
            className="absolute inset-0 rounded-xl p-0.5"
            style={{ 
              background: `linear-gradient(45deg, ${character.themeColor}, ${character.themeColor}80, ${character.themeColor})`
            }}
          >
            <div className="h-full w-full rounded-xl bg-transparent"></div>
          </div>
        </div>
        
        {/* Enhanced floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ 
                backgroundColor: character.themeColor,
                left: `${15 + i * 20}%`,
                top: `${25 + i * 15}%`
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 2, 1],
                x: [0, Math.sin(i) * 10, 0]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Card shine effect */}
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-25"
          initial={{ x: -100, opacity: 0 }}
          whileHover={{ x: 100, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0 rounded-xl"
            style={{
              background: `linear-gradient(90deg, transparent, ${character.themeColor}40, transparent)`,
              transform: 'skewX(-20deg)'
            }}
          />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative h-full w-full group cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      onHoverStart={handleHoverStart}
    >
      {/* Themed background based on character */}
      <div 
        className="absolute inset-0 rounded-xl opacity-20"
        style={{ 
          background: `linear-gradient(135deg, ${character.themeColor}20, ${character.themeColor}40)`,
          border: `2px solid ${character.themeColor}60`
        }}
      />
      
      {/* Character image */}
      <img
        src={character.img}
        alt={`${character.name} - ${character.role}`}
        width={1000}
        height={1000}
        className="relative z-10 h-full w-full rounded-xl object-cover shadow-2xl border-4 border-white/80 backdrop-blur-sm"
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ opacity: imageLoaded ? 1 : 0 }}
      />
      
      {/* Loading state */}
      {!imageLoaded && !imageError && (
        <div className="relative z-10 h-full w-full rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-white/80 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="animate-spin text-4xl mb-2">🔄</div>
            <p className="text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Enhanced hover overlay with character information */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 p-4 text-white">
          {/* Character name and role */}
          <div className="mb-3">
            <motion.h3 
              className="text-xl font-bold mb-1" 
              style={{ color: character.themeColor }}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {character.name}
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-300"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {character.role}
            </motion.p>
          </div>
          
          {/* Bounty information */}
          <motion.div 
            className="mb-3 p-2 bg-yellow-500/20 rounded-lg border border-yellow-400/40"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs text-yellow-300 font-semibold">💰 BOUNTY</p>
            <p className="text-sm font-bold text-yellow-200">{character.bounty}</p>
          </motion.div>
          
          {/* Powers/Abilities */}
          <motion.div 
            className="mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xs text-blue-300 font-semibold mb-2">⚡ POWERS</p>
            <div className="flex flex-wrap gap-1">
              {character.powers.map((power, idx) => (
                <motion.span 
                  key={idx}
                  className="text-xs px-2 py-1 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  {power}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          {/* Character quote */}
          <motion.div 
            className="mb-3 p-2 bg-white/10 rounded-lg border border-white/20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xs text-gray-300 font-semibold mb-1">💬 QUOTE</p>
            <p className="text-sm italic text-white">"{character.quote}"</p>
          </motion.div>
          
          {/* Character description */}
          <motion.div 
            className="text-xs text-gray-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {character.description}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
        <div 
          className="absolute inset-0 rounded-xl p-0.5"
          style={{ 
            background: `linear-gradient(45deg, ${character.themeColor}, ${character.themeColor}80, ${character.themeColor})`
          }}
        >
          <div className="h-full w-full rounded-xl bg-transparent"></div>
        </div>
      </div>
      
      {/* Enhanced floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{ 
              backgroundColor: character.themeColor,
              left: `${15 + i * 20}%`,
              top: `${25 + i * 15}%`
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
              x: [0, Math.sin(i) * 10, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Card shine effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-25"
        initial={{ x: -100, opacity: 0 }}
        whileHover={{ x: 100, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(90deg, transparent, ${character.themeColor}40, transparent)`,
            transform: 'skewX(-20deg)'
          }}
        />
      </motion.div>
    </motion.div>
  );
}
