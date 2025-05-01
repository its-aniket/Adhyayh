import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = "Adhyayh - Simplifying Business Growth";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CtaBanner />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
