import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  const { scrollY } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Framer Motion Hook untuk mendeteksi posisi scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Memunculkan tombol jika sudah di-scroll lebih dari 600px (melewati Hero)
    if (latest > 600) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  // Fungsi untuk kembali ke atas menggunakan Lenis Smooth Scroll
  const scrollToTop = () => {
    // Memanfaatkan instance Lenis yang kita simpan di window (dari App.tsx)
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      
      {/* --- TOMBOL KEMBALI KE ATAS (VERSI CUSTOM ANDA) --- */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 w-12 h-12 md:w-14 md:h-14 bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-colors shadow-2xl group cursor-pointer"
            aria-label="Back to top"
          >
            {/* SVG Panah ke Atas (dengan efek animasi kecil saat di-hover) */}
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
              className="transform group-hover:-translate-y-1 transition-transform duration-300"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Render Section Halaman Home */}
      <Hero />
      <Projects />
      <Contact />
      
    </div>
  );
}