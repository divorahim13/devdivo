import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-16 items-center"
            >
                {/* Image Side - Technical Look */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary via-dark to-secondary rounded-xl rotate-3 opacity-40 group-hover:rotate-1 transition-transform duration-500" />
                    <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[4/5] max-w-sm mx-auto bg-black/50 backdrop-blur-sm">
                        <img 
                            src="./src/Remini.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                            <div className="font-mono text-xs text-primary mb-1">Divo Dev</div>
                            <div className="font-bold text-white">Full-Stack Engineer</div>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div>
                    <h2 className="text-sm font-bold text-primary tracking-widest mb-2 uppercase">About The Engineer</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                        Solving complex business problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">elegant code architectures.</span>
                    </h3>
                    
                    <div className="space-y-4 text-gray-400 leading-relaxed mb-8 text-lg">
                        <p>
                            I don't just write code; I build products. As a Full-Stack Engineer, I specialize in the convergence of robust backend systems and intuitive frontend experiences.
                        </p>
                        <p>
                            My focus is on <strong>Scalability</strong> and <strong>Performance</strong>. Whether you need a SaaS platform built from scratch, a complex API integration, or a complete system overhaul, I bring a senior-level perspective to architecture and deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors">
                            <h4 className="text-white font-bold text-3xl mb-1">100%</h4>
                            <p className="text-sm text-gray-400 font-mono">Job Success Score</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/50 transition-colors">
                            <h4 className="text-white font-bold text-3xl mb-1">3+</h4>
                            <p className="text-sm text-gray-400 font-mono">Years Experience</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default About;