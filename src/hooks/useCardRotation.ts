import { useMotionValue, useTransform } from "motion/react";
import type { PanInfo } from "motion/react";

export function useCardRotation(onThresholdExceed?: () => void) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Enhanced rotation mapping with better physics
  const rotateX = useTransform(y, [-150, 150], [75, -75], { clamp: true });
  const rotateY = useTransform(x, [-150, 150], [-75, 75], { clamp: true });
  
  // Scale effect during drag
  const scale = useTransform(
    [x, y],
    ([latestX, latestY]) => {
      const distance = Math.sqrt(latestX * latestX + latestY * latestY);
      return Math.max(0.95, 1 - distance / 1000);
    }
  );

  const handleDragEnd = (_: never, info: PanInfo) => {
    const threshold = 200; // Increased threshold for better UX
    
    if (Math.abs(info.offset.x) > threshold || Math.abs(info.offset.y) > threshold) {
      // Add a small delay for better visual feedback
      setTimeout(() => {
        onThresholdExceed?.();
      }, 100);
    }
    
    // Smooth reset with spring physics
    x.set(0, { duration: 0.6, type: "spring", stiffness: 300, damping: 25 });
    y.set(0, { duration: 0.6, type: "spring", stiffness: 300, damping: 25 });
  };

  return { x, y, rotateX, rotateY, scale, handleDragEnd };
}
