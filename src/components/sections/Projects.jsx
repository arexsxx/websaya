import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import FadeIn from "../ui/FadeIn";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    // Tetap mempertahankan z-20 dan shadow atas untuk efek "Curtain Reveal" dari Hero
    <section
      id="projects"
      className="py-32 px-4 md:px-8 relative z-20 bg-zinc-950 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-zinc-900"
    >
      <div className="max-w-350 mx-auto">
        <SectionTitle subtitle="Selected Projects" title="Case studies" />

        {/* Jarak grid dibuat sejajar tanpa offset zig-zag */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 md:mt-24">
          {projects.map((project, index) => (
            <div key={project.id} className="relative group">
              {/* EFEK GLOW TIPIS */}
              {/* Cahaya statis yang sangat lembut agar tidak terlalu gelap, dan akan sedikit lebih terang saat di-hover */}
              <div className="absolute -inset-2 md:-inset-4 bg-zinc-600/10 group-hover:bg-blue-500/15 rounded-4xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-700 z-0"></div>

              {/* KONTEN KARTU */}
              <div className="relative z-10">
                <FadeIn delay={0.1 + index * 0.1} direction="up">
                  <Card
                    title={project.title}
                    year={project.year}
                    image={project.image}
                    link={project.link}
                  />
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
