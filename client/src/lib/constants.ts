import React from "react";
import img from "@assets/image_1746078465547.png";
import blog11 from "@assets/blog11.png";
import blog12 from "@assets/blog12.png";
import blog13 from "@assets/blog13.png";
import blog14 from "@assets/blog14.png";

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
  GanttChartSquare,
} from "lucide-react";

export const SERVICES = [
  {
    title: "Marketing & Branding",
    description:
      "Strategic digital campaigns, brand positioning, and social media growth strategies for market expansion.",
    icon: React.createElement(BadgePercent, {
      className: "text-blue-600 text-3xl",
    }),
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    slug: "marketing",
  },
  {
    title: "Website Development",
    description:
      "Custom websites, web applications, and e-commerce platforms with responsive design and modern functionality.",
    icon: React.createElement(Globe, { className: "text-purple-600 text-3xl" }),
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    slug: "website",
  },
  // {
  //   title: "Legal & Financial Services",
  //   description:
  //     "Business registration, IP protection, and financial consulting to establish a solid operational foundation.",
  //   icon: React.createElement(FileText, {
  //     className: "text-emerald-600 text-3xl",
  //   }),
  //   bgColor: "bg-emerald-100",
  //   textColor: "text-emerald-600",
  //   slug: "legal",
  // },
  // {
  //   title: "AI Automation",
  //   description:
  //     "Implementing AI solutions for workflow automation, customer service, and data-driven decision-making.",
  //   icon: React.createElement(Bot, { className: "text-indigo-600 text-3xl" }),
  //   bgColor: "bg-indigo-100",
  //   textColor: "text-indigo-600",
  //   slug: "ai",
  // },
  // {
  //   title: "Business Strategy",
  //   description:
  //     "Comprehensive business plans, market analysis, and competitive positioning for sustainable growth.",
  //   icon: React.createElement(GanttChartSquare, {
  //     className: "text-cyan-600 text-3xl",
  //   }),
  //   bgColor: "bg-cyan-100",
  //   textColor: "text-cyan-600",
  //   slug: "strategy",
  // },
  // {
  //   title: "Corporate Training",
  //   description:
  //     "Educational workshops and training sessions designed to enhance team skills and operational efficiency.",
  //   icon: React.createElement(Presentation, {
  //     className: "text-amber-600 text-3xl",
  //   }),
  //   bgColor: "bg-amber-100",
  //   textColor: "text-amber-600",
  //   slug: "training",
  // },
];

export const TESTIMONIALS = [
  {
    text: "Adhyayh transformed our digital presence completely. Their marketing strategy helped us increase our customer base by 40% in just three months.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
  },
  {
    text: "The AI automation consultancy from Adhyayh helped us streamline our customer service operations. We're now handling twice the inquiries with the same team size.",
    name: "Raj Mehta",
    title: "Founder, QuickServe",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    text: "Our new website developed by Adhyayh is not just beautiful but also converts visitors at a much higher rate. The ROI on this project has been exceptional.",
    name: "Priya Sharma",
    title: "Marketing Director, GreenLeaf",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4.5,
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Rushi Gulumkar",
    title: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Neha Patel",
    title: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Aniket Jadhav",
    title: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Desai",
    title: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    twitter: "#",
  },
];

export const SOCIAL_LINKS = [
  {
    url: "https://instagram.com/adhyayh",
    icon: React.createElement(InstagramIcon, { className: "h-5 w-5" }),
    name: "Instagram",
  },
  {
    url: "https://linkedin.com/company/adhyayh",
    icon: React.createElement(LinkedinIcon, { className: "h-5 w-5" }),
    name: "LinkedIn",
  },
  {
    url: "https://twitter.com/adhyayh",
    icon: React.createElement(TwitterIcon, { className: "h-5 w-5" }),
    name: "Twitter",
  },
  {
    url: "https://facebook.com/adhyayh",
    icon: React.createElement(FacebookIcon, { className: "h-5 w-5" }),
    name: "Facebook",
  },
];

export const SERVICES_OPTIONS = [
  { value: "Marketing & Branding", label: "Marketing & Branding" },
  { value: "Website Development", label: "Website Development" },
  // { value: "legal", label: "Legal & Financial Services" },
  // { value: "ai", label: "AI Automation" },
  // { value: "strategy", label: "Business Strategy" },
  // { value: "training", label: "Corporate Training" },
];

