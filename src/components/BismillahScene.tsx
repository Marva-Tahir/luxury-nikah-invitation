import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown } from 'lucide-react';

interface BismillahSceneProps {
  onComplete: () => void;
}

export const BismillahScene: React.FC<BismillahSceneProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center bg-[#FAF6F0] cursor-pointer select-none overflow-hidden"
    >
      {/* Background pearl damask texture */}
      <div className="absolute inset-0 bg-pearl-damask opacity-60 pointer-events-none" />

      {/* Decorative Royal Gold Border Frame */}
      <div className="absolute inset-3 sm:inset-6 border border-[#DFB76C]/40 rounded-3xl pointer-events-none flex flex-col justify-between p-3">
        <div className="flex justify-between">
          <div className="w-5 h-5 border-t-2 border-l-2 border-[#DFB76C]" />
          <div className="w-5 h-5 border-t-2 border-r-2 border-[#DFB76C]" />
        </div>
        <div className="flex justify-between">
          <div className="w-5 h-5 border-b-2 border-l-2 border-[#DFB76C]" />
          <div className="w-5 h-5 border-b-2 border-r-2 border-[#DFB76C]" />
        </div>
      </div>

      {/* Soft Golden Halo Glow behind Calligraphy */}
      <motion.div
        animate={{
          scale: [0.95, 1.15, 0.95],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[radial-gradient(circle,_#FDF1D6_0%,_#F4E3BF44_45%,_transparent_70%)] blur-2xl pointer-events-none"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Top Decorative Floral / Arch Motif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <svg viewBox="0 0 100 40" className="w-24 sm:w-28 text-[#DFB76C] drop-shadow-sm">
            <path
              d="M 50 5 Q 35 25 10 20 Q 30 35 50 35 Q 70 35 90 20 Q 65 25 50 5 Z"
              fill="none"
              stroke="#DFB76C"
              strokeWidth="1.2"
            />
            <circle cx="50" cy="20" r="3" fill="#DFB76C" />
            <circle cx="25" cy="22" r="1.5" fill="#C5A059" />
            <circle cx="75" cy="22" r="1.5" fill="#C5A059" />
          </svg>
        </motion.div>

        {/* Central Arabic Calligraphy: Bismillah in Pure Gold Foil */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="relative py-2"
        >
          <h1
            dir="rtl"
            lang="ar"
            className="font-arabic text-3xl sm:text-5xl md:text-6xl text-[#F5D3DA] font-bold leading-relaxed tracking-normal select-none"
            style={{
              textShadow: '0 2px 16px rgba(223, 183, 108, 0.5), 0 1px 3px rgba(150, 116, 49, 0.3)',
            }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h1>
        </motion.div>

        {/* Ornamental Gold Divider */}
        <motion.div
          initial={{ opacity: 0, width: '0%' }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="flex items-center justify-center gap-3 my-6 max-w-xs w-full"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#DFB76C] to-[#DFB76C]" />
          <Sparkles size={14} className="text-[#DFB76C]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#DFB76C] to-[#DFB76C]" />
        </motion.div>

        {/* English Translation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="space-y-2 px-4"
        >
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#3D2C31] font-medium leading-relaxed">
            "In the name of Allah, the Most Compassionate, the Most Merciful."
          </p>
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#F5D3DA] uppercase">
            Surah An-Naml • 30
          </p>
        </motion.div>
      </div>

      {/* Gentle Tap to Proceed Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-[#F5D3DA]/80 text-xs font-sans tracking-widest uppercase"
      >
        <span>Tap to continue</span>
        <ChevronDown size={14} />
      </motion.div>
    </div>
  );
};

export default BismillahScene;
