import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WaxSeal from './WaxSeal';
import RibbonAnimation from './RibbonAnimation';

/**
 * EnvelopeOpening component – displays the envelope with ribbon and wax seal.
 * Handles the tap on the seal to trigger the opening animation sequence.
 */
const EnvelopeOpening: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [opened, setOpened] = useState(false);

  const handleSealClick = () => {
    setOpened(true);
    // wait for the total animation duration then notify parent
    setTimeout(onComplete, 3000); // adjust based on actual animation length
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ivory overflow-hidden relative">
      {/* Instruction texts */}
      <div className="absolute bottom-8 text-center space-y-2">
        <p className="text-lg font-serif text-gray-700">An Invitation Awaits You</p>
        <p className="text-sm text-gray-600">Tap the seal to open</p>
      </div>

      <AnimatePresence>
        {!opened && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative"
          >
            {/* Envelope body */}
            <motion.div
              className="w-72 h-48 bg-champagne rounded-t-3xl shadow-envelope mx-auto"
              whileHover={{ y: -4 }}
            >
              {/* Simple representation – can be replaced with SVG artwork */}
            </motion.div>

            {/* Ribbon */}
            <RibbonAnimation opened={opened} />

            {/* Wax seal positioned at ribbon crossing */}
            <WaxSeal onClick={handleSealClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnvelopeOpening;
