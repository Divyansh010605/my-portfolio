import { FiCode as Code2, FiDatabase as Database, FiLayout as Layout, FiTerminal as Terminal } from 'react-icons/fi';

export default function About() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Database size={24} className="text-purple-400" />,
      skills: ["Python", "PyTorch", "HuggingFace", "DeBERTa", "Ollama LLM"]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} className="text-cyan-400" />,
      skills: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "HTML/CSS"]
    },
    {
      title: "Backend & Systems",
      icon: <Terminal size={24} className="text-emerald-400" />,
      skills: ["FastAPI", "Flask", "Node.js", "Binance API", "REST APIs"]
    },
    {
      title: "Tools & Deployment",
      icon: <Code2 size={24} className="text-orange-400" />,
      skills: ["Git", "GitHub Actions", "Docker", "Streamlit", "Linux"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* About Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-cyan-400">Me</span></h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-8"></div>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                I'm a passionate Full-Stack Developer with a strong focus on Artificial Intelligence and Python backend systems. I specialize in bridging the gap between complex machine learning models and intuitive user interfaces.
              </p>
              <p>
                My current focus is on building intelligent, scalable applications—from fake news detection systems utilizing advanced NLP (Transformers) to local voice-controlled AI agents. I enjoy architecture design and exploring how AI can solve real-world problems.
              </p>
              <p>
                When I'm not writing code or training models, I'm usually exploring new tech stacks or looking for my next challenging project. I'm actively seeking opportunities where I can leverage my skills in Python, React, and AI to build impactful products.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
            {skillCategories.map((category) => (
              <div key={category.title} className="glass p-6 rounded-xl border border-slate-700/50">
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="text-xs font-medium bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-md hover:text-cyan-300 transition-colors cursor-default"
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
