import React from 'react';
import { motion } from 'framer-motion';

interface RibbonProps {
  isUntying: boolean;
}

export const RibbonAnimation: React.FC<RibbonProps> = ({ isUntying }) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 overflow-visible">
      {/* Horizontal Ribbon - Left Half */}
      <motion.div
        animate={
          isUntying
            ? {
                x: -320,
                opacity: 0,
                rotate: -12,
                transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
              }
            : {
                x: 0,
                opacity: 1,
              }
        }
        className="absolute left-0 right-1/2 h-10 sm:h-12 -translate-y-1/2 top-1/2 shadow-md flex flex-col justify-between"
        style={{
          background: 'linear-gradient(180deg, #093729 0%, #0D503C 30%, #157357 50%, #0D503C 70%, #06281D 100%)',
          borderTop: '1px solid rgba(223, 183, 108, 0.6)',
          borderBottom: '1px solid rgba(223, 183, 108, 0.6)',
        }}
      >
        {/* Gold embroidered running stitch detail */}
        <div className="w-full h-[1px] border-t border-dashed border-[#E5C37E]/70 mt-1" />
        <div className="w-full h-[1px] border-b border-dashed border-[#E5C37E]/70 mb-1" />
      </motion.div>

      {/* Horizontal Ribbon - Right Half */}
      <motion.div
        animate={
          isUntying
            ? {
                x: 320,
                opacity: 0,
                rotate: 12,
                transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.1 },
              }
            : {
                x: 0,
                opacity: 1,
              }
        }
        className="absolute left-1/2 right-0 h-10 sm:h-12 -translate-y-1/2 top-1/2 shadow-md flex flex-col justify-between"
        style={{
          background: 'linear-gradient(180deg, #093729 0%, #0D503C 30%, #157357 50%, #0D503C 70%, #06281D 100%)',
          borderTop: '1px solid rgba(223, 183, 108, 0.6)',
          borderBottom: '1px solid rgba(223, 183, 108, 0.6)',
        }}
      >
        <div className="w-full h-[1px] border-t border-dashed border-[#E5C37E]/70 mt-1" />
        <div className="w-full h-[1px] border-b border-dashed border-[#E5C37E]/70 mb-1" />
      </motion.div>

      {/* Hanging Silk Ribbon Tails (under the wax seal) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none z-10">
        {/* Left Tail */}
        <motion.div
          animate={
            isUntying
              ? {
                  y: 120,
                  x: -60,
                  rotate: -35,
                  opacity: 0,
                  transition: { duration: 0.85, ease: 'easeIn' },
                }
              : {
                  rotate: [-8, -5, -8],
                  transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                }
          }
          className="w-7 sm:w-8 h-28 sm:h-36 origin-top -ml-3"
          style={{
            background: 'linear-gradient(135deg, #0E5641 0%, #083427 100%)',
            borderLeft: '1px solid rgba(223, 183, 108, 0.5)',
            borderRight: '1px solid rgba(223, 183, 108, 0.5)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          }}
        />

        {/* Right Tail */}
        <motion.div
          animate={
            isUntying
              ? {
                  y: 120,
                  x: 60,
                  rotate: 35,
                  opacity: 0,
                  transition: { duration: 0.85, ease: 'easeIn' },
                }
              : {
                  rotate: [10, 7, 10],
                  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                }
          }
          className="w-7 sm:w-8 h-32 sm:h-40 origin-top -mr-3"
          style={{
            background: 'linear-gradient(135deg, #13664E 0%, #0A3D2E 100%)',
            borderLeft: '1px solid rgba(223, 183, 108, 0.5)',
            borderRight: '1px solid rgba(223, 183, 108, 0.5)',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)',
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
          }}
        />
      </div>
    </div>
  );
};

export default RibbonAnimation;
