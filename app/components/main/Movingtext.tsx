import React from "react";

const MarqueeText = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-200 py-3">
      <div className="flex animate-marquee ">
        <span className="text-xl  text-gray-900 mx-4">
          Worldwide Shipping&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          24/7 Customer Support&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          Highly customizable look and theme&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          Developed by Eazweb&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          Premium affordable Shopping Theme&nbsp;
        </span>
        {/* Duplicate content for continuous scrolling */}
        <span className="text-xl  text-gray-900 mx-4">
          Worldwide Shipping&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          24/7 Customer Support&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          Highly customizable look and theme&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          Developed by Eazweb&nbsp;
        </span>
        <span className="text-xl  text-gray-900 mx-4">
          Premium affordable Shopping Theme&nbsp;
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
