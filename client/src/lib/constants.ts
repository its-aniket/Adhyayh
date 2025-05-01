import React from "react";
import { 
  ArrowRight, 
  MessageSquare, 
  Laptop, 
  BarChart2, 
  Bot, 
  Lightbulb as LightbulbIcon, 
  BookOpen as BookOpenIcon, 
  Instagram as InstagramIcon, 
  Linkedin as LinkedinIcon, 
  Twitter as TwitterIcon, 
  Facebook as FacebookIcon 
} from "lucide-react";

export const SERVICES = [
  {
    title: "Marketing & Branding",
    description: "Digital campaigns, brand strategy, and social media growth, with effective ground-level marketing approaches.",
    icon: React.createElement(MessageSquare, { className: "text-primary text-2xl" }),
    bgColor: "bg-primary bg-opacity-10",
    textColor: "text-primary"
  },
  {
    title: "Website Development",
    description: "Modern, responsive, and scalable websites and e-commerce platforms tailored to your business needs.",
    icon: React.createElement(Laptop, { className: "text-accent text-2xl" }),
    bgColor: "bg-accent bg-opacity-10",
    textColor: "text-accent"
  },
  {
    title: "Legal & Financial Services",
    description: "Business registration, IP protection, and trademark registration to secure your business future.",
    icon: React.createElement(BarChart2, { className: "text-secondary text-2xl" }),
    bgColor: "bg-secondary bg-opacity-10",
    textColor: "text-secondary"
  },
  {
    title: "AI Automation",
    description: "Smart tools for workflow automation, customer interaction, and data-driven decision-making consultancy.",
    icon: React.createElement(Bot, { className: "text-purple-600 text-2xl" }),
    bgColor: "bg-purple-100",
    textColor: "text-purple-600"
  },
  {
    title: "Company Branding",
    description: "Comprehensive branding solutions including logo design, brand guidelines, and identity development.",
    icon: React.createElement(LightbulbIcon, { className: "text-green-600 text-2xl" }),
    bgColor: "bg-green-100",
    textColor: "text-green-600"
  },
  {
    title: "Educational Content",
    description: "Educating audiences on how industries really work behind the scenes through valuable content.",
    icon: React.createElement(BookOpenIcon, { className: "text-yellow-600 text-2xl" }),
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-600"
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
  { value: "branding", label: "Company Branding" },
  { value: "education", label: "Educational Content" }
];

export const SERVICES_LIST = [
  "Marketing & Branding",
  "Website Development",
  "Legal & Financial",
  "AI Automation",
  "Company Branding"
];

export const COMPANY_LINKS = [
  { label: "About Us", url: "#about" },
  { label: "Our Team", url: "#team" },
  { label: "Careers", url: "#" },
  { label: "Blog", url: "#" },
  { label: "Contact", url: "#contact" }
];
