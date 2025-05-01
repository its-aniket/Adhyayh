import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import { SERVICES } from "@/lib/constants";

const Services = () => {
  const { ref, inView } = useAnimateOnScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block"
            variants={headerVariants}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="font-bold text-3xl md:text-4xl mt-6 text-neutral-900"
            variants={headerVariants}
          >
            Professional Solutions for Business Growth
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-700 mt-4 max-w-2xl mx-auto"
            variants={headerVariants}
          >
            Offering strategic solutions that align with your business goals and drive measurable results.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="service-card bg-white rounded-xl p-8 shadow-md border border-gray-100 transition-all duration-300 hover:border-gray-200 group"
    >
      <div className={`w-16 h-16 ${service.bgColor} flex items-center justify-center rounded-xl mb-6 shadow-sm transform transition-transform duration-300 group-hover:scale-110`}>
        {service.icon}
      </div>
      <h3 className="font-semibold text-xl text-neutral-900 mb-4">{service.title}</h3>
      <p className="text-neutral-700 mb-6">{service.description}</p>
      <a href="#" className={`inline-flex items-center ${service.textColor} font-medium group`}>
        <span>Learn more</span>
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </motion.div>
  );
};

export default Services;
