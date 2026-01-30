import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg shadow-primary/5'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" className="text-2xl font-display font-bold tracking-tighter">
            DIVO<span className="text-primary">.DEV</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg backdrop-blur-sm transition-all hover:scale-105"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-medium text-gray-300 hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center px-5 py-3 font-medium bg-gradient-to-r from-primary to-secondary rounded-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;