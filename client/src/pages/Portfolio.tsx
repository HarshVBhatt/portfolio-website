import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Portfolio() {
  return (
    <div className="bg-dark-bg text-gray-200 min-h-screen">
      <Navigation />
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-8 border-t border-metallic/30">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Harsh Bhatt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
