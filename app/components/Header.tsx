import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import { Info, ShoppingBagIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-[90%] max-w-[2000px] mx-auto flex justify-between items-center py-3">
      <Image src="/logo.png" width={60} height={60} alt="/" />
      <Nav />
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
