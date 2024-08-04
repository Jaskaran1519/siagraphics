import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "../Header";

export function Hero() {
  return (
    <div className="relative">
      {/* <header className="fixed top-0 left-0 w-full z-10  ">
        <Header />
      </header> */}
      <section
        className="relative h-screen bg-cover  bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero/bg.webp")',
          filter: "brightness(0.9) ", // Adjust brightness and blur
        }}
      >
        {/* <div className="absolute inset-0 bg-background/60 " />{" "} */}
        {/* Lighten the background */}
        <div className="container h-full flex flex-col items-center  justify-center text-center space-y-6 px-4 md:px-6">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-8xl">
              Sia Graphics
            </h1>
            <p className="text-xl text-muted-foreground text-white">
              "Empowering businesses to thrive in the digital age."
            </p>
          </div>
          <Button className="px-4 py-2 bg-black text-white hover:bg-gray-300 hover:text-black rounded-lg duration-300">
            Explore Our Solutions
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Hero;

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
