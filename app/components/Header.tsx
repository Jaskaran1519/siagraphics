"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Info, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full  max-w-[2000px]  z-50 flex justify-between items-center py-3 px-[5vw] fixed top-0 left-1/2 transform -translate-x-1/2 transition-colors duration-300 ${
        scrolled ? "bg-white bg-opacity-20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Image src="/logo.webp" width={50} height={50} alt="/" />
      <div className="hidden sm:block">
        <Nav />
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/cart">
          <ShoppingBagIcon />
        </Link>
        <Info />
      </div>
    </div>
  );
};

export default Header;
