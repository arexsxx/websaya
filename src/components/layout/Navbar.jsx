import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const location = useLocation();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  // FUNGSI BARU: Referensi untuk membungkus seluruh elemen navbar
  const navRef = useRef(null);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FUNGSI BARU: Efek untuk mendeteksi klik di luar area Navbar saat menu mobile terbuka
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen]);

  // Fungsi khusus untuk menu anchor (Projects & Contact)
  const handleAnchorClick = (e, targetId) => {
    setIsMobileOpen(false);

    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { offset: 0 });
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // FUNGSI BARU: Fungsi khusus untuk menangani klik Logo
  const handleLogoClick = (e) => {
    setIsMobileOpen(false); // Tutup menu mobile jika sedang terbuka

    // Jika sedang di halaman Home, paksa scroll kembali ke paling atas (0)
    if (isHome) {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    // Jika tidak di Home, biarkan <Link to="/"> bekerja normal kembali ke Home
  };

  return (
    <nav
      // Mendaftarkan referensi di sini untuk mendeteksi area navbar
      ref={navRef}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 py-4"
          : "bg-transparent py-6 md:py-10"
      }`}
    >
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32 flex justify-between items-center">
        {/* LOGO */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl font-bold text-white tracking-tighter z-50 cursor-pointer"
        >
          <img
            src="/assets/logo/logo-white.webp"
            alt="Logo"
            className="h-6 w-auto object-contain"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {!isHome && (
            <Link
              to="/"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </Link>
          )}

          <Link
            to="/about"
            className={`transition-colors ${pathname === "/about" ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            About me
          </Link>

          <Link
            to="/#projects"
            onClick={(e) => handleAnchorClick(e, "projects")}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/#contact"
            onClick={(e) => handleAnchorClick(e, "contact")}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* TOMBOL HAMBURGER MOBILE */}
        <button
          className="md:hidden text-zinc-400 hover:text-white focus:outline-none z-50 transition-colors p-1 -mr-1"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* DROPDOWN MENU MOBILE */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6 text-base font-medium shadow-2xl">
          {!isHome && (
            <Link
              to="/"
              onClick={() => setIsMobileOpen(false)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Home
            </Link>
          )}

          <Link
            to="/about"
            onClick={() => setIsMobileOpen(false)}
            className={`transition-colors ${pathname === "/about" ? "text-white" : "text-zinc-400 hover:text-white"}`}
          >
            About me
          </Link>

          <Link
            to="/#projects"
            onClick={(e) => handleAnchorClick(e, "projects")}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/#contact"
            onClick={(e) => handleAnchorClick(e, "contact")}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
