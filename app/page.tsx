"use client";
import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Section from "./components/Section";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/Contact"; // ✅ new import

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  return (
    <main className="bg-gray-950 min-h-screen fade-in">
      <Navbar />
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <ProjectsGrid />
      </Section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
