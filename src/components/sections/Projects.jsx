import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import FadeIn from "../ui/FadeIn";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    // PERBAIKAN: Menghapus shadow raksasa yang menyiksa GPU
    <section
      id="projects"
      className="py-32 px-4 md:px-8 relative z-20 bg-zinc-950 border-t border-zinc-800/80"
    >
      <div className="max-w-350 mx-auto px-6 md:px-16 lg:px-32">
        <SectionTitle subtitle="Selected Projects" title="Case studies" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 md:mt-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative z-10 w-full will-change-transform"
            >
              <FadeIn delay={0.1 + index * 0.1} direction="up">
                <Card
                  title={project.title}
                  year={project.year}
                  image={project.image}
                  link={project.link}
                />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
