import { useEffect } from 'react';
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";

const Home = () => {
  useEffect(() => {
    // Set page title
    document.title = "Adhyayh - Simplifying Business Growth";
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <CtaBanner />
      <Testimonials />
      <Team />
    </Layout>
  );
};

export default Home;
