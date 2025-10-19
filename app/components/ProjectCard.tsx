"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  title, desc, tech, href
}: { title: string; desc: string; tech: string[]; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="group block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 hover:border-white/20 transition transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <span className="opacity-0 group-hover:opacity-100 transition text-sm text-cyan-300">
          View →
        </span>
      </div>
      <p className="mt-2 text-gray-300">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-200 border border-white/10">
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
