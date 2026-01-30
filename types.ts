import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[]; // Added to list specific capabilities
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // Emoji or specific icon identifier
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}