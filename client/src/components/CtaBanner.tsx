import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const CtaBanner = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section 
      className="py-16 bg-primary relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 82, 204, 0.85)"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary opacity-85 mix-blend-multiply" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-white text-opacity-90 mt-4 mb-8">
            Partner with us to structure operations, scale outreach, and streamline your internal processes.
          </p>
          <Button 
            variant="secondary"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white hover:bg-neutral-100 text-primary font-medium px-8 py-3 h-auto rounded-full inline-flex items-center justify-center transition-colors duration-300"
          >
            <span>Schedule a Consultation</span>
            <CalendarCheck className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;
