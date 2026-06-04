"use client";
import { useEffect, useRef } from "react";

/**
 * Ambient page background: a faint dot-grid, a section-anchored set of soft
 * glows, a whisper of film grain, and a cursor-following spotlight.
 * All layers sit at z-index -1 (behind content) and are pointer-events-none,
 * so they never interfere with the UI. Pure CSS except the spotlight, which
 * uses one rAF-throttled mousemove listener and is skipped for reduced-motion.
 */
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
      {/* 1. Dot grid (fixed to viewport, softly vignetted at the edges) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: -1,
          backgroundImage:
            "radial-gradient(rgba(34,211,238,0.10) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 85%)",
        }}
      />

      {/* 2. Section-anchored ambient glows (absolute → scroll with the page) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <div className="absolute top-[18%] -left-40 h-[42vw] w-[42vw] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[48%] -right-48 h-[46vw] w-[46vw] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-[80%] left-1/4 h-[40vw] w-[40vw] rounded-full bg-cyan-500/[0.07] blur-3xl" />
      </div>

      {/* 3. Film grain (fixed, very subtle, soft-light blended) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.035] mix-blend-soft-light"
        style={{
          zIndex: -1,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* 4. Cursor spotlight (fixed, follows the mouse) */}
      <div
        ref={spotlightRef}
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: -1,
          background:
            "radial-gradient(550px circle at var(--mx, 50%) var(--my, 30%), rgba(34,211,238,0.08), transparent 65%)",
        }}
      />
    </>
  );
}
