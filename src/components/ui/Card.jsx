import { Link } from 'react-router-dom';

export default function Card({ title, year, image, link }) {
  return (
    <Link 
      to={link || "#"} 
      className="group relative w-full aspect-4/5 lg:aspect-3/4 block overflow-hidden bg-zinc-900 cursor-pointer"
    >
      {/* IMAGE CONTAINER */}
      <div className="absolute inset-0 w-full h-full transform group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]">
         <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/80 transition-colors duration-700 ease-out"></div>

      {/* TYPOGRAPHY CONTENT */}
      <div className="absolute top-0 left-0 p-8 md:p-12 z-10 flex flex-col justify-start w-full h-full">
        
        {/* Tahun / Kategori */}
        <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-500 font-medium tracking-[0.2em] text-[11px] md:text-xs mb-4">
          {year}
        </span>

        {/* Judul Proyek (Menghapus mb-6 menjadi mb-0 agar tidak terlalu jauh dengan teks View Case Study) */}
        <h3 className="text-2xl md:text-4xl font-bold text-white leading-[1.2] max-w-sm">
          {title}
        </h3>

        {/* 
          ANIMASI "VIEW CASE STUDY" DIPINDAH KE SINI 
          Tepat di bawah judul. Class mt-auto dihapus dan diganti dengan mt-6 
          sebagai jarak (margin top) dari judul utama.
        */}
        <div className="overflow-hidden mt-6">
          <div className="flex items-center gap-3 text-white font-medium text-sm md:text-base translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75">
            <span>View Case Study</span>
            <span className="text-xl leading-none font-light">→</span>
          </div>
        </div>
        
      </div>
    </Link>
  );
}