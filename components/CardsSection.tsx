'use client';
import { motion, Variants } from 'framer-motion';

const cards = [
  {
    title: '💖 What I Love',
    color: 'from-purple-600 to-fuchsia-600',
    content: 'I love building tools like FolioRank that empower creators to grow and get seen.',
  },
  {
    title: '💡 What I’m Good At',
    color: 'from-cyan-500 to-blue-600',
    content: 'I’m skilled at frontend development and turning ideas into real products.',
  },
  {
    title: '🌍 What the World Needs',
    color: 'from-green-500 to-emerald-600',
    content: 'The world needs platforms that support indie creators and give them visibility and feedback.',
  },
  {
    title: '💰 What I Can Be Paid For',
    color: 'from-yellow-500 to-orange-500',
    content: 'I can be paid for solving real problems through development and product thinking.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function CardsSection() {
  return (
    <motion.section
      className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto z-10 relative"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      variants={container} 
    >
      {cards.map((card, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className={`bg-gradient-to-br ${card.color} bg-opacity-10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10 hover:scale-[1.03] transition-transform`}
        >
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-100">{card.content}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
