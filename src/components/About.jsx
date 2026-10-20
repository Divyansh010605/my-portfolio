import {
  FiCpu as Cpu,
  FiDatabase as Database,
  FiLayers as Layers,
  FiServer as Server,
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'AI & Computer Vision',
    icon: <Cpu size={21} className="text-violet-300" />,
    skills: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'ONNX'],
  },
  {
    title: 'Generative AI & RAG',
    icon: <Layers size={21} className="text-cyan-300" />,
    skills: ['Agentic RAG', 'Qdrant', 'Neo4j', 'Gemini', 'Retrieval'],
  },
  {
    title: 'Backend & Distributed Systems',
    icon: <Server size={21} className="text-emerald-300" />,
    skills: ['FastAPI', 'Spring Boot', 'Kafka', 'Redis', 'Java'],
  },
  {
    title: 'Data & Full-stack',
    icon: <Database size={21} className="text-orange-300" />,
    skills: ['PostgreSQL', 'React', 'Docker', 'REST APIs', 'Git'],
  },
];

export default function About() {
  return (
    <section id="about" className="border-y border-slate-800/70 bg-slate-900/35 py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              A little about me
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Curious by nature.
              <br />
              <span className="gradient-text">Engineer by practice.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400 md:text-lg">
              <p>
                I&apos;m Divyansh, an AI/ML engineer based in India. I enjoy taking ideas
                from model experiments to complete products, combining machine learning
                with thoughtful interfaces and dependable services.
              </p>
              <p>
                Lately, I&apos;ve been building agentic retrieval systems, explainable
                medical-imaging research tools, and distributed backend platforms. I
                care about making complex systems understandable, useful, and easier to
                operate.
              </p>
            </div>
            <a
              href="https://github.com/Divyansh010605"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 border-b border-cyan-500/50 pb-1 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              See what I&apos;m building on GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="glass rounded-xl p-5 transition-colors hover:border-slate-600 md:p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-sm font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
