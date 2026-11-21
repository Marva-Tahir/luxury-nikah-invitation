import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnvelopeOpening from './components/EnvelopeOpening';
import BismillahScene from './components/BismillahScene';
import QuoteScene from './components/QuoteScene';
import NikahInvitation from './components/NikahInvitation';
import MusicController from './components/MusicController';
import { invitationConfig } from './config/invitation';
import { RotateCcw } from 'lucide-react';

export const App: React.FC = () => {
  // 0 = Envelope Opening, 1 = Bismillah, 2 = Sacred Quote, 3 = Main Nikah Card
  const [scene, setScene] = useState<number>(0);

  const goNext = () => setScene((s) => Math.min(s + 1, 3));
  const skipToIntro = () => setScene(3);
  const replayExperience = () => setScene(0);

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#FAF6F0] text-stone-800 font-serif selection:bg-[#DFB76C] selection:text-white overflow-x-hidden">
      {/* Background Ambient Music Controller */}
      <MusicController
        musicSrc={invitationConfig.audio.src}
        musicTitle={invitationConfig.audio.title}
      />

      {/* Skip Intro Button (Visible during opening scenes 0, 1, 2) */}
      <AnimatePresence>
        {scene < 3 && (
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.8 }}
            onClick={skipToIntro}
            className="fixed top-4 left-4 z-50 px-3.5 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#DFB76C]/60 text-[#8F4E5D] text-xs font-cinzel font-semibold tracking-wider uppercase shadow-md hover:bg-[#FFFDF9] hover:text-[#967431] transition-all duration-200"
          >
            Skip Intro
          </motion.button>
        )}
      </AnimatePresence>

      {/* Replay Button (When viewing the invitation card) */}
      <AnimatePresence>
        {scene === 3 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            onClick={replayExperience}
            title="Replay Envelope Opening"
            className="fixed top-4 left-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFFDF9]/90 backdrop-blur-md border border-[#DFB76C]/60 text-[#8F4E5D] text-xs font-cinzel font-medium shadow-md hover:bg-[#FFFDF9] hover:text-[#967431] transition-all"
          >
            <RotateCcw size={12} className="text-[#DFB76C]" />
            <span className="hidden sm:inline">Reopen Envelope</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Smooth Cinematic Scene Transitions */}
      <AnimatePresence mode="wait">
        {scene === 0 && (
          <motion.div
            key="envelope-scene"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="w-full min-h-[100dvh]"
          >
            <EnvelopeOpening onComplete={goNext} />
          </motion.div>
        )}

        {scene === 1 && (
          <motion.div
            key="bismillah-scene"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.7, ease: 'easeInOut' } }}
            transition={{ duration: 0.9 }}
            className="w-full min-h-[100dvh]"
          >
            <BismillahScene onComplete={goNext} />
          </motion.div>
        )}

        {scene === 2 && (
          <motion.div
            key="quote-scene"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.7, ease: 'easeInOut' } }}
            transition={{ duration: 0.9 }}
            className="w-full min-h-[100dvh]"
          >
            <QuoteScene onComplete={goNext} />
          </motion.div>
        )}

        {scene === 3 && (
          <motion.div
            key="nikah-invitation-scene"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="w-full min-h-[100dvh]"
          >
            <NikahInvitation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