export const SERVICES_LIST = [
  "Marketing & Branding",
  "Website Development",
  // "Legal & Financial Services",
  // "AI Automation",
  // "Business Strategy",
  // "Corporate Training",
];

export const COMPANY_LINKS = [
  { label: "About Us", url: "#about" },
  { label: "Our Team", url: "#team" },
  { label: "Careers", url: "/careers" },
  { label: "Blog", url: "#" },
  { label: "Contact", url: "#contact" },
];

export const INTERNSHIP_ROLES = [
  {
    id: "marketing-intern",
    title: "Marketing Intern",
    department: "Marketing",
    description:
      "Join our marketing team to help create compelling campaigns for our clients and learn the ropes of digital marketing in a fast-paced environment.",
    responsibilities: [
      "Assist in developing marketing strategies and campaigns",
      "Create content for social media platforms",
      "Analyze marketing data and prepare reports",
      "Support the team in client presentations and meetings",
      "Research market trends and competitor activities",
    ],
    requirements: [
      "Currently pursuing a degree in Marketing, Communications, or related field",
      "Strong written and verbal communication skills",
      "Basic knowledge of digital marketing principles",
      "Familiarity with social media platforms",
      "Creative mindset and attention to detail",
    ],
    location: "Pune, India",
    type: "Hybrid",
  },
  {
    id: "web-development-intern",
    title: "Web Development Intern",
    department: "Technology",
    description:
      "Gain hands-on experience in web development while working on real projects for our clients. Learn from our experienced developers and contribute to impactful digital solutions.",
    responsibilities: [
      "Assist in developing and maintaining websites and web applications",
      "Write clean, efficient, and well-documented code",
      "Test and debug websites across various browsers and devices",
      "Collaborate with designers to implement visual elements",
      "Stay updated with emerging web technologies and trends",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science, IT, or related field",
      "Knowledge of HTML, CSS, and JavaScript",
      "Familiarity with responsive design principles",
      "Basic understanding of web frameworks (React, Angular, or Vue)",
      "Problem-solving skills and attention to detail",
    ],
    location: "Pune, India",
    type: "Hybrid",
  },
  {
    id: "content-writing-intern",
    title: "Content Writing Intern",
    department: "Content",
    description:
      "Develop your writing skills while creating engaging content for various platforms. Learn how to craft compelling stories and messaging that resonates with different audiences.",
    responsibilities: [
      "Create high-quality content for websites, blogs, and social media",
      "Research industry topics and trends",
      "Edit and proofread content for accuracy and clarity",
      "Assist in developing content strategies",
      "Collaborate with marketing and design teams",
    ],
    requirements: [
      "Currently pursuing a degree in English, Journalism, Communications, or related field",
      "Excellent writing and grammar skills",
      "Strong research abilities",
      "Ability to adapt writing style for different platforms and audiences",
      "Creative thinking and attention to detail",
    ],
    location: "Remote",
    type: "Remote",
  },
  {
    id: "graphic-design-intern",
    title: "Graphic Design Intern",
    department: "Design",
    description:
      "Express your creativity while designing captivating visual content for our clients. Learn industry-standard tools and techniques while building your professional portfolio.",
    responsibilities: [
      "Create visual content for digital and print media",
      "Assist in developing brand identities and style guides",
      "Design social media graphics, banners, and other marketing materials",
      "Collaborate with marketing and content teams",
      "Stay updated with design trends and best practices",
    ],
    requirements: [
      "Currently pursuing a degree in Graphic Design, Visual Arts, or related field",
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "Strong visual design skills and aesthetic sense",
      "Basic understanding of design principles",
      "Portfolio demonstrating creative abilities",
    ],
    location: "Pune, India",
    type: "Hybrid",
  },
  {
    id: "business-development-intern",
    title: "Business Development Intern",
    department: "Business",
    description:
      "Learn the art of business development and client relationships. Get exposure to sales strategies, client acquisition, and relationship management in a supportive environment.",
    responsibilities: [
      "Assist in identifying and researching potential clients",
      "Support the team in preparing proposals and presentations",
      "Help maintain client relationship management systems",
      "Contribute to market research and competitor analysis",
      "Participate in client meetings and follow-ups",
    ],
    requirements: [
      "Currently pursuing a degree in Business, Marketing, or related field",
      "Strong communication and interpersonal skills",
      "Basic understanding of sales and business development principles",
      "Proficiency in MS Office suite",
      "Proactive and detail-oriented mindset",
    ],
    location: "Pune, India",
    type: "In-office",
  },
];

