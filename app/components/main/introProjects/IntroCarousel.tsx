import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { ArrowDown01, ChevronDown } from "lucide-react";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300"],
});

export default function CircularDemo() {
  const [products, setProducts] = useState<Product[]>([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  interface Product {
    name: string;
    price: number;
  }

  const data: any[] = [
    {
      name: "Printed Tshirts",
      price: 65,
      img: "/introcarouselimages/tshirt.png",
      colors: ["bg-red-500", "bg-green-600", "bg-black", "bg-white"],
    },
    {
      name: "Branding Stickers",
      price: 65,
      img: "/introcarouselimages/sticker.png",
    },
    {
      name: "Marketing Banners",
      price: 65,
      img: "/introcarouselimages/banner.png",
      colors: ["bg-red-500", "bg-green-600", "bg-black", "bg-white"],
    },
    {
      name: "Printed Cups",
      price: 65,
      img: "/introcarouselimages/1.png",
      colors: ["bg-red-500", "bg-green-600", "bg-black", "bg-white"],
    },
  ];
  useEffect(() => {
    setProducts(data);
  }, []);

  const productTemplate = (product: any) => {
    return (
      <div className="border-1 relative surface-border w-full h-full bg-[#FAF9F9] border-round text-center py-5 px-3">
        <Image
          src="/logo.webp"
          width={20}
          height={20}
          className="absolute top-5 right-5"
          alt=""
        />
        <div className="mb-3">
          <Image
            width={500}
            height={500}
            src={product.img}
            alt={product.name}
            className="h-72 w-auto shadow-2 mx-auto my-10"
          />
        </div>
        <div className={`${archivo.className} mt-10`}>
          <h4 className="mb-1 text-2xl font-semibold">{product.name}</h4>
          <div className=" mt-2 flex justify-center  gap-5">
            <h6 className="mt-0 text-xl items-center">
              ${product.price} / item
            </h6>
            <div className="flex gap-2 items-center">
              {product.colors &&
                product.colors.map((color: String, index: any) => (
                  <div
                    key={index}
                    className={`w-6 h-6 rounded-full border-[3px] border-white ${color}`}
                  ></div>
                ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center  items-center gap-5 my-5">
            <button className=" flex gap-2 mt-3 px-5 py-2 border-[1px] border-black bg-white text-zinc-900 hover:text-white hover:bg-zinc-900 duration-300 rounded-full">
              ADD TO CART{" "}
              <span>
                <ChevronDown />
              </span>
            </button>
            <button className="mt-3 px-5 py-2 text-md font-extralight bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 duration-300 rounded-full">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
