import { Link } from 'react-router-dom';

export default function Card({ title, year, image, link }) {
  return (
    <Link 
      to={link || "#"} 
      // Tambahan `will-change-transform` di kontainer utama
      className="group relative w-full aspect-4/5 lg:aspect-3/4 block overflow-hidden bg-zinc-900 cursor-pointer will-change-transform"
    >
      {/* IMAGE CONTAINER */}
      <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform">
         <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/80 transition-colors duration-700 ease-out"></div>

      {/* TYPOGRAPHY CONTENT */}
      <div className="absolute top-0 left-0 p-8 md:p-12 z-10 flex flex-col justify-start w-full h-full">
        
        <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500 font-medium tracking-[0.2em] text-[11px] md:text-xs mb-4">
          {year}
        </span>

        <h3 className="text-2xl md:text-4xl font-bold text-white leading-[1.2] max-w-sm">
          {title}
        </h3>

        <div className="overflow-hidden mt-6">
          <div className="flex items-center gap-3 text-white font-medium text-sm md:text-base translate-y-0 opacity-100 md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75 will-change-transform">
            <span>View Case Study</span>
            <span className="text-xl leading-none font-light">→</span>
          </div>
        </div>
        
      </div>
    </Link>
  );
}