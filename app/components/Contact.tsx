"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-4 py-24 text-center flex flex-col items-center justify-center"
    >
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-white mb-6"
      >
        Get in Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 mb-8 max-w-lg"
      >
        Feel free to reach out — whether it’s for collaboration, an opportunity, 
        or just to say hi!
      </motion.p>

      {/* LinkedIn Icon */}
      <motion.a
        href="https://www.linkedin.com/in/aryaman-sarcar-13b44332a/"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center justify-center gap-3 bg-[#0077b5] hover:bg-[#006097] text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:shadow-cyan-500/30 transition mb-6"
      >
        <Image
          src="/linkedin-icon.png"  // Save your LinkedIn logo as this name in /public
          alt="LinkedIn"
          width={28}
          height={28}
          className="rounded-full"
        />
        <span className="font-medium">Connect on LinkedIn</span>
      </motion.a>

      {/* Email */}
      <motion.a
        href="mailto:sarcar.a@northeastern.edu"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-cyan-400 text-lg font-medium hover:text-cyan-300 transition"
      >
        sarcar.a@northeastern.edu
      </motion.a>
    </section>
  );
}
