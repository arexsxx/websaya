export default function SectionTitle({ title, subtitle }) {
  return (
    // Dibuat rata kiri dengan menghapus items-center & text-center
    // Menambahkan items-start dan text-left
    <div className="mb-16 md:mb-24 w-full flex flex-col items-start text-left">
      {/* 
        SUBTITLE (Teks Kecil di Atas) 
        Dibuat abu-abu, uppercase, dan jarak antar hurufnya sangat renggang (tracking-[0.3em])
      */}
      {subtitle && (
        <p className="text-zinc-500 font-semibold mb-4 md:mb-5 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs">
          {subtitle}
        </p>
      )}

      {/* 
        TITLE (Judul Utama di Bawah)
        Dibuat sangat besar, tebal, dan jarak antar hurufnya rapat (tracking-tight)
      */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
    </div>
  );
}
