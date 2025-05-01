import { ReactNode } from "react";

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
  textColor: string;
}

export interface Testimonial {
  text: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  linkedin: string;
  twitter: string;
}

export interface SocialLink {
  url: string;
  icon: ReactNode;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export interface InternshipRole {
  id: string;
  title: string;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  location: string;
  type: string; // "Remote" | "Hybrid" | "In-office"
}

export interface InternApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  university: string;
  role: string;
  experience: string;
  resumeLink?: string;
  portfolio?: string;
  coverLetter: string;
  heardFrom?: string;
}
