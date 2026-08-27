import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";

export default function Contact() {
  const containerRef = useRef(null);

  // Memantau pergerakan scroll HANYA saat bagian Contact ini muncul di layar
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efek parallax halus: Gambar akan bergerak sedikit dari atas ke bawah
  const yBg = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <section
      id="contact"
      ref={containerRef}
      // Mengurangi padding (tinggi) dari py-32 menjadi py-16 md:py-24
      className="py-16 md:py-24 px-4 md:px-8 relative z-10 border-t border-zinc-800/50 overflow-hidden"
    >
      {/* 1. GAMBAR BACKGROUND DENGAN ANIMASI PARALLAX ALA HERO SECTION */}
      {/* h-[120%] dan -top-[10%] memastikan gambar memiliki ruang ekstra agar tepi gambarnya tidak terpotong saat bergerak */}
      <motion.div
        className="absolute top-[-10%] left-0 w-full h-[120%] bg-center bg-cover bg-no-repeat z-0 will-change-transform"
        style={{
          // Pastikan path gambarnya sesuai (menggunakan path yang aman untuk build Vercel seperti di Hero)
          backgroundImage: "url('assets/images/baground.webp')",
          y: yBg,
        }}
      />

      {/* 2. DARK OVERLAY */}
      {/* Diaktifkan kembali dengan transparansi /85 agar seragam dengan Hero section */}
      <div className="absolute inset-0 bg-zinc-950/85 z-0"></div>

      {/* KONTEN UTAMA (Relative z-10 agar berada di atas gambar background) */}
      <div className="max-w-350 mx-auto relative z-10">
        <SectionTitle subtitle="Mari Berkolaborasi" title="Get In Touch" />

        {/* Mengurangi margin-top di sini juga agar lebih proporsional */}
        <div className="mt-8 md:mt-12 max-w-4xl">
          <FadeIn delay={0.1} direction="up">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              I'm not just here to design products;
              <br className="hidden md:block" />
              I'm here to connect with people.
            </h3>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Feel free to contact me for any questions, feedback, or further
              assistance. Kotak masuk saya selalu terbuka.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} direction="up">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 pt-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ervinkhoirus@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-zinc-950 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Let's talk
              </a>

              <div className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-medium">
                <a
                  href="https://linkedin.com/in/ervin-khoirus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors relative group"
                >
                  LinkedIn
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a
                  href="https://dribbble.com/ervinkhoirus"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors relative group"
                >
                  Dribbble
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a
                  href="https://instagram.com/omcipakproject"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors relative group"
                >
                  Instagram
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>

                <a
                  href="https://github.com/arexsxx"
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors relative group"
                >
                  GitHub
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
