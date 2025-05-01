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
