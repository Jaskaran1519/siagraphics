"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../../components/ui/infinite-moving-cards";
import { Maven_Pro } from "next/font/google";

const heading = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="w-full mt-10 py-10 text-center font-medium bg-gray-100">
      <h1 className="pt-10 text-xl font-semibold md:text-3xl xl:text-5xl">
        What they had to say...
      </h1>
      <h2 className="text-lg mt-3 text-gray-700">
        Some reviews about us from our proud customers
      </h2>
      <div className=" mt-10 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avtar: "/placeholder.svg",
    img: "/placeholder.svg",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    avtar: "/placeholder.svg",
    img: "/placeholder.svg",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avtar: "/placeholder.svg",
    img: "/placeholder.svg",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    avtar: "/placeholder.svg",
    img: "/placeholder.svg",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
    avtar: "/placeholder.svg",
    img: "/placeholder.svg",
  },
];
