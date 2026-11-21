import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RibbonBow from './RibbonBow';
import { Sparkles } from 'lucide-react';

interface EnvelopeOpeningProps {
  onComplete: () => void;
}

type Stage = 'idle' | 'untying_bow' | 'sliding_ribbon' | 'opening_doors' | 'revealing_card' | 'transitioning';

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>('idle');

  const handleUntie = () => {
    if (stage !== 'idle') return;
    setStage('untying_bow');

    // Stage 1: Ribbon ends slide away
    setTimeout(() => {
      setStage('sliding_ribbon');
    }, 450);

    // Stage 2: Flaps open from center
    setTimeout(() => {
      setStage('opening_doors');
    }, 1100);

    // Stage 3: Card reveals from inside
    setTimeout(() => {
      setStage('revealing_card');
    }, 1800);

    // Stage 4: Transition to Scene 2 (Bismillah)
    setTimeout(() => {
      setStage('transitioning');
      onComplete();
    }, 3200);
  };

  const isRibbonSliding = stage !== 'idle' && stage !== 'untying_bow';
  const isDoorsOpen = stage === 'opening_doors' || stage === 'revealing_card' || stage === 'transitioning';
  const isCardEmerging = stage === 'revealing_card' || stage === 'transitioning';

  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center bg-[#FAF6F0] overflow-hidden p-2 sm:p-4 select-none">
      {/* Background soft pearl damask texture */}
      <div className="absolute inset-0 bg-pearl-damask opacity-70 pointer-events-none" />

      {/* Soft warm vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(238,217,221,0.45)_100%)] pointer-events-none" />

      {/* Static decorative dots – no animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#DFB76C]/20"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${8 + (i * 7.5)}%`,
              left: `${6 + ((i * 17) % 86)}%`,
            }}
          />
        ))}
      </div>

      {/* FULL-SCREEN REAL LUXURY ENVELOPE (Fills mobile viewport completely) */}
      <div className="relative w-full max-w-sm sm:max-w-md h-[95dvh] max-h-[820px] rounded-3xl shadow-envelope bg-[#FFFDF9] border border-[#DFB76C]/50 flex flex-col justify-between overflow-hidden">
        
        {/* Subtle Pearl Paper Texture & Inner Gold Filigree */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#DFB76C]/40 pointer-events-none z-10">
          <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#DFB76C]" />
          <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#DFB76C]" />
          <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#DFB76C]" />
          <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#DFB76C]" />
        </div>

{/* Bismillah preview removed */}

        {/* ENVELOPE GATEFOLD / CENTER DOORS (Opening from the Middle) */}
        
        {/* Top Flap (or Left Gate Door) */}
        <motion.div
          initial={{ y: 0 }}
          animate={
            isDoorsOpen
              ? { y: '-102%', opacity: 0 }
              : { y: '0%', opacity: 1 }
          }
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-x-0 top-0 h-[50%] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F5ECEE] z-20 shadow-md border-b border-[#DFB76C]/60 flex flex-col justify-between p-4"
        >
          {/* Subtle gold emblem on top envelope flap */}
          <div className="flex justify-center pt-4 opacity-75">
            <svg viewBox="0 0 60 20" className="w-16 text-[#DFB76C]">
              <path d="M 0 10 Q 30 -5 60 10" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="30" cy="10" r="2" fill="currentColor" />
            </svg>
          </div>
          <div className="text-center pb-2">
            <span className="font-cinzel text-[11px] tracking-[0.3em] text-[#967431] uppercase font-semibold">
              The Royal Invitation
            </span>
          </div>
        </motion.div>



        {/* HORIZONTAL SILK SATIN RIBBON BAND ACROSS THE CENTER */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none flex items-center justify-center">
          {/* Left Ribbon Band */}
          <motion.div
            animate={
              isRibbonSliding
                ? { x: -350, opacity: 0, transition: { duration: 0.8, ease: 'easeIn' } }
                : { x: 0, opacity: 1 }
            }
            className="absolute left-0 right-1/2 h-11 sm:h-12 shadow-sm"
            style={{
              background: 'linear-gradient(180deg, #FFF1F3 0%, #F5D3DA 40%, #ECC8CF 70%, #E3B4BF 100%)',
              borderTop: '1px solid rgba(223, 183, 108, 0.8)',
              borderBottom: '1px solid rgba(223, 183, 108, 0.8)',
            }}
          >
            {/* Running Gold Stitches */}
            <div className="w-full h-[1px] border-t border-dashed border-[#DFB76C] mt-1" />
            <div className="w-full h-[1px] border-b border-dashed border-[#DFB76C] mt-6 sm:mt-7" />
          </motion.div>

          {/* Right Ribbon Band */}
          <motion.div
            animate={
              isRibbonSliding
                ? { x: 350, opacity: 0, transition: { duration: 0.8, ease: 'easeIn' } }
                : { x: 0, opacity: 1 }
            }
            className="absolute left-1/2 right-0 h-11 sm:h-12 shadow-sm"
            style={{
              background: 'linear-gradient(180deg, #FFF1F3 0%, #F5D3DA 40%, #ECC8CF 70%, #E3B4BF 100%)',
              borderTop: '1px solid rgba(223, 183, 108, 0.8)',
              borderBottom: '1px solid rgba(223, 183, 108, 0.8)',
            }}
          >
            <div className="w-full h-[1px] border-t border-dashed border-[#DFB76C] mt-1" />
            <div className="w-full h-[1px] border-b border-dashed border-[#DFB76C] mt-6 sm:mt-7" />
          </motion.div>
        </div>

        {/* THE SILK RIBBON BOW (Centered right on the envelope opening) */}
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <AnimatePresence>
            {stage !== 'transitioning' && (
              <RibbonBow onUntie={handleUntie} disabled={stage !== 'idle'} />
            )}
          </AnimatePresence>
        </div>

        {/* Subtle, elegant hint right over the bow */}
        {stage === 'idle' && (
          <div className="absolute bottom-6 inset-x-0 text-center z-30 pointer-events-none opacity-70">
            <span className="font-cinzel text-[10px] tracking-[0.25em] text-[#967431] uppercase font-semibold">
              Tap the Bow to Open
            </span>
          </div>
        )}

      </div>
    </div>
  );
};

export default EnvelopeOpening;