// export const blogPosts = [
//   {
//     id: 1,
//     slug: "revolutionary-ai-marketing-strategies-2025",
//     title: "Revolutionary AI Marketing Strategies for 2025",
//     likes: 1,
//     excerpt:
//       "Discover cutting-edge AI-powered marketing techniques that are transforming how brands connect with customers and drive unprecedented growth in the digital age.",
//     blog: `
// ## Introduction
// Artificial Intelligence is no longer just a buzzword in marketing—it's a game-changer. In 2025, AI is helping businesses personalize customer experiences, automate repetitive tasks, and forecast trends with amazing precision.

// ## Real-Time Personalization
// AI-driven algorithms are analyzing real-time data to deliver tailored ads, emails, and content. Brands can now target micro-segments and serve relevant messages that actually convert.

// ## Predictive Analytics
// Forget guessing. AI tools can now predict customer behavior, allowing marketers to fine-tune their campaigns and allocate budget where it matters the most.

// ## Chatbots & Automation
// Customer service is being revolutionized by smart chatbots. They handle queries 24/7 and free up human agents for more complex issues—boosting efficiency and user satisfaction.

// ## Conclusion
// AI in marketing isn’t about replacing humans—it’s about empowering them with better tools. As these technologies mature, adopting AI strategies early will give brands a competitive edge that’s hard to beat.
//     `,
//     author: "Sarah Chen",
//     date: "June 14, 2025",
//     category: "Marketing",
//     readTime: "8 min",
//     views: 1,
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&auto=format",
//     trending: true,
//     gradient: "from-blue-600 via-purple-600 to-pink-600",
//     tags: ["Digital Transformation", "Innovation", "Technology", "Business Strategy"]
//   },

// ];

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
  position: number; // Position in the content (paragraph index after which to show image)
  size?: "small" | "medium" | "large" | "full";
  alignment?: "left" | "center" | "right";
}

export interface BlogAuthor {
  name: string;
  avatar?: string;
  bio?: string;
}

export interface BlogPost {
  id: number; // Changed from string to number
  slug: string;
  title: string;
  likes: number;
  excerpt: string; // Added excerpt field
  blog: string; // Main content
  author: string; // Changed from object to string
  date: string;
  category: string;
  readTime: string;
  views: number;
  image: string; // Hero image
  trending: boolean; // Added trending field
  gradient: string; // Added gradient field
  tags: string[];
  images?: BlogImage[]; // Additional images to be inserted in content
  createdAt?: string;
  updatedAt?: string;
}

