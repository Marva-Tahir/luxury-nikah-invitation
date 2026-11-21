import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CountdownTimerProps {
  targetDateISO: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDateISO }) => {
  const calculateTimeLeft = (): TimeRemaining | null => {
    const diff = new Date(targetDateISO).getTime() - new Date().getTime();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDateISO]);

  if (!timeLeft) {
    return (
      <div className="py-3 px-6 rounded-xl bg-rose-blush border border-[#DFB76C]/60 text-center">
        <p className="font-cinzel text-sm sm:text-base text-[#8F4E5D] font-semibold uppercase tracking-wider">
          Mubarak! The Blessed Day Has Arrived
        </p>
      </div>
    );
  }

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-[#967431] uppercase font-semibold mb-3">
        Counting Down to the Mubarak Moment
      </p>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm">
        {units.map((unit, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -2 }}
            className="flex flex-col items-center justify-center py-2.5 px-1 rounded-xl bg-gradient-to-b from-[#FFFDF9] to-[#FAF2F4] border border-[#DFB76C]/50 shadow-sm"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#8F4E5D]">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="font-cinzel text-[9px] sm:text-[10px] tracking-wider text-[#967431] uppercase mt-0.5 font-medium">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
