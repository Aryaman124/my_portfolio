"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Cycles through `items` one at a time with an upward roll animation
 * (current rolls up and out, next rolls up into place).
 */
export default function RotatingText({
  items,
  interval = 2200,
  className = "",
}: {
  items: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block whitespace-nowrap"
        >
          {items[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
