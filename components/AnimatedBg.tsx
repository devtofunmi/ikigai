'use client';
import { motion } from 'framer-motion';

export default function AnimatedBg() {
  return (
    <motion.div
      className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-purple-700 via-pink-500 to-yellow-500 rounded-full blur-3xl opacity-20"
      animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -20, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
