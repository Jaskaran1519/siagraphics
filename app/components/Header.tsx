"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Mobilemenu from "./Mobilemenu";

import Nav from "./Nav";
import { Info, Menu, ShoppingBagIcon, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      className={`w-full  max-w-[2000px] bg-black  z-50 flex justify-between items-center py-3 px-[5vw] fixed top-0 left-1/2 transform -translate-x-1/2 transition-colors duration-300 
        `}
    >
      <div className="flex items-center gap-5">
        <Mobilemenu />
        <div className="hidden sm:block">
          <Nav />
        </div>
      </div>
      <Image
        src="/whitelogo.png"
        width={45}
        height={45}
        alt="/"
        className="hidden md:block"
      />

      <div className="flex  gap-6 items-center pl-5">
        <Input type="email" placeholder="Search here" />
        <Link href="/cart">
          <ShoppingBagIcon className="text-white " />
        </Link>
        <Link href="/profile">
          <User className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
