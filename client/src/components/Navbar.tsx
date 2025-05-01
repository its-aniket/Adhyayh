import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Link, useLocation } from "wouter";
import { navigate } from "wouter/use-browser-location";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation and close mobile menu
  const handleNavigation = (id: string) => {
    if (isMenuOpen) setIsMenuOpen(false);
  
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100); // wait for navigation
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  

  return (
    <header
      className={cn(
        "fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
      id="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img src="\src\assets\logofoot.png" alt="" height={50} width={80} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="/"
              className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => handleNavigation("services")}
              className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
            >
              Services
            </a>
            <a 
              onClick={() => handleNavigation("about")}
              className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
            >
              About
            </a>
            <a 
              onClick={() => handleNavigation("team")}
              className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
            >
              Team
            </a>
            <Link
              href="/careers" 
              className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
            >
              Careers
            </Link>
            <a 
              onClick={() => handleNavigation("contact")}
              className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          <Button 
            className="hidden md:block bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors duration-300"
            onClick={() => handleNavigation("contact")}
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden text-neutral-700 bg-white border border-gray-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4 pt-4">
              <a 
                onClick={() => handleNavigation("home")}
                className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
              >
                Home
              </a>
              <a 
                onClick={() => handleNavigation("services")}
                className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
              >
                Services
              </a>
              <a 
                onClick={() => handleNavigation("about")}
                className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
              >
                About
              </a>
              <a 
                onClick={() => handleNavigation("testimonials")}
                className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
              >
                Testimonials
              </a>
              <a 
                onClick={() => handleNavigation("team")}
                className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
              >
                Team
              </a>
              <a 
                onClick={() => handleNavigation("contact")}
                className="font-medium text-neutral-700 hover:text-primary transition-colors cursor-pointer"
              >
                Contact
              </a>
              <Button 
                className="bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-colors duration-300 w-full"
                onClick={() => handleNavigation("contact")}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
