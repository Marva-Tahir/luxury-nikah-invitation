import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * CountdownTimer – shows days, hours, minutes, seconds until targetDate.
 * targetDate should be an ISO string.
 */
const CountdownTimer: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) return null;
    const time = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
    return time;
  };

  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft>>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <p className="text-emerald font-serif">The day has arrived!</p>;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <motion.div
      className="flex space-x-2 text-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      {[{ label: 'Days', value: days }, { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }].map(
        (item, idx) => (
          <div key={idx} className="px-2">
            <p className="text-gold text-xl font-bold">{item.value}</p>
            <p className="text-emerald text-sm">{item.label}</p>
          </div>
        ),
      )}
    </motion.div>
  );
};

export default CountdownTimer;
