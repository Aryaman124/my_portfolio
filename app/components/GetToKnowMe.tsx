"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Job = {
  role: string;
  company: string;
  date: string;
  logo: string;
  initials: string;
  dark?: boolean; // logo is light-on-dark → needs a dark tile
  current?: boolean;
};

// Most recent first — the top entry gets the glowing "active" indicator.
const EXPERIENCE: Job[] = [
  { role: "Forward Deployed Engineer Co-op", company: "IBM", date: "Incoming Sept 2026", logo: "/logos/ibm.png", initials: "IBM", current: true },
  { role: "AI Summer Analyst", company: "Yellow Wood Partners", date: "June 2026 – Aug 2026", logo: "/logos/yellow-wood.png", initials: "YW" },
  { role: "AI Engineering Co-op", company: "Navikenz", date: "Sept 2025 – Present", logo: "/logos/navikenz.png", initials: "NK", dark: true },
  { role: "Software Team Member", company: "NEU Electric Racing", date: "Sept 2024 – Dec 2024", logo: "/logos/neu-racing.png", initials: "NE" },
];

// Shows the company logo on a tile (white, or dark for light-on-dark logos);
// falls back to initials if the image file isn't present yet.
function LogoAvatar({ src, name, initials, dark, current }: { src: string; name: string; initials: string; dark?: boolean; current?: boolean }) {
  const [ok, setOk] = useState(true);
  return (
    <span
      className={`relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl ${
        dark ? "bg-[#1a1a1a]" : "bg-white"
      } ${
        current ? "ring-2 ring-emerald-400/70 shadow-[0_0_12px_2px_rgba(52,211,153,0.4)]" : "ring-1 ring-white/10"
      }`}
    >
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} onError={() => setOk(false)} className="h-full w-full object-contain p-1.5" />
      ) : (
        <span className={`text-sm font-bold ${dark ? "text-white" : "text-gray-700"}`}>{initials}</span>
      )}
    </span>
  );
}

const TECH = ["Python", "PyTorch", "LangChain", "FastAPI", "React", "AWS", "PostgreSQL"];

const HOBBIES = [
  { icon: "⚽", label: "Soccer" },
  { icon: "🥋", label: "Jiu-Jitsu" },
  { icon: "🏋️", label: "Lifting" },
  { icon: "🍳", label: "Cooking" },
];

const card =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-7 backdrop-blur-sm";
const eyebrow = "text-xs font-medium uppercase tracking-[0.18em] text-gray-500";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function GetToKnowMe() {
  return (
    <section id="get-to-know-me" className="mx-auto max-w-6xl px-4 pt-12 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold text-white mb-8"
      >
        Get to Know Me
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[210px]">
        {/* Experience timeline — tall, left */}
        <Reveal className={`${card} md:row-span-2`}>
          <p className={eyebrow}>My Experience</p>
          <ol className="mt-6 space-y-5">
            {EXPERIENCE.map((job) => (
              <li key={job.company} className="flex items-center gap-4">
                <LogoAvatar src={job.logo} name={job.company} initials={job.initials} dark={job.dark} current={job.current} />
                <div className="min-w-0">
                  <h3 className="text-white font-medium leading-tight">{job.role}</h3>
                  <p className="text-gray-400 leading-tight">
                    {job.company}
                    {job.current && (
                      <span className="ml-2 align-middle rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                        Incoming
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{job.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Based in — real OpenStreetMap of Boston, darkened to match the theme */}
        <Reveal delay={0.05} className={`${card} relative overflow-hidden`}>
          <iframe
            title="Map of Boston, MA"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-71.1190%2C42.3300%2C-70.9990%2C42.3900&layer=mapnik"
            className="pointer-events-none absolute inset-0 h-full w-full border-0"
            style={{ filter: "invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.9) saturate(0.85)" }}
            loading="lazy"
          />
          {/* readability scrim behind the label */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1320]/90 via-[#0b1320]/20 to-transparent"
          />
          <div className="relative">
            <p className={eyebrow}>Based in</p>
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-white">Boston, MA</p>
          </div>
          {/* pulsing pin centered on the map */}
          <span className="absolute left-1/2 top-1/2 flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-cyan-400 ring-2 ring-white/60" />
          </span>
        </Reveal>

        {/* Passion */}
        <Reveal delay={0.1} className={card}>
          <p className={eyebrow}>My Passion</p>
          <p className="mt-3 text-2xl md:text-[1.7rem] leading-snug font-semibold text-white">
            I like turning messy, complex problems into tools people actually
            enjoy using.
          </p>
        </Reveal>

        {/* I also like */}
        <Reveal delay={0.15} className={card}>
          <p className={eyebrow}>I also like…</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {HOBBIES.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-lg font-medium text-white"
              >
                <span className="text-2xl">{h.icon}</span>
                {h.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Tech stack */}
        <Reveal delay={0.2} className={card}>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {TECH.map((t) => (
              <span
                key={t}
                className="shrink-0 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold tracking-wide text-cyan-200/90"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xl md:text-2xl leading-snug text-white">
            Focused on making <span className="text-cyan-300">fast, reliable</span> software
          </p>
        </Reveal>
      </div>
    </section>
  );
}
