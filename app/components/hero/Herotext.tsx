import React from "react";
import { Rubik } from "next/font/google";

const headingFont = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

const Herotext = () => {
  return (
    <div
      className={`${headingFont.className} w-[90vw] mx-auto  h-auto mt-[15vh]`}
    >
      <h1 className="text-[5rem] xl:text-[6.5rem] text-center leading-tight font-semibold">
        Sia Graphics
      </h1>
      <h2 className="text-center mt-3 ">
        Elevate Your Brand With Our Professional Prints
      </h2>
      <div className="mt-8 flex gap-10 justify-center items-center">
        <button className="px-4 py-1 border-[1px] border-gray-800 rounded-lg">
          Explore
        </button>
        <button className="px-4 py-1 border-[1px] border-gray-800 rounded-lg">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Herotext;
