import { motion } from "framer-motion";
import FadeIn from "../ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="relative z-10">
      {/* max-w saya sesuaikan jadi [1400px] agar tidak error di Tailwind */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32">
        {/* HEADER SECTION (Aksen Biru) */}
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.05] mb-12 md:mb-28 max-w-5xl">
            Desain yang baik bukan sekadar tentang estetika,{" "}
            <span className="text-blue-500">
              melainkan seberapa baik ia menyelesaikan masalah.
            </span>
          </h1>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* KOLOM KIRI: FOTO PROFIL & MARQUEE LOGO */}
          {/* h-full penting agar kolom kiri memanjang ke bawah mengikuti teks di kanan */}
          <div className="lg:col-span-5 h-full relative">
            {/* PERBAIKAN MUTLAK: sticky HARUS ditaruh di div murni paling luar */}
            <div className="sticky top-32">
              {/* FadeIn HARUS berada di DALAM sticky, tidak boleh sebaliknya! */}
              <FadeIn direction="up" delay={0.2}>
                <div className="relative z-10 group">
                  {/* Efek Glow Biru di belakang foto */}
                  <div className="absolute -inset-4 bg-blue-500/20 blur-[80px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  {/* CONTAINER FOTO & LOGO BERJALAN */}
                  <div className="relative z-10 flex flex-col shadow-2xl shadow-black/50 rounded-xl md:rounded-2xl overflow-hidden border border-zinc-800/50">
                    <img
                      src="assets/images/me.webp"
                      alt="Ervin Khoirus Syifa' Uddin"
                      className="w-full aspect-3/4 md:aspect-4/5 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />

                    {/* MARQUEE LOGO PROJECT BERJALAN PELAN */}
                    <div className="bg-zinc-950/80 backdrop-blur-md py-5 md:py-6 overflow-hidden flex border-t border-zinc-800/80 group-hover:border-blue-500/30 transition-colors">
                      <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                          ease: "linear",
                          duration: 24,
                          repeat: Infinity,
                        }}
                        className="flex w-max shrink-0 items-center"
                      >
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="flex gap-12 md:gap-16 items-center px-6 md:px-8 shrink-0"
                          >
                            <img
                              src="assets/logo/logo brocleanx.webp"
                              alt="Brocleanx"
                              className="h-6 md:h-7 object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                            />
                            <img
                              src="assets/logo/logo kawaan.webp"
                              alt="Kawaan"
                              className="h-6 md:h-7 object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                            />
                            <img
                              src="assets/logo/daurcuan-logo.webp"
                              alt="DaurCuan"
                              className="h-6 md:h-7 object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                            />
                            <img
                              src="assets/logo/logo-rent.webp"
                              alt="Rentverse"
                              className="h-6 md:h-7 object-contain opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* KOLOM KANAN: KONTEN, SKILLS, DAN AWARDS (TIDAK ADA YANG DIUBAH) */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-4">
            <FadeIn direction="up" delay={0.3}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                UI/UX & Product Designer
              </h2>
              <p className="text-zinc-400 text-[17px] leading-relaxed mb-6 hover:text-zinc-300 transition-colors">
                saya Ervin Khoirus. Lulusan Informatika yang berfokus merancang
                antarmuka intuitif dan mewujudkannya menjadi produk digital yang
                fungsional. Saya mengkhususkan diri pada desain{" "}
                <i>
                  UI/UX, pengembangan web frontend, serta aplikasi mobile
                  berbasis Flutter
                </i>
                .
              </p>
              <p className="text-zinc-400 text-[17px] leading-relaxed mb-12 hover:text-zinc-300 transition-colors">
                Berbekal pengalaman mengerjakan beberapa project dan kompetisi
                tingkat nasional selama kuliah, saya terbiasa menangani alur
                produk dari riset pengguna, desain, hingga penulisan kode
                menggunakan <i>React, Next.js, dan Flutter.</i>{" "}
              </p>

              <a
                href="/assets/doc/ervin_res.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-zinc-950 font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 mb-24"
              >
                Download Resume
              </a>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="grid grid-cols-2 gap-12 mb-24">
                <div className="group">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-6 border-b border-zinc-800/50 group-hover:border-blue-500/50 transition-colors pb-4">
                    Design
                  </h3>
                  <ul className="space-y-4 text-zinc-300 text-[15px]">
                    <li>Figma & Photoshop</li>
                    <li>Design System</li>
                    <li>Auto Layout & Variables</li>
                    <li>Prototyping</li>
                    <li>User Flows</li>
                  </ul>
                </div>
                <div className="group">
                  <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-6 border-b border-zinc-800/50 group-hover:border-blue-500/50 transition-colors pb-4">
                    Development
                  </h3>
                  <ul className="space-y-4 text-zinc-300 text-[15px]">
                    <li>React.js & Next.js</li>
                    <li>Flutter </li>
                    <li>Tailwind CSS</li>
                    <li>Python</li>
                    <li>HTML & CSS</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-[0.2em] mb-8 border-b border-zinc-800/50 pb-4">
                Awards & Recognition
              </h3>

              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-zinc-800/30 py-6 group hover:bg-blue-900/10 transition-colors px-4 -mx-4 rounded-lg">
                  <span className="text-zinc-500 font-medium md:w-24 shrink-0 text-sm">
                    Jan 2026
                  </span>
                  <div>
                    <h4 className="text-zinc-200 font-semibold text-lg md:text-xl mb-1 group-hover:text-blue-400 transition-colors">
                      Juara 2 – Kompetisi Nasional UI/UX
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      Universitas Atma Jaya Yogyakarta
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-zinc-800/30 py-6 group hover:bg-blue-900/10 transition-colors px-4 -mx-4 rounded-lg">
                  <span className="text-zinc-500 font-medium md:w-24 shrink-0 text-sm">
                    Jan 2026
                  </span>
                  <div>
                    <h4 className="text-zinc-200 font-semibold text-lg md:text-xl mb-1 group-hover:text-blue-400 transition-colors">
                      Best Innovation – Kompetisi Nasional UI/UX
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      Techcomfest 2026 Politeknik Negeri Semarang
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 border-b border-zinc-800/30 py-6 group hover:bg-blue-900/10 transition-colors px-4 -mx-4 rounded-lg">
                  <span className="text-zinc-500 font-medium md:w-24 shrink-0 text-sm">
                    Sep 2025
                  </span>
                  <div>
                    <h4 className="text-zinc-200 font-semibold text-lg md:text-xl mb-1 group-hover:text-blue-400 transition-colors">
                      Juara 1 – Kompetisi Nasional UI/UX
                    </h4>
                    <p className="text-zinc-500 text-sm">
                      Universitas Muhammadiyah Tangerang
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
