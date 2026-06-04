"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// "Hi, I'm Aryaman" across languages — the name stays, the greeting rotates.
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

export default function RotatingGreeting({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % GREETINGS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`relative inline-flex justify-center overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 70 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {GREETINGS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
