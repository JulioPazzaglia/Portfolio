import Navbar from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/about/SkillsSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex flex-col">
        <Hero />
        <ProjectGrid />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
