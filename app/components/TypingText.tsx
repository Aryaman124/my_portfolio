"use client";
import { useEffect, useState } from "react";

export default function TypingText({
  text,
  speed = 55,        // ms per character
  startDelay = 250,   // ms before typing begins
  className = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, speed, startDelay]);

  return <h1 className={`typing-caret ${className}`}>{shown}</h1>;
}
