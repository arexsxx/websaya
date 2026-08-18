import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          const lenisInstance = (window as any).lenis;
          if (lenisInstance) {
            lenisInstance.scrollTo(element, { immediate: true });
          } else {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    } else {
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    // Menggunakan (window as any) untuk menghindari error TypeScript
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-zinc-950 selection:text-blue-200 flex flex-col relative">
      <ScrollHandler />
      <Navbar />

      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <div className="relative z-10 bg-zinc-950">
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
