import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Clock, Users, Briefcase, TrendingUp } from "lucide-react";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

// Rename component to WhyChooseUs but keep the export as Testimonials for compatibility
const WhyChooseUs = () => {
  const { ref, inView } = useAnimateOnScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
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

  const reasons = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Professional Excellence",
      description: "We uphold the highest standards in every project, ensuring quality results that exceed expectations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client-Focused Approach",
      description: "Your success is our priority. We work closely with you to understand your unique goals and challenges."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Industry Knowledge",
      description: "Our team brings specialized expertise across marketing, legal, and technology sectors."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure efficient project completion without compromising quality."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Growth-Oriented Solutions",
      description: "Our strategies focus on sustainable growth and long-term success for your business."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Commitment to Results",
      description: "We measure our success by your outcomes, ensuring tangible results from our partnership."
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block"
            variants={itemVariants}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="font-bold text-3xl md:text-4xl mt-6 text-neutral-900"
            variants={itemVariants}
          >
            Our Commitment to Excellence
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-700 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            What sets Adhyayh apart is our dedication to quality and client satisfaction in everything we do.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{reason.title}</h3>
              <p className="text-neutral-700 flex-grow">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
