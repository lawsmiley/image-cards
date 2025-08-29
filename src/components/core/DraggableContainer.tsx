import { motion } from "framer-motion";
import { useCardRotation } from "../../hooks/useCardRotation";

interface DraggableContainerProps {
  children: React.ReactNode;
  onSendToBack?: () => void;
  className?: string;
}

export function DraggableContainer({
  children,
  onSendToBack,
  className,
}: DraggableContainerProps) {
  const { x, y, rotateX, rotateY, scale, handleDragEnd } =
    useCardRotation(onSendToBack);

  return (
    <motion.div
      className={className}
      style={{ x, y, rotateX, rotateY, scale }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.8}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileTap={{ 
        cursor: "grabbing",
        scale: 1.05,
        transition: { duration: 0.1 }
      }}
      whileDrag={{
        zIndex: 1000,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.1 }
      }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}
