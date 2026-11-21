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
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-6 py-12 text-center bg-[#FAF7F0] cursor-pointer select-none overflow-hidden"
    >
      {/* Background subtle texture */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-50 pointer-events-none" />

      {/* Floating golden dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-light/40"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${12 + (i * 6)}%`,
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
      <div className="relative z-10 max-w-lg mx-auto p-6 sm:p-10 rounded-3xl bg-white/40 backdrop-blur-[2px] border border-[#C5A059]/40 shadow-card">
        {/* Quranic Reference / Verse Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 flex flex-col items-center"
        >
          <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center text-gold mb-2">
            <Heart size={14} className="fill-gold/20" />
          </div>
          <span className="font-cinzel text-xs tracking-[0.3em] text-[#8F6E2B] uppercase font-semibold">
            The Sacred Union
          </span>
        </motion.div>

        {/* Line 1 - Fade and Rise */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-emerald font-semibold leading-snug tracking-wide"
        >
          "Two hearts, one beautiful promise, and a lifetime of duas."
        </motion.p>

        {/* Line 2 - Fade and Rise */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: 'easeOut' }}
          className="font-serif italic text-base sm:text-lg text-stone-700 font-normal leading-relaxed mt-5"
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
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gold" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Quranic excerpt note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.7 }}
          className="font-arabic text-sm text-gold-dark mt-4"
        >
          وَخَلَقْنَاكُمْ أَزْوَاجًا
        </motion.p>
      </div>

      {/* Gentle Tap to Proceed Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-[#8F6E2B]/75 text-xs font-sans tracking-widest uppercase"
      >
        <span>View Invitation</span>
        <ChevronDown size={14} />
      </motion.div>
    </div>
  );
};

export default QuoteScene;
