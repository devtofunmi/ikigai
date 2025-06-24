'use client';

import AnimatedBg from "@/components/AnimatedBg";
import CardsSection from "@/components/CardsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import QuoteCarousel from "@/components/QuoteCarousel";
import ReflectionSection from "@/components/ReflectionSection";
import ShareSection from "@/components/ShareSection";


export default function MyIkigaii() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-12 relative overflow-hidden">
      <AnimatedBg />
      <HeroSection />
      <div className="h-24 bg-gradient-to-b from-transparent to-black" />
      <CardsSection />
      <div className="h-24 bg-gradient-to-b from-black to-zinc-900" />
      <ReflectionSection />
      <section className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-white">Inspiring Quotes</h3>
        <QuoteCarousel />
      </section>
      <ShareSection />
      <Footer />
    </main>
  );
}
