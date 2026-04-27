'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { 
  Twitter, Instagram, Youtube, ArrowUpRight, Power, Cast, Eye, Bot, ChevronLeft, ChevronRight,
  Cloud, Database, Server, Smartphone, Monitor, Box, Layers, Network, Cpu, HardDrive, Share2, Shield, Code, Terminal, Atom, Map,
  Mail, MessageCircle, Music2, Phone, Send, Zap, Tag, MousePointer2, Brush, Handshake, Check, X, CreditCard, Star
} from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-center">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
      >
        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_2px]" />
        
        {/* Logo/Initial */}
        <div className="w-10 h-10 rounded-full bg-[#5B21B6] flex items-center justify-center text-white font-display font-bold text-sm mr-2 shadow-[0_0_20px_rgba(91,33,182,0.4)] border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
          DK
        </div>
        
        {/* Nav Links */}
        <div className="flex gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1, color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="px-3 md:px-5 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.15em] md:tracking-[0.25em] font-display font-bold transition-colors text-white/50 hover:bg-white/5 relative group/link"
            >
              {item.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#4ade80] transition-all group-hover/link:w-1/2 shadow-[0_0_8px_#4ade80]" />
            </motion.a>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-3 ml-4 pl-4 border-l border-white/10 pr-4">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <span className="absolute inset-0 w-2 h-2 rounded-full bg-[#4ade80] animate-ping opacity-40" />
              <span className="relative block w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_10px_#4ade80]" />
            </div>
            <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-display font-bold whitespace-nowrap">
              System <span className="text-[#4ade80]">Online</span>
            </span>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="home" className="relative overflow-hidden bg-black min-h-screen w-full flex flex-col items-center justify-center">
      {/* Background Layer with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        {/* Fallback space gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />
        
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/blackhole-loop.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic dark black-to-purple overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/30 to-black z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-start lg:justify-between h-[100dvh] pt-[15dvh] lg:pt-24 pb-12">
        
        {/* Top Spacer to push content center/bottom if needed */}
        <div className="flex-1 w-full flex flex-col items-center justify-start lg:justify-center relative">
          
          {/* Name Title */}
          <div className="w-full text-center pointer-events-none select-none z-10 gap-0 mb-6 lg:mb-0 lg:absolute lg:top-[35%] lg:left-1/2 lg:-translate-x-1/2">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
              className="text-[14vw] sm:text-[12vw] md:text-[14vw] lg:text-[12vw] font-display font-bold text-white leading-none tracking-tighter mix-blend-plus-lighter drop-shadow-2xl flex flex-col md:flex-row items-center justify-center md:gap-8"
            >
              <motion.span 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 0.85, y: 0 }} 
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Divo
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 0.85, y: 0 }} 
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Khairul
              </motion.span>
            </motion.h1>
          </div>

          {/* Mobile Layout Fallback */}
          <div className="lg:hidden relative z-40 w-full max-w-sm mx-auto space-y-4 text-center pointer-events-auto">
             <p className="text-white text-xs sm:text-sm font-medium border border-white/10 shadow-2xl backdrop-blur-md bg-black/40 p-5 rounded-3xl mx-2">
              Full Stack Developer focused on building modern, high-performance web applications. I design interfaces that seamlessly blend aesthetics with functionality for an exceptional digital experience.
            </p>
            <div className="flex justify-center gap-4">
               <button className="flex items-center gap-2 bg-[#5B21B6] text-white px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(91,33,182,0.6)] hover:bg-[#4C1D95] transition-colors text-sm">
                Let&apos;s Talk <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Portrait Image Fixed at the Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex justify-center items-end"
      >
        {/* Subtle Purple Glow Behind Portrait */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[250px] h-[300px] sm:w-[350px] sm:h-[400px] md:w-[450px] md:h-[500px] bg-[#8B5CF6]/40 rounded-full blur-[80px] pointer-events-none opacity-80" />
        
        <div className="relative w-[250px] h-[300px] sm:w-[350px] sm:h-[420px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[750px] xl:w-[700px] xl:h-[850px]">
          <Image
            src="/images/divo-aurora.png"
            alt="Divo Khairul"
            fill
            className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
            priority
            quality={100}
          />
        </div>
      </motion.div>

      {/* Left Side Text & Socials (Desktop) */}
      <motion.div 
        drag 
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
        className="absolute left-10 xl:left-20 top-1/2 -translate-y-1/2 max-w-[280px] hidden lg:block font-sans z-30 pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <p className="text-white/90 text-sm leading-relaxed mb-6 font-medium bg-black/30 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl">
          Full Stack Developer focused on building modern, high-performance web applications. I design interfaces that seamlessly blend aesthetics with functionality for an exceptional digital experience.
        </p>
        <div className="flex gap-4 px-2">
          {[Twitter, Instagram, Youtube].map((Icon, i) => (
            <motion.button 
              key={i} 
              whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "#5B21B6", borderColor: "#5B21B6", color: "#fff" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 transition-colors shadow-xl"
            >
              <Icon size={20} />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Right Side Text & CTA (Desktop) */}
      <motion.div 
        drag 
        dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
        dragElastic={0.2}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
        className="absolute right-10 xl:right-20 top-1/2 -translate-y-1/2 max-w-[280px] hidden lg:block text-right font-sans z-30 pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        <p className="text-white/90 text-sm leading-relaxed mb-8 font-medium bg-black/30 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-2xl">
          Building comprehensive digital ecosystems, from dynamic UI/UX design and complex system architectures to high-level performance optimization.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-[#5B21B6] text-white px-8 py-4 rounded-full font-bold tracking-tight hover:bg-[#4C1D95] transition-colors group shadow-[0_0_30px_rgba(91,33,182,0.5)] hover:shadow-[0_0_40px_rgba(91,33,182,0.8)]"
        >
          Let&apos;s Talk
          <span className="bg-white text-[#5B21B6] rounded-full p-1.5 group-hover:rotate-45 transition-transform">
            <ArrowUpRight size={18} />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
};const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yGlow = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const cards = [
    {
      num: '01',
      tag: 'CORE',
      title: 'Frontend Development',
      description: 'Building modern, responsive, fast, and user-friendly web interfaces across all devices. Seamless animations are my standard.',
      icon: <Monitor strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
    {
      num: '02',
      tag: 'INFRA',
      title: 'Backend & Systems',
      description: 'Developing stable, secure, and scalable backends, APIs, and system logic. Ensuring full protection of your data traffic.',
      icon: <Server strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
    {
      num: '03',
      tag: 'DATA',
      title: 'Database & Cloud',
      description: 'Designing database architectures, custom admin dashboards, and seamless third-party integrations (Payments, Emails, CRM).',
      icon: <Database strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
    {
      num: '04',
      tag: 'GROWTH',
      title: 'SEO & Performance',
      description: 'Multi-layered SEO-friendly structure, lightning-fast loading, and elite Core Web Vitals optimization to dominate Google search rankings.',
      icon: <Network strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
  ];

  return (
    <section ref={ref} id="about" className="bg-black py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow (Parallax) */}
      <motion.div style={{ y: yGlow }} className="absolute inset-0 w-full h-[150%] -top-[25%] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#5B21B615_0%,transparent_70%)] pointer-events-none" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Split Layout Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-32">
          {/* Left Side: Futuristic CPU Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full lg:min-h-full cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
            dragElastic={0.2}
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-[40px] overflow-hidden border border-white/5 shadow-[0_30px_60px_rgba(91,33,182,0.3)] hover:shadow-[0_40px_80px_rgba(91,33,182,0.5)] transition-shadow duration-500"
            >
              <Image
                src="/images/astronot.jpg"
                alt="Astronaut"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center font-sans">
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              className="text-[10px] uppercase tracking-[0.4em] text-[#4ade80] mb-6 font-display font-bold"
            >
              SOFTWARE ENGINEER & DIGITAL CREATOR
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.05] tracking-tight"
            >
              About Me
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.15 }}
              className="text-white/70 text-base md:text-lg leading-relaxed mb-6 font-medium"
            >
              I am a Full Stack Developer focused on building modern, scalable, and high-performance web applications. With end-to-end expertise, I build solid technological solutions, from designing stunning UI/UX to comprehensive backend architecture, APIs, and system integrations.
            </motion.p>

            <motion.p
               initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm leading-relaxed mb-10 font-bold border-l-2 border-[#5B21B6] pl-4 italic"
            >
              Dedicated to continuous innovation and exploring the latest technologies, ensuring every line of code written delivers maximum performance and premium quality.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <a href="#work" className="bg-[#5B21B6] border border-[#5B21B6] text-white px-8 md:px-10 py-4 font-display rounded-full text-sm font-bold tracking-tight hover:bg-[#4C1D95] transition-all shadow-[0_0_20px_rgba(91,33,182,0.4)] text-center">
                View Projects
              </a>
              <a href="#contact" className="border border-white/20 text-white px-8 md:px-10 py-4 font-display rounded-full text-sm font-bold tracking-tight hover:bg-white/5 transition-all text-center">
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-7xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
              className="group relative flex flex-col h-full bg-[#05050A] border border-[#1A1A24] rounded-2xl overflow-hidden cursor-default transition-all duration-300 hover:border-[#2D2D44] hover:bg-[#08080C] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Subtle top spotlight on hover */}
              <div className="absolute inset-x-0 top-0 h-[150px] bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.08),_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Technical Accent Line */}
              <div className="absolute top-0 left-6 w-8 h-[2px] bg-[#4F46E5]/40 group-hover:bg-[#6366F1] group-hover:w-16 transition-all duration-300 z-10" />
              
              {/* Inner subtle top highlight to simulate bevel / hardware edge */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8 flex flex-col h-full z-10">
                {/* Header: Numeral + Icon Box */}
                <div className="flex justify-between items-start mb-16">
                  <span className="text-[#3F3F5A] font-display font-bold text-sm tracking-wide">{card.num} //</span>
                  <div className="w-11 h-11 border border-[#1A1A24] bg-[#0A0A0F]/50 rounded-lg flex items-center justify-center group-hover:border-[#4F46E5]/40 transition-colors duration-300 shadow-[inset_0_1px_3px_rgba(255,255,255,0.02)]">
                    {card.icon}
                  </div>
                </div>

                {/* Body Content */}
                <div className="mt-auto">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#6366F1] mb-2 font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                    {card.tag}
                  </div>
                  <h3 className="text-xl md:text-[22px] font-display font-bold text-white mb-3 leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#8E8E99] font-sans text-sm leading-relaxed font-medium transition-colors duration-300 group-hover:text-[#A1A1AA]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Technical Detail Dots */}
              <div className="absolute bottom-6 right-6 flex gap-1.5 opacity-[0.15] group-hover:opacity-[0.4] transition-opacity duration-300">
                <div className="w-1 h-1 bg-white rounded-sm" />
                <div className="w-1 h-1 bg-white rounded-sm" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const containerRef = React.useRef(null);

  useGSAP(() => {
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reset',
      },
      y: 400,
      opacity: 0,
      rotateZ: gsap.utils.wrap([-15, -5, 0, 5, 15]), // Wild spin-in effect
      stagger: 0.1,
      duration: 1.2,
      ease: 'back.out(1.2)'
    });
  }, { scope: containerRef });
  
  const projects = [
    { id: 1, title: 'RentSwift', subtitle: 'Car Rental', img: 'https://image.thum.io/get/width/600/crop/800/https://carrentaldivo.vercel.app/', href: 'https://carrentaldivo.vercel.app/' },
    { id: 2, title: 'RoxPass', subtitle: 'Top Up Platform', img: 'https://image.thum.io/get/width/600/crop/800/https://roxpassdivo.vercel.app/', href: 'https://roxpassdivo.vercel.app/' },
    { id: 3, title: 'DataVue', subtitle: 'Analytics Dashboard', img: 'https://image.thum.io/get/width/600/crop/800/https://datavuedivo-chi.vercel.app/', href: 'https://datavuedivo-chi.vercel.app/' },
    { id: 4, title: 'Crewcuts', subtitle: 'Barbershop', img: 'https://image.thum.io/get/width/600/crop/800/https://crewcutsbarbershopbydivo.vercel.app/', href: 'https://crewcutsbarbershopbydivo.vercel.app/' },
    { id: 5, title: 'Nexus', subtitle: 'SAAS Landing', img: 'https://image.thum.io/get/width/600/crop/800/https://nexus-seven-rose.vercel.app/', href: 'https://nexus-seven-rose.vercel.app/' },
  ];

  return (
    <section 
      id="work"
      className="bg-black py-32 min-h-screen overflow-hidden flex flex-col items-center justify-center relative"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Background Stars/Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="text-center mb-12 relative z-10 font-sans">
        <h2 className="text-white text-5xl font-display font-bold mb-4 tracking-tighter">Featured Projects</h2>
        <p className="text-gray-500 text-lg font-medium">Hover to pick a card from the collection</p>
      </div>

      {/* Desktop Fanned Layout */}
      <div ref={containerRef} className="hidden md:flex relative w-full max-w-7xl h-[750px] items-center justify-center perspective-2000 mt-8">
        <div className="flex items-center justify-center -space-x-48 transform-gpu">
          {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;
            
            // Calculate fan effect (Triangle/Arc)
            const midIndex = (projects.length - 1) / 2;
            const offset = index - midIndex;
            
            // Default fan values - creating a "triangle" peak in the middle
            const defaultRotate = offset * 12;
            const defaultY = Math.abs(offset) * 40; // More pronounced triangle/arc
            const defaultX = offset * 40; // Spread them out more

            return (
              <div 
                key={project.id} 
                className="project-card relative"
                style={{ zIndex: isHovered ? 100 : 10 + (projects.length - Math.abs(offset)) }}
              >
                <motion.div
                  onMouseEnter={() => setHoveredIndex(index)}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.4}
                  whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                  animate={{
                    y: isHovered ? -100 : defaultY,
                    x: isHovered ? 0 : defaultX,
                    rotate: isHovered ? 0 : defaultRotate,
                    scale: isHovered ? 1.15 : (isAnyHovered ? 0.85 : 1),
                    filter: isAnyHovered && !isHovered ? 'brightness(0.3) blur(4px)' : 'brightness(1) blur(0px)',
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    filter: { duration: 0.4 }
                  }}
                  className="relative w-[280px] h-[400px] md:w-[360px] md:h-[520px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-3xl rounded-[56px] shadow-[0_30px_80px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.2)] cursor-grab active:cursor-grabbing p-12 flex flex-col overflow-hidden group"
                style={{
                  transformOrigin: 'bottom center',
                }}
              >
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[56px] pointer-events-none">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover opacity-50 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hologram / Glass Base */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-black/40 to-[#0ea5e9]/20" />
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 mix-blend-overlay" />
                  
                  {/* Subtle Noise effect */}
                  <div 
                    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
                    style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}
                  />

                  {/* Vignette / Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                <div className="relative z-10 font-sans pointer-events-none">
                  <h3 className="text-white text-4xl md:text-5xl font-display font-bold leading-none mb-3 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">{project.title}</h3>
                  <p className="text-white/80 text-base md:text-lg font-medium uppercase tracking-widest text-[10px]">{project.subtitle}</p>
                </div>

                {isHovered && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-10 right-10 md:bottom-12 md:right-12 z-30"
                  >
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white pl-8 pr-3 py-3 rounded-full text-sm font-black flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-white/20 transition-all pointer-events-auto">
                      View
                      <span className="bg-[#8B5CF6] text-white rounded-full p-2 shadow-[0_0_15px_#8B5CF6]">
                        <ArrowUpRight size={18} strokeWidth={3} />
                      </span>
                    </a>
                  </motion.div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
      </div>

      {/* Mobile Stack Layout */}
      <div className="md:hidden flex flex-col gap-6 w-full px-6 mt-4 relative z-20 pb-10">
        {projects.map((project, index) => (
          <motion.div
            key={`mobile-${project.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/5] max-h-[450px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-3xl rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.1)] p-6 flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[40px]">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/20 via-black/40 to-[#0ea5e9]/20" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_50%,transparent_50%)] bg-[length:100%_4px] opacity-20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            </div>

            <div className="relative z-10 font-sans mt-auto">
              <h3 className="text-white text-3xl font-display font-bold leading-none mb-2 tracking-tight drop-shadow-md">{project.title}</h3>
              <p className="text-white/80 text-xs font-medium uppercase tracking-[0.2em]">{project.subtitle}</p>
            </div>
            
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform pointer-events-auto">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const [mounted, setMounted] = React.useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const skillNodes = [
    { id: 'core', title: 'Core Architecture', icon: <Cpu className="w-8 h-8 text-[#4ade80]" />, x: 50, y: 50, desc: 'System Design & Scaling' },
    { id: 'frontend', title: 'Frontend', icon: <Monitor className="w-6 h-6 text-white/70" />, x: 20, y: 20, desc: 'React, Next.js, UI/UX' },
    { id: 'backend', title: 'Backend', icon: <Server className="w-6 h-6 text-white/70" />, x: 80, y: 20, desc: 'Node.js, Python, Go' },
    { id: 'data', title: 'Database', icon: <Database className="w-6 h-6 text-white/70" />, x: 20, y: 80, desc: 'PostgreSQL, MongoDB' },
    { id: 'ai', title: 'AI & ML', icon: <Bot className="w-6 h-6 text-white/70" />, x: 80, y: 80, desc: 'TensorFlow, PyTorch' },
    { id: 'cloud', title: 'Cloud', icon: <Cloud className="w-6 h-6 text-white/70" />, x: 50, y: 15, desc: 'AWS, GCP, Docker' },
    { id: 'security', title: 'Security', icon: <Shield className="w-6 h-6 text-white/70" />, x: 50, y: 85, desc: 'OAuth, Cryptography' },
  ];

  const connections = [
    { from: 'core', to: 'frontend' },
    { from: 'core', to: 'backend' },
    { from: 'core', to: 'data' },
    { from: 'core', to: 'ai' },
    { from: 'core', to: 'cloud' },
    { from: 'core', to: 'security' },
    { from: 'frontend', to: 'cloud' },
    { from: 'backend', to: 'cloud' },
    { from: 'data', to: 'security' },
    { from: 'ai', to: 'security' },
  ];

  return (
    <section ref={ref} id="skills" className="bg-black py-32 min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Image (Parallax) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 pointer-events-none opacity-100 w-full h-[130%] -top-[15%]">
        <Image
          src="/images/greenplanet.png"
          alt="Green Planet Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
      {/* Soft gradient transitions at the edges - Fixed overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="text-center mb-12 relative z-10 font-sans">
        <h2 className="text-white text-5xl font-display font-bold mb-4 tracking-tighter">Technical Skills</h2>
        <p className="text-gray-500 text-lg font-medium">My technology stack and expertise</p>
      </div>

      <div className="w-full h-[350px] sm:h-[500px] md:h-[700px] flex justify-center items-center overflow-hidden">
        <div className="relative flex-none w-[1000px] h-[700px] scale-[0.55] sm:scale-[0.8] md:scale-100 origin-center transform-gpu">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {connections.map((conn, i) => {
              const fromNode = skillNodes.find(n => n.id === conn.from);
              const toNode = skillNodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;

              // Give cards time to appear before starting lines
              const baseDelay = 1.0;
              const staggerDelay = baseDelay + (i * 0.15);

              return (
                <g key={i}>
                  {/* Base subtle line drawing from start to end */}
                  <motion.line 
                    x1={`${fromNode.x}%`} 
                    y1={`${fromNode.y}%`} 
                    x2={`${toNode.x}%`} 
                    y2={`${toNode.y}%`} 
                    stroke="rgba(255,255,255,0.15)" 
                    strokeWidth="2" 
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      pathLength: { duration: 1, delay: staggerDelay, ease: "easeInOut" },
                      opacity: { duration: 0.1, delay: staggerDelay }
                    }}
                  />
                  {/* Animated glowing line that appears AFTER base line is drawn */}
                  {mounted && (
                    <motion.line 
                      x1={`${fromNode.x}%`} 
                      y1={`${fromNode.y}%`} 
                      x2={`${toNode.x}%`} 
                      y2={`${toNode.y}%`} 
                      stroke="#4ade80" 
                      strokeWidth="2"
                      strokeDasharray="10 30"
                      filter="url(#glow)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.6 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: staggerDelay + 0.8 }}
                    >
                      <animate 
                        attributeName="stroke-dashoffset" 
                        from="40"
                        to="0" 
                        dur="2s" 
                        repeatCount="indefinite" 
                      />
                    </motion.line>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Skill Nodes */}
          {skillNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              drag
              dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-grab active:cursor-grabbing"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <motion.div 
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 rounded-3xl shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col items-center text-center w-44 hover:bg-white/[0.08] hover:border-[#4ade80]/50 hover:shadow-[0_0_40px_rgba(74,222,128,0.2)] transition-all duration-300 group font-sans"
              >
                <div className="w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#4ade80]/50 transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0)] group-hover:shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                  {node.icon}
                </div>
                <h3 className="text-white font-display font-bold text-base mb-1 tracking-tight">{node.title}</h3>
                <p className="text-white/50 text-xs font-medium">{node.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState('2');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '+62 ', paymentMethod: 'Q1' });

  const ref = useRef(null);

  const packages = [
    {
      id: '1',
      name: 'Starter Edition',
      price: 700000,
      priceLabel: 'Rp 700K',
      subLabel: 'landing page',
      description: 'Perfect for personal branding or simple product launches.',
      pillText: 'Basic',
      features: [
        'Single Page Architecture',
        'Fully Mobile Responsive',
        'Standard Framer Motion Animations',
        'SEO Meta Tag Optimization',
        'Contact Form Integration',
        'Free .com Domain (1 Year)',
        'Vercel Global Deployment',
        '7 Business Days Delivery',
        'Standard Maintenance Support'
      ]
    },
    {
      id: '2',
      name: 'Professional',
      price: 1000000,
      priceLabel: 'Rp 1M',
      subLabel: 'multi page',
      description: 'Ideal for growing businesses needing a multi-page presence.',
      pillText: 'Pro',
      features: [
        'Up to 5 Custom Pages',
        'Premium UI/UX Polish',
        'Advanced Scroll Animations',
        'Dynamic Content Loading',
        'Integrated Blog System',
        'Speed & Performance Tuning',
        'Free .com / .id Domain',
        '14 Business Days Delivery',
        'Priority Slack/WA Support',
        'CMS Integration (Optional)'
      ]
    },
    {
      id: '3',
      name: 'Enterprise',
      price: 1500000,
      priceLabel: 'Rp 1.5M',
      subLabel: 'full stack',
      description: 'For complex web apps, dashboards, or custom logic systems.',
      pillText: 'App',
      features: [
        'Unlimited Custom Pages',
        'Database & API Integration',
        'Admin Dashboard Panel',
        'User Authentication System',
        'Payment Gateway Integration',
        'Real-time Data Fetching',
        'Cloudinary Asset Hosting',
        '30 Business Days Delivery',
        '24/7 Priority Support',
        'Training & Documentation'
      ]
    }
  ];

  const selectedPackage = packages.find(p => p.id === selectedPackageId);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          packageId: selectedPackage?.id,
          price: selectedPackage?.price,
          ...formData
        })
      });

      const data = await response.json();
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        alert(data.error || 'Checkout failed');
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred during checkout');
      setIsLoading(false);
    }
  };

  return (
    <section id="pricing" ref={ref} className="bg-black py-40 min-h-screen relative overflow-hidden font-sans flex flex-col items-center justify-center">
      {/* 
          ULTRA-SMOOTH TRANSITION OVERLAYS 
          Using multiple layers to prevent any visible lines between sections
      */}
      <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-black via-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black via-black to-transparent z-10 pointer-events-none" />

      {/* Cinematic Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Core bottom glow */}
        <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[140%] h-[70%] bg-gradient-to-t from-[#4F46E5]/30 via-[#8B5CF6]/5 to-transparent blur-[140px] rounded-[100%]" />
        
        {/* Sonar / Pulsing Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '4s', animationDelay: '2s' }} />

        {/* Dynamic Sparkles (Animated SVG) */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen">
          <svg className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" opacity="0.1" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-white/60 text-[10px] uppercase font-bold tracking-[0.2em]">Investment Plans • 2026</span>
          </div>
          
          <h2 className="text-white text-5xl md:text-8xl font-display font-medium mb-10 tracking-tight max-w-5xl leading-[0.9] text-center">
            Investment for <br />Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#818CF8] via-[#C084FC] to-[#818CF8] bg-[length:200%_auto] animate-gradient-x">Digital Legacy.</span>
          </h2>

          <div className="flex justify-center">
            <div className="flex items-center bg-white/[0.02] border border-white/5 rounded-full pl-3 pr-8 py-3 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="flex -space-x-4 mr-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1A1A24] to-[#0A0A0F] border-2 border-black shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-[#4F46E5]/20 flex items-center justify-center text-[10px] text-white/40 italic">D{i}</div>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <span className="block text-white text-sm font-bold font-display leading-none mb-1">
                  Join 1,000+ Innovators
                </span>
                <span className="block text-white/30 text-[10px] font-medium uppercase tracking-widest">
                  already scaling with my solutions
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full items-start mb-24">
          {packages.map((pkg, i) => {
            const isSelected = selectedPackageId === pkg.id;
            const isCenter = pkg.id === '2';

            return (
              <motion.div
                key={pkg.id}
                onClick={() => setSelectedPackageId(pkg.id)}
                whileHover={{ y: -15, transition: { duration: 0.4 } }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`
                  relative cursor-pointer rounded-[48px] p-10 lg:p-12 flex flex-col transition-all duration-700
                  ${isCenter ? 'lg:-mt-8 lg:mb-[-32px] z-20 border-[#8B5CF6]/40 bg-gradient-to-b from-[#8B5CF6]/10 via-[#05050A]/80 to-[#05050A]/95' : 'z-10 bg-[#0A0A0F]/50 border-white/5 backdrop-blur-3xl'}
                  border shadow-[0_40px_100px_rgba(0,0,0,0.5)]
                  ${isSelected ? 'ring-1 ring-[#8B5CF6] shadow-[0_0_120px_rgba(139,92,246,0.15)]' : 'hover:border-white/10'}
                `}
              >
                {/* Visual Flair for Center Card */}
                {isCenter && (
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8Y2lyY2xlIGN4PSIxNSUiIGN5PSIyNSUiIHI9IjEiIGZpbGw9IiM4QjVDRjYiIG9wYWNpdHk9IjAuNSIvPgo8Y2lyY2xlIGN4PSI4NSUiIGN5PSIxNSUiIHI9IjEiIGZpbGw9IiMzQjgyRjYiIG9wYWNpdHk9IjAuNCIvPgo8Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjEuNSIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=')] opacity-40 pointer-events-none mix-blend-screen" />
                )}

                <div className="relative z-10 mb-12">
                  <div className="flex justify-between items-center mb-8">
                    <div className={`px-4 py-1 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] border ${isSelected ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-white' : 'bg-white/5 border-white/10 text-white/40'}`}>
                        {pkg.pillText} Option
                    </div>
                    {isCenter && (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 border border-amber-500/30">
                            <Star size={10} className="fill-amber-500 text-amber-500" />
                            <span className="text-[9px] font-bold text-amber-500 uppercase tracking-tighter">Recommended</span>
                        </div>
                    )}
                  </div>
                  
                  <h3 className="text-white text-xl font-display font-medium tracking-tight mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-white text-6xl font-display font-bold tracking-tighter">
                      {pkg.priceLabel}
                    </span>
                    <span className="text-white/20 text-xs font-bold uppercase tracking-widest font-sans">Full Pack</span>
                  </div>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-6">{pkg.subLabel}</p>
                  
                  <p className="text-white/50 text-sm leading-relaxed min-h-[40px]">
                    {pkg.description}
                  </p>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-12" />

                {/* Features List - Highly Detailed */}
                <div className="relative z-10 flex-grow space-y-5 mb-12">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 group/item">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30 shadow-[0_0_10px_rgba(139,92,246,0.2)]' : 'bg-white/5 border-white/5'} border`}>
                        <Check size={10} className={isSelected ? 'text-[#8B5CF6]' : 'text-white/20'} />
                      </div>
                      <span className="text-white/60 text-[13px] font-medium group-hover/item:text-white transition-colors leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 mt-auto">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                    className={`
                      w-full py-5 rounded-2xl font-display font-bold text-base transition-all duration-500 flex items-center justify-center gap-3 group/btn
                      ${isSelected ? 'bg-white text-black shadow-[0_20px_50px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}
                    `}
                  >
                    Invest in this Plan
                    <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>

                {/* Holographic Border Effect */}
                {isSelected && (
                  <div className="absolute inset-0 rounded-[48px] pointer-events-none overflow-hidden">
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_70%,#8B5CF6_85%,transparent_100%)] animate-[spin_4s_linear_infinite] opacity-30" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Value Prop Icons */}
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-white/5 pt-16"
        >
          {[
            { icon: <Shield size={20} />, title: "Secure Payment", desc: "Enterprise-grade encryption" },
            { icon: <Zap size={20} />, title: "Fast Delivery", desc: "Agile development cycles" },
            { icon: <MessageCircle size={20} />, title: "Direct Access", desc: "Direct line to the engineer" },
            { icon: <ArrowUpRight size={20} />, title: "Scalable Code", desc: "Built for future growth" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-4">
                {item.icon}
              </div>
              <h4 className="text-white text-sm font-bold font-display mb-1">{item.title}</h4>
              <p className="text-white/30 text-xs font-medium">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Checkout Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0A0A0F] border border-white/10 rounded-[40px] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,1)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Summary */}
                <div className="p-10 md:p-14 bg-white/5 border-r border-white/5">
                   <div className="flex justify-between items-center mb-12">
                     <div className="w-10 h-10 rounded-full bg-[#5B21B6] flex items-center justify-center text-white font-display font-bold text-xs">DK</div>
                     <button onClick={() => setIsModalOpen(false)} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                     </button>
                   </div>

                   <div className="mb-10">
                      <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Selected Investment</span>
                      <h4 className="text-white text-3xl font-display font-bold mb-2">{selectedPackage?.name}</h4>
                      <div className="text-white text-5xl font-display font-bold tracking-tighter mb-4">{selectedPackage?.priceLabel}</div>
                      <p className="text-white/40 text-sm leading-relaxed">{selectedPackage?.description}</p>
                   </div>

                   <div className="space-y-4">
                      {selectedPackage?.features.slice(0, 5).map((f, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-white/60 text-xs font-medium">
                           <div className="w-4 h-4 rounded-full bg-white/5 border border-white/5 flex items-center justify-center">
                              <Check size={8} className="text-[#8B5CF6]" />
                           </div>
                           {f}
                        </div>
                      ))}
                   </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-10 md:p-14">
                   <h4 className="text-white text-xl font-display font-bold mb-8">Checkout Details</h4>
                   
                   <form onSubmit={handleCheckout} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-1">First Name</label>
                            <input 
                              required
                              type="text" 
                              value={formData.firstName}
                              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                              placeholder="Divo"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8B5CF6]/50 transition-colors"
                            />
                         </div>
                         <div className="space-y-2">
                            <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-1">Last Name</label>
                            <input 
                              required
                              type="text" 
                              value={formData.lastName}
                              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                              placeholder="Khairul"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8B5CF6]/50 transition-colors"
                            />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-1">Email Address</label>
                         <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="hello@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8B5CF6]/50 transition-colors"
                         />
                      </div>

                      <div className="space-y-2">
                         <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-1">Phone Number</label>
                         <input 
                            required
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm focus:outline-none focus:border-[#8B5CF6]/50 transition-colors"
                         />
                      </div>

                      <div className="space-y-2">
                         <label className="text-white/40 text-[10px] uppercase font-bold tracking-widest ml-1">Payment Method</label>
                         <div className="grid grid-cols-2 gap-3">
                            <button 
                              type="button"
                              onClick={() => setFormData({...formData, paymentMethod: 'Q1'})}
                              className={`flex items-center justify-center gap-2 border rounded-xl py-3.5 transition-all ${formData.paymentMethod === 'Q1' ? 'bg-[#8B5CF6]/10 border-[#8B5CF6] text-white' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                               <CreditCard size={14} />
                               <span className="text-[10px] font-bold uppercase">QRIS / Instant</span>
                            </button>
                            <button 
                              type="button"
                              onClick={() => setFormData({...formData, paymentMethod: 'B1'})}
                              className={`flex items-center justify-center gap-2 border rounded-xl py-3.5 transition-all ${formData.paymentMethod === 'B1' ? 'bg-[#8B5CF6]/10 border-[#8B5CF6] text-white' : 'bg-white/5 border-white/10 text-white/40'}`}
                            >
                               <Send size={14} />
                               <span className="text-[10px] font-bold uppercase">Bank Transfer</span>
                            </button>
                         </div>
                      </div>

                      <button 
                         disabled={isLoading}
                         className="w-full bg-white text-black py-5 rounded-2xl font-display font-bold text-base shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                      >
                         {isLoading ? (
                           <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                         ) : (
                           <>
                             Initiate Transaction
                             <ArrowUpRight size={18} />
                           </>
                         )}
                      </button>

                      <p className="text-center text-white/20 text-[9px] font-medium uppercase tracking-[0.2em]">
                         secure checkout powered by midtrans
                      </p>
                   </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="bg-black py-32 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
       {/* Background Text Overlay */}
       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.02] flex items-center justify-center">
          <div className="text-[30vw] font-display font-black whitespace-nowrap -rotate-12 select-none">
             CONTACT CONTACT CONTACT
          </div>
       </div>

       <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <div>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-[10px] uppercase tracking-[0.4em] text-[#4ade80] mb-6 font-display font-bold block"
                >
                  GET IN TOUCH
                </motion.span>
                <motion.h2 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className="text-6xl md:text-9xl font-display font-bold text-white mb-10 tracking-tighter leading-[0.9]"
                >
                   Let&apos;s build <br />something <span className="text-white/20">great.</span>
                </motion.h2>

                <div className="space-y-8 mt-20">
                   {[
                      { icon: <Mail size={24} />, label: "Email", value: "hello@divokhairul.com" },
                      { icon: <MessageCircle size={24} />, label: "WhatsApp", value: "+62 812 3456 7890" },
                      { icon: <Map size={24} />, label: "Location", value: "Jakarta, Indonesia" }
                   ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 group cursor-pointer"
                      >
                         <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5B21B6] group-hover:bg-[#5B21B6] group-hover:text-white transition-all">
                            {item.icon}
                         </div>
                         <div>
                            <span className="block text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{item.label}</span>
                            <span className="block text-white text-xl font-medium tracking-tight group-hover:text-[#4ade80] transition-colors">{item.value}</span>
                         </div>
                      </motion.div>
                   ))}
                </div>
             </div>

             <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 md:p-16 rounded-[60px] shadow-2xl"
             >
                <form className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-2">Full Name</label>
                         <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#5B21B6] transition-all" />
                      </div>
                      <div className="space-y-3">
                         <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-2">Email Address</label>
                         <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#5B21B6] transition-all" />
                      </div>
                   </div>
                   <div className="space-y-3">
                      <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-2">Project Subject</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#5B21B6] transition-all" />
                   </div>
                   <div className="space-y-3">
                      <label className="text-white/40 text-xs font-bold uppercase tracking-widest ml-2">Message</label>
                      <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#5B21B6] transition-all resize-none"></textarea>
                   </div>
                   <button className="w-full bg-[#5B21B6] text-white py-6 rounded-2xl font-display font-bold text-lg hover:bg-[#4C1D95] transition-all shadow-[0_20px_50px_rgba(91,33,182,0.4)] flex items-center justify-center gap-4 group">
                      Send Message
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   </button>
                </form>
             </motion.div>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-6 border-t border-white/5">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start">
             <div className="w-12 h-12 rounded-full bg-[#5B21B6] flex items-center justify-center text-white font-display font-bold text-lg mb-6">DK</div>
             <p className="text-white/40 text-sm font-medium text-center md:text-left max-w-xs leading-relaxed">
                Building the future of digital experiences with code and creativity. All rights reserved.
             </p>
          </div>
          
          <div className="flex gap-12">
             <div className="flex flex-col gap-4">
                <span className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-30">Sitemap</span>
                {['Home', 'About', 'Work', 'Pricing'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-white/60 hover:text-white text-sm font-medium transition-colors">{link}</a>
                ))}
             </div>
             <div className="flex flex-col gap-4">
                <span className="text-white text-xs font-bold uppercase tracking-widest mb-2 opacity-30">Social</span>
                {['Twitter', 'Instagram', 'Github', 'Linkedin'].map(link => (
                  <a key={link} href="#" className="text-white/60 hover:text-white text-sm font-medium transition-colors">{link}</a>
                ))}
             </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
             <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">ESTABLISHED 2024</div>
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Version 2.0.4 - Release Candidate</span>
             </div>
          </div>
       </div>
       <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-white/10 text-[10px] font-bold uppercase tracking-[0.3em]">
             &copy; 2026 DIVO KHAIRUL • HANDCRAFTED WITH PRECISION
          </p>
       </div>
    </footer>
  );
};

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