// Example blog data with multiple images
export const blogPosts: BlogPost[] = [
//   {
//     id: 1, // Changed to number
//     slug: "digital-transformation-guide",
//     title: "The Complete Guide to Digital Transformation in 2024",
//     likes: 1,
//     excerpt:
//       "Discover how to navigate digital transformation successfully in today's competitive landscape.",
//     blog: `Digital transformation has become more than just a buzzword; it's a necessity for businesses looking to thrive in today's competitive landscape.

// The journey begins with understanding your current digital maturity. Most organizations find themselves at different stages of this evolution, and recognizing where you stand is crucial for planning your next steps.

// Technology integration forms the backbone of any successful digital transformation initiative. However, the real challenge lies not in adopting new technologies, but in ensuring they align with your business objectives and create tangible value.

// The human element cannot be overlooked in this process. Change management, employee training, and cultural adaptation are often the determining factors between success and failure in digital transformation projects.

// Looking ahead, we can expect artificial intelligence, machine learning, and automation to play increasingly important roles in shaping how businesses operate and deliver value to their customers.`,
//     author: "Sarah Johnson", // Changed to string
//     date: "March 15, 2024",
//     category: "Technology",
//     readTime: "8 min read",
//     views: 1250,
//     image: img,
//     trending: true,
//     gradient: "from-blue-600 to-purple-600",
//     tags: [
//       "Digital Transformation",
//       "Technology",
//       "Business Strategy",
//       "AI",
//       "Innovation",
//     ],
//     images: [
//       {
//         src: "@assets/image_1746078465547.png",
//         alt: "Digital maturity assessment chart",
//         caption:
//           "Understanding your organization's digital maturity is the first step",
//         position: 1, // Show after the second paragraph
//         size: "large",
//         alignment: "center",
//       },
//       {
//         src: "@assets/image_1746078465547.png",
//         alt: "Technology integration diagram",
//         caption:
//           "Successful integration requires strategic planning and execution",
//         position: 2, // Show after the third paragraph
//         size: "medium",
//         alignment: "center",
//       },
//       {
//         src: "@assets/image_1746078465547.png",
//         alt: "Team collaboration in digital transformation",
//         caption: "The human element is crucial for successful transformation",
//         position: 3, // Show after the fourth paragraph
//         size: "large",
//         alignment: "center",
//       },
//     ],
//   },
//   {
//     id: 2, // Changed to number
//     slug: "Code-Cure-Commercialize",
//     title: "Code, Cure, Commercialize: A DeeperLook at Pharma & Biotech",
//     likes: 1,
//     excerpt:
//       "Discover how to navigate digital transformation successfully in today's competitive landscape.",
//     blog: `Digital transformation has become more than just a buzzword; it's a necessity for businesses looking to thrive in today's competitive landscape.

// The journey begins with understanding your current digital maturity. Most organizations find themselves at different stages of this evolution, and recognizing where you stand is crucial for planning your next steps.

// Technology integration forms the backbone of any successful digital transformation initiative. However, the real challenge lies not in adopting new technologies, but in ensuring they align with your business objectives and create tangible value.

// The human element cannot be overlooked in this process. Change management, employee training, and cultural adaptation are often the determining factors between success and failure in digital transformation projects.

// Looking ahead, we can expect artificial intelligence, machine learning, and automation to play increasingly important roles in shaping how businesses operate and deliver value to their customers.`,
//     author: "Sarah Johnson", // Changed to string
//     date: "March 15, 2024",
//     category: "Technology",
//     readTime: "8 min read",
//     views: 1250,
//     image: img,
//     trending: true,
//     gradient: "from-blue-600 to-purple-600",
//     tags: [
//       "Digital Transformation",
//       "Technology",
//       "Business Strategy",
//       "AI",
//       "Innovation",
//     ],
//     images: [
//       {
//         src: "@assets/image_1746078465547.png",
//         alt: "Digital maturity assessment chart",
//         caption:
//           "Understanding your organization's digital maturity is the first step",
//         position: 1, // Show after the second paragraph
//         size: "large",
//         alignment: "center",
//       },
//       {
//         src: "@assets/image_1746078465547.png",
//         alt: "Technology integration diagram",
//         caption:
//           "Successful integration requires strategic planning and execution",
//         position: 2, // Show after the third paragraph
//         size: "medium",
//         alignment: "center",
//       },
//       {
//         src: "@assets/image_1746078465547.png",
//         alt: "Team collaboration in digital transformation",
//         caption: "The human element is crucial for successful transformation",
//         position: 3, // Show after the fourth paragraph
//         size: "large",
//         alignment: "center",
//       },
//     ],
//   },
  {
  id: 3,
  slug: "code-cure-commercialize-pharma-biotech",
  title: "Code, Cure, Commercialize: A Deeper Look at Pharma & Biotech",
  likes: 123,
  excerpt: "Explore how AI, precision medicine, and innovative technologies are transforming pharmaceutical and biotechnology industries, creating a $2.5 trillion market by 2030.",
  blog: `**"Affordable innovation is the key to inclusive healthcare."**
— Kiran Mazumdar-Shaw, Executive Chairperson, Biocon

The pharmaceutical and biotechnology sector encompasses companies involved in developing, manufacturing, and marketing drugs, vaccines, and other health-related products using biotechnological processes. This broad industry includes various sub-segments with key players like Pfizer, Novartis, Sun Pharma, Moderna, Genentech, and CRISPR Therapeutics.

The sector is characterized by high research and development costs, complex regulatory landscapes, and significant investment needs. However, it's increasingly exploring innovative drug delivery systems and collaborating with biotech firms to expand capabilities.

**Market Growth and Regional Dominance**

The pharmaceutical market is experiencing robust growth with a compound annual growth rate (CAGR) of 6.15% from 2024 to 2034. North America currently dominates the market, while the Asia-Pacific region shows the fastest growth potential, particularly in contract manufacturing with an expected CAGR of 8.74% from 2025 to 2030.

**Emerging Trends Reshaping the Industry**

Precision medicine is revolutionizing healthcare by personalizing treatments according to individual genetics, lifestyle, and environment. The global precision medicine market is calculated at USD 119.03 billion in 2025 and predicted to reach USD 470.53 billion by 2034.

Artificial intelligence is redefining pharmaceutical operations, from clinical trials to supply chain optimization. AI can reduce drug development time from years to 12-18 months and cut costs by up to 40%. The AI in pharma market is projected to reach $1.94 billion in 2025 and $16.49 billion by 2034.

Blockchain technology is improving data integrity and traceability in clinical trials, making results more trustworthy while enabling patients to participate from anywhere with secure, private information handling.

**Overcoming Industry Challenges**

The industry faces significant hurdles including high R&D costs, with pharmaceutical companies investing approximately $276 billion annually in research and development. Most firms dedicate between 14% and 30% of their revenues to R&D efforts, with some leaders like Merck & Co. investing over 50% of revenues.

Pricing pressure and market access issues are driving companies toward value-based pricing models that link costs to real patient outcomes. Global supply chain disruptions, talent shortages in specialized roles, and data security concerns present ongoing challenges that require innovative solutions.

**Revolutionary Treatment Approaches**

Vertex Pharmaceuticals exemplifies the industry's innovative potential with their stem cell-derived therapies for Type 1 diabetes. Their zimislecel program delivers insulin-producing cells to patients, with early trials showing some individuals have reduced or eliminated their need for external insulin. If approved, this therapy could benefit about 60,000 patients with severe Type 1 diabetes in the U.S. and Europe.

**Future Outlook and Consumer Impact**

By 2030, the pharma and biotech space could be worth over $2.5 trillion, driven by aging populations, rising chronic conditions, and global healthcare access expansion. Consumers are experiencing more direct benefits through AI-accelerated drug discovery, precision medicine tailored to genetic profiles, and affordable biosimilars entering the market.

Digital health tools including wearables, mobile apps, and virtual consultations are empowering people to manage their health in real-time. Gene and cell therapies offer hope for rare conditions with long-lasting or one-time solutions.

The pharmaceutical and biotech industries are becoming data-powered engines of innovation, where technology and biology join forces to reshape the future of healthcare. For investors and stakeholders, this represents not just growth opportunities, but a chance to participate in transforming global health outcomes.`,
  author: "Healthcare Analytics Team",
  date: "June 19, 2025",
  category: "Healthcare",
  readTime: "12 min read",
  views: 154,
  image: blog11, // You'll need to replace with actual image path
  trending: true,
  gradient: "from-green-600 to-blue-600",
  tags: [
    "Pharmaceutical",
    "Biotechnology", 
    "AI in Healthcare",
    "Precision Medicine",
    "Drug Discovery",
    "Healthcare Innovation",
    "Blockchain",
    "Market Analysis"
  ],
  images: [
    {
      src: blog12, // Replace with actual image paths
      alt: "Precision medicine market growth projection",
      caption: "Biotechnology market by georgraphical region",
      position: 1,
      size: "large",
      alignment: "center"
    },
    {
      src: blog13, // Replace with actual image paths  
      alt: "AI workflow in pharmaceutical development",
      caption: "Pharmaceutical Market Revenue 2023 to 2034 (USD Billion)",
      position: 4,
      size: "large", 
      alignment: "center"
    },
    {
      src: blog14, // Replace with actual image paths
      alt: "R&D investment across pharmaceutical companies",
      caption: "Most pharma firms dedicate 14-30% of revenues to R&D, with leaders investing over 50%",
      position: 11,
      size: "medium",
      alignment: "center"
    },

  ]
}
];
