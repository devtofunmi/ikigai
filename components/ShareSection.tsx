'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const ShareSection = () => {
  return (
    <motion.section
      className="mt-20 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      variants={fadeIn}
    >
      <h4 className="text-lg text-gray-300 mb-4">📸 Shareable Preview</h4>
      <motion.img
        src="/myikigaii.png"
        alt="Ikigai Social Preview"
        className="mx-auto rounded-xl border border-gray-800 shadow-lg max-w-full w-[600px] h-auto"
        variants={zoomIn}
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
  );
};

export default ShareSection;