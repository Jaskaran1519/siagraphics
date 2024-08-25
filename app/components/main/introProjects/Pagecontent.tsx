import IntroCarousel from "./IntroCarousel";

export default function Pagecontent() {
  return (
    <div className="w-[90%] mx-auto min-h-[30vh] h-auto my-10 md:flex  justify-center items-center rounded-xl bg-[#FAF9F9]">
      <div className="w-full md:w-[60%] md:pl-5">
        <h1 className="text-[2rem] font-semibold md:text-[3rem] xl:text-[5rem] pt-5 md:leading-tight">
          Discover premium prints without limitation
        </h1>
        <button className=" mt-3 lg:mt-10 mb-10 border-[1px] border-black px-3 py-2 rounded-full hover:bg-zinc-900 hover:text-white duration-300">
          Check our collection
        </button>
      </div>
      <div className=" w-full md:w-[40%]">
        <IntroCarousel />
      </div>
    </div>
  );
}
