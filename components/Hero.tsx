import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Terminal, Database, Cpu } from 'lucide-react';
import HeroParticles from './HeroParticles';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* Particles Effect */}
      <HeroParticles />

      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold tracking-wider text-primary border border-primary/30 rounded-md bg-primary/5 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              AVAILABLE FOR NEW PROJECTS
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                Scalable SaaS
              </span> & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Full-Stack Solutions
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed pointer-events-auto"
          >
            I engineer robust web applications from the ground up. Specializing in efficient backend architecture, complex API design, and reactive modern frontends.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 pointer-events-auto"
          >
            <a
              href="#portfolio"
              className="group relative px-8 py-3 bg-white text-dark font-bold rounded-lg overflow-hidden flex items-center gap-2 transition-transform active:scale-95"
            >
              <span className="relative z-10">View Portfolio</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 hover:border-white/50 hover:bg-white/5 rounded-lg transition-all font-medium backdrop-blur-sm"
            >
              Discuss Project
            </a>
          </motion.div>

          {/* Tech Stack Mini Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-8 flex flex-wrap gap-6 items-center text-gray-500 text-sm font-mono border-t border-white/10 mt-8 pointer-events-auto"
          >
            <span className="flex items-center gap-2"><Terminal size={14} /> Next.js</span>
            <span className="flex items-center gap-2"><Database size={14} /> PostgreSQL</span>
            <span className="flex items-center gap-2"><Cpu size={14} /> Node.js</span>
          </motion.div>
        </div>

        {/* Visual Element - Code/Architecture Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:flex items-center justify-center pointer-events-auto"
        >
            <div className="relative w-full aspect-square max-w-[500px]">
                {/* Abstract server/stack layers */}
                <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl border border-white/10 backdrop-blur-3xl transform rotate-3"
                />
                <motion.div 
                    animate={{ y: [10, -10, 10] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-tl from-secondary/5 to-accent/5 rounded-3xl border border-white/10 backdrop-blur-xl transform -rotate-3"
                />
                
                {/* Center Content Card */}
                <div className="absolute inset-4 bg-[#0F0F1A]/90 rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="text-xs font-mono text-gray-500">server.ts</div>
                    </div>
                    
                    {/* Fake Code */}
                    <div className="font-mono text-xs md:text-sm space-y-2 text-gray-400">
                        <p><span className="text-secondary">import</span> <span className="text-yellow-200">{`{ Application }`}</span> <span className="text-secondary">from</span> <span className="text-green-300">'app'</span>;</p>
                        <p>&nbsp;</p>
                        <p><span className="text-secondary">class</span> <span className="text-primary">SaaSPlatform</span> <span className="text-secondary">extends</span> <span className="text-primary">System</span> {`{`}</p>
                        <div className="pl-4 border-l border-white/10">
                            <p><span className="text-secondary">constructor</span>() {`{`}</p>
                            <p className="pl-4"><span className="text-accent">this</span>.database = <span className="text-secondary">new</span> <span className="text-primary">PostgreSQL</span>();</p>
                            <p className="pl-4"><span className="text-accent">this</span>.api = <span className="text-secondary">new</span> <span className="text-primary">GraphQLServer</span>();</p>
                            <p className="pl-4"><span className="text-accent">this</span>.deploy(<span className="text-green-300">'cloud'</span>);</p>
                            <p>{`}`}</p>
                        </div>
                        <p>{`}`}</p>
                        <p>&nbsp;</p>
                        <p><span className="text-gray-500">// System Online...</span></p>
                    </div>

                    {/* Status Bar */}
                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                         <div className="flex items-center gap-2 text-xs text-green-400">
                             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                             Build Passing
                         </div>
                         <div className="text-xs text-gray-600">v2.4.0</div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
        
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 pointer-events-none"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;