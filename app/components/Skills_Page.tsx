"use client";
import { motion } from "framer-motion";

type Skill = { name: string; learning?: boolean };
type Group = { title: string; color: string; icon: React.ReactNode; skills: Skill[] };

const groups: Group[] = [
  {
    title: "Frontend",
    color: "from-cyan-500/10 via-white/5 to-transparent",
    icon: (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
        {/* sparkles */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 2l1.8 4.5L18 8.3l-3.6 3 1 4.8L12 14.8 6.6 16l1-4.8L4 8.3l4.2-1.8L10 2h2z"/>
        </svg>
      </span>
    ),
    skills: [
      { name: "React" }, { name: "Next.js" }, { name: "Tailwind CSS" },
      { name: "HTML" }, { name: "CSS" }, { name: "Framer Motion" }
    ],
  },
  {
    title: "Backend & APIs",
    color: "from-emerald-500/10 via-white/5 to-transparent",
    icon: (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
        {/* gear */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M19.4 13a7.7 7.7 0 0 0 .1-2l2-1.6-2-3.4-2.4.6a7.8 7.8 0 0 0-1.7-1l-.3-2.5H11l-.3 2.5a7.8 7.8 0 0 0-1.7 1L6.6 6l-2-3.5-2 3.4 2 1.6a7.7 7.7 0 0 0 .1 2l-2 1.6 2 3.4 2.4-.6a7.8 7.8 0 0 0 1.7 1l.3 2.5H13l.3-2.5a7.8 7.8 0 0 0 1.7-1l2.4.6 2-3.4-2-1.6zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      </span>
    ),
    skills: [
      { name: "FastAPI" }, { name: "Flask" }, { name: "Uvicorn" }
    ],
  },
  {
    title: "Data / ML / AI",
    color: "from-fuchsia-500/10 via-white/5 to-transparent",
    icon: (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
        {/* brain */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M8 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 3v2a3 3 0 0 0 2 3v1a3 3 0 0 0 3 3h2V3H8zm6 0h-2v18h2a3 3 0 0 0 3-3v-1a3 3 0 0 0 2-3V10a3 3 0 0 0-2-3V6a3 3 0 0 0-3-3z"/>
        </svg>
      </span>
    ),
    skills: [
      { name: "TensorFlow", learning: true },
      { name: "RAG", learning: true },
      { name: "OpenAI API" },
      { name: "Google ADK (Vertex AI)", learning: true },
      { name: "Streamlit" }
    ],
  },
  {
    title: "Core Languages",
    color: "from-sky-500/10 via-white/5 to-transparent",
    icon: (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
        {/* code brackets */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M8 7L3 12l5 5v-3l-2-2 2-2V7zm8 0v3l2 2-2 2v3l5-5-5-5zM13 5l-4 14h2l4-14h-2z"/>
        </svg>
      </span>
    ),
    skills: [
      { name: "Python" }, { name: "TypeScript" }, { name: "Java" },
      { name: "C++" }, { name: "R", learning: true }
    ],
  },
  {
    title: "Quant & Finance",
    color: "from-amber-500/10 via-white/5 to-transparent",
    icon: (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300">
        {/* chart */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M3 3h2v18H3V3zm16 18h2V9h-2v12zM11 21h2V5h-2v16zM7 21h2v-8H7v8z"/>
        </svg>
      </span>
    ),
    skills: [{ name: "QuantLib", learning: true }],
  },
  {
    title: "DevOps & Tools",
    color: "from-violet-500/10 via-white/5 to-transparent",
    icon: (
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
        {/* toolbox */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M20 7h-3V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM9 5h6v2H9V5zm11 13H4v-6h6v2h4v-2h6v6z"/>
        </svg>
      </span>
    ),
    skills: [{ name: "Git" }, { name: "Linux" }],
  },
];

function Chip({ s }: { s: Skill }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm
        border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition`}
      title={s.learning ? "Currently learning" : "Proficient"}
    >
      {s.name}
      {s.learning && (
        <span className="rounded-full bg-amber-400/20 text-amber-300 text-[10px] px-2 py-0.5">
          learning
        </span>
      )}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 pt-28 pb-20">
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-semibold text-white mb-8"
      >
        My Experience
        <span className="text-gray-400 ml-2 text-base font-normal">
          (things I’ve built with & currently learning)
        </span>
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5"
          >
            {/* soft gradient tint per card */}
            <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${g.color}`} />

            <div className="relative flex items-center gap-3 mb-4">
              {g.icon}
              <h3 className="text-white/90 font-semibold tracking-wide">
                {g.title}
              </h3>
            </div>

            <div className="relative flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <Chip key={s.name} s={s} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
