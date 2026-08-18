import { useEffect } from "react";
import About from "../components/sections/About";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative pt-32 pb-32">
      {/* FIXED BACKGROUND IMAGE */}
      <div
        className="fixed inset-0 w-full h-full bg-center bg-cover bg-no-repeat z-0"
        style={{ backgroundImage: "url('/assets/images/bg.webp')" }}
      ></div>

      {/* DARK OVERLAY (Sangat penting agar teks putih tetap terbaca) */}
      <div className="fixed inset-0 bg-zinc-950/85 z-0"></div>

      {/* KONTEN ABOUT */}
      <div className="relative z-10">
        <About />
      </div>
    </div>
  );
}
