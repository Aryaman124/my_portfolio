"use client";
import { useState } from "react";
import Loader from "./components/Loader";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetToKnowMe from "./components/GetToKnowMe";
import Skills_Page from "./components/Skills_Page";
import ProjectsGrid from "./components/ProjectsGrid";
import Contact from "./components/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      <main className="relative min-h-screen">
        <Background />
        <Navbar />
        <Hero />

        {/* About Section */}
        <About />

        {/* Get to Know Me — bento grid */}
        <GetToKnowMe />

        {/* Skills / Experience Section */}
        <Skills_Page />

        {/* Projects Section */}
        <ProjectsGrid />

        {/* Contact Section */}
        <Contact />
      </main>
    </>
  );
}
