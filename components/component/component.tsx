import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Component() {
  return (
    <div className="relative">
      <header className="fixed top-0 left-0 w-full z-10 bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="w-6 h-6" />
            <span className="text-lg font-semibold">Acme Inc.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Get Started</Button>
        </div>
      </header>
      <section
        className="relative h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/placeholder.svg")' }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        <div className="container h-full flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-6">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Unlock Your Business Potential
            </h1>
            <p className="text-xl text-muted-foreground">
              "Empowering businesses to thrive in the digital age."
            </p>
          </div>
          <Button>Explore Our Solutions</Button>
        </div>
      </section>
    </div>
  );
}

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
