import { useState, useEffect } from 'react';
import { FiMenu as Menu, FiX as X, FiGithub as Github, FiLinkedin as Linkedin, FiMail as Mail } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          DK<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-cyan-400 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
            <a href="https://github.com/Divyansh010605" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/divyansh-khandelwal-b208a82a1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t-0 flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-4 pt-4 border-t border-slate-700">
            <a href="https://github.com/Divyansh010605" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/divyansh-khandelwal-b208a82a1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
