import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import { detailProjects } from '../data/detailproject';

export default function ProjectDetail() {
  const { id } = useParams();
  const { scrollYProgress, scrollY } = useScroll();
  
  // PERBAIKAN 1: Parallax diubah menggunakan persentase agar tidak pernah bocor (garis hitam)
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  
  const [showBackToTop, setShowBackToTop] = useState(false);
  const project = detailProjects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);
    return () => clearTimeout(timeout);
  }, [id]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 600) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  });

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/#projects" className="text-blue-500 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-24 relative z-10">
      
      {/* FAB BACK TO TOP */}
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
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-y-1 transition-transform duration-300">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* HEADER & METADATA */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32 pt-32 pb-12 md:pb-16 flex flex-col">
        <FadeIn direction="up" delay={0.1}>
          <Link to="/#projects" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium tracking-widest uppercase mb-12 group">
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-[1.05] max-w-4xl">
            {project.title}
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mt-16 md:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800/50 pt-8">
            <div><p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] mb-2">Role</p><p className="text-zinc-300 font-medium text-sm">{project.role}</p></div>
            <div><p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] mb-2">Timeline</p><p className="text-zinc-300 font-medium text-sm">{project.timeline}</p></div>
            <div><p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] mb-2">Tech Stack</p><p className="text-zinc-300 font-medium text-sm">{project.tech}</p></div>
            <div><p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] mb-2">Platform</p><p className="text-zinc-300 font-medium text-sm">{project.platform}</p></div>
          </div>
        </FadeIn>
      </div>

      {/* HERO IMAGE LENGKUNG */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32 mb-24 md:mb-32">
        <FadeIn direction="up" delay={0.3}>
          {/* PERBAIKAN 2: Aspect ratio diubah (aspect-[16/9]) agar gambarnya lebih tinggi, tidak gepeng */}
          <div className="w-full aspect-4/3 md:aspect-16/10 lg:aspect-video overflow-hidden relative rounded-2xl md:rounded-4xl border border-zinc-800/80 bg-zinc-900 shadow-2xl">
            <motion.div 
              // PERBAIKAN 3: h-[150%] dan -top-[25%] mencegah garis hitam saat di-scroll
              className="absolute top-[-25%] left-0 w-full h-[150%] bg-center bg-cover bg-no-repeat"
              style={{ 
                backgroundImage: `url('${project.heroImage}')`,
                y: yImage
              }}
            />
            <div className="absolute inset-0 bg-zinc-950/10 pointer-events-none"></div>
          </div>
        </FadeIn>
      </div>

      {/* STRUKTUR KONTEN PREMIUM CASE STUDY */}
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32">
        
        {/* OVERVIEW */}
        <FadeIn direction="up" className="max-w-4xl mb-24 md:mb-32">
          <h3 className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-xs mb-6">01 / Overview</h3>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] text-zinc-200 tracking-tight">
            {project.overview}
          </p>
        </FadeIn>

        {/* PROBLEM & APPROACH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 md:mb-48 border-t border-zinc-800/50 pt-12">
          <FadeIn direction="up">
            <h3 className="text-zinc-500 font-semibold tracking-[0.2em] uppercase text-xs mb-6">02 / The Problem</h3>
            <p className="text-zinc-300 text-lg leading-relaxed">{project.problem}</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h3 className="text-zinc-500 font-semibold tracking-[0.2em] uppercase text-xs mb-6">03 / The Approach</h3>
            <p className="text-zinc-300 text-lg leading-relaxed">{project.approach}</p>
          </FadeIn>
        </div>

        {/* FITUR UTAMA (Layout Selang-seling Kiri & Kanan) */}
        <div className="flex flex-col gap-24 md:gap-40 mb-24">
          <FadeIn direction="up">
            <h3 className="text-blue-500 font-semibold tracking-[0.2em] uppercase text-xs border-b border-zinc-800/50 pb-6 mb-12">
              04 / Key Features
            </h3>
          </FadeIn>

          {project.features && project.features.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              // Jarak horizontal (gap) diperbesar agar layout bernapas lega
              <FadeIn key={index} direction="up" className={`flex flex-col gap-8 md:gap-16 lg:gap-24 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* PERBAIKAN 4: Lebar teks dikurangi jadi 40% (w-[40%]) */}
                <div className="w-full md:w-[40%] flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* PERBAIKAN 5: Lebar gambar diperbesar jadi 60% (w-[60%]) dan rasionya dibuat lebih lebar (lg:aspect-video) */}
                <div className="w-full md:w-[60%]">
                  <div className="w-full aspect-4/3 lg:aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50 shadow-xl group">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      // Tambahan efek zoom perlahan saat gambar disorot mouse (hover)
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

              </FadeIn>
            );
          })}
        </div>

      </div>

      {/* FOOTER NEXT PROJECT */}
      {project.nextProject && (
        <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32 mt-40">
          <div className="border-t border-zinc-800/50 pt-16 flex flex-col items-center text-center">
            <p className="text-zinc-500 font-semibold tracking-[0.3em] uppercase text-[10px] mb-6">Up Next</p>
            <Link to={project.nextProject.link} className="group">
              <h2 className="text-4xl md:text-6xl font-bold text-white group-hover:text-blue-500 transition-colors tracking-tight">
                {project.nextProject.name}
              </h2>
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}