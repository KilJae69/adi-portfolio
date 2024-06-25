"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";

import ProjectCard from "./ProjectCard";

import { useSectionInView } from "@/lib/hooks";

export default function ProjectsSection() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
