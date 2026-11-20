import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { invitation } from '../config/invitation';

/**
 * QuoteScene – displays the romantic Nikah quote with line‑by‑line fade‑and‑rise.
 */
const quoteLines = [
  "Two hearts, one beautiful promise, and a lifetime of duas.",
  "By the grace of Allah, two souls are about to begin a journey of love, faith, and togetherness.",
];

const QuoteScene: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < quoteLines.length) {
      const timer = setTimeout(() => setCurrentLine((i) => i + 1), 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(onComplete, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ivory p-4">
      {quoteLines.slice(0, currentLine).map((line, idx) => (
        <motion.p
          key={idx}
          className="text-lg md:text-xl text-emerald font-serif mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          {line}
        </motion.p>
      ))}
      {/* Decorative gold divider */}
      <motion.hr
        className="w-24 border-t-2 border-gold my-4"
        initial={{ width: 0 }}
        animate={{ width: 96, transition: { delay: 0.5, duration: 0.8 } }}
      />
    </div>
  );
};

export default QuoteScene;
