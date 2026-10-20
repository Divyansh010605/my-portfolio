import {
  FiArrowDown as ArrowDown,
  FiArrowUpRight as ArrowUpRight,
  FiGithub as Github,
  FiTerminal as Terminal,
} from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/[0.08] blur-[100px]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 shadow-lg shadow-black/10">
          <Terminal size={15} className="text-cyan-400" />
          <span>AI/ML Engineer <span className="mx-1.5 text-slate-600">·</span> India</span>
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
          Generative AI · Intelligent Systems · Full-stack
        </p>

        <h1 className="max-w-5xl text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="gradient-text">Divyansh Khandelwal.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
          I build practical AI products—from agentic RAG and computer vision to the
          reliable backend systems that bring them to life.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
          >
            Explore my work
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="https://github.com/Divyansh010605"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
          >
            <Github size={18} />
            GitHub profile
            <ArrowUpRight size={16} className="text-slate-500" />
          </a>
        </div>

        <a
          href="#projects"
          aria-label="Scroll to featured projects"
          className="mt-20 hidden h-10 w-6 items-start justify-center rounded-full border border-slate-700 p-1.5 text-slate-500 transition hover:border-cyan-400 hover:text-cyan-400 md:flex"
        >
          <span className="h-2 w-1 rounded-full bg-current" />
        </a>
      </div>
    </section>
  );
}
