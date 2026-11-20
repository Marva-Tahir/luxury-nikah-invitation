import React from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../config/invitation';

/**
 * BismillahScene – shows the Arabic Bismillah text with a golden glow.
 */
const BismillahScene: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-ivory p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      onAnimationComplete={() => setTimeout(onComplete, 3000)} // hold 3s then next
    >
      <div className="text-4xl md:text-6xl font-arabic text-gold mb-4 drop-shadow-[0_0_8px_rgba(207,161,93,0.8)]">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
      </div>
      <p className="text-lg font-serif text-emerald">
        "In the name of Allah, the Most Compassionate, the Most Merciful."
      </p>
    </motion.div>
  );
};

export default BismillahScene;
