import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

interface LayoutProps {
  children: ReactNode;
  includeContact?: boolean;
}

const Layout = ({ children, includeContact = true }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
        {includeContact && <Contact />}
      </main>
      <Footer />
    </>
  );
};

export default Layout;