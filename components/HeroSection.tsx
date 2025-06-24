'use client';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      className="text-center relative z-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      variants={fadeIn}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">My Ikigai</h1>
      <p className="text-lg md:text-xl text-gray-300">
        Code is my craft, but purpose is the fuel. Here’s how I’m aligning both.
      </p>
      <motion.div
        className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 mt-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="text-white text-2xl">↓</div>
      </motion.div>
    </motion.section>
  );
}
