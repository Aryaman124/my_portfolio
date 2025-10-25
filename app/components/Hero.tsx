"use client";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#0f1115] overflow-hidden">
      {/* --- Background gradient + subtle glows --- */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#121721] via-[#0e141d] to-[#0b1118]" />
      <div className="pointer-events-none absolute -z-20 -top-32 -left-32 h-[55vw] w-[55vw] rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="pointer-events-none absolute -z-20 -bottom-40 -right-40 h-[60vw] w-[60vw] rounded-full bg-fuchsia-500/12 blur-3xl" />

      {/* Animated background blobs */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 80, 40, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl"
        animate={{ x: [0, -60, 20, 0], y: [0, -80, -40, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Profile photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-lg shadow-cyan-500/30">
          <Image
            src="/PHOTO-2025-10-01-22-06-56.jpg"
            alt="Aryaman Sarcar"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* University line */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg md:text-2xl font-semibold text-cyan-300/90 text-center"
      >
        B.S. in Computer Engineering &amp; Computer Science at{" "}
        <span className="text-cyan-400 font-bold">Northeastern University ’27</span>
      </motion.p>

      {/* Typing intro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4"
      >
        <TypingText
          text="👋 Hi I&apos;m Aryaman Sarcar"
          className="text-5xl md:text-7xl font-extrabold text-white"
          speed={70}
          startDelay={250}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-4 text-gray-300 max-w-2xl mx-auto shimmer-text"
      >
        Welcome to my Personal Portfolio!
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-8 flex justify-center gap-4 flex-wrap"
      >
        {/* Contact */}
        <a
          href="#contact"
          className="rounded-xl border border-white/20 text-white px-5 py-2.5 font-medium hover:bg-white/5 transition"
        >
          Contact
        </a>

        {/* Resume */}
        <a
          href="/AryamanSarcar_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-cyan-500/90 text-gray-950 px-5 py-2.5 font-medium hover:bg-cyan-400 transition"
        >
          My Resume
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Aryaman124"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-xl bg-gray-800 text-white px-5 py-2.5 font-medium hover:bg-gray-700 transition"
        >
          {/* GitHub Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
            -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
            -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0
            .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04
            2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
            0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
            2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
      </motion.div>
    </section>
  );
}
