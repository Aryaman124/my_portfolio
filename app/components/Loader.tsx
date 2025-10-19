"use client";
import { useEffect, useRef, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [percent, setPercent] = useState(0);
  const [done, setDone] = useState(false);

  // --- Matrix Rain (Reactified) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // sizing
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // character pool (katakana + latin + nums)
    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    // initialize drops at random Y so it's "already raining"
    let drops: number[] = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * (canvas.height / fontSize))
    );

    // draw frame
    const draw = () => {
      // trail/fade
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // blue code
      ctx.fillStyle = "#00BFFF";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // reset this column occasionally when off-screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // animation loop
    const interval = setInterval(draw, 30);

    // handle resize: recompute columns/drops
    const onResize = () => {
      setSize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * (canvas.height / fontSize))
      );
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("resize", setSize);
    };
  }, []);

  // --- Percentage & fade out ---
  useEffect(() => {
    if (percent < 100) {
      const timer = setTimeout(() => setPercent(p => p + 1), 30); // adjust speed here
      return () => clearTimeout(timer);
    } else {
      // fade out, then let parent render main page
      const t1 = setTimeout(() => setDone(true), 500);
      const t2 = setTimeout(onFinish, 1200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [percent, onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="Loading screen"
      role="status"
    >
      {/* Canvas rain */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Overlay UI */}
      <div className="relative z-10 w-[min(520px,90vw)] text-center">
        <div className="text-blue-400 text-3xl font-bold tabular-nums">{percent}%</div>
        <p className="text-gray-400 text-sm mt-1">Loading portfolio…</p>

        {/* Progress bar */}
        <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-[width] duration-150 ease-out"
            style={{ width: `${percent}%` }}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent}
            role="progressbar"
          />
        </div>
      </div>
    </div>
  );
}
