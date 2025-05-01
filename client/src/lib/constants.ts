import React from "react";
import { 
  ArrowRight, 
  BadgePercent,
  Globe,
  BarChart2, 
  Bot, 
  Lightbulb as LightbulbIcon, 
  BookOpen as BookOpenIcon, 
  Instagram as InstagramIcon, 
  Linkedin as LinkedinIcon, 
  Twitter as TwitterIcon, 
  Facebook as FacebookIcon,
  Briefcase,
  Presentation,
  FileText,
  GanttChartSquare
} from "lucide-react";

export const SERVICES = [
  {
    title: "Marketing & Branding",
    description: "Strategic digital campaigns, brand positioning, and social media growth strategies for market expansion.",
    icon: React.createElement(BadgePercent, { className: "text-white text-2xl" }),
    bgColor: "bg-primary",
    textColor: "text-primary"
  },
  {
    title: "Website Development",
    description: "Custom websites, web applications, and e-commerce platforms with responsive design and modern functionality.",
    icon: React.createElement(Globe, { className: "text-white text-2xl" }),
    bgColor: "bg-primary",
    textColor: "text-primary"
  },
  {
    title: "Legal & Financial Services",
    description: "Business registration, IP protection, and financial consulting to establish a solid operational foundation.",
    icon: React.createElement(FileText, { className: "text-white text-2xl" }),
    bgColor: "bg-primary",
    textColor: "text-primary"
  },
  {
    title: "AI Automation",
    description: "Implementing AI solutions for workflow automation, customer service, and data-driven decision-making.",
    icon: React.createElement(Bot, { className: "text-white text-2xl" }),
    bgColor: "bg-primary",
    textColor: "text-primary"
  },
  {
    title: "Business Strategy",
    description: "Comprehensive business plans, market analysis, and competitive positioning for sustainable growth.",
    icon: React.createElement(GanttChartSquare, { className: "text-white text-2xl" }),
    bgColor: "bg-primary",
    textColor: "text-primary"
  },
  {
    title: "Corporate Training",
    description: "Educational workshops and training sessions designed to enhance team skills and operational efficiency.",
    icon: React.createElement(Presentation, { className: "text-white text-2xl" }),
    bgColor: "bg-primary",
    textColor: "text-primary"
  }
];

export const TESTIMONIALS = [
  {
    text: "Adhyayh transformed our digital presence completely. Their marketing strategy helped us increase our customer base by 40% in just three months.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5
  },
  {
    text: "The AI automation consultancy from Adhyayh helped us streamline our customer service operations. We're now handling twice the inquiries with the same team size.",
    name: "Raj Mehta",
    title: "Founder, QuickServe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    text: "Our new website developed by Adhyayh is not just beautiful but also converts visitors at a much higher rate. The ROI on this project has been exceptional.",
    name: "Priya Sharma",
    title: "Marketing Director, GreenLeaf",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.5
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Aditya Sharma",
    title: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Neha Patel",
    title: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Vikram Reddy",
    title: "Tech Lead",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Priya Desai",
    title: "Creative Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#"
  }
];

export const SOCIAL_LINKS = [
  {
    url: "https://instagram.com/adhyayh",
    icon: React.createElement(InstagramIcon, { className: "h-5 w-5" })
  },
  {
    url: "https://linkedin.com/adhyayh",
    icon: React.createElement(LinkedinIcon, { className: "h-5 w-5" })
  },
  {
    url: "https://twitter.com/adhyayh",
    icon: React.createElement(TwitterIcon, { className: "h-5 w-5" })
  },
  {
    url: "https://facebook.com/adhyayh",
    icon: React.createElement(FacebookIcon, { className: "h-5 w-5" })
  }
];

export const SERVICES_OPTIONS = [
  { value: "marketing", label: "Marketing & Branding" },
  { value: "website", label: "Website Development" },
  { value: "legal", label: "Legal & Financial Services" },
  { value: "ai", label: "AI Automation" },
  { value: "strategy", label: "Business Strategy" },
  { value: "training", label: "Corporate Training" }
];

export const SERVICES_LIST = [
  "Marketing & Branding",
  "Website Development",
  "Legal & Financial Services",
  "AI Automation",
  "Business Strategy",
  "Corporate Training"
];

export const COMPANY_LINKS = [
  { label: "About Us", url: "#about" },
  { label: "Our Team", url: "#team" },
  { label: "Careers", url: "#" },
  { label: "Blog", url: "#" },
  { label: "Contact", url: "#contact" }
];
