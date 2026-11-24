export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tech: string[];
  highlights: string[];
  engineering: string;
  sourcePath: string;
  repo: string;
  featured?: boolean;
};

// Curated from implementation, rather than README plans. Keep source links in sync.
export const projects: Project[] = [
  {
    slug: "portfolio-optimization",
    title: "Portfolio Optimization & Risk",
    category: "Agentic AI · Quantitative analysis",
    summary:
      "Turn a portfolio question into an allocation, risk analysis, and a readable report. A Python application that connects AI agents with quantitative tools in an interactive Streamlit dashboard.",
    tech: ["Python", "Streamlit", "Gemini", "PyPortfolioOpt", "Plotly"],
    highlights: [
      "Connects request interpretation, market data, risk calculations, allocation, and backtesting in one workflow.",
      "Includes max-Sharpe, minimum-volatility, and Black–Litterman optimization alongside an agentic analysis workflow.",
    ],
    engineering:
      "The agentic workflow separates the Analyst and Reporter agents from numerical data, risk, optimization, and backtest tools. It supports Gemini or local rule-based agents and identifies when generated sample data replaces unavailable market data. Separate optimization modules use PyPortfolioOpt; the agentic workflow uses inverse-volatility or equal-weight allocation.",
    sourcePath: "src/agentic_workflow.py",
    repo: "Portfolio-Optimization-and-Risk-Project",
    featured: true,
  },
  {
    slug: "market-shock",
    title: "Market Shock Simulator",
    category: "Full-stack development · Simulation",
    summary:
      "Explore how a tech selloff, rate hike, or recession changes a simulated portfolio. An interactive market sandbox with sector visualizations, paper trades, and strategy backtesting.",
    tech: ["React", "D3.js", "Flask", "SQLite", "Plotly"],
    highlights: [
      "Models sector-specific shocks with a random-walk simulation and visualizes their effect on portfolio value.",
      "Stores paper trades in SQLite and compares an SMA crossover strategy with buy-and-hold performance.",
    ],
    engineering:
      "React manages the simulation state while D3 renders the asset visualization. A Flask API handles portfolio state, trades, and backtests. Historical data is requested from Alpha Vantage with a generated-data fallback; the shock simulation itself uses synthetic prices.",
    sourcePath: "src/hooks/useMarketSimulation.js",
    repo: "Financial-Market-Simulation-Project",
    featured: true,
  },
  {
    slug: "order-book",
    title: "Market Replay: Order Book Core",
    category: "Backend systems · Java",
    summary:
      "An in-memory limit order book for a single symbol, built around explicit order lifecycle operations and consistent market snapshots.",
    tech: ["Java 21", "Maven", "JUnit 5"],
    highlights: [
      "Supports add, cancel, delete, replace, and execute operations, with bid/ask depth, spread, and mid-price tracking.",
      "Pairs a hash-based order index with sorted price levels; JUnit tests cover mutations, snapshots, and invalid inputs.",
    ],
    engineering:
      "A single-writer design uses a HashMap for order lookup and TreeMaps for bid and ask price levels. Integer prices avoid floating-point price comparisons. This repository currently implements the order-book foundation for the market replay project.",
    sourcePath: "src/main/java/com/marketreplay/orderbook/OrderBook.java",
    repo: "Market-Replay-System",
  },
  {
    slug: "market-dashboard",
    title: "S&P 500 Explorer",
    category: "Data visualization · API development",
    summary:
      "A focused dashboard for exploring historical S&P 500 closing prices over a custom date range.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Plotly"],
    highlights: [
      "Connects date-range controls and an interactive price chart to a Python API backed by a local historical dataset.",
    ],
    engineering:
      "The FastAPI history endpoint filters the dataset by start and end date and returns chart-ready records. The React client requests a new series when the date range changes and renders it with Plotly.",
    sourcePath: "backend/app/main.py",
    repo: "Stock-Market-Dashboard-Project",
  },
  {
    slug: "developer-portfolio",
    title: "Developer Portfolio",
    category: "Frontend development · Interaction design",
    summary:
      "The site you’re exploring: a responsive home for my engineering work, professional experience, and technical interests.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Combines reusable components, scroll animations, and a lazy-loaded Spline scene with mobile and reduced-motion fallbacks.",
    ],
    engineering:
      "The Spline runtime loads lazily and only mounts on larger screens when reduced motion is not requested. Project content lives in a typed data module so descriptions, technologies, and repository links can be maintained together.",
    sourcePath: "app/components/SplineRobot.tsx",
    repo: "my_portfolio",
  },
];

export const githubProfile = "https://github.com/Aryaman124";

export function repositoryUrl(repo: string) {
  return `${githubProfile}/${repo}`;
}
