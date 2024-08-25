"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "./Productcard";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
}

interface CarouselDemoProps {
  products: Product[];
  onProductChange: (productId: string) => void;
}

export function CarouselDemo({ products, onProductChange }: CarouselDemoProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCarousel = (centerSlidePercentage: number) => (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      infiniteLoop={true}
      useKeyboardArrows={true}
      centerMode={true}
      centerSlidePercentage={centerSlidePercentage}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full"
          >
            &#10094;
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full"
          >
            &#10095;
          </button>
        )
      }
    >
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onProductChange(product.id)}
          className="px-2"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </Carousel>
  );

  return (
    <div className="relative w-full">
      {windowWidth < 768 ? ( // Small displays: Carousel with 1 item
        renderCarousel(100)
      ) : windowWidth < 1024 ? ( // Medium displays: Carousel with 2 items
        <div className="w-[90%] ml-16 mx-auto">{renderCarousel(50)}</div>
      ) : (
        // Large displays: No carousel, just 4 items in a row
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                onClick={() => onProductChange(product.id)}
                className="w-full"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselDemo;
