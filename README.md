# 🏴‍☠️ One Piece Image Card Stack

An interactive, animated image card stack featuring your favorite One Piece characters! Built with React 19, TypeScript, and Motion 12 for smooth 3D animations and realistic drag interactions.

![One Piece Card Stack](https://img.shields.io/badge/One%20Piece-Card%20Stack-orange?style=for-the-badge&logo=react)
![React 19](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Motion 12](https://img.shields.io/badge/Motion-12-purple?style=for-the-badge)

## ✨ Features

- **🎭 Interactive Character Cards** - Drag, rotate, and reorder your One Piece crew
- **🎨 Beautiful Treasure Theme** - Skull and crossbones background with animated elements
- **🚀 Smooth 3D Animations** - Realistic card physics with spring animations
- **🎮 Drag & Drop** - Intuitive card interactions with threshold detection
- **📱 Responsive Design** - Works perfectly on all devices
- **🎯 TypeScript Support** - Full type safety and modern development experience
- **🏷️ Category Filtering** - Organize characters by crew, allies, and villains
- **🎵 Sound Effects** - Immersive audio feedback for interactions

## 🎭 Characters Featured

### 👒 Straw Hat Pirates
- **Monkey D. Luffy** - The fearless Captain with fiery energy
- **Roronoa Zoro** - The determined Swordsman with green hair
- **Sanji** - The elegant Cook in a dark suit
- **Nami** - The clever Navigator with orange hair
- **Tony Tony Chopper** - The adorable Doctor reindeer
- **Nico Robin** - The mysterious Archaeologist
- **Franky** - The cyborg Shipwright
- **Brook** - The living skeleton Musician
- **Jinbe** - The honorable Fish-Man Helmsman

### 🤝 Allies
- **Portgas D. Ace** - Luffy's adopted brother and Fire Fist
- **Trafalgar Law** - The Surgeon of Death
- **Red-Haired Shanks** - The inspiring Emperor

### 💀 Villains
- **Dracule Mihawk** - The World's Greatest Swordsman
- **Donquixote Doflamingo** - The Joker and former Warlord

## 🛠️ Technologies Used

- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Motion 12** - Framer Motion successor for animations
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **Vite 7** - Fast build tool and dev server

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lawsmiley/image-cards.git
   cd image-cards
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎮 How to Use

- **Filter by category** using the category buttons (Straw Hat Pirates, Allies, Villains)
- **Drag any character card** to see 3D rotation effects
- **Drag beyond the threshold** to reorder cards in the stack
- **Hover over cards** to see character details, powers, bounties, and quotes
- **Enjoy smooth spring animations** as cards snap back into place
- **Experience sound effects** during interactions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── core/           # Reusable core components
│   │   ├── CardStack.tsx
│   │   └── DraggableContainer.tsx
│   └── features/       # Feature-specific implementations
│       ├── ImageStack.tsx
│       ├── CategoryFilter.tsx
│       └── CharacterCard.tsx
├── hooks/              # Custom React hooks
│   └── useCardRotation.ts
├── lib/                # Type definitions and data
│   ├── types.ts
│   ├── characters.ts
│   └── soundEffects.ts
└── App.tsx             # Main application
```

## 🎨 Customization

### Adding New Characters
1. Add character images to the `public/` folder
2. Update the `characters` array in `src/lib/characters.ts`
3. Customize names, roles, bounties, powers, and quotes

### Changing the Theme
- Modify background colors in `App.tsx`
- Adjust card styling in `CharacterCard.tsx`
- Customize animations in `CardStack.tsx`

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Explained

### 3D Card Stacking
- Cards automatically stack with calculated rotation and scale
- Configurable perspective and depth effects
- Smooth spring-based transitions

### Drag Interactions
- Realistic 3D rotation based on drag direction
- Threshold detection for card reordering
- Elastic drag constraints for natural feel

### Dynamic Backgrounds
- Theme changes based on selected character category
- Animated elements that match each category
- Smooth transitions between different themes

### Character Information
- Detailed power lists and abilities
- Current bounty amounts
- Iconic character quotes
- Comprehensive descriptions

## 📞 Contact

**Project Link:** [https://github.com/lawsmiley/image-cards](https://github.com/lawsmiley/image-cards)

---

⭐ **Star this repository if you love One Piece and interactive card animations!** ⭐

*"I'm gonna be King of the Pirates!" - Monkey D. Luffy* 🏴‍☠️