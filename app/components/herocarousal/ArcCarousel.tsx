import { useState } from "react";

const ArcCarousel = ({ items }:{items:any}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center py-10">
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
      >
        &lt;
      </button>

      {/* Carousel */}
      <div className="flex justify-center items-end space-x-4">
        {items.map((item:any, index:any) => {
          // Calculate distance from the active item for scaling
          const distanceFromActive = Math.abs(index - activeIndex);

          // Determine the size based on distance from the active item
          const scale =
            distanceFromActive === 0
              ? "scale-125"
              : distanceFromActive === 1
              ? "scale-100"
              : "scale-75";

          // Determine the elevation based on distance from the active item
          const translateY =
            distanceFromActive === 0
              ? "-translate-y-10"
              : distanceFromActive === 1
              ? "-translate-y-5"
              : "translate-y-0";

          return (
            <div
              key={index}
              className={`transition-transform transform duration-500 ease-in-out ${scale} ${translateY} relative`}
              style={{
                zIndex: distanceFromActive === 0 ? 10 : 0,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-40 h-40 object-cover rounded-lg shadow-lg"
              />
              {distanceFromActive === 0 && (
                <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-opacity-50 bg-gray-900 text-white rounded-b-lg">
                  {item.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
      >
        &gt;
      </button>
    </div>
  );
};

export default ArcCarousel;
