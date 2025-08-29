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
    img: "/sanji.jpeg",
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
    name: "Nico Robin",
    role: "Archaeologist",
    img: "/robin.jpeg",
    bounty: "930,000,000 Berries",
    powers: ["Flower-Flower Fruit", "Haki", "Archaeology", "Intelligence"],
    quote: "I want to live!",
    themeColor: "#800080",
    category: "Straw Hat Pirates",
    description: "The mysterious archaeologist who can sprout body parts anywhere and seeks the true history."
  },
  {
    id: 7,
    name: "Franky",
    role: "Shipwright",
    img: "/franky.jpeg",
    bounty: "394,000,000 Berries",
    powers: ["Cyborg Body", "Cola Power", "Ship Building", "Super Strength"],
    quote: "SUUUUUPER!",
    themeColor: "#00CED1",
    category: "Straw Hat Pirates",
    description: "The cyborg shipwright who built the Thousand Sunny and is powered by cola."
  },
  {
    id: 8,
    name: "Brook",
    role: "Musician",
    img: "/brook.jpeg",
    bounty: "383,000,000 Berries",
    powers: ["Revive-Revive Fruit", "Soul Power", "Sword Fighting", "Music"],
    quote: "Yohohoho! Skull joke!",
    themeColor: "#F5F5DC",
    category: "Straw Hat Pirates",
    description: "The living skeleton musician who can control souls and plays beautiful music."
  },
  {
    id: 9,
    name: "Jinbe",
    role: "Helmsman",
    img: "/jinbe.jpeg",
    bounty: "1,100,000,000 Berries",
    powers: ["Fish-Man Karate", "Haki", "Water Control", "Navigation"],
    quote: "I am a man who wants to be part of the future that this man sees!",
    themeColor: "#006994",
    category: "Straw Hat Pirates",
    description: "The honorable fish-man helmsman who can control water and is a master of fish-man karate."
  },
  {
    id: 10,
    name: "Portgas D. Ace",
    role: "Fire Fist",
    img: "/ace.jpeg",
    bounty: "5,500,000,000 Berries",
    powers: ["Flame-Flame Fruit", "Haki", "Fire Control", "Commanding Presence"],
    quote: "Thank you for loving me!",
    themeColor: "#FF4500",
    category: "Allies",
    description: "Luffy's adopted brother and commander of the Whitebeard Pirates with the power of fire."
  },
  {
    id: 11,
    name: "Trafalgar Law",
    role: "Surgeon of Death",
    img: "/law.jpeg",
    bounty: "3,000,000,000 Berries",
    powers: ["Op-Op Fruit", "Room", "Sword Fighting", "Medical Skills"],
    quote: "I'm a doctor, not a hero!",
    themeColor: "#FF1493",
    category: "Allies",
    description: "The captain of the Heart Pirates with the power to create rooms and manipulate space."
  },
  {
    id: 12,
    name: "Red-Haired Shanks",
    role: "Emperor",
    img: "/Shanks.jpeg",
    bounty: "4,048,900,000 Berries",
    powers: ["Conqueror's Haki", "Sword Fighting", "Leadership", "Intimidation"],
    quote: "I bet it on the new era!",
    themeColor: "#DC143C",
    category: "Allies",
    description: "One of the Four Emperors and Luffy's mentor who inspired him to become a pirate."
  },
  {
    id: 13,
    name: "Dracule Mihawk",
    role: "Greatest Swordsman",
    img: "/Dracule Mihawk from One Piece.jpeg",
    bounty: "3,590,000,000 Berries",
    powers: ["World's Greatest Swordsman", "Haki", "Black Blade", "Precision"],
    quote: "I am the strongest!",
    themeColor: "#2F4F4F",
    category: "Villains",
    description: "The world's greatest swordsman and one of the Seven Warlords with incredible sword skills."
  },
  {
    id: 14,
    name: "Donquixote Doflamingo",
    role: "Joker",
    img: "/Donquixote Doflamingo chibi One Piece.jpeg",
    bounty: "3,400,000,000 Berries",
    powers: ["String-String Fruit", "Haki", "String Control", "Intelligence"],
    quote: "Justice will prevail? Of course it will!",
    themeColor: "#FF69B4",
    category: "Villains",
    description: "The former Warlord and underground kingpin with the power to control strings and manipulate people."
  }
];
