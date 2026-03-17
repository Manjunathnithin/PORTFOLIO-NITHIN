import { profile } from '@/data/profile';
import { Mail, MapPin, Download, Code2, Database, Briefcase, GraduationCap, Linkedin, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="text-gray-200 min-h-screen selection:bg-blue-500/30 selection:text-white bg-[#050505]">
      
      {/* Navigation Bar - Direct Access Contacts */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          
          {/* Left: Navigation Links */}
          <div className="flex items-center gap-8 md:gap-12">
            <a href="#education" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-400 transition-all duration-300">
              Education
            </a>
            <a href="#projects" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-400 transition-all duration-300">
              Projects
            </a>
            <a href="#technical" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-blue-400 transition-all duration-300">
              Technical
            </a>
          </div>

          {/* Right: Direct Contact Buttons */}
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <a 
              href={`mailto:${profile.contact.email}`} 
              title="Email Me"
              className="p-2.5 rounded-xl bg-white/5 text-gray-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Mail size={16} />
            </a>
            <a 
              href={`tel:${profile.contact.phone}`} 
              title="Call Me"
              className="p-2.5 rounded-xl bg-white/5 text-gray-500 hover:bg-cyan-600 hover:text-white transition-all duration-300"
            >
              <Phone size={16} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nithin-manjunath-9aab91364" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/5 text-gray-500 hover:bg-[#0077B5] hover:text-white transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-24 px-8 border-b border-white/5 pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-40"></div>
        
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2.5rem] blur opacity-15 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
              <img 
                src="/me.jpg" 
                alt={profile.name} 
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600 leading-[0.9]">
              {profile.name}
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed font-light">
              {profile.summary}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-12">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="p-2 rounded-lg bg-white/5"><MapPin size={18}/></div>
                {profile.contact.location}
              </div>
            </div>

            <a 
              href="/1JB23CD402_NithinM_RESUME.pdf" 
              download 
              className="relative inline-flex items-center gap-3 bg-white text-black px-12 py-5 rounded-2xl font-black overflow-hidden group hover:text-white transition-all duration-500"
            >
              <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-500 ease-out group-hover:w-full"></div>
              <span className="relative flex items-center gap-2 font-bold uppercase tracking-widest text-sm"><Download size={18} /> Download CV</span>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-4xl mx-auto py-32 px-8 scroll-mt-20">
        <h2 className="text-xs font-black uppercase tracking-[0.8em] text-blue-500 mb-16 text-center">Education Path</h2>
        <div className="space-y-6">
          {profile.education.map((edu, i) => (
            <div key={i} className="group p-1 bg-gradient-to-r from-white/5 to-transparent hover:from-blue-600/20 rounded-[2rem] transition-all duration-500">
              <div className="bg-[#0a0a0a] p-10 rounded-[1.9rem] flex flex-col md:flex-row md:items-center justify-between gap-6 text-left border border-white/5">
                <div>
                  <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full mb-4 inline-block">{edu.year}</span>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{edu.institution}</h3>
                  <p className="text-lg text-gray-400 font-light">{edu.degree}</p>
                </div>
                <div className="md:text-right border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-10 text-left md:text-right">
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 font-black">Grade</p>
                  <p className="text-2xl font-black text-white">{edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="max-w-7xl mx-auto py-32 px-8 border-t border-white/5 scroll-mt-20">
        <h2 className="text-xs font-black uppercase tracking-[0.8em] text-blue-500 mb-20 text-center">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {profile.projects.map((project, i) => (
            <div key={i} className="group relative h-full">
              <div className="relative h-full flex flex-col overflow-hidden rounded-[2.5rem] bg-[#111] border border-white/5 transition-all duration-700 hover:border-blue-500/30 text-left">
                <div className="relative h-48 w-full bg-[#0d0d0d] overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-transparent opacity-50"></div>
                  <Code2 size={60} className="text-white/10 group-hover:text-blue-500/20 transition-all duration-700" />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-gradient-to-b from-[#111] to-[#0a0a0a]">
                   <p className="text-blue-400 font-bold text-[10px] mb-2 uppercase tracking-widest">{project.category}</p>
                   <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                   <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light italic opacity-80">{project.description}</p>
                   <div className="mt-auto">
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map(t => (
                         <span key={t} className="text-[10px] px-3 py-1.5 bg-blue-500/5 border border-blue-500/10 rounded-full text-blue-300/80">{t}</span>
                       ))}
                     </div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical & Leadership Sections */}
      <section id="technical" className="max-w-7xl mx-auto py-32 px-8 border-t border-white/5 scroll-mt-20">
        <div className="grid md:grid-cols-2 gap-24 text-left">
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Technical Stack</h2>
            <div className="p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 hover:border-blue-500/20 transition-all">
              <div className="flex flex-wrap gap-3">
                {[...profile.skills.programming, ...profile.skills.tools, ...profile.skills.databases].map(skill => (
                  <span key={skill} className="px-5 py-2.5 bg-[#161616] rounded-xl text-sm border border-white/5 hover:border-blue-500/50 hover:text-white transition-all text-gray-400 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white mb-12">Leadership</h2>
            <div className="space-y-6">
               <div className="p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 group hover:border-blue-500/30 transition-all">
                 <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Event Coordinator</h3>
                 <p className="text-gray-400 font-light leading-relaxed">Organized technical events at SJBIT, managing logistics and cross-functional teams.</p>
               </div>
               <div className="p-8 rounded-[2rem] bg-[#0c0c0c] border border-white/5 group hover:border-blue-500/30 transition-all">
                 <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Placement Coordinator</h3>
                 <p className="text-gray-400 font-light leading-relaxed">Bridge between students and recruitment teams during campus hiring drives.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="py-32 px-8 border-t border-white/5 bg-[#080808]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tighter">Let's Connect.</h2>
          <div className="flex gap-8 mb-32">
            <a href={`mailto:${profile.contact.email}`} className="p-6 rounded-3xl bg-white/5 hover:bg-blue-600 transition-all duration-500 hover:-translate-y-2">
              <Mail size={40} className="text-gray-400 hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/nithin-manjunath-9aab91364" target="_blank" className="p-6 rounded-3xl bg-white/5 hover:bg-[#0077B5] transition-all duration-500 hover:-translate-y-2">
              <Linkedin size={40} className="text-gray-400 hover:text-white" />
            </a>
          </div>
          <p className="text-[10px] uppercase tracking-[1em] text-gray-700">
            {profile.name} — © 2026
          </p>
        </div>
      </footer>
    </main>
  );
}