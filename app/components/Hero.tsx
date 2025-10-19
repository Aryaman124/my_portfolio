"use client";
import { motion } from "framer-motion";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-950 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 80, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl"
        animate={{ x: [0, -60, 20, 0], y: [0, -80, -40, 0] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center px-6">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-widest text-cyan-300/90"
        >
          SOFTWARE BASED PROJECTS
        </motion.p>

        {/* Headline — typed */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2"
        >
          <TypingText
            text="👋 Hi I'm Aryaman Sarcar"
            className="text-5xl md:text-7xl font-extrabold text-white"
            speed={45}
            startDelay={250}
          />
        </motion.div>

        {/* Subtitle — shimmer style */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 text-gray-300 max-w-2xl mx-auto shimmer-text"
        >
          Welcome to my Personal Portfolio!
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          {/* Projects */}
          <a
            href="#projects"
            className="rounded-xl bg-white text-gray-900 px-5 py-2.5 font-medium hover:opacity-90 transition"
          >
            View Projects
          </a>

          {/* Contact (scrolls to contact section) */}
          <a
            href="#contact"
            className="rounded-xl border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/5 transition"
          >
            Contact
          </a>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/aryaman-sarcar-13b44332a/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-[#0077b5] text-white px-5 py-2.5 font-medium hover:bg-[#006097] transition"
          >
            {/* LinkedIn icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.342-1.248-.821 0-1.359.538-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.174-.431.571-.878 1.237-.878.872 0 1.221.662 1.221 1.634v3.865h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193h.031v-1.03h-2.4c.031.662 0 7.225 0 7.225h2.4z" />
            </svg>
            LinkedIn
          </a>

          {/* Resume PDF */}
          <a
            href="/AryamanSarcar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-cyan-500/90 text-gray-950 px-5 py-2.5 font-medium hover:bg-cyan-400 transition"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
  
}