import React, { useState } from 'react';
import EnvelopeOpening from './components/EnvelopeOpening';
import BismillahScene from './components/BismillahScene';
import QuoteScene from './components/QuoteScene';
import NikahInvitation from './components/NikahInvitation';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * App orchestrates the sequential scenes of the invitation.
 * It also provides a "Skip Intro" button after the envelope appears.
 */
const App: React.FC = () => {
  const [scene, setScene] = useState<number>(0); // 0=Envelope,1=Bismillah,2=Quote,3=Card

  const goNext = () => setScene((s) => Math.min(s + 1, 3));

  const skipIntro = () => setScene(3);

  return (
    <div className="relative min-h-screen bg-ivory">
      {/* Skip button appears after envelope shown (scene >=0) */}
      {scene < 3 && (
        <button
          className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded shadow"
          onClick={skipIntro}
        >
          Skip Intro
        </button>
      )}
      <AnimatePresence exitBeforeEnter>
        {scene === 0 && <EnvelopeOpening key="envelope" onComplete={goNext} />}
        {scene === 1 && <BismillahScene key="bismillah" onComplete={goNext} />}
        {scene === 2 && <QuoteScene key="quote" onComplete={goNext} />}
        {scene === 3 && <NikahInvitation key="card" />}
      </AnimatePresence>
    </div>
  );
};

export default App;
