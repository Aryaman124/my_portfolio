"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="space-y-4"
    >
      <p className="text-gray-300">
        Best way to reach me:{" "}
        <a className="underline hover:text-white" href="mailto:sarcar.a@northeastern.edu">
          sarcar.a@northeastern.edu
        </a>
      </p>

      <div className="flex flex-wrap gap-3">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aryaman-sarcar-13b44332a/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0077b5] text-white px-4 py-2.5 font-medium hover:bg-[#006097] transition"
        >
          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 
            16 1.146v13.708c0 .633-.526 1.146-1.175 
            1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 
            12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 
            0 1.358-.554 1.358-1.248-.015-.71-.521-1.248-1.342-1.248-.821 
            0-1.359.538-1.359 1.248 0 .694.521 
            1.248 1.327 1.248h.016zm4.908 
            8.212V9.359c0-.216.016-.432.08-.586.174-.431.571-.878 
            1.237-.878.872 0 1.221.662 1.221 
            1.634v3.865h2.4V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
            0-1.845.7-2.165 1.193h.031v-1.03h-2.4c.031.662 
            0 7.225 0 7.225h2.4z" />
          </svg>
          LinkedIn
        </a>

        {/* Resume */}
        <a
          href="/AryamanSarcar_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-cyan-500/90 text-gray-950 px-4 py-2.5 font-medium hover:bg-cyan-400 transition"
        >
          Resume (PDF)
        </a>
      </div>
    </motion.div>
  );
}
