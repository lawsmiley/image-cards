import { ImageCardStack } from "./components/features/ImageStack";

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* One Piece Treasure/Skull themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900">
        {/* Treasure chest pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 text-6xl animate-bounce" style={{ animationDuration: '3s' }}>
            💎
          </div>
          <div className="absolute top-32 right-32 text-5xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            🏴‍☠️
          </div>
          <div className="absolute top-40 left-1/3 text-4xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
            💰
          </div>
        </div>
        
        {/* Skull and crossbones pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/4 text-8xl animate-pulse" style={{ animationDuration: '6s' }}>
            ☠️
          </div>
          <div className="absolute top-1/3 right-1/4 text-6xl animate-pulse" style={{ animationDuration: '8s' }}>
            💀
          </div>
          <div className="absolute bottom-1/3 left-1/2 text-5xl animate-pulse" style={{ animationDuration: '7s' }}>
            ⚔️
          </div>
        </div>
        
        {/* Treasure elements */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute bottom-40 left-10 text-4xl animate-bounce" style={{ animationDuration: '2s' }}>
            🗝️
          </div>
          <div className="absolute bottom-32 right-20 text-3xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            🪙
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-2xl animate-bounce" style={{ animationDuration: '2.5s' }}>
            🔮
          </div>
          <div className="absolute bottom-1/3 right-1/3 text-3xl animate-bounce" style={{ animationDuration: '3.5s' }}>
            ⚓
          </div>
        </div>
        
        {/* Pirate ship elements */}
        <div className="absolute top-10 left-10 text-5xl opacity-30 animate-pulse">
          🏴‍☠️
        </div>
        <div className="absolute top-20 right-20 text-4xl opacity-25 animate-pulse" style={{ animationDuration: '5s' }}>
          ⚓
        </div>
        
        {/* Treasure glow effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 flex h-screen w-full items-center justify-center">
        <ImageCardStack />
      </div>
    </div>
  );
}
