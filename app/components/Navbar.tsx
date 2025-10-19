export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gray-950/70 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
        <a href="/" className="font-semibold text-white">AS</a>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-white transition">About</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition">Contact</a></li>

          {/* Resume link */}
          <li>
            <a
              href="/AryamanSarcar_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
