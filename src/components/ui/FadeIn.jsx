import { motion } from 'framer-motion';

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '', 
  triggerOnLoad = false // Prop baru: jika true, animasi jalan otomatis tanpa scroll
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  // Mendefinisikan status animasi (Variants)
  const animationVariants = {
    hidden: { 
      opacity: 0, 
      ...directions[direction] 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      // LOGIKA DISINI:
      // Jika triggerOnLoad true, pakai 'animate' (jalan langsung).
      // Jika false, pakai 'whileInView' (tunggu scroll).
      animate={triggerOnLoad ? "visible" : undefined}
      whileInView={!triggerOnLoad ? "visible" : undefined}
      
      variants={animationVariants}
      viewport={!triggerOnLoad ? { once: true, margin: "-100px" } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}