import { FiGithub as Github, FiExternalLink as ExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Veritas AI — Fake News Detector',
    description: 'AI-powered misinformation detector using DeBERTa v3. Features Explainable AI (XAI) to show influential words and real-time fact cross-verification.',
    tech: ['Python', 'Flask', 'HuggingFace', 'Transformers', 'DeBERTa'],
    github: 'https://github.com/Divyansh010605/AI-Fake-News-Detection-V2.0',
    demo: '#', // Placeholder if there's no live demo
  },
  {
    title: 'Radiology Information System (RIS)',
    description: 'Full-stack medical imaging platform. Compares Deep Learning diagnostic support between CNNs (DenseNet, ResNet) and Transformer architectures (Swin).',
    tech: ['React', 'Vite', 'Tailwind', 'FastAPI', 'PyTorch'],
    github: 'https://github.com/Divyansh010605/RIS',
    demo: '#',
  },
  {
    title: 'Voice-Controlled AI Agent',
    description: 'Local AI agent that accepts audio input, transcribes speech with Groq Whisper, classifies intent via Ollama, and executes tools.',
    tech: ['Python', 'Streamlit', 'Groq API', 'Ollama LLM'],
    github: 'https://github.com/Divyansh010605/Voice-Controlled-Local-AI-Agent',
    demo: '#',
  },
  {
    title: 'Binance Futures Trading Bot',
    description: 'Lightweight Python CLI application for placing orders on the Binance Futures Testnet. Features interactive prompts and structured logging.',
    tech: ['Python', 'Click', 'Rich', 'Binance API'],
    github: 'https://github.com/Divyansh010605/Binance-Futures-Testnet-Trading-Bot',
    demo: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-slate-800 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Source
                  </a>
                  {project.demo !== '#' && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
