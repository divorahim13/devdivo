import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

const INITIAL_VISIBLE_COUNT = 4;

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = filteredProjects.length > visibleCount;
  const isExpanded = visibleCount > INITIAL_VISIBLE_COUNT;

  // Reset visible count when category changes to keep the view compact
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [activeCategory]);

  const toggleView = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
      // Optional: Scroll slightly up if needed, but usually keeping position is fine
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setVisibleCount(filteredProjects.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold mb-6 md:mb-0"
          >
            Featured <span className="text-secondary">Projects</span>
          </motion.h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer border border-white/5 hover:border-primary/50 transition-colors"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-white/20 px-2 py-1 rounded backdrop-blur-sm">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {(filteredProjects.length > INITIAL_VISIBLE_COUNT) && (
          <div className="flex justify-center">
            <button
              onClick={toggleView}
              className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <span className="font-medium text-sm tracking-wide">
                {isExpanded ? 'Show Less' : 'View All Projects'}
              </span>
              {isExpanded ? (
                <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8 max-h-[50vh] overflow-y-auto custom-scrollbar">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-1">{selectedProject.title}</h3>
                    <p className="text-primary">{selectedProject.category}</p>
                  </div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{selectedProject.description}</p>
                <div>
                  <h4 className="font-bold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;