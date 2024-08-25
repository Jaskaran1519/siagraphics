"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "./components/main/Hero";
import Movingtext from "./components/main/Movingtext";
import Collection from "./components/main/Collection";
import Reviewscroll from "./components/main/Reviewscroll";
import Header from "./components/header/Header";
import Pagecontent from "./components/main/introProjects/Pagecontent";

const Page = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

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
    <>
      <div ref={containerRef} className=" ">
        <Hero />
        <Movingtext />
        <Pagecontent />
        <Collection />
        <Reviewscroll />
      </div>
    </>
  );
};

export default Page;
