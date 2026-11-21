import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';

interface QuoteSceneProps {
  onComplete: () => void;
}

export const QuoteScene: React.FC<QuoteSceneProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      onClick={onComplete}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 sm:px-6 py-12 text-center bg-[#FAF6F0] cursor-pointer select-none overflow-hidden"
    >
      {/* Background pearl damask */}
      <div className="absolute inset-0 bg-pearl-damask opacity-50 pointer-events-none" />

      {/* Floating subtle rose-gold dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#DFB76C]/30"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${10 + (i * 6)}%`,
              left: `${5 + ((i * 17) % 88)}%`,
            }}
            animate={{
              y: [-15, 20, -15],
              opacity: [0.15, 0.65, 0.15],
            }}
            transition={{
              duration: 5 + (i % 3),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
          />
        ))}
      </div>

      {/* Luxury Arch Card Frame */}
      <div className="relative z-10 max-w-lg mx-auto p-6 sm:p-10 rounded-3xl bg-[#FFFDF9]/85 backdrop-blur-[2px] border border-[#DFB76C]/50 shadow-card">
        {/* Sacred Union Header with Rose-Gold Heart */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="w-9 h-9 rounded-full border border-[#DFB76C] flex items-center justify-center bg-rose-blush mb-2 shadow-sm">
            <Heart size={15} className="text-[#C98A98] fill-[#ECC8CF]" />
          </div>
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#967431] uppercase font-semibold">
            The Sacred Union
          </span>
        </motion.div>

        {/* Line 1 - Fade and Rise */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-[#3D262C] font-semibold leading-snug tracking-wide"
        >
          "Two hearts, one beautiful promise, and a lifetime of duas."
        </motion.p>

        {/* Line 2 - Fade and Rise */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
          className="font-serif italic text-base sm:text-lg text-[#61494F] font-normal leading-relaxed mt-5"
        >
          By the grace of Allah, two souls are about to begin a journey of love, faith, and togetherness.
        </motion.p>

        {/* Small Decorative Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.2, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2 mt-8 mx-auto w-32"
        >
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#DFB76C]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#DFB76C]" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#DFB76C]" />
        </motion.div>

        {/* Quranic excerpt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.7 }}
          className="font-arabic text-sm text-[#967431] mt-4"
        >
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </motion.p>
      </div>

      {/* Gentle Tap to Proceed Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-[#967431]/80 text-xs font-sans tracking-widest uppercase"
      >
        <span>View Invitation</span>
        <ChevronDown size={14} />
      </motion.div>
    </div>
  );
};

export default QuoteScene;
