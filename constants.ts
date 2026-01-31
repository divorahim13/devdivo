import { Database, Server, Layout, Globe, Rocket, Github, Linkedin, Mail, Layers, Cpu, Code2 } from 'lucide-react';
import { NavItem, Service, Project, Skill, SocialLink } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Overview', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Stack', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web application architecture. I build scalable, secure, and high-performance systems from the database to the client-side interface.',
    icon: Layers,
    features: ['React / Next.js', 'Node.js & Express', 'PostgreSQL / MongoDB', 'REST & GraphQL APIs']
  },
  {
    title: 'SaaS Product Engineering',
    description: 'Transforming complex business logic into market-ready SaaS platforms. Focusing on multi-tenancy, subscription systems (Stripe), and user scalability.',
    icon: Rocket,
    features: ['MVP to Scale', 'Auth & Security', 'Stripe Integration', 'Cloud Architecture']
  },
  {
    title: 'Backend & API Design',
    description: 'Designing robust backend infrastructure optimized for speed and reliability. Creating microservices and serverless functions that handle heavy loads.',
    icon: Server,
    features: ['System Design', 'Serverless (AWS/Vercel)', 'Redis Caching', 'CI/CD Pipelines']
  },
  {
    title: 'Advanced Frontend Architecture',
    description: 'Building complex, interactive, and state-heavy frontend applications. Not just "slicing designs," but engineering performant user interfaces.',
    icon: Cpu,
    features: ['Complex State Management', 'Performance Optimization', 'WebSockets / Real-time', 'Interactive WebGL']
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'DEVCRYPTO - Web3 Dashboard',
    category: 'Web 3.0',
    image: '/assets/project-1.jpg', 
    description: 'DEVCRYPTO is an institutional-grade cryptocurrency analytics dashboard featuring a futuristic Cyberpunk aesthetic. This platform provides a high-performance interface for monitoring the digital asset ecosystem, combining real-time market intelligence with decentralized portfolio management.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'CoinGecko API'],
    link: 'https://devcrypto-steel.vercel.app/', 
},
  {
    id: 2,
    title: 'Lumina Market - AI Luxury E-commerce',
    category: 'Web Application',
    image: '/assets/project-2.jpg', 
    description: 'A high-performance luxury e-commerce platform featuring a comprehensive Admin Dashboard with financial analytics, "Slide-to-Pay" secure checkout simulation, and AI-powered product description generation.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Context API'],
    link: 'https://luminamarket-tau.vercel.app/',
  },
  {
    id: 3,
    title: 'Nexus Company Profile',
    category: 'Company Profile',
    image: '/assets/project-3.jpg', 
    description: 'A Corporate Landing Page (Corporate Portfolio) with a highly immersive High-Tech/Cyberpunk theme. This website is designed to represent an advanced technology agency focused on high-performance digital infrastructure, cybersecurity, and AI.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Google Gemini API', 'Context API'],
    link: 'https://luminamarket-tau.vercel.app/',
  },
  {
    id: 4,
    title: 'TaskFlow Pro',
    category: 'SaaS',
    image: 'https://picsum.photos/800/600?random=4',
    description: 'A collaborative project management tool similar to Trello. Supports drag-and-drop task organization and team workspaces.',
    tags: ['Next.js', 'dnd-kit', 'Tailwind', 'Firebase'],
    link: '#',
  },
  {
    id: 5,
    title: 'Crypto Portfolio Tracker',
    category: 'Web 3.0',
    image: 'https://picsum.photos/800/600?random=5',
    description: 'A clean dashboard for tracking crypto assets across different chains. Fetches real-time price data via public APIs without requiring wallet connection.',
    tags: ['React', 'Coingecko API', 'Redux Toolkit'],
    link: '#',
  },
  {
    id: 6,
    title: 'Luxe Booking Engine',
    category: 'Full Stack',
    image: 'https://picsum.photos/800/600?random=6',
    description: 'An appointment booking system for a beauty salon. Handles calendar slots, email confirmations, and admin scheduling management.',
    tags: ['React', 'Express', 'Postgres', 'Nodemailer'],
    link: '#',
  },
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript / TypeScript', level: 98, icon: '📘' },
  { name: 'React / Next.js ecosystem', level: 95, icon: '⚛️' },
  { name: 'Node.js & Backend', level: 90, icon: '🟢' },
  { name: 'SQL & NoSQL Databases', level: 88, icon: '🗄️' },
  { name: 'Cloud & DevOps (AWS/Docker)', level: 80, icon: '☁️' },
  { name: 'System Architecture', level: 85, icon: '🏗️' },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: '#', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/divorahim-t-63227517b/', icon: Linkedin },
  { platform: 'Email', url: 'mailto:divorahim13@gmail.com', icon: Mail },
];
