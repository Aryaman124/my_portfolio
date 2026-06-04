"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";

// "Hi, I'm Aryaman" across languages — the name stays, the greeting rotates.
// Every phrase contains the literal token "Aryaman" so we can split on it.
const GREETINGS = [
  "Hi, I’m Aryaman",
  "नमस्ते, मैं Aryaman हूँ",
  "Hola, soy Aryaman",
  "Bonjour, je suis Aryaman",
  "Hallo, ich bin Aryaman",
  "こんにちは、Aryaman です",
  "你好，我是 Aryaman",
  "Ciao, sono Aryaman",
  "Olá, sou o Aryaman",
  "안녕하세요, 저는 Aryaman입니다",
  "Привет, я Aryaman",
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
  exit: { transition: { staggerChildren: 0.02 } },
};

// Greeting letters roll up from below, then exit upward.
const letter: Variants = {
  hidden: { opacity: 0, y: "110%" },
  show: { opacity: 1, y: "0%", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: "-110%", transition: { duration: 0.25 } },
};

// "Aryaman" is left out of the roll — it just fades, no horizontal motion.
const nameVariant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function Tokens({ phrase }: { phrase: string }) {
  const parts = phrase.split("Aryaman");
  const nodes: React.ReactNode[] = [];

  parts.forEach((part, pi) => {
    // Each character of the greeting text animates individually.
    Array.from(part).forEach((ch, ci) => {
      nodes.push(
        <motion.span key={`${pi}-${ci}`} variants={letter} className="inline-block">
          {ch === " " ? " " : ch}
        </motion.span>
      );
    });
    // Re-insert the static name between the split parts.
    if (pi < parts.length - 1) {
      nodes.push(
        <motion.span key={`name-${pi}`} variants={nameVariant} className="inline-block">
          Aryaman
        </motion.span>
      );
    }
  });

  return <>{nodes}</>;
}

export default function RotatingGreeting({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % GREETINGS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="inline-block whitespace-nowrap"
        >
          <Tokens phrase={GREETINGS[i]} />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
