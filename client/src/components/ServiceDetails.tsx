import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

export interface ServiceDetailsProps {
  title: string;
  description: string;
  icon: ReactNode;
  bgColor: string;
  features: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  cta: {
    title: string;
    description: string;
  };
}

const ServiceDetails = ({
  title,
  description,
  icon,
  bgColor,
  features,
  process,
  benefits,
  cta,
}: ServiceDetailsProps) => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          <div className="flex-1">
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="text-lg text-neutral-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                className="bg-primary hover:opacity-90 text-white font-medium px-6 py-3 h-auto rounded-lg inline-flex items-center justify-center transition-colors duration-300"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Free Consultation
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`w-40 h-40 ${bgColor} rounded-full flex items-center justify-center text-5xl`}>
              {icon}
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center shrink-0`}>
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16 bg-neutral-50 p-8 md:p-12 rounded-xl">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Benefits
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <div className={`w-6 h-6 ${bgColor} rounded-full flex items-center justify-center shrink-0 mt-1`}>
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-neutral-700 font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-primary text-white p-8 md:p-12 rounded-xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">{cta.description}</p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 font-medium px-6 py-3 h-auto rounded-lg inline-flex items-center justify-center transition-colors duration-300"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Us Today
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetails;