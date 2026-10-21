"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 pt-28 pb-20 flex flex-col md:flex-row items-center gap-10"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-2/3"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          Hi, I’m <span className="text-cyan-400 font-medium">Aryaman Sarcar</span>,
          a Computer Science student at{" "}
          <span className="text-cyan-400 font-medium">Northeastern University</span>{" "}
          concentrating in artificial intelligence with a minor in mathematics.
          I’m interested in how <span className="text-cyan-400">machine learning</span>,{" "}
          <span className="text-cyan-400">quantitative systems</span>, and{" "}
          <span className="text-cyan-400">software engineering</span> can help us
          understand complex problems and build useful solutions.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          My projects span machine learning, full-stack development, and data
          visualization. I enjoy working through the whole process: exploring
          data, testing ideas, and turning what I learn into reliable software.
          I’m especially drawn to work that combines analytical thinking with
          tools people can use in their everyday lives.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Outside of coding, I enjoy <span className="text-cyan-400">tennis</span>,{" "}
          <span className="text-cyan-400">football</span>, and{" "}
          <span className="text-cyan-400">rugby</span>. I also like following
          markets and exploring research that gives me a new way to think about
          the world.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="md:w-1/3 flex justify-center"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20 border border-white/10">
          <Image
            src="/IMG_4555.PNG"
            alt="Aryaman Sarcar"
            width={350}
            height={450}
            className="object-cover rounded-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
