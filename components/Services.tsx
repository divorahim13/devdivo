import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Specialized technical services designed to scale your business. From MVP to Enterprise, I cover the entire stack.
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
              <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors">
                  Start a Conversation <ArrowUpRight size={16} />
              </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#0F0F1A] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                        <service.icon size={28} />
                    </div>
                    <span className="text-xs font-mono text-gray-600 group-hover:text-primary transition-colors">0{index + 1}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                    {service.description}
                </p>

                {/* Features / Tech List */}
                <div className="border-t border-white/5 pt-6">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tech & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, fIndex) => (
                            <span 
                                key={fIndex} 
                                className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;