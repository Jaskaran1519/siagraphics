import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

import pic1 from "../../../public/hero/1.jpg";
import pic2 from "../../../public/hero/2.jpg";
import pic3 from "../../../public/hero/3.webp";
import pic4 from "../../../public/hero/4.jpg";

// Define the images with their specific dimensions
const images = [
  { src: pic1, width: 400, height: 300 },
  { src: pic2, width: 500, height: 350 },
  { src: pic3, width: 450, height: 300 },
  { src: pic4, width: 300, height: 400 },
];

const HeroPhotos = () => {
  return (
    <div
      className="flex justify-center gap-2 overflow-hidden xl:-mt-44"
      style={{ minWidth: "800px", maxWidth: "2000px" }}
    >
      {images.map((image, index) => (
        <div key={index} className="relative" style={{ alignSelf: "flex-end" }}>
          <Image
            src={image.src}
            alt={`hero-${index}`}
            width={image.width}
            height={image.height}
            className="object-bottom"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroPhotos;
