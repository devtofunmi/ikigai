'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const quotes = [
  {
    text: 'The meaning of life is to find your gift. The purpose of life is to give it away.',
    author: 'Pablo Picasso',
  },
  {
    text: 'When you discover your Ikigai, you unlock a life of purpose and flow.',
    author: 'Francesc Miralles',
  },
  {
    text: 'Don’t ask what the world needs. Ask what makes you come alive, and go do it.',
    author: 'Howard Thurman',
  },
  {
    text: 'Greatness comes from aligning passion, mission, profession, and vocation.',
    author: 'Ikigai Philosophy',
  },
];

export default function QuoteCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 10 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () =>
          (timeout = setTimeout(() => slider.next(), 4000));

        slider.on('created', nextTimeout);
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider mb-4 ">
        {quotes.map((quote, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide px-3 py-8 bg-white/5  border border-white/10 rounded-xl text-white backdrop-blur-sm shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl italic mb-4">“{quote.text}”</p>
            <p className="text-sm text-gray-400">— {quote.author}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {quotes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === idx ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </>
  );
}
