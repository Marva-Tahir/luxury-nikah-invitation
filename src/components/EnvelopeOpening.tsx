import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeOpeningProps {
  onComplete: () => void;
}

type Stage = 'idle' | 'opening' | 'done';

export const EnvelopeOpening: React.FC<EnvelopeOpeningProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>('idle');

  const handleBowClick = () => {
    if (stage !== 'idle') return;
    setStage('opening');
    setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1800);
  };

  return (
    <div
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden select-none"
      style={{ background: 'linear-gradient(160deg, #FDF8F5 0%, #F9EEF0 50%, #F5E8EB 100%)' }}
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(220,180,185,0.3)_100%)] pointer-events-none" />

      {/* THE ENVELOPE – fills most of mobile screen */}
      <div className="relative w-full max-w-[360px] mx-4 flex flex-col" style={{ height: '88dvh', maxHeight: '780px' }}>

        {/* ── ENVELOPE BODY ── */}
        <div
          className="relative flex-1 rounded-2xl overflow-hidden border border-[#DFB76C]/40"
          style={{
            background: 'linear-gradient(180deg, #FFFDF9 0%, #FDF6F7 100%)',
            boxShadow: '0 20px 60px rgba(180,120,130,0.18), 0 4px 16px rgba(200,160,100,0.12)',
          }}
        >
          {/* Floral vine pattern – top half */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Ccircle cx='60' cy='60' r='28' fill='none' stroke='%23C0708A' stroke-width='1.5'/%3E%3Ccircle cx='60' cy='60' r='14' fill='none' stroke='%23C0708A' stroke-width='1'/%3E%3Ccircle cx='60' cy='60' r='4' fill='%23C0708A'/%3E%3Ccircle cx='20' cy='20' r='5' fill='%23C0708A' opacity='0.5'/%3E%3Ccircle cx='100' cy='20' r='5' fill='%23C0708A' opacity='0.5'/%3E%3Ccircle cx='20' cy='100' r='5' fill='%23C0708A' opacity='0.5'/%3E%3Ccircle cx='100' cy='100' r='5' fill='%23C0708A' opacity='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px',
            }}
          />

          {/* Gold inner border frame */}
          <div className="absolute inset-3 border border-[#DFB76C]/50 rounded-xl pointer-events-none z-10">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#DFB76C]" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#DFB76C]" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#DFB76C]" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#DFB76C]" />
          </div>

          {/* Top section label */}
          <div className="absolute top-8 inset-x-0 flex flex-col items-center z-20 pointer-events-none">
            {/* Gold monogram arch */}
            <svg viewBox="0 0 80 24" className="w-20 opacity-60">
              <path d="M5 18 Q40 2 75 18" fill="none" stroke="#DFB76C" strokeWidth="1.2" />
              <circle cx="40" cy="11" r="2.5" fill="#DFB76C" />
              <circle cx="20" cy="16" r="1.2" fill="#DFB76C" opacity="0.6" />
              <circle cx="60" cy="16" r="1.2" fill="#DFB76C" opacity="0.6" />
            </svg>
            <p className="font-cinzel text-[9px] tracking-[0.35em] text-[#B8924A] uppercase mt-2">The Royal Invitation</p>
          </div>

          {/* ── HORIZONTAL PINK SATIN RIBBON ── */}
          <div className="absolute inset-x-0 z-30" style={{ top: '50%', transform: 'translateY(-50%)' }}>

            {/* Left ribbon band */}
            <motion.div
              className="absolute left-0 right-1/2 h-12"
              animate={stage === 'opening' ? { x: '-100%', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeIn', delay: 0.3 }}
              style={{
                background: 'linear-gradient(180deg, #FDE8EC 0%, #F5C5CF 30%, #EFAEBB 60%, #E899A8 100%)',
                borderTop: '1px solid rgba(220,160,170,0.8)',
                borderBottom: '1px solid rgba(220,160,170,0.8)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(190,110,130,0.2)',
              }}
            >
              <div className="absolute top-[4px] left-0 right-0 border-t border-dashed border-[#DFB76C]/50" />
              <div className="absolute bottom-[4px] left-0 right-0 border-b border-dashed border-[#DFB76C]/50" />
            </motion.div>

            {/* Right ribbon band */}
            <motion.div
              className="absolute left-1/2 right-0 h-12"
              animate={stage === 'opening' ? { x: '100%', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeIn', delay: 0.3 }}
              style={{
                background: 'linear-gradient(180deg, #FDE8EC 0%, #F5C5CF 30%, #EFAEBB 60%, #E899A8 100%)',
                borderTop: '1px solid rgba(220,160,170,0.8)',
                borderBottom: '1px solid rgba(220,160,170,0.8)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.6), inset 0 -2px 4px rgba(190,110,130,0.2)',
              }}
            >
              <div className="absolute top-[4px] left-0 right-0 border-t border-dashed border-[#DFB76C]/50" />
              <div className="absolute bottom-[4px] left-0 right-0 border-b border-dashed border-[#DFB76C]/50" />
            </motion.div>

            {/* ── REALISTIC SATIN BOW ── centered on the ribbon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
              <motion.div
                onClick={handleBowClick}
                className="relative cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                animate={stage === 'opening' ? { scale: 0, opacity: 0 } : {}}
                transition={stage === 'opening' ? { duration: 0.4 } : {}}
              >
                {/* SVG-based realistic bow */}
                <svg width="140" height="96" viewBox="0 0 140 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="leftLoop" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE8EC" />
                      <stop offset="25%" stopColor="#F9D0D8" />
                      <stop offset="55%" stopColor="#EFB0BF" />
                      <stop offset="80%" stopColor="#E090A5" />
                      <stop offset="100%" stopColor="#D4789A" />
                    </linearGradient>
                    <linearGradient id="rightLoop" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FDE8EC" />
                      <stop offset="25%" stopColor="#F9D0D8" />
                      <stop offset="55%" stopColor="#EFB0BF" />
                      <stop offset="80%" stopColor="#E090A5" />
                      <stop offset="100%" stopColor="#D4789A" />
                    </linearGradient>
                    <linearGradient id="leftLoopSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                      <stop offset="40%" stopColor="white" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="knot" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE8EC" />
                      <stop offset="40%" stopColor="#F5C5CF" />
                      <stop offset="70%" stopColor="#E8A0B0" />
                      <stop offset="100%" stopColor="#D4789A" />
                    </linearGradient>
                    <linearGradient id="tailLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5C5CF" />
                      <stop offset="100%" stopColor="#E090A5" />
                    </linearGradient>
                    <linearGradient id="tailRight" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F9D0D8" />
                      <stop offset="100%" stopColor="#E8A0B0" />
                    </linearGradient>
                    <linearGradient id="goldSeal" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5E4A0" />
                      <stop offset="30%" stopColor="#DFB76C" />
                      <stop offset="60%" stopColor="#C5953A" />
                      <stop offset="100%" stopColor="#A87830" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#B06080" floodOpacity="0.3" />
                    </filter>
                  </defs>

                  {/* Left ribbon tail */}
                  <path d="M62 54 L55 54 L50 90 Q54 94 58 90 L65 54 Z" fill="url(#tailLeft)" />
                  <path d="M63 54 L56 54 L51 88 Q55 93 57 90 L64 54 Z" fill="url(#leftLoopSheen)" opacity="0.4" />

                  {/* Right ribbon tail */}
                  <path d="M78 54 L85 54 L90 90 Q86 94 82 90 L75 54 Z" fill="url(#tailRight)" />

                  {/* Left bow loop */}
                  <path
                    d="M68 46 C55 10, 5 8, 10 38 C14 52, 42 54, 68 50 Z"
                    fill="url(#leftLoop)"
                    filter="url(#shadow)"
                  />
                  {/* Left loop inner shadow */}
                  <path
                    d="M68 46 C55 10, 5 8, 10 38 C14 52, 42 54, 68 50 Z"
                    fill="url(#leftLoopSheen)"
                  />
                  {/* Left loop fold line */}
                  <path d="M68 48 C55 32 30 24 15 34" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />
                  <path d="M68 48 C55 42 40 42 25 44" stroke="rgba(180,80,110,0.2)" strokeWidth="1.5" fill="none" />

                  {/* Right bow loop */}
                  <path
                    d="M72 46 C85 10, 135 8, 130 38 C126 52, 98 54, 72 50 Z"
                    fill="url(#rightLoop)"
                    filter="url(#shadow)"
                  />
                  {/* Right loop inner sheen */}
                  <path
                    d="M72 46 C85 10, 135 8, 130 38 C126 52, 98 54, 72 50 Z"
                    fill="url(#leftLoopSheen)"
                    opacity="0.6"
                  />
                  {/* Right loop fold line */}
                  <path d="M72 48 C85 32 110 24 125 34" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" />

                  {/* Center satin knot */}
                  <ellipse cx="70" cy="49" rx="12" ry="10" fill="url(#knot)" filter="url(#shadow)" />
                  <ellipse cx="70" cy="47" rx="8" ry="5" fill="rgba(255,255,255,0.3)" />

                  {/* Gold wax seal on the knot */}
                  <circle cx="70" cy="49" r="11" fill="url(#goldSeal)" filter="url(#shadow)" />
                  <circle cx="70" cy="49" r="9" fill="none" stroke="rgba(255,220,120,0.6)" strokeWidth="1" />
                  {/* Heart engraving on seal */}
                  <path d="M70 54 C70 54 62 48 62 44 C62 41 65 39 67 41 C68 42 70 44 70 44 C70 44 72 42 73 41 C75 39 78 41 78 44 C78 48 70 54 70 54 Z"
                    fill="rgba(160,100,40,0.5)" />
                  {/* Seal shine */}
                  <ellipse cx="66" cy="44" rx="3" ry="2" fill="rgba(255,230,150,0.4)" transform="rotate(-20 66 44)" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Bottom section – empty elegant space */}
          <div className="absolute bottom-10 inset-x-0 flex justify-center pointer-events-none z-10">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#DFB76C]/50 to-transparent" />
          </div>
        </div>

        {/* Hint text below envelope */}
        <AnimatePresence>
          {stage === 'idle' && (
            <div className="text-center pt-5 pb-2 pointer-events-none">
              <p className="font-cinzel text-[10px] tracking-[0.3em] text-[#B8924A] uppercase">Tap the Seal to Open</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnvelopeOpening;
