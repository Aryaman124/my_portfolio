"use client";
import { motion } from "framer-motion";
import SplineRobot from "./SplineRobot";
import RotatingGreeting from "./RotatingGreeting";

// Single shared fade-up so the whole hero rises in one calm, staggered motion.
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Slow cyan glow as the base layer / mobile fallback */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-20 top-1/4 left-1/2 h-[70vw] w-[70vw] max-h-[700px] max-w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Reactive 3D robot — sits behind the text and follows the cursor.
          z-0 (not negative) so the canvas is a real hit-target and actually
          receives pointer events; the section can't swallow them.
          Shifted up so the robot's head clears the heading text. */}
      <div className="absolute inset-0 z-0 -translate-y-[16%]">
        <SplineRobot className="!h-full !w-full" />
      </div>

      {/* Scrim so the text stays readable over the robot. pointer-events-none
          so the cursor passes straight through to the robot beneath. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#0a0e14]/70 via-[#0a0e14]/30 to-[#0a0e14]/90"
      />

      {/* Content — pointer-events-none lets the cursor reach the robot through
          the text; interactive elements re-enable pointer events individually */}
      <div className="pointer-events-none relative z-10 flex flex-col items-center translate-y-[14vh]">
        {/* Rotating multilingual greeting — the focal point */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="flex min-h-[1.3em] items-center justify-center text-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
        >
          <RotatingGreeting />
        </motion.h1>

        {/* Tagline — one tight credential line */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-4 text-base md:text-lg text-cyan-300/90 font-medium drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]"
        >
          CS (AI) + Math Minor · Khoury College, Northeastern ’28
        </motion.p>

        {/* One-liner */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-xl text-gray-300 leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]"
        >
          I&apos;m an engineer focused on artificial intelligence, quantitative
          systems, and scalable software. I build tools that turn complex ideas
          into useful, reliable products.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-9 flex justify-center gap-3 flex-wrap"
        >
          {/* Resume — primary */}
          <a
            href="/AryamanSarcar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto rounded-xl bg-cyan-500 text-gray-950 px-5 py-2.5 font-semibold hover:bg-cyan-400 transition"
          >
            Resume
          </a>

          {/* GitHub — glass */}
          <a
            href="https://github.com/Aryaman124"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 backdrop-blur text-white px-5 py-2.5 font-medium hover:bg-white/10 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
              0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
              -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
              -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0
              .67-.21 2.2.82a7.6 7.6 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04
              2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15
              0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
              2.19 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            GitHub
          </a>

          {/* Contact — glass */}
          <a
            href="#contact"
            className="pointer-events-auto rounded-xl border border-white/15 bg-white/5 backdrop-blur text-white px-5 py-2.5 font-medium hover:bg-white/10 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-auto absolute bottom-8 z-10 text-white/40 hover:text-white/80 transition"
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
