import ProjectCard from "./ProjectCard";
import Stagger from "./Stagger";

const projects = [
  {
    title: "A&A Banking Co",
    desc: "Mini banking simulator with auth and dashboards.",
    tech: ["Next.js", "Tailwind", "Postgres"],
    href: "https://github.com/youruser/aa-banking-co",
  },
  {
    title: "Trading Strategies",
    desc: "Backtests & visualizations for factor strategies.",
    tech: ["Python", "Pandas", "Plotly"],
    href: "https://github.com/youruser/trading-app",
  },
  {
    title: "Portfolio",
    desc: "This site — animations, responsive, Vercel deploy.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "https://your-site.vercel.app",
  },
];

export default function ProjectsGrid() {
  return (
    <Stagger className="grid gap-6 md:grid-cols-2">
      {projects.map(p => <ProjectCard key={p.title} {...p} />)}
    </Stagger>
  );
}
