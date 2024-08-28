"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface CollectionItem {
  name: string;
  category: string;
  images: string[];
  link: string;
}

const collection: CollectionItem[] = [
  {
    name: "Stickers & Cards",
    category: "stickers-cards",
    images: [
      "/collection/Cards/bcards.webp",
      "/collection/Cards/letterhead.webp",
      "/collection/Cards/sticker.webp",
      "/collection/Cards/nfccards.webp",
    ],
    link: "/collection/stickers-cards?variant=bcards",
  },
  {
    name: "Marketing Prints",
    category: "marketing-prints",
    images: [
      "/collection/Marketing/flyer.webp",
      "/collection/Marketing/phampleys.webp",
      "/collection/Marketing/trifold.webp",
      "/collection/Marketing/brouchure.webp",
    ],
    link: "/collection/marketing-prints?variant=flyer",
  },
  {
    name: "Banners",
    category: "banners",
    images: [
      "/collection/Banners/banner.webp",
      "/collection/Banners/canvas.webp",
    ],
    link: "/collection/banners?variant=banner",
  },
  {
    name: "Vynels",
    category: "vynels-standee",
    images: [
      "/collection/Vynels/frost.webp",
      "/collection/Vynels/onewayvision.webp",
      "/collection/Vynels/standee.webp",
      "/collection/Vynels/sunboard.webp",
      "/collection/Vynels/vynel.webp",
    ],
    link: "/collection/vynels-standee?variant=frost",
  },
  {
    name: "Customised Printing",
    category: "apparel",
    images: [
      "/collection/Apparel/tshirt.webp",
      "/collection/Apparel/stickers.webp",
      "/collection/Apparel/cup.webp",
      "/collection/Apparel/bottle.webp",
      "/collection/Apparel/mousepad.webp",
    ],
    link: "/collection/apparel?variant=tshirt",
  },
  {
    name: "Boards",
    category: "boards",
    images: [
      "/collection/Boards/noparking.webp",
      "/collection/Boards/kiteshape.webp",
    ],
    link: "/collection/boards?variant=noparking",
  },
  {
    name: "Acrylic Board & Neon",
    category: "acrylic-neon",
    images: [
      "/collection/Acrylic/acrylic.webp",
      "/collection/Acrylic/neon.webp",
    ],
    link: "/collection/acrylic-neon?variant=acrylic",
  },
  {
    name: "Lolipop & Canopy Board",
    category: "lolipop-canopy",
    images: [
      "/collection/Lolipop/canopy.webp",
      "/collection/Lolipop/lolipop.webp",
    ],
    link: "/collection/lolipop-canopy?variant=canopy",
  },
];

const Collection: React.FC = () => {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (hoveredIndex !== null) {
      interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) =>
            (prevIndex + 1) % (collection[hoveredIndex]?.images.length || 1)
        );
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hoveredIndex]);

  return (
    <div className="w-[90%] mb-20 mx-auto h-auto">
      <div className="flex flex-col justify-center items-center my-10 space-y-3">
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold">
          Our Collection
        </h1>
        <h2 className="text-center text-md">
          Explore Our Whole Collection Of Printables
        </h2>
      </div>
      <div className="w-full overflow-x-auto  sm:ml-0 md:max-w-[2100px] gap-10 flex h-auto md:overflow-hidden md:grid items-center md:grid-cols-2 lg:grid-cols-3 md:justify-center">
        {collection.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              const defaultVariant =
                item.images[0]?.split("/").pop()?.split(".")[0] || "";
              router.push(
                `/collection/${item.category}?variant=${defaultVariant}`
              );
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setCurrentImageIndex(0);
            }}
            className="w-60 h-56 md:w-full border-[3px] bg-gray-300 border-white outline-[2px] outline-gray-300 relative md:h-72 rounded-3xl flex-shrink-0 md:flex-shrink overflow-hidden"
            style={{
              backgroundImage: `url(${
                item.images[hoveredIndex === index ? currentImageIndex : 0] ||
                ""
              })`,
              backgroundSize: "70%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transition: "background-image 0.5s ease-in-out",
            }}
          >
            <div
              className={`absolute bottom-0 left-0 w-full p-2 bg-opacity-30 ${
                hoveredIndex === index ? "bg-gray-800" : "bg-gray-500"
              } transition-colors duration-500`}
            >
              <h3
                className={`text-lg text-center font-semibold ${
                  hoveredIndex === index ? "text-white" : "text-white"
                }`}
              >
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
