import React from 'react';
import { motion } from 'framer-motion';

/**
 * WaxSeal component – a simple circular element representing the wax seal.
 * It accepts an onClick handler to start the opening sequence.
 */
const WaxSeal: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <motion.div
      className="w-12 h-12 bg-gold rounded-full absolute inset-0 m-auto"
      style={{
        // Position at the center of the envelope (adjust as needed)
        top: 'calc(50% - 24px)',
        left: 'calc(50% - 24px)',
      }}
      whileTap={{ scale: 0.9, rotate: -10 }}
      onTap={onClick}
    >
      {/* Simple decorative line – replace with SVG for realism */}
      <div className="w-full h-full flex items-center justify-center text-white font-bold">
        ✨
      </div>
    </motion.div>
  );
};

export default WaxSeal;
