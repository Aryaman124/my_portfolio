"use client";
import { useState } from "react";
import Loader from "./components/Loader";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetToKnowMe from "./components/GetToKnowMe";
import Skills_Page from "./components/Skills_Page";
import Section from "./components/Section";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;

  return (
    <main className="relative min-h-screen fade-in">
      <Background />
      <Navbar />
      <Hero />

      {/* About Section */}
      <About />

      {/* Get to Know Me — bento grid */}
      <GetToKnowMe />

      {/* Skills / Experience Section */}
      <Skills_Page />  {/* ✅ your new section */}

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <ProjectsGrid />
      </Section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
