'use client';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export default function ReflectionSection() {
  return (
    <motion.section
      className="mt-10 text-center max-w-2xl mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={fadeIn}
    >
      <h3 className="text-2xl font-bold mb-4">Explore Your Own Ikigai</h3>
      <p className="text-gray-300 mb-6">
        Take a moment to reflect or journal your own Ikigai. You don’t have to figure it all out — just start from what you know:
      </p>
      <ul className="space-y-4 text-left text-gray-200 text-lg">
        <li>💖 <strong>What do you love?</strong></li>
        <li>💡 <strong>What are you good at?</strong></li>
        <li>🌍 <strong>What does the world need?</strong></li>
        <li>💰 <strong>What can you get paid for?</strong></li>
      </ul>
    </motion.section>
  );
}
