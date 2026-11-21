import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { audioEngine } from '../utils/audioEngine';

interface WaxSealProps {
  onBreak: () => void;
  disabled?: boolean;
}

export const WaxSeal: React.FC<WaxSealProps> = ({ onBreak, disabled }) => {
  const [isCracking, setIsCracking] = useState(false);

  const handleClick = () => {
    if (disabled || isCracking) return;
    setIsCracking(true);
    audioEngine.playWaxCrack();
    setTimeout(() => {
      onBreak();
    }, 600);
  };

  return (
    <div className="relative cursor-pointer select-none group" onClick={handleClick}>
      {/* Outer Glow on hover / breathing */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-2.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark blur-md pointer-events-none"
      />

      {/* Main Wax Seal Body */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
        animate={
          isCracking
            ? {
                scale: [1, 0.95, 1.04, 0.85],
                rotate: [0, -3, 3, 0],
                opacity: [1, 1, 0.8, 0],
                transition: { duration: 0.6 },
              }
            : {}
        }
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-seal flex items-center justify-center p-1.5"
        style={{
          background: 'radial-gradient(circle at 35% 30%, #DFB76C 0%, #C5A059 40%, #8F6E2B 75%, #5E4617 100%)',
          boxShadow: '0 12px 28px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.6), inset 0 -4px 8px rgba(0,0,0,0.6)',
        }}
      >
        {/* Irregular Wax Rim Edges (SVG) */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))' }}
        >
          <defs>
            <radialGradient id="rimGrad" cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#C5A059" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4A360E" stopOpacity="0.9" />
            </radialGradient>
          </defs>
          {/* Organic scalloped wax edge */}
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="url(#rimGrad)"
            strokeWidth="3.5"
            strokeDasharray="6 2 4 3 8 2"
          />
        </svg>

        {/* Inner Depressed Stamped Coin */}
        <div
          className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center border border-[#E9C37C]/60"
          style={{
            background: 'radial-gradient(circle at 50% 45%, #9B7630 0%, #72531B 65%, #4C350E 100%)',
            boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.7), inset 0 -2px 4px rgba(255,255,255,0.25)',
          }}
        >
          {/* Intricate Islamic Geometric Star / Floral Emblem */}
          <svg viewBox="0 0 80 80" className="w-14 h-14 sm:w-16 sm:h-16 text-[#F9E6BF] opacity-90 drop-shadow">
            <defs>
              <filter id="emboss" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="1" stdDeviation="0.5" floodColor="#FFE6B0" floodOpacity="0.6" />
                <feDropShadow dx="0" dy="-1" stdDeviation="0.5" floodColor="#2C1D06" floodOpacity="0.9" />
              </filter>
            </defs>
            <g filter="url(#emboss)" stroke="#ECCB85" strokeWidth="1" fill="none">
              {/* Outer beaded ring */}
              <circle cx="40" cy="40" r="34" strokeDasharray="1.5 2.5" strokeWidth="1.2" />
              {/* Eight pointed star pattern (Islamic Khatim) */}
              <rect x="23" y="23" width="34" height="34" strokeWidth="0.8" />
              <rect x="23" y="23" width="34" height="34" transform="rotate(45 40 40)" strokeWidth="0.8" />
              {/* Center Monogram: A & A */}
              <text
                x="40"
                y="46"
                fontFamily="'Cinzel', serif"
                fontSize="17"
                fontWeight="700"
                fill="#FFF1D2"
                stroke="none"
                textAnchor="middle"
                letterSpacing="1"
              >
                A &amp; A
              </text>
              <circle cx="40" cy="22" r="1.5" fill="#FFE09C" />
              <circle cx="40" cy="58" r="1.5" fill="#FFE09C" />
            </g>
          </svg>

          {/* Crack lines overlay when clicked */}
          {isCracking && (
            <motion.svg
              viewBox="0 0 100 100"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 w-full h-full pointer-events-none z-20"
            >
              <path
                d="M 50 10 L 48 35 L 53 45 L 42 65 L 50 90 M 48 35 L 25 30 M 53 45 L 75 52 M 42 65 L 20 80"
                stroke="#1B1104"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M 50 10 L 48 35 L 53 45 L 42 65 L 50 90 M 48 35 L 25 30 M 53 45 L 75 52 M 42 65 L 20 80"
                stroke="#FFE5AB"
                strokeWidth="0.75"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WaxSeal;
