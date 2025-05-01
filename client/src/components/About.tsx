import { motion } from "framer-motion";
import { Check, ArrowRight, TrendingUp, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const About = () => {
  const { ref: imageRef, inView: imageInView } = useAnimateOnScroll();
  const { ref: contentRef, inView: contentInView } = useAnimateOnScroll();

  const features = [
    {
      title: "Early-Stage Growth",
      description: "We're in our early growth phase, but already making an impact with forward-thinking clients.",
      icon: <TrendingUp className="text-white h-5 w-5" />
    },
    {
      title: "Dedicated Team",
      description: "A small but dedicated team of creatives, techies, and problem-solvers based in Pune, India.",
      icon: <Users className="text-white h-5 w-5" />
    },
    {
      title: "Client-Focused Approach",
      description: "Helping businesses structure operations, scale outreach, and streamline processes.",
      icon: <Heart className="text-white h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            ref={imageRef}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Modern office workspace" 
                className="w-full h-auto object-cover"
              />
            </div>
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-40 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl font-poppins font-bold text-neutral-900">2025</p>
              <p className="text-neutral-600 text-sm">Founded in Pune</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 50 }}
            animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="bg-accent bg-opacity-10 text-accent px-4 py-2 rounded-full text-sm font-medium inline-block">
              Our Story
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-6 text-neutral-900">
              Partnering With Businesses for Strategic Growth
            </h2>
            <p className="text-lg text-neutral-600 mt-6 mb-4">
              Adhyayh is a rising startup launched in 2025, focused on simplifying business growth through strategic services and educational content.
            </p>
            <p className="text-neutral-600 mb-6">
              Our mission is to partner with startups and small businesses, providing customized solutions in marketing, technology, branding, and educating audiences on how industries really work behind the scenes.
            </p>
            
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={contentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-neutral-900">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button 
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-full inline-flex items-center justify-center transition-colors duration-300"
              >
                <span>Get in Touch</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
