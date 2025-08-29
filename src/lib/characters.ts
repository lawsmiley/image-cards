export interface Character {
  id: number;
  name: string;
  role: string;
  img: string;
  bounty: string;
  powers: string[];
  quote: string;
  themeColor: string;
  category: 'Straw Hat Pirates' | 'Allies' | 'Villains' | 'Other';
  description: string;
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Monkey D. Luffy",
    role: "Captain",
    img: "/Luffy 🔥.jpeg",
    bounty: "3,000,000,000 Berries",
    powers: ["Gum-Gum Fruit", "Haki Mastery", "Gear 5", "Conqueror's Haki"],
    quote: "I'm gonna be King of the Pirates!",
    themeColor: "#FF6B35",
    category: "Straw Hat Pirates",
    description: "The fearless captain with the power to stretch like rubber and the will to become the Pirate King."
  },
  {
    id: 2,
    name: "Roronoa Zoro",
    role: "Swordsman",
    img: "/zoro.jpeg",
    bounty: "1,111,000,000 Berries",
    powers: ["Three Sword Style", "Haki Mastery", "Ashura", "Armament Haki"],
    quote: "I will become the greatest swordsman in the world!",
    themeColor: "#4CAF50",
    category: "Straw Hat Pirates",
    description: "The determined swordsman who wields three swords and aims to be the world's greatest."
  },
  {
    id: 3,
    name: "Sanji",
    role: "Cook",
    img: "/Sanji Chibi.jpeg",
    bounty: "1,032,000,000 Berries",
    powers: ["Black Leg Style", "Haki Mastery", "Sky Walk", "Observation Haki"],
    quote: "I never waste food, especially not meat!",
    themeColor: "#FFD700",
    category: "Straw Hat Pirates",
    description: "The elegant cook who fights with his powerful legs and never wastes food."
  },
  {
    id: 4,
    name: "Nami",
    role: "Navigator",
    img: "/Nami Chibi.jpeg",
    bounty: "366,000,000 Berries",
    powers: ["Weather Control", "Clima-Tact", "Navigation", "Cartography"],
    quote: "Money is everything!",
    themeColor: "#FF69B4",
    category: "Straw Hat Pirates",
    description: "The clever navigator who can control weather and has an obsession with money."
  },
  {
    id: 5,
    name: "Tony Tony Chopper",
    role: "Doctor",
    img: "/chopper.jpeg",
    bounty: "1,000 Berries",
    powers: ["Human-Human Fruit", "Multiple Forms", "Medical Knowledge", "Rumble Ball"],
    quote: "I'm not a pet! I'm a doctor!",
    themeColor: "#87CEEB",
    category: "Straw Hat Pirates",
    description: "The adorable reindeer doctor who can transform into different forms and heal his crew."
  },
  {
    id: 6,
    name: "Usopp",
    role: "Sniper",
    img: "/chopper.jpeg", // Using placeholder image
    bounty: "500,000,000 Berries",
    powers: ["Sniper Skills", "Pop Green", "Haki", "Inventor"],
    quote: "I'm Usopp, the man who will become a brave warrior of the sea!",
    themeColor: "#8B4513",
    category: "Straw Hat Pirates",
    description: "The brave sniper who tells tall tales but always comes through for his friends."
  },
  {
    id: 7,
    name: "Nico Robin",
    role: "Archaeologist",
    img: "/Nami Chibi.jpeg", // Using placeholder image
    bounty: "930,000,000 Berries",
    powers: ["Flower-Flower Fruit", "Haki", "Archaeology", "Intelligence"],
    quote: "I want to live!",
    themeColor: "#800080",
    category: "Straw Hat Pirates",
    description: "The mysterious archaeologist who can sprout body parts anywhere and seeks the true history."
  },
  {
    id: 8,
    name: "Franky",
    role: "Shipwright",
    img: "/zoro.jpeg", // Using placeholder image
    bounty: "394,000,000 Berries",
    powers: ["Cyborg Body", "Cola Power", "Ship Building", "Super Strength"],
    quote: "SUUUUUPER!",
    themeColor: "#00CED1",
    category: "Straw Hat Pirates",
    description: "The cyborg shipwright who built the Thousand Sunny and is powered by cola."
  },
  {
    id: 9,
    name: "Brook",
    role: "Musician",
    img: "/Luffy 🔥.jpeg", // Using placeholder image
    bounty: "383,000,000 Berries",
    powers: ["Revive-Revive Fruit", "Soul Power", "Sword Fighting", "Music"],
    quote: "Yohohoho! Skull joke!",
    themeColor: "#F5F5DC",
    category: "Straw Hat Pirates",
    description: "The living skeleton musician who can control souls and plays beautiful music."
  },
  {
    id: 10,
    name: "Jinbe",
    role: "Helmsman",
    img: "/chopper.jpeg", // Using placeholder image
    bounty: "1,100,000,000 Berries",
    powers: ["Fish-Man Karate", "Haki", "Water Control", "Navigation"],
    quote: "I am a man who wants to be part of the future that this man sees!",
    themeColor: "#006994",
    category: "Straw Hat Pirates",
    description: "The honorable fish-man helmsman who can control water and is a master of fish-man karate."
  }
];
