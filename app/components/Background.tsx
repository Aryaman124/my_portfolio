"use client";
import { useEffect, useRef } from "react";

/**
 * Ambient page background themed to the site owner's work — AI, quantitative
 * finance, and math. Layers (all z-index -1, pointer-events-none):
 *   1. brighter navy base gradient
 *   2. graph-paper grid (math / charting)
 *   3. section-anchored ambient glows (scroll with the page)
 *   4. a slowly-glowing rising "market" line chart (quant / trading)
 *   5. faint floating math + finance glyphs
 *   6. a cursor-following spotlight
 * Only the spotlight uses JS (one rAF-throttled listener, skipped for
 * reduced-motion); everything else is CSS.
 */

// Rising, slightly volatile path — reads as an upward market trend.
const CHART_LINE =
  "M0,250 L80,225 L160,255 L240,205 L320,220 L400,165 L480,190 L560,140 " +
  "L640,160 L720,110 L800,135 L880,85 L960,105 L1040,60 L1120,80 L1200,35";

const GLYPHS = [
  { c: "Σ", top: "14%", left: "8%", size: "5rem" },
  { c: "∇", top: "30%", left: "82%", size: "4rem" },
  { c: "μ", top: "58%", left: "12%", size: "4.5rem" },
  { c: "σ²", top: "70%", left: "78%", size: "4rem" },
  { c: "∫", top: "44%", left: "46%", size: "5.5rem" },
  { c: "π", top: "86%", left: "30%", size: "4rem" },
  { c: "λ", top: "22%", left: "60%", size: "3.5rem" },
];

export default function Background() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* 1. Brighter base gradient */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: -1,
          background:
            "linear-gradient(180deg, #101b2e 0%, #0d1626 45%, #0b1320 100%)",
        }}
      />

      {/* 2. Graph-paper grid, vignetted at the edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: -1,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 92%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 92%)",
        }}
      />

      {/* 3. Section-anchored ambient glows (scroll with the page) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <div className="absolute top-[16%] -left-40 h-[44vw] w-[44vw] rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-[48%] -right-48 h-[48vw] w-[48vw] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute top-[80%] left-1/4 h-[42vw] w-[42vw] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* 4. Rising market line chart */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 h-[55vh] bg-glowpulse"
        style={{ zIndex: -1 }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(34,211,238,0.18)" />
              <stop offset="100%" stopColor="rgba(34,211,238,0)" />
            </linearGradient>
          </defs>
          <path d={`${CHART_LINE} L1200,300 L0,300 Z`} fill="url(#chartFill)" />
          <path
            d={CHART_LINE}
            fill="none"
            stroke="rgba(34,211,238,0.5)"
            strokeWidth="2"
            style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5))" }}
          />
        </svg>
      </div>

      {/* 5. Faint floating math / finance glyphs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden font-mono select-none"
        style={{ zIndex: -1 }}
      >
        {GLYPHS.map((g, i) => (
          <span
            key={i}
            className="absolute bg-floaty text-cyan-300/[0.06]"
            style={{
              top: g.top,
              left: g.left,
              fontSize: g.size,
              animationDelay: `${i * 0.7}s`,
            }}
          >
            {g.c}
          </span>
        ))}
      </div>

      {/* 6. Cursor spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(560px circle at var(--mx, 50%) var(--my, 30%), rgba(34,211,238,0.10), transparent 65%)",
        }}
      />
    </>
  );
}
