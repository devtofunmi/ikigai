'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type Card = {
  title: string;
  color: string;
  content: string;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const cards: Card[] = [
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

export default function MyIkigaii() {
  return (
    <main className="min-h-screen bg-animated-gradient text-white font-sans px-6 py-12">
      {/* Header */}
      <motion.header
        className="text-center"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">M y Iki gai</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Code is my craft, but purpose is the fuel. Here’s how I’m aligning both.
        </p>
      </motion.header>

      {/* Cards Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 shadow-lg hover:scale-[1.03] transition-transform`}
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-100">{card.content}</p>
          </motion.div>
        ))}
      </section>

      {/* Reflect Section */}
      <motion.section
        className="mt-20 text-center max-w-2xl mx-auto"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <h3 className="text-2xl font-bold mb-4">Explore Your Own Ikigai</h3>
        <p className="text-gray-300 mb-6">
          Take a moment to reflect or journal your own Ikigai. You don’t have to figure it all out — just start from what you know:
        </p>
        <ul className="space-y-4 text-left text-gray-200 text-lg">
          <li>🌀 <strong>What do you love?</strong></li>
          <li>🛠️ <strong>What are you good at?</strong></li>
          <li>🌍 <strong>What does the world need?</strong></li>
          <li>💰 <strong>What can you get paid for?</strong></li>
        </ul>
      </motion.section>

      {/* Share Section */}
      <motion.section
        className="mt-20 text-center"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <h4 className="text-lg text-gray-300 mb-4">📸 Shareable Preview</h4>
        <img
          src="/myikigaii.png"
          alt="Ikigai Social Preview"
          className="mx-auto rounded-xl border border-gray-800 shadow-lg max-w-full h-auto"
        />
        <p className="text-sm text-gray-400 mt-2 mb-6">
          Perfect for sharing on X or LinkedIn ✨
        </p>

        <div className="flex justify-center gap-4">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              'Here’s my Ikigai – what I love, what I’m good at, what the world needs, and what I can get paid for. ✨\n\n#MyIkigai #buildinpublic\n\n'
            )}&url=${encodeURIComponent('https://myikigaii.netlify.app/myikigaii')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
          >
            Share on X
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              'https://myikigaii.netlify.app/myikigaii'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
          >
            Share on LinkedIn
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Crafted with purpose ✨ by You.
      </footer>
    </main>
  );
}