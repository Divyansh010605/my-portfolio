import { FiArrowRight as ArrowRight, FiDownload as Download, FiTerminal as Terminal } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-1.5 mb-8">
          <Terminal size={16} className="text-cyan-400" />
          <span className="text-sm font-medium text-slate-300">Software Developer</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span className="gradient-text">Divyansh</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I build scalable web applications and intelligent systems with Python and React. 
          Passionate about creating elegant digital experiences and bringing AI to the edge.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center group"
          >
            View My Work
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-slate-800/80 text-white font-semibold rounded-lg transition-all flex items-center justify-center group"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
