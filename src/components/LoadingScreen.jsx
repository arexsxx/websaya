import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    // z-[100] memastikan loading screen selalu berada paling atas
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* LOGO GAMBAR MUNCUL DARI BAWAH (Menggantikan Teks Sebelumnya) */}
        <div className="overflow-hidden flex items-center justify-center py-2">
          <motion.img
            src="assets/logo/logo-white.webp" // Menggunakan path logo Anda
            alt="Logo Ervin"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* PROGRESS BAR */}
        <div className="w-48 md:w-64 h-0.5 bg-zinc-900 overflow-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </div>

        {/* TEKS INDIKATOR KECIL */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-zinc-500 text-[9px] md:text-[10px] font-semibold tracking-[0.4em] uppercase"
        >
          Loading Experience
        </motion.span>
      </div>
    </div>
  );
}
