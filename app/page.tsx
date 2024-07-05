import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import IntroSection from "@/components/IntroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectionDivider from "@/components/SectionDivider";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
