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
          majoring in Computer Engineering and Computer Science at 
          <span className="text-cyan-400 font-medium"> Northeastern University</span>.
          I’m deeply passionate about <span className="text-cyan-400">machine learning</span>,
          <span className="text-cyan-400"> data analytics</span>, and 
          <span className="text-cyan-400"> modeling.</span>  I love using technology 
          to tackle real-world challenges through research, analytics, 
          and software development.
        </p>

        <p className="text-gray-300 leading-relaxed mb-4">
          I’ve worked on projects involving machine learning models, 
          full-stack development, and data visualization. 
          Each project has helped me grow as an engineer and 
          strengthened my interest in creating tools that 
          make information accessible and impactful.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Outside of academics, I love <span className="text-cyan-400">lifting</span>, 
          playing <span className="text-cyan-400">soccer</span>, and training in 
          <span className="text-cyan-400"> Brazilian Jiu-Jitsu</span>. 
          I believe balance between discipline, learning, and creativity 
          keeps me focused and motivated.
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
