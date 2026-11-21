import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaxSeal from './WaxSeal';
import RibbonAnimation from './RibbonAnimation';
import { Sparkles } from 'lucide-react';

interface EnvelopeOpeningProps {
  onComplete: () => void;
}

type OpeningStage = 'idle' | 'cracking' | 'untying' | 'flap_opening' | 'card_rising' | 'completed';

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<OpeningStage>('idle');

  const handleSealBreak = () => {
    if (stage !== 'idle') return;
    setStage('cracking');

    // Stage 1 -> Untie ribbon
    setTimeout(() => {
      setStage('untying');
    }, 450);

    // Stage 2 -> Open top flap
    setTimeout(() => {
      setStage('flap_opening');
    }, 1300);

    // Stage 3 -> Card emerges
    setTimeout(() => {
      setStage('card_rising');
    }, 2100);

    // Stage 4 -> Transition to next scene
    setTimeout(() => {
      setStage('completed');
      onComplete();
    }, 3600);
  };

  const isUntying = stage !== 'idle' && stage !== 'cracking';
  const isFlapOpen = stage === 'flap_opening' || stage === 'card_rising' || stage === 'completed';
  const isCardRising = stage === 'card_rising' || stage === 'completed';

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-[#0A1C16] px-4 py-8">
      {/* Background radial lighting */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#133E31]/70 via-[#0A261D]/80 to-[#04140E]" />
      </div>

      {/* Floating subtle golden ambient dust particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold-shimmer/40 blur-[0.5px]"
            style={{
              top: `${10 + (i * 7.5)}%`,
              left: `${8 + ((i * 19) % 84)}%`,
            }}
            animate={{
              y: [-10, 15, -10],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* The 3D Floating Luxury Envelope Container */}
      <motion.div
        animate={
          stage === 'idle'
            ? { y: [0, -7, 0], rotateZ: [-0.3, 0.3, -0.3] }
            : isCardRising
            ? { scale: 1.05, y: 30 }
            : { y: 0 }
        }
        transition={{
          duration: 5,
          repeat: stage === 'idle' ? Infinity : 0,
          ease: 'easeInOut',
        }}
        className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[1/1.38] select-none perspective-[1200px]"
      >
        {/* Shadow underneath envelope */}
        <div className="absolute -bottom-7 left-6 right-6 h-10 bg-black/60 rounded-full blur-xl transform scale-95" />

        {/* Envelope Outer Frame */}
        <div className="relative w-full h-full rounded-2xl shadow-envelope bg-[#FAF7F0] overflow-hidden border border-[#D9C496]/50">
          
          {/* Subtle ivory paper texture */}
          <div className="absolute inset-0 bg-islamic-pattern opacity-40 pointer-events-none" />

          {/* Delicate Outer Gold Filigree Border on the Envelope */}
          <div className="absolute inset-2 sm:inset-3 rounded-xl border border-[#C5A059]/40 pointer-events-none">
            <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
            <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
            <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
            <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />
          </div>

          {/* Inner Envelope Lining (Emerald Green with Gold Motif) */}
          <div
            className="absolute inset-x-3 top-3 bottom-12 rounded-t-lg overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 50% 30%, #0F5E46 0%, #08291F 70%, #041C15 100%)',
            }}
          >
            <div className="absolute inset-0 bg-emerald-pattern opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center opacity-15">
              <svg viewBox="0 0 100 100" className="w-48 h-48 text-[#DFB76C]">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
              </svg>
            </div>
          </div>

          {/* Emergent Invitation Card (Inside Envelope Pocket) */}
          <motion.div
            initial={{ y: 0 }}
            animate={
              isCardRising
                ? { y: -260, scale: 1.03, transition: { duration: 1.3, ease: [0.25, 1, 0.5, 1] } }
                : { y: 0 }
            }
            className="absolute inset-x-5 top-5 h-[85%] rounded-xl bg-[#FAF7F0] shadow-card border-2 border-[#C5A059] p-4 flex flex-col items-center justify-between z-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FFFDF9 0%, #FAF5EB 100%)',
            }}
          >
            {/* Inner Card Header */}
            <div className="text-center w-full pt-2">
              <div className="font-arabic text-xl sm:text-2xl text-gold-dark">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-2" />
              <p className="font-cinzel tracking-[0.2em] text-[10px] text-emerald uppercase font-semibold">
                The Nikah Ceremony
              </p>
            </div>

            {/* Monogram inside card preview */}
            <div className="my-auto text-center">
              <div className="font-script text-4xl sm:text-5xl text-gold-gradient py-1">
                Ayesha &amp; Ahmed
              </div>
              <p className="text-[11px] font-sans text-stone-500 tracking-wider mt-1">
                March 2027 • Lahore
              </p>
            </div>

            <div className="text-[10px] font-cinzel text-gold-dark/80 tracking-widest pb-1 flex items-center gap-1">
              <Sparkles size={11} className="text-gold" />
              <span>Royal Invitation</span>
              <Sparkles size={11} className="text-gold" />
            </div>
          </motion.div>

          {/* Lower Envelope Triangular Pocket (Front) */}
          <div
            className="absolute inset-x-0 bottom-0 h-[64%] z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, #FDFBF7 0%, #FAF4E6 70%, #F1E5CB 100%)',
              clipPath: 'polygon(0% 40%, 50% 0%, 100% 40%, 100% 100%, 0% 100%)',
              boxShadow: '0 -10px 25px rgba(0,0,0,0.1)',
            }}
          >
            {/* Golden stitch along edge */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 40%, 50% 0%, 100% 40%, 100% 100%, 0% 100%)',
                borderTop: '2px solid rgba(197, 160, 89, 0.7)',
              }}
            />
          </div>

          {/* Left & Right Fold Flaps */}
          <div
            className="absolute left-0 bottom-0 top-[20%] w-[52%] z-20 pointer-events-none opacity-85"
            style={{
              background: 'linear-gradient(135deg, rgba(245, 239, 226, 0.95) 0%, rgba(235, 222, 198, 0.98) 100%)',
              clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
              borderRight: '1px solid rgba(197, 160, 89, 0.4)',
            }}
          />
          <div
            className="absolute right-0 bottom-0 top-[20%] w-[52%] z-20 pointer-events-none opacity-85"
            style={{
              background: 'linear-gradient(-135deg, rgba(245, 239, 226, 0.95) 0%, rgba(235, 222, 198, 0.98) 100%)',
              clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
              borderLeft: '1px solid rgba(197, 160, 89, 0.4)',
            }}
          />

          {/* Top Envelope Flap (Realistic 3D Opening) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={
              isFlapOpen
                ? {
                    rotateX: -175,
                    zIndex: 5,
                    transition: { duration: 1.1, ease: [0.4, 0, 0.2, 1] },
                  }
                : { rotateX: 0, zIndex: 30 }
            }
            style={{
              transformOrigin: 'top center',
              background: 'linear-gradient(180deg, #FDFBF7 0%, #F5ECDA 80%, #EBDDC0 100%)',
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              boxShadow: isFlapOpen ? 'none' : '0 12px 24px rgba(0,0,0,0.18)',
            }}
            className="absolute inset-x-0 top-0 h-[52%]"
          >
            {/* Gold border on flap triangle */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                borderBottom: '2.5px solid rgba(197, 160, 89, 0.8)',
              }}
            />
          </motion.div>

          {/* Emerald Silk Ribbon (Layered across the envelope) */}
          <RibbonAnimation isUntying={isUntying} />

          {/* Wax Seal Centered Exactly where Ribbon Crosses */}
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <AnimatePresence>
              {stage !== 'completed' && (
                <WaxSeal onBreak={handleSealBreak} disabled={stage !== 'idle'} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Elegant Invitation Guide Instruction at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-8 sm:mt-10 text-center select-none z-20"
      >
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
          An Invitation Awaits You
        </p>
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="font-serif italic text-xs sm:text-sm text-stone-300/80 mt-1.5 flex items-center justify-center gap-2"
        >
          <span className="w-5 h-[1px] bg-[#C5A059]/40" />
          <span>Tap the seal to open</span>
          <span className="w-5 h-[1px] bg-[#C5A059]/40" />
        </motion.p>
      </motion.div>
    </div>
  );
};

export default EnvelopeOpening;
