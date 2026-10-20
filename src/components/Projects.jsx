import { FiArrowUpRight as ArrowUpRight, FiGithub as Github } from 'react-icons/fi';

const projects = [
  {
    title: 'Advance-RIS',
    category: 'Applied AI · Computer Vision',
    description:
      'Research-focused chest X-ray screening with a DenseNet, ResNet, and Swin Transformer ensemble. Includes DICOM workflows, Grad-CAM explanations, uncertainty estimates, and report generation.',
    tech: ['PyTorch', 'FastAPI', 'React', 'ONNX', 'DICOM'],
    github: 'https://github.com/Divyansh010605/Advance-RIS',
    note: 'Research and education project — not for clinical diagnosis.',
  },
  {
    title: 'RAGFlow_Enterprise_AI',
    category: 'Generative AI · Agentic RAG',
    description:
      'A multi-agent knowledge assistant that combines document retrieval with SQL and knowledge-graph queries, returning evidence-grounded responses with citations.',
    tech: ['FastAPI', 'RAG', 'Qdrant', 'Neo4j', 'Gemini'],
    github: 'https://github.com/Divyansh010605/RAGFlow_Enterprise_AI',
  },
  {
    title: 'Distributed-Job-Scheduling-Platform',
    category: 'Backend · Distributed Systems',
    description:
      'A distributed job scheduling platform for recurring workloads, with worker heartbeats, retry handling, idempotency, job dependencies, and operational metrics.',
    tech: ['Java 21', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'],
    github: 'https://github.com/Divyansh010605/Distributed-Job-Scheduling-Platform',
  },
  {
    title: 'AI-Fake-News-Detection-V2.0',
    category: 'NLP · Explainable AI',
    description:
      'A news verification app that classifies articles with DeBERTa, highlights influential words, and cross-checks claims against reputable sources.',
    tech: ['Python', 'Flask', 'DeBERTa', 'Hugging Face', 'XAI'],
    github: 'https://github.com/Divyansh010605/AI-Fake-News-Detection-V2.0',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
              Selected work
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Projects built to <span className="gradient-text">solve problems.</span>
            </h2>
          </div>
          <a
            href="https://github.com/Divyansh010605?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300"
          >
            More on GitHub <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900/80 md:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <span className="font-mono text-sm text-slate-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-xs font-medium text-cyan-200">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300 md:text-2xl">
                {project.title}
              </h3>
              <p className="mt-3 flex-grow leading-7 text-slate-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-700/70 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.note && (
                <p className="mt-4 text-xs leading-5 text-amber-200/70">{project.note}</p>
              )}

              <div className="mt-7 border-t border-slate-800 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
                  aria-label={`View ${project.title} source on GitHub`}
                >
                  <Github size={17} />
                  View source
                  <ArrowUpRight size={15} className="text-slate-500" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
