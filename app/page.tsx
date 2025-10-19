"use client";
import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ProjectsGrid from "./components/ProjectsGrid";
import Reveal from "./components/Reveal";

export default function Home() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <main className="bg-gray-950 min-h-screen fade-in">
      <Navbar />
      <Hero />

      <Section id="about" title="About">
        <Reveal>
          <p className="text-gray-300">
            I’m Aryaman, a student passionate about software and building
            data-driven projects.
          </p>
        </Reveal>
      </Section>

      <Section id="projects" title="Projects">
        <ProjectsGrid />
      </Section>

      <Section id="contact" title="Contact">
        <Reveal>
          <p className="text-gray-300">
            Email: you@example.com ·{" "}
            <a
              href="https://github.com/youruser"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/aryaman-sarcar-13b44332a/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              href="/AryamanSarcar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              Resume
            </a>
          </p>
        </Reveal>
      </Section>
    </main>
  );
}
