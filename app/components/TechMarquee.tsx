"use client";

// Brand logos via the Devicon CDN — colored SVGs, no local files needed.
// Each sits on a white tile so even dark logos (Next.js, Flask, AWS…) stay legible.
type Tech = { name: string; slug: string; file?: string };

const TECH: Tech[] = [
  { name: "Python", slug: "python" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Java", slug: "java" },
  { name: "C++", slug: "cplusplus" },
  { name: "C", slug: "c" },
  { name: "R", slug: "r" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextjs" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "Flask", slug: "flask" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "AWS", slug: "amazonwebservices", file: "amazonwebservices-original-wordmark" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Git", slug: "git" },
  { name: "Docker", slug: "docker" },
  { name: "Linux", slug: "linux" },
];

const iconUrl = ({ slug, file }: Tech) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${file ?? `${slug}-original`}.svg`;

function Tile(t: Tech) {
  return (
    <span
      title={t.name}
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-white/10"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={iconUrl(t)} alt={t.name} className="h-8 w-8 object-contain" loading="lazy" />
    </span>
  );
}

export default function TechMarquee() {
  // Duplicate the row so the -50% loop is seamless.
  const row = [...TECH, ...TECH];
  return (
    <div
      className="group relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 7%, black 93%, transparent)",
      }}
    >
      <div className="flex w-max gap-3 animate-marquee group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <Tile key={`${t.slug}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}
