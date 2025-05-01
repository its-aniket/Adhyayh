import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import { TESTIMONIALS } from "@/lib/constants";
import { useIsMobile } from "@/hooks/use-mobile";

const Testimonials = () => {
  const { ref, inView } = useAnimateOnScroll();
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine how many cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < TESTIMONIALS.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate translation for slider
  const getTranslation = () => {
    if (!containerRef.current) return 0;
    const cardWidth = containerRef.current.offsetWidth / visibleCards;
    return -currentIndex * cardWidth;
  };

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
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span 
            className="bg-secondary bg-opacity-10 text-secondary px-4 py-2 rounded-full text-sm font-medium inline-block"
            variants={itemVariants}
          >
            Client Success
          </motion.span>
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl mt-6 text-neutral-900"
            variants={itemVariants}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Hear from businesses we've helped grow through strategic partnership.
          </motion.p>
        </motion.div>

        <div className="relative" id="testimonial-slider">
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div 
              className="flex transition-all duration-500 ease-in-out"
              initial={{ x: 0 }}
              animate={{ x: getTranslation() }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4`}>
                  <div className="bg-neutral-50 p-8 rounded-xl shadow-sm border border-neutral-100 h-full">
                    <div className="flex items-center space-x-1 text-yellow-400 mb-6">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i}
                          className="h-4 w-4 fill-current" 
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <p className="text-neutral-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                        <p className="text-neutral-500 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {!isMobile && (
            <>
              <Button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 text-primary shadow-lg z-10 hidden md:flex"
                size="icon"
                variant="ghost"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextSlide}
                disabled={currentIndex >= TESTIMONIALS.length - visibleCards}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-3 text-primary shadow-lg z-10 hidden md:flex"
                size="icon"
                variant="ghost"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </>
          )}
          
          {isMobile && (
            <div className="flex justify-center mt-8 space-x-2">
              {TESTIMONIALS.slice(0, TESTIMONIALS.length - visibleCards + 1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? "bg-primary" : "bg-neutral-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
