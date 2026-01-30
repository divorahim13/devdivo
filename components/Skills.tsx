import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Technical <span className="text-accent">Arsenal</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I am constantly learning and evolving. My tech stack focuses on performance, scalability, and developer experience. Here are the tools I use to bring ideas to life.
            </p>
            <div className="flex flex-wrap gap-4">
                {['Creative', 'Problem Solver', 'Fast Learner', 'Detail Oriented'].map((trait, i) => (
                    <span key={i} className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/5 text-sm font-medium">
                        {trait}
                    </span>
                ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium flex items-center gap-2">
                    <span>{skill.icon}</span> {skill.name}
                  </span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full relative"
                  >
                     {/* Glow effect at the end of the bar */}
                     <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px] rounded-full" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;