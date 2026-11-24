import { type Project, repositoryUrl } from "../data/projects";

function ProjectDiagram({ slug }: { slug: string }) {
  const portfolio = slug === "portfolio-optimization";
  const steps = portfolio
    ? ["Interpret", "Analyze", "Allocate", "Explain"]
    : ["Set scenario", "Simulate", "Visualize", "Compare"];

  return (
    <div className={`relative overflow-hidden border-b border-white/10 p-6 sm:p-8 ${portfolio ? "bg-cyan-400/[0.04]" : "bg-violet-400/[0.04]"}`}>
      <div aria-hidden="true" className={`pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full blur-3xl ${portfolio ? "bg-cyan-400/10" : "bg-violet-400/10"}`} />
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-400">
          {portfolio ? "From question to decision" : "From scenario to insight"}
        </p>
        <div className="mt-5 rounded-xl border border-white/10 bg-[#0a0e14]/70 px-4 py-3 text-sm text-gray-200">
          <span aria-hidden="true" className={`mr-2 ${portfolio ? "text-cyan-300" : "text-violet-300"}`}>&gt;</span>
          {portfolio ? "Analyze AAPL, MSFT, NVDA & JPM" : "What happens during a tech selloff?"}
        </div>
        <ol aria-label="Project workflow" className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-3">
          {steps.map((step, index) => (
            <li key={step} className="min-w-0">
              <div className={`mb-2 h-0.5 rounded-full ${portfolio ? "bg-cyan-300/40" : "bg-violet-300/40"}`} />
              <span className="block font-mono text-[10px] text-gray-500">0{index + 1}</span>
              <span className="mt-1 block text-[11px] text-gray-300 sm:text-xs">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, category, summary, tech, highlights, engineering, featured, slug, repo, sourcePath } = project;
  const href = repositoryUrl(repo);

  return (
    <article className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101720]/80 transition-colors hover:border-white/25">
      {featured && <ProjectDiagram slug={slug} />}
      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-6"}`}>
        <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-cyan-300/80">{category}</p>
        <h3 className={`mt-3 font-semibold leading-tight tracking-tight text-white ${featured ? "text-2xl sm:text-[1.7rem]" : "text-xl"}`}>
          <a href={href} target="_blank" rel="noreferrer" className="rounded-sm transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            {title}
          </a>
        </h3>
        <p className="mt-3 text-sm leading-7 text-gray-300">{summary}</p>
        <ul aria-label={`${title} technologies`} className="mt-5 flex flex-wrap gap-2">
          {tech.map(t => (
            <li key={t} className="rounded-md border border-white/10 bg-white/[0.025] px-2 py-1 font-mono text-[11px] text-gray-300">{t}</li>
          ))}
        </ul>
        <ul aria-label={`${title} capabilities`} className="my-6 space-y-3">
          {highlights.map(highlight => (
            <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-gray-400">
              <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-300/70" />
              {highlight}
            </li>
          ))}
        </ul>
        <div className="mt-auto border-t border-white/10 pt-4">
          <a href={href} target="_blank" rel="noreferrer" aria-label={`View ${title} source on GitHub`} className="inline-flex min-h-10 items-center gap-2 rounded-sm text-sm font-medium text-white transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            View source <span aria-hidden="true">↗</span>
          </a>
          <details className="group mt-2">
            <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-3 rounded-sm text-xs text-gray-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
              Engineering notes
              <span aria-hidden="true" className="text-base transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="pb-2 pt-2 text-sm leading-7 text-gray-400">
              <p>{engineering}</p>
              <a href={`${href}/blob/main/${sourcePath}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-sm text-xs text-cyan-300 underline decoration-cyan-300/30 underline-offset-4 hover:decoration-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                Explore the implementation <span aria-hidden="true">→</span>
              </a>
            </div>
          </details>
        </div>
      </div>
    </article>
  );
}
