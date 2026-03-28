'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
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
  Mail, MessageCircle, Music2, Phone, Send, Zap, Tag, MousePointer2, Brush, Handshake
} from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
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
              className="px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-display font-bold transition-colors text-white/50 hover:bg-white/5 relative group/link"
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-between h-screen pt-24 pb-12">
        
        {/* Top Spacer to push content center/bottom if needed */}
        <div className="flex-1 w-full flex flex-col items-center justify-center relative">
          
          {/* Name Title */}
          <div className="absolute top-[20%] md:top-[30%] lg:top-[35%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-10 gap-0">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
              className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-display font-bold text-white leading-none tracking-tighter mix-blend-plus-lighter drop-shadow-2xl flex flex-col md:flex-row items-center justify-center md:gap-8"
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

        </div>

        {/* Mobile Layout Fallback */}
        <div className="lg:hidden relative z-30 w-full mt-auto space-y-6 text-center pb-8 pt-6 pointer-events-auto">
           <p className="text-white/90 text-sm md:text-base px-2 sm:px-10 font-medium drop-shadow-lg backdrop-blur-sm bg-black/20 p-4 rounded-3xl border border-white/5">
            Spesialis jasa pembuatan website Jakarta Timur & Cibubur. Saya merancang antarmuka yang memadukan estetika dan fungsionalitas untuk pengalaman digital yang modern dan SEO-friendly.
          </p>
          <div className="flex justify-center gap-4">
             <button className="flex items-center gap-2 bg-[#5B21B6] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(91,33,182,0.6)] hover:bg-[#4C1D95] transition-colors">
              Let&apos;s Talk <ArrowUpRight size={18} />
            </button>
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
        
        <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[600px] lg:h-[750px] xl:w-[700px] xl:h-[850px]">
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
          Spesialis jasa pembuatan website Jakarta Timur & Cibubur. Saya merancang antarmuka yang memadukan estetika dan fungsionalitas untuk pengalaman digital yang modern dan SEO-friendly.
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
          Menghadirkan layanan jasa pembuatan website profesional, mulai dari UI/UX yang responsif, fungsionalitas sistem yang kompleks, hingga optimasi SEO di halaman pertama Google.
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
      description: 'Membangun antarmuka website yang modern, responsif, cepat, dan nyaman digunakan di semua perangkat. Animasi mulus adalah standar saya.',
      icon: <Monitor strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
    {
      num: '02',
      tag: 'INFRA',
      title: 'Backend & Systems',
      description: 'Mengembangkan backend, API, dan logic sistem yang stabil, aman, dan scalable. Memastikan perlindungan penuh lalu lintas data Anda.',
      icon: <Server strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
    {
      num: '03',
      tag: 'DATA',
      title: 'Database & Cloud',
      description: 'Merancang arsitektur database, dashboard admin khusus, hingga integrasi mulus dengan pihak ketiga (Payment, Email, CRM).',
      icon: <Database strokeWidth={1.5} className="w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300" />,
    },
    {
      num: '04',
      tag: 'GROWTH',
      title: 'SEO & Performance',
      description: 'Struktur SEO-friendly berlapis, loading super cepat, dan optimasi Core Web Vitals skala dewa untuk memenangkan pencarian Google.',
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
              JASA PEMBUATAN WEBSITE JAKARTA TIMUR & CIBUBUR
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-[1.05] tracking-tight"
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
              Saya adalah Full Stack Developer penyedia jasa pembuatan website Jakarta Timur dan jasa pembuatan website Cibubur yang berfokus pada website modern, scalable, dan SEO-friendly untuk bisnis, personal brand, UMKM, dan perusahaan. Saya siap menskalakan bisnis Anda dengan membangun solusi end-to-end, mulai dari UI/UX yang responsif hingga arsitektur backend, API, dan integrasi yang stabil.
            </motion.p>

            <motion.p
               initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 text-sm leading-relaxed mb-10 font-bold border-l-2 border-[#5B21B6] pl-4 italic"
            >
              Solusi terbaik untuk Anda yang mencari jasa pembuatan website Jakarta Timur dan jasa pembuatan website Cibubur dengan kualitas premium, keamanan terjamin, dan traffic tinggi.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-4 md:gap-6"
            >
              <a href="#work" className="bg-[#5B21B6] border border-[#5B21B6] text-white px-8 md:px-10 py-4 font-display rounded-full text-sm font-bold tracking-tight hover:bg-[#4C1D95] transition-all shadow-[0_0_20px_rgba(91,33,182,0.4)] text-center">
                Lihat Project
              </a>
              <a href="#contact" className="border border-white/20 text-white px-8 md:px-10 py-4 font-display rounded-full text-sm font-bold tracking-tight hover:bg-white/5 transition-all text-center">
                Hubungi Saya
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
    { id: 1, title: 'Aero 3D', subtitle: 'Interactive Product', img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=800&fit=crop' },
    { id: 2, title: 'Fluidify', subtitle: 'WebGL Agency', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&h=800&fit=crop' },
    { id: 3, title: 'SneakXR', subtitle: '3D Configurator', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&h=800&fit=crop' },
    { id: 4, title: 'Odyssey', subtitle: 'Scrollytelling', img: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&h=800&fit=crop' },
    { id: 5, title: 'Nexus UI', subtitle: 'Bento Dashboard', img: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=800&fit=crop' },
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
                    <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white pl-8 pr-3 py-3 rounded-full text-sm font-black flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-white/20 transition-all">
                      View
                      <span className="bg-[#8B5CF6] text-white rounded-full p-2 shadow-[0_0_15px_#8B5CF6]">
                        <ArrowUpRight size={18} strokeWidth={3} />
                      </span>
                    </button>
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
            
            <button className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-md border border-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </button>
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
        <div className="relative flex-none w-[1000px] h-[700px] scale-[0.4] sm:scale-[0.7] md:scale-100 origin-center transform-gpu">
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

const ContactSection = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />,
      title: "Selesai Hitungan Hari",
      desc: "Proses pembuatan website profesional super cepat. Siap rilis dalam 3-5 hari kerja tanpa mengorbankan kualitas."
    },
    {
      icon: <Shield className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />,
      title: "Harga Transparan & Ramah UMKM",
      desc: "Layanan jasa pembuatan website dengan harga jujur se-Jakarta Timur. 1 biaya lengkap, tanpa biaya tersembunyi."
    },
    {
      icon: <MousePointer2 className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />,
      title: "Terima Beres (Bebas Pusing IT)",
      desc: "Domain, hosting, instalasi sistem, hingga SEO saya tangani sepenuhnya. Anda cukup fokus urus bisnis."
    },
    {
      icon: <Brush className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />,
      title: "Desain Kustom Premium",
      desc: "Website custom & eksklusif sesuai identitas brand Anda. Bukan hasil copy-paste dari template pasaran."
    },
    {
      icon: <Handshake className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />,
      title: "Support Purna Jual Handal",
      desc: "Vendor lain menghilang setelah lunas? Saya garansi ketersediaan dukungan maintenance setelah website live."
    }
  ];

  return (
    <section id="contact" className="bg-[#0a0a0a] min-h-screen flex flex-col lg:flex-row overflow-hidden font-sans">
      {/* Left Side - Stats & Testimonials */}
      <div className="lg:w-1/2 relative p-6 sm:p-12 md:p-20 flex flex-col justify-between min-h-[500px] lg:min-h-screen">
        {/* Background Abstract - Deep Purple Customization */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-[#0a0a0a] opacity-60" />
          <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[160px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#5B21B6]/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 space-y-20">
          {/* Main Stat */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-display font-bold text-white tracking-tighter mb-2 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
            >
              Divo
            </motion.h2>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.4em] font-display font-bold">DIGITAL CREATOR & DEVELOPER</p>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-16">
            {[
              { label: 'Instagram', value: '@divo0u' },
              { label: 'TikTok', value: '@div0u' },
              { label: 'WhatsApp', value: '+62 812 8000 4392' },
              { label: 'Email', value: 'divokhairulrahimtarjono@gmail.com' },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 break-all">{stat.value}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-display font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Why Work With Me Section */}
          <div className="relative max-w-lg w-full flex flex-col gap-5 mt-4">
            <h3 className="text-white/40 font-display font-bold text-[10px] uppercase tracking-[0.2em] pl-1">Kenapa Memilih Layanan Saya?</h3>
            <div className="flex flex-col gap-3">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-5 rounded-[24px] flex items-start gap-5 group hover:border-white/20 hover:bg-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-all cursor-default"
                >
                  <div className="mt-0.5 bg-white/5 p-2.5 rounded-full border border-white/5 group-hover:bg-[#8B5CF6]/10 group-hover:border-[#8B5CF6]/30 transition-all">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-display font-medium text-sm tracking-tight mb-1.5 group-hover:text-white transition-colors">{benefit.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed font-sans font-medium">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Contact Info */}
        <div className="relative z-10 mt-12 md:mt-20 flex flex-col md:flex-row md:items-center justify-between gap-8 flex-wrap">
          <p className="text-white/40 text-[10px] sm:text-xs font-display font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:text-white transition-colors cursor-pointer break-all text-left">
            divokhairulrahimtarjono@gmail.com
          </p>
          <div className="flex gap-3">
            {[Instagram, Bot, Mail, MessageCircle].map((Icon, i) => (
              <button key={i} className="w-12 h-12 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all group shadow-xl">
                <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="lg:w-1/2 bg-[#0a0a0a] p-6 sm:p-12 md:p-20 flex flex-col justify-center">
        <div className="max-w-xl w-full">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Contact Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-lg mb-12 leading-relaxed font-sans font-medium"
          >
            Have questions or need assistance? Reach out to me, and I will get back to you promptly.
          </motion.p>

          <form action="https://formspree.io/f/xgoponry" method="POST" className="space-y-8" suppressHydrationWarning>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <label className="text-white/60 text-[10px] font-display font-bold uppercase tracking-[0.2em]">First name</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#8B5CF6" }}
                  type="text" 
                  name="firstName"
                  placeholder="John" 
                  className="w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6] transition-colors font-sans font-medium"
                  required
                  suppressHydrationWarning
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <label className="text-white/60 text-[10px] font-display font-bold uppercase tracking-[0.2em]">Last name</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#8B5CF6" }}
                  type="text" 
                  name="lastName"
                  placeholder="Doe" 
                  className="w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6] transition-colors font-sans font-medium"
                  required
                  suppressHydrationWarning
                />
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="space-y-3"
            >
              <label className="text-white/60 text-[10px] font-display font-bold uppercase tracking-[0.2em]">Email</label>
              <motion.input 
                whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#8B5CF6" }}
                type="email" 
                name="email"
                placeholder="john@example.com" 
                className="w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6] transition-colors font-sans font-medium"
                required
                suppressHydrationWarning
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <label className="text-white/60 text-[10px] font-display font-bold uppercase tracking-[0.2em]">Phone number</label>
              <div className="flex gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="w-24 bg-[#111111] border border-[#2A2A2A] rounded-2xl px-4 py-4 text-white flex items-center justify-between cursor-pointer hover:bg-[#1a1a1a] transition-colors"
                >
                  <span className="text-xs font-display font-bold text-white/80">ID</span>
                  <ChevronRight size={14} className="rotate-90 text-white/40" />
                </motion.div>
                <motion.input 
                  whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#8B5CF6" }}
                  type="tel" 
                  name="phone"
                  placeholder="+62 812 8000 4392" 
                  className="flex-grow min-w-0 bg-[#111111] border border-[#2A2A2A] rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6] transition-colors font-sans font-medium"
                  suppressHydrationWarning
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="space-y-3"
            >
              <label className="text-white/60 text-[10px] font-display font-bold uppercase tracking-[0.2em]">Message</label>
              <motion.textarea 
                whileFocus={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)", borderColor: "#8B5CF6" }}
                rows={4}
                name="message"
                placeholder="Leave me a message..." 
                className="w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none font-sans font-medium"
                required
                suppressHydrationWarning
              />
            </motion.div>



            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-white text-black py-5 rounded-full font-display font-black text-sm flex items-center justify-center gap-3 transition-colors shadow-2xl group"
            >
              Send Message
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Twitter size={18} />, href: '#' },
    { icon: <Instagram size={18} />, href: '#' },
    { icon: <Youtube size={18} />, href: '#' },
    { icon: <MessageCircle size={18} />, href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_100%,#5B21B610_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#5B21B6] flex items-center justify-center text-white font-display font-bold text-lg shadow-[0_0_20px_rgba(91,33,182,0.4)] border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                DK
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight">Divo Khairul</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-sans font-medium">
              Crafting digital experiences that blend futuristic technology with human-centric design. Building the next generation of AI-powered interfaces.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all group"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-display font-bold">Navigation</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm font-sans font-medium transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#5B21B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-white/20 text-[10px] font-display font-bold uppercase tracking-widest">
              © 2026 Divo Khairul. All rights reserved.
            </p>
            <div className="hidden md:flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#4ade80] shadow-[0_0_5px_#4ade80]" />
              <span className="text-[9px] text-white/20 uppercase tracking-widest font-display font-bold">System Status: Optimal</span>
            </div>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-all"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-display font-bold">Back to top</span>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 group-hover:border-white/30 transition-all">
              <ChevronRight size={14} className="-rotate-90" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
