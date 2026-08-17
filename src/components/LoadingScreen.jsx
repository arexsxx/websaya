export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950">
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Lingkaran dasar (track) berwarna abu-abu gelap */}
        <div className="absolute inset-0 rounded-full border-4 border-zinc-800"></div>

        {/* Lingkaran biru yang berputar dan memiliki efek glow */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

        {/* Opsional: Titik kecil di tengah agar lebih manis */}
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
