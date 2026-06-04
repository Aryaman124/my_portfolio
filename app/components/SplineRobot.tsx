"use client";
import { Suspense, lazy, useEffect, useState } from "react";

// Lazy so the ~MB-sized 3D runtime never blocks first paint.
const Spline = lazy(() => import("@splinetool/react-spline"));

const SCENE_URL = "https://prod.spline.design/n2O2bjMidakulm1P/scene.splinecode";

export default function SplineRobot({ className = "" }: { className?: string }) {
  // The robot is GPU-heavy — only mount it on larger screens and when the
  // visitor hasn't asked for reduced motion. Otherwise the hero falls back
  // to its static cyan glow.
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const small = window.matchMedia("(max-width: 767px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!small.matches && !reduce.matches);
    update();
    small.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      small.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <Spline scene={SCENE_URL} className={className} />
    </Suspense>
  );
}
