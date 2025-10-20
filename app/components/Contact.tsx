"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-4 py-24 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="text-4xl font-bold text-white mb-8 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Pills */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Email pill */}
        <motion.a
          href="mailto:sarcar.a@northeastern.edu"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 sm:px-6 py-3 sm:py-4
                     shadow-sm hover:bg-white/10 hover:shadow-cyan-500/10 hover:ring-2 hover:ring-cyan-400/30 transition"
        >
          {/* Icon bubble */}
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900">
            {/* mail icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.236l7.386 6.409a1 1 0 001.228 0L20 8.236V18H4z" />
            </svg>
          </span>

          {/* Label */}
          <span className="text-white font-bold tracking-tight">
            sarcar.a@northeastern.edu
          </span>
        </motion.a>

        {/* LinkedIn pill */}
        <motion.a
          href="https://www.linkedin.com/in/aryaman-sarcar-13b44332a/"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 sm:px-6 py-3 sm:py-4
                     shadow-sm hover:bg-white/10 hover:shadow-cyan-500/10 hover:ring-2 hover:ring-cyan-400/30 transition"
        >
          {/* Icon bubble (LinkedIn) */}
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" className="h-5 w-5" aria-hidden="true">
              <g>
                <path d="M34,17C34,7.6,26.4,0,17,0S0,7.6,0,17s7.6,17,17,17S34,26.4,34,17z" fill="none"/>
                <path d="M12.6 24.8H9V13.1h3.6v11.7zM10.8 11.7c-1.1 0-1.9-.8-1.9-1.8 0-1 .8-1.8 2-1.8s1.9.7 1.9 1.8c0 1-.8 1.8-2 1.8zM25 24.8h-3.6v-6.3c0-1.5-.5-2.6-1.9-2.6-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9v6.7H14V13.1h3.5v1.6c.5-.8 1.4-2 3.4-2 2.4 0 4.1 1.5 4.1 4.8v7.3z" fill="currentColor"/>
              </g>
            </svg>
          </span>

          {/* Label */}
          <span className="text-white font-bold tracking-tight">
            LinkedIn
          </span>
        </motion.a>
      </div>
    </section>
  );
}
