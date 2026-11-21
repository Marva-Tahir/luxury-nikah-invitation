import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { audioEngine } from '../utils/audioEngine';

interface RibbonBowProps {
  onUntie: () => void;
  disabled?: boolean;
}

export const RibbonBow: React.FC<RibbonBowProps> = ({ onUntie, disabled }) => {
  const [isUntying, setIsUntying] = useState(false);

  const handleClick = () => {
    if (disabled || isUntying) return;
    setIsUntying(true);
    audioEngine.playWaxCrack(); // soft crisp feedback
    setTimeout(() => {
      onUntie();
    }, 700);
  };

  return (
    <div
      onClick={handleClick}
      className="relative cursor-pointer select-none group flex items-center justify-center"
      title="Tap the Bow to Open"
    >

      {/* Main Bow Element */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isUntying
            ? {
                scale: [1, 1.08, 0.7],
                opacity: [1, 0.9, 0],
                transition: { duration: 0.65, ease: 'easeInOut' },
              }
            : {}
        }
        className="relative w-28 h-20 sm:w-36 sm:h-24 flex items-center justify-center"
      >
        {/* Left Bow Loop */}
        <motion.div
          animate={
            isUntying
              ? { x: -45, rotate: -25, scale: 0.6, opacity: 0 }
              : {}
          }
          transition={
            isUntying
              ? { duration: 0.65 }
              : { duration: 3.5, repeat: 0, ease: 'easeInOut' }
          }
          className="absolute right-1/2 w-12 sm:w-16 h-10 sm:h-12 origin-right -mr-1 rounded-l-full shadow-bow"
          style={{
            background: 'linear-gradient(135deg, #FFF1F3 0%, #F5D3DA 40%, #ECC8CF 75%, #D9A5B3 100%)',
            border: '1px solid rgba(223, 183, 108, 0.7)',
            boxShadow: '-3px 4px 12px rgba(180, 110, 125, 0.25), inset 0 2px 4px rgba(255,255,255,0.7)',
          }}
        >
          {/* Inner Loop Shadow/Fold */}
          <div className="absolute right-1 top-2 bottom-2 w-5 rounded-l-full bg-gradient-to-l from-[#C98A98]/40 to-transparent" />
          <div className="absolute top-1 left-2 w-3 h-[1px] bg-white/80" />
        </motion.div>

        {/* Right Bow Loop */}
        <motion.div
          animate={
            isUntying
              ? { x: 45, rotate: 25, scale: 0.6, opacity: 0 }
              : {}
          }
          transition={
            isUntying
              ? { duration: 0.65 }
              : { duration: 3.5, repeat: 0, ease: 'easeInOut' }
          }
          className="absolute left-1/2 w-12 sm:w-16 h-10 sm:h-12 origin-left -ml-1 rounded-r-full shadow-bow"
          style={{
            background: 'linear-gradient(-135deg, #FFF1F3 0%, #F5D3DA 40%, #ECC8CF 75%, #D9A5B3 100%)',
            border: '1px solid rgba(223, 183, 108, 0.7)',
            boxShadow: '3px 4px 12px rgba(180, 110, 125, 0.25), inset 0 2px 4px rgba(255,255,255,0.7)',
          }}
        >
          {/* Inner Loop Shadow/Fold */}
          <div className="absolute left-1 top-2 bottom-2 w-5 rounded-r-full bg-gradient-to-r from-[#C98A98]/40 to-transparent" />
          <div className="absolute top-1 right-2 w-3 h-[1px] bg-white/80" />
        </motion.div>

        {/* Hanging Silk Ribbon Tails (Flowing downwards from center knot) */}
        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 flex justify-center pointer-events-none z-10">
          {/* Left Ribbon Tail */}
          <motion.div
            animate={
              isUntying
                ? { y: 70, x: -35, rotate: -25, opacity: 0 }
                : { rotate: [-6, -2, -6] }
            }
            transition={
              isUntying
                ? { duration: 0.6 }
                : { duration: 4, repeat: 0, ease: 'easeInOut' }
            }
            className="w-5 sm:w-6 h-16 sm:h-20 -mr-1.5 origin-top"
            style={{
              background: 'linear-gradient(180deg, #F5D3DA 0%, #ECC8CF 60%, #E3B4BF 100%)',
              borderLeft: '1px solid rgba(223, 183, 108, 0.6)',
              borderRight: '1px solid rgba(223, 183, 108, 0.6)',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%)',
              boxShadow: '-2px 4px 8px rgba(180, 110, 125, 0.2)',
            }}
          />

          {/* Right Ribbon Tail */}
          <motion.div
            animate={
              isUntying
                ? { y: 70, x: 35, rotate: 25, opacity: 0 }
                : { rotate: [7, 3, 7] }
            }
            transition={
              isUntying
                ? { duration: 0.6 }
                : { duration: 4.2, repeat: 0, ease: 'easeInOut' }
            }
            className="w-5 sm:w-6 h-18 sm:h-22 -ml-1.5 origin-top"
            style={{
              background: 'linear-gradient(180deg, #FFF1F3 0%, #F5D3DA 50%, #ECC8CF 100%)',
              borderLeft: '1px solid rgba(223, 183, 108, 0.6)',
              borderRight: '1px solid rgba(223, 183, 108, 0.6)',
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 84%, 0 100%)',
              boxShadow: '2px 4px 8px rgba(180, 110, 125, 0.2)',
            }}
          />
        </div>

        {/* Center Satin Knot */}
        <motion.div
          className="relative z-20 w-7 h-8 sm:w-8 sm:h-9 rounded-md flex items-center justify-center shadow-md border border-[#DFB76C]"
          style={{
            background: 'linear-gradient(135deg, #FFF4F6 0%, #F5D3DA 45%, #DFB76C 100%)',
            boxShadow: '0 4px 10px rgba(143, 78, 93, 0.3), inset 0 1px 3px rgba(255,255,255,0.8)',
          }}
        >
          {/* Subtle gold ring band across knot */}
          <div className="w-full h-1.5 bg-gradient-to-r from-[#DFB76C] via-[#FFF1D6] to-[#DFB76C] shadow-inner" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RibbonBow;
