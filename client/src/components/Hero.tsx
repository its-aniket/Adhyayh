import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/AnimatedCounter";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const Hero = () => {
  const { ref: statsRef, inView: statsInView } = useAnimateOnScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  const imageVariants = {
    hidden: { y: 30, opacity: 0, rotate: -2 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotate: -2,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        delay: 0.5
      }
    },
    hover: {
      rotate: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              className="bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-medium inline-block"
              variants={itemVariants}
            >
              New in 2025
            </motion.span>
            <motion.h1 
              className="font-bold text-4xl md:text-5xl lg:text-6xl mt-6 leading-tight text-neutral-900"
              variants={itemVariants}
            >
              Elevating Business{" "}
              <span className="text-primary">Strategy</span> For Growth
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-neutral-700 mt-6 max-w-2xl"
              variants={itemVariants}
            >
              We partner with startups and small businesses, providing professional solutions in marketing, technology, branding, and legal services to drive sustainable growth.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              variants={itemVariants}
            >
              <Button 
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:opacity-90 text-white font-medium px-8 py-6 h-auto rounded-lg inline-flex items-center justify-center transition-colors duration-300"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                className="bg-white hover:bg-neutral-50 text-neutral-800 font-medium px-8 py-6 h-auto rounded-lg border border-neutral-200 inline-flex items-center justify-center transition-colors duration-300"
              >
                <span>Our Services</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="relative z-10 rounded-lg overflow-hidden shadow-xl transform"
              variants={imageVariants}
              whileHover="hover"
            >
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" 
                alt="Professional business meeting" 
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary opacity-10 rounded-full blur-3xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          ref={statsRef}
        >
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-primary font-bold text-4xl">
              <AnimatedCounter target={1} duration={1000} inView={statsInView} />
            </div>
            <p className="text-neutral-700 mt-2 font-medium">Client</p>
          </motion.div>
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-primary font-bold text-4xl">
              <AnimatedCounter target={2} duration={1000} inView={statsInView} />
            </div>
            <p className="text-neutral-700 mt-2 font-medium">Projects</p>
          </motion.div>
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-primary font-bold text-4xl">
              <AnimatedCounter target={10} duration={1000} inView={statsInView} />
            </div>
            <p className="text-neutral-700 mt-2 font-medium">Team Members</p>
          </motion.div>
          <motion.div 
            className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-primary font-bold text-4xl">
              <AnimatedCounter target={6} duration={1000} inView={statsInView} />
            </div>
            <p className="text-neutral-700 mt-2 font-medium">Services Offered</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
