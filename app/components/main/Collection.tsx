"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

interface CollectionItem {
  name: string;
  images: string[];
  link: string;
}

const collection: CollectionItem[] = [
  {
    name: "Stickers & Cards",
    images: ["/logo.png", "/next.svg", "/logo.webp"],
    link: "#",
  },
  {
    name: "Marketing Prints",
    images: [
      "/collection/Marketing/flyer.jpg",
      "/collection/Marketing/phampleys.jpg",
      "/collection/Marketing/trifold.jpg",
    ],
    link: "#",
  },
  {
    name: "Banners",
    images: [
      "/collection/Banners/banner.jpg",
      "/collection/Banners/canvas.jpg",
    ],
    link: "#",
  },
  {
    name: "Vynels",
    images: ["/coming.jpeg"],
    link: "#",
  },
  {
    name: "Customised Printing",
    images: ["/coming.jpeg"],
    link: "#",
  },
  {
    name: "Boards",
    images: ["/coming.jpeg"],
    link: "#",
  },
  {
    name: "Acrylic Board & Neon",
    images: ["/coming.jpeg"],
    link: "#",
  },
  {
    name: "Lollipop & Canopy Board",
    images: ["/coming.jpeg"],
    link: "#",
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
      }, 1500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [hoveredIndex]);

  return (
    <div className="w-[90%] mx-auto h-auto">
      <div className="flex flex-col justify-center items-center my-10 space-y-3">
        <h1 className="text-4xl font-semibold">Our Collection</h1>
        <h2>Explore Our Whole Collection Of Printables</h2>
      </div>
      <div className="w-full overflow-x-auto  sm:ml-0 md:max-w-[2100px] gap-10 flex h-auto md:overflow-hidden md:grid items-center md:grid-cols-2 lg:grid-cols-3 md:justify-center">
        {collection.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(item.link)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              setHoveredIndex(null);
              setCurrentImageIndex(0);
            }}
            className="w-60 h-56 md:w-full border border-gray-300 relative md:h-72 rounded-3xl flex-shrink-0 md:flex-shrink overflow-hidden"
            style={{
              backgroundImage: `url(${
                item.images[hoveredIndex === index ? currentImageIndex : 0] ||
                ""
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
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
