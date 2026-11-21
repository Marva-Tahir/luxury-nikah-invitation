import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface RibbonBowProps {
  onUntie: () => void;
  disabled?: boolean;
}

export const RibbonBow: React.FC<RibbonBowProps> = ({ onUntie, disabled }) => {
  const [isUntying, setIsUntying] = useState(false);

  const handleClick = () => {
    if (disabled || isUntying) return;
    setIsUntying(true);
    setTimeout(() => {
      onUntie();
    }, 700);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer select-none flex items-center justify-center"
      title="Tap the Bow to Open"
    >
      {/* Main Bow Wrapper – only animates on tap/untie */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        animate={
          isUntying
            ? { scale: [1, 1.05, 0.6], opacity: [1, 0.8, 0] }
            : {}
        }
        transition={isUntying ? { duration: 0.6, ease: 'easeInOut' } : {}}
        className="relative w-36 h-24 flex items-center justify-center"
      >
        {/* Left Bow Loop */}
        <motion.div
          animate={isUntying ? { x: -50, rotate: -30, scale: 0.5, opacity: 0 } : {}}
          transition={isUntying ? { duration: 0.6, ease: 'easeInOut' } : {}}
          className="absolute right-1/2 w-16 h-12 origin-right -mr-1 rounded-l-full"
          style={{
            background: 'linear-gradient(135deg, #FFF5F7 0%, #F5D3DA 35%, #E8B8C4 70%, #D9A5B3 100%)',
            border: '1px solid rgba(223, 183, 108, 0.6)',
            boxShadow: '-4px 5px 14px rgba(180, 110, 125, 0.3), inset 0 3px 6px rgba(255,255,255,0.75), inset -2px 0 4px rgba(185,120,135,0.2)',
          }}
        >
          <div className="absolute right-1 top-2 bottom-2 w-5 rounded-l-full bg-gradient-to-l from-[#C98A98]/35 to-transparent" />
          <div className="absolute top-2 left-3 w-4 h-[1px] bg-white/70 rotate-12" />
          <div className="absolute top-4 left-2 w-2 h-[1px] bg-white/50 rotate-6" />
        </motion.div>

        {/* Right Bow Loop */}
        <motion.div
          animate={isUntying ? { x: 50, rotate: 30, scale: 0.5, opacity: 0 } : {}}
          transition={isUntying ? { duration: 0.6, ease: 'easeInOut' } : {}}
          className="absolute left-1/2 w-16 h-12 origin-left -ml-1 rounded-r-full"
          style={{
            background: 'linear-gradient(-135deg, #FFF5F7 0%, #F5D3DA 35%, #E8B8C4 70%, #D9A5B3 100%)',
            border: '1px solid rgba(223, 183, 108, 0.6)',
            boxShadow: '4px 5px 14px rgba(180, 110, 125, 0.3), inset 0 3px 6px rgba(255,255,255,0.75), inset 2px 0 4px rgba(185,120,135,0.2)',
          }}
        >
          <div className="absolute left-1 top-2 bottom-2 w-5 rounded-r-full bg-gradient-to-r from-[#C98A98]/35 to-transparent" />
          <div className="absolute top-2 right-3 w-4 h-[1px] bg-white/70 -rotate-12" />
          <div className="absolute top-4 right-2 w-2 h-[1px] bg-white/50 -rotate-6" />
        </motion.div>

        {/* Ribbon tails – perfectly still, no looping */}
        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 flex justify-center pointer-events-none z-10">
          {/* Left Tail */}
          <motion.div
            animate={isUntying ? { y: 80, x: -40, rotate: -30, opacity: 0 } : {}}
            transition={isUntying ? { duration: 0.6, ease: 'easeInOut' } : {}}
            className="w-5 sm:w-6 h-16 sm:h-20 -mr-1.5 origin-top"
            style={{
              background: 'linear-gradient(180deg, #EDBECC 0%, #E3AFBF 50%, #D99BAD 100%)',
              borderLeft: '1px solid rgba(223,183,108,0.5)',
              borderRight: '1px solid rgba(223,183,108,0.5)',
              clipPath: 'polygon(0 0, 100% 0, 100% 92%, 50% 100%, 0 92%)',
              boxShadow: '-2px 4px 8px rgba(180,110,125,0.2)',
            }}
          />
          {/* Right Tail */}
          <motion.div
            animate={isUntying ? { y: 80, x: 40, rotate: 30, opacity: 0 } : {}}
            transition={isUntying ? { duration: 0.6, ease: 'easeInOut' } : {}}
            className="w-5 sm:w-6 h-20 sm:h-24 -ml-1.5 origin-top"
            style={{
              background: 'linear-gradient(180deg, #F5D3DA 0%, #EDBECC 50%, #E3AFBF 100%)',
              borderLeft: '1px solid rgba(223,183,108,0.5)',
              borderRight: '1px solid rgba(223,183,108,0.5)',
              clipPath: 'polygon(0 0, 100% 0, 100% 92%, 50% 100%, 0 92%)',
              boxShadow: '2px 4px 8px rgba(180,110,125,0.2)',
            }}
          />
        </div>

        {/* Center Satin Knot */}
        <div
          className="relative z-20 w-8 h-9 rounded-md flex items-center justify-center border border-[#DFB76C]"
          style={{
            background: 'linear-gradient(135deg, #FFF8FA 0%, #F5D3DA 40%, #DFB76C 100%)',
            boxShadow: '0 4px 12px rgba(143,78,93,0.3), inset 0 1px 4px rgba(255,255,255,0.85)',
          }}
        >
          <div className="w-full h-1.5 bg-gradient-to-r from-[#C5A059] via-[#FFF1D6] to-[#C5A059] opacity-80" />
        </div>
      </motion.div>
    </div>
  );
};

export default RibbonBow;
