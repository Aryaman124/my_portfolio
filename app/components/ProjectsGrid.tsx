import ProjectCard from "./ProjectCard";
import { githubProfile, projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mx-auto max-w-6xl scroll-mt-16 px-4 pb-20 pt-24">
      <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Selected work</p>
          <h2 id="projects-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Projects</h2>
          <p className="mt-4 text-base leading-7 text-gray-400">
            AI workflows, quantitative tools, and the systems behind them.
            I build applications that make complex data easier to explore and use.
          </p>
        </div>
        <a href={githubProfile} target="_blank" rel="noreferrer" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-3 self-start rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-gray-200 transition-colors hover:border-cyan-300/40 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          Explore my GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-2">
        {projects.filter(project => project.featured).map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mb-6 mt-12 flex items-center gap-4">
        <h3 className="shrink-0 text-sm font-medium text-gray-300">More engineering work</h3>
        <div aria-hidden="true" className="h-px flex-1 bg-white/10" />
      </div>
      <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.filter(project => !project.featured).map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
