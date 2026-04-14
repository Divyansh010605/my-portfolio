export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-950/50">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          © {year} Divyansh Khandelwal. All rights reserved.
        </p>
        
        <p className="text-slate-500 text-sm flex items-center">
          Built with 
          <span className="text-cyan-400 mx-1">React</span> 
          & 
          <span className="text-cyan-400 mx-1">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
