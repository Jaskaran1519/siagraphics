"use client";

import React from "react";
import ProductCard from "./Productcard";
import CarouselDemo from "../CarouselDemo";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "Customised Stickers",
      image: "/collection/Cards/sticker.jpg",
      price: 449,
      originalPrice: 699,
    },
    {
      id: "2",
      name: "Printed Mugs",
      image: "/coming.jpeg",
      price: 459,
      originalPrice: 699,
    },
    {
      id: "3",
      name: "Tshirts and Caps",
      image:
        "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      price: 469,
      originalPrice: 699,
    },
    {
      id: "4",
      name: "Printed Canvas",
      image: "/collection/Banners/canvas.jpg",
      price: 479,
      originalPrice: 699,
    },
  ];

  const handleProductChange = (productId: string) => {
    console.log("Selected product ID:", productId);
  };

  return (
    <div className="w-[90%] mx-auto h-auto mb-20">
      <div className="flex flex-col justify-center items-center  my-10 space-y-3">
        <h1 className=" text-4xl">Featured Products</h1>
        <h2 className="text-gray-700">Our Best Selling Products</h2>
      </div>
      <CarouselDemo products={products} onProductChange={handleProductChange} />
    </div>
  );
};

export default FeaturedProducts;
