'use client'
import React, { ReactNode, useEffect } from "react";
import Header from "../components/header/Header";
import Lenis from "lenis";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup Lenis instance when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div>
        <Header />
      {children}
    </div>
  );
};

export default Layout;
