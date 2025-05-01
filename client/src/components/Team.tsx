import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import { TEAM_MEMBERS } from "@/lib/constants";

const Team = () => {
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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="team" className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="bg-primary text-white bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-medium inline-block"
            variants={itemVariants}
          >
            Our Team
          </motion.span>
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl mt-6 text-neutral-900"
            variants={itemVariants}
          >
            Meet the People Behind Adhyayh
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            We're a small but dedicated team of creatives, techies, and problem-solvers based in Pune, India.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member, index }) => {
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
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md group">
        <div className="relative overflow-hidden">
          <img 
            src={member.image} 
            alt={member.name} 
            className="w-full h-72 object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3">
              <a href={member.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={member.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-poppins font-semibold text-xl text-neutral-900">{member.name}</h3>
          <p className="text-primary font-medium mt-1">{member.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
