import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { SERVICES_LIST, COMPANY_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="inline-block mb-6">
            <img src="..\assets\footlogo.png" alt="" height={50} width={80} />
            </a>
            <p className="text-neutral-400 mb-6">
              Simplifying business growth through strategic services and educational content since 2025.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {SERVICES_LIST.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-neutral-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {COMPANY_LINKS.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-neutral-400 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.url.substring(1))?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mt-1 mr-3 h-5 w-5" />
                <span className="text-neutral-400">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-primary mt-1 mr-3 h-5 w-5" />
                <span className="text-neutral-400">adhyayh.work@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary mt-1 mr-3 h-5 w-5" />
                <span className="text-neutral-400">+91 72496 34834</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>&copy; {currentYear} Adhyayh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
