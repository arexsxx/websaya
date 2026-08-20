import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn from "../ui/FadeIn";

export default function Hero() {
  const { scrollY } = useScroll();

  // Efek parallax saat hero tertutup oleh section bawahnya
  const yBg = useTransform(scrollY, [0, 800], [0, 150]);

  // PERBAIKAN: Mengubah nilai positif menjadi NEGATIF agar elemen melayang naik ke atas
  const yText = useTransform(scrollY, [0, 500], [0, -250]);
  const yWatermark = useTransform(scrollY, [0, 500], [0, -150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: 0 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="sticky top-0 h-screen w-full overflow-hidden z-0"
    >
      <motion.div
        className="absolute inset-0 w-full h-[120%] bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('assets/images/bg.webp')",
          y: yBg,
        }}
      />

      <div className="absolute inset-0 bg-zinc-950/85 z-0"></div>

      {/* 
        PERBAIKAN: div biasa diubah menjadi motion.div 
        Lalu ditambahkan properti style agar ikut naik (yWatermark) dan memudar (opacityText)
      */}
      <motion.div
        className="absolute top-0 left-0 w-full pt-28 md:pt-32 px-6 md:px-16 lg:px-32 pointer-events-none z-0"
        style={{ y: yWatermark, opacity: opacityText }}
      >
        <img
          src="assets/logo/logo-white.webp"
          alt="Hero Image"
          className="w-full h-auto object-cover opacity-3"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-0 w-full pb-16 md:pb-20 lg:pb-28 px-6 md:px-16 lg:px-32 z-10"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="max-w-xl">
          <FadeIn delay={0.1} direction="up" triggerOnLoad={true}>
            <p className="text-zinc-400 font-medium mb-5 tracking-[0.3em] uppercase text-[9px] md:text-[10px]">
              Ervin Khoirus
            </p>
          </FadeIn>

          <FadeIn delay={0.2} direction="up" triggerOnLoad={true}>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-white mb-6 tracking-tight leading-[1.05]">
              UI/UX and Product <br className="hidden md:block" />
              Designer.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" triggerOnLoad={true}>
            <p className="text-zinc-400 text-[15px] md:text-base leading-relaxed mb-10">
              Saya mengkhususkan diri pada desain UI/UX, pengembangan web
              frontend, serta aplikasi mobile berbasis Flutter. Berbekal
              pengalaman mengerjakan beberapa project dan kompetisi tingkat
              nasional selama kuliah, saya terbiasa menangani alur produk dari
              riset pengguna, desain, hingga penulisan kode menggunakan React,
              Next.js, dan Flutter.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} direction="up" triggerOnLoad={true}>
            <div className="flex items-baseline gap-3 text-[13px] md:text-[15px]">
              <a
                href="#projects"
                onClick={(e) => handleAnchorClick(e, "projects")}
                className="font-bold text-white hover:text-blue-500 transition-colors"
              >
                View Projects
              </a>
              <span className="text-zinc-500 font-normal italic text-xs px-1">
                or
              </span>
              <Link
                to="/about"
                className="font-bold text-white hover:text-blue-500 transition-colors"
              >
                Read About Me
              </Link>
            </div>
          </FadeIn>
        </div>
      </motion.div>

      <div className="absolute right-6 md:right-12 lg:right-16 top-0 h-full py-16 md:py-20 flex flex-col justify-between items-center z-20 pointer-events-none">
        <div className="hidden md:block h-24"></div>

        <FadeIn
          delay={0.6}
          direction="up"
          triggerOnLoad={true}
          className="hidden md:flex flex-col gap-8 pointer-events-auto"
        >
          <a
            href="https://linkedin.com/in/ervin-khoirus"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-blue-500 hover:scale-110 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="https://dribbble.com/ervinkhoirus"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-blue-500 hover:scale-110 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com/omcipakproject"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-blue-500 hover:scale-110 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </FadeIn>

        <FadeIn
          delay={0.8}
          direction="up"
          triggerOnLoad={true}
          className="flex flex-col items-center gap-4 mt-auto"
        >
          <span
            className="text-zinc-500 text-[9px] md:text-[10px] font-medium tracking-[0.3em] uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
          <div className="w-px h-12 md:h-20 bg-zinc-800 relative overflow-hidden">
            <motion.div
              className="w-full h-full bg-blue-500 absolute top-0 left-0"
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
