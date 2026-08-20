import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 pt-24 md:pt-32 pb-8 overflow-hidden border-t border-zinc-900/50">
      {/* EFEK CAHAYA (GLOW) DI DASAR FOOTER */}
      {/* Glow biru raksasa ini akan memberikan kesan megah dari dasar halaman */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-100 bg-blue-600/10 rounded-t-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32 relative z-10">
        {/* BIG TYPOGRAPHY HERO FOOTER */}
        {/* Teks raksasa yang sangat interaktif saat di-hover */}
        <div className="flex flex-col mb-16 md:mb-24 group cursor-default w-fit">
          <h2 className="text-[13vw] lg:text-[11vw] font-black text-white leading-[0.85] tracking-tighter uppercase transition-transform duration-700 ease-out group-hover:translate-x-4">
            Ervin
          </h2>
          <h2 className="text-[13vw] lg:text-[11vw] font-black text-transparent [-webkit-text-stroke:1px_#52525b] md:[-webkit-text-stroke:2px_#52525b] leading-[0.85] tracking-tighter uppercase transition-all duration-700 ease-out group-hover:text-blue-500/10 group-hover:[-webkit-text-stroke:1px_#3b82f6] md:group-hover:[-webkit-text-stroke:2px_#3b82f6] group-hover:translate-x-8 lg:group-hover:translate-x-12 ml-4 md:ml-12">
            Khoirus
          </h2>
        </div>

        {/* GRID INFORMASI & LINKS ALA EDITORIAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-zinc-800/50 pt-12 mb-20">
          {/* Kolom 1: Status / Lokasi (Mengambil ruang lebih besar) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
                Status
              </p>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-sm">
                Saat ini sedang berada di Yogyakarta, Indonesia. Selalu terbuka untuk
                mendiskusikan peluang proyek, kolaborasi desain, dan
                pengembangan antarmuka web maupun mobile.
              </p>
            </div>
          </div>

          {/* Kolom 2: Spacer kosong untuk jarak di layar besar */}
          <div className="hidden lg:block lg:col-span-3"></div>

          {/* Kolom 3: Navigation */}
          <div className="md:col-span-3 lg:col-span-2">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Menu
            </p>
            <ul className="flex flex-col gap-4 text-zinc-300 font-medium">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Socials */}
          <div className="md:col-span-3 lg:col-span-2">
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
              Socials
            </p>
            <ul className="flex flex-col gap-4 text-zinc-300 font-medium">
              <li>
                <a
                  href="https://linkedin.com/in/ervin-khoirus"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com/ervinkhoirus"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/omcipakproject"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arexsxx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 transition-colors inline-block hover:translate-x-1 transform duration-300"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR / COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-zinc-800/50 pt-8 pb-4 text-zinc-600 text-xs md:text-sm font-medium">
          <p>
            © {new Date().getFullYear()} Ervin Khoirus Syifa' Uddin. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="text-zinc-400">coffee</span>
            <span>&</span>
            <span className="text-zinc-400">love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
