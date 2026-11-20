import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

/**
 * RibbonAnimation – a simple vertical silk ribbon that unties when the envelope opens.
 * It reacts to the `opened` prop to slide away.
 */
const RibbonAnimation: React.FC<{ opened: boolean }> = ({ opened }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (opened) {
      controls.start({ y: -200, opacity: 0, transition: { duration: 1.2 } });
    } else {
      controls.start({ y: 0, opacity: 1 });
    }
  }, [opened, controls]);

  return (
    <motion.div
      className="w-3 h-48 bg-emerald rounded-full absolute left-1/2 transform -translate-x-1/2"
      animate={controls}
    />
  );
};

export default RibbonAnimation;
