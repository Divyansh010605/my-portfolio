import { FiMail as Mail, FiLinkedin as Linkedin, FiGithub as Github, FiMapPin as MapPin, FiDownload as Download } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's <span className="text-cyan-400">Connect</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-slate-400">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-cyan-500/30 transition-colors">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Mail size={32} className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
            <p className="text-slate-400 mb-6">Drop me a line anytime.</p>
            <a 
              href="mailto:divyanshkhandelwal0001@gmail.com" 
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-medium rounded-lg transition-colors border border-slate-700"
            >
              divyanshkhandelwal0001@gmail.com
            </a>
          </div>

          <div className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-purple-500/30 transition-colors">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
              <Linkedin size={32} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-slate-400 mb-6">Let's connect professionally.</p>
            <a 
              href="https://www.linkedin.com/in/divyansh-khandelwal-b208a82a1" 
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-purple-400 font-medium rounded-lg transition-colors border border-slate-700"
            >
              View Profile
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center space-y-6">
          <div className="flex space-x-6">
            <a href="https://github.com/Divyansh010605" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
              <Github size={24} />
            </a>
            <a href="mailto:divyanshkhandelwal0001@gmail.com" className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all">
              <Mail size={24} />
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
}
