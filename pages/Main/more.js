"use client";
import { TypewriterEffectSmooth } from "@/public/ui/typewriter-effect";
import Link from "next/link";

export default function More() {
  const words = [
    {
      text: "Unlock ‎ ",
      className: "text-xl sm:text-5xl",// Increase text size for "Build"
    },
    {
      text: "your ‎ ",
      className: "text-xl sm:text-5xl",
    },
    {
      text: "potential ‎ ",
      className: "text-xl sm:text-5xl",
    },
    {
      text: "with ‎ ",
      className: "text-xl sm:text-5xl", // Increase text size for "with"
    },
    {
      text: "GenAi Learning.",
      className: "text-blue-500 dark:text-blue-500 sm:text-5xl",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-900 dark:text-neutral-900 text-xs sm:text-base">
      Your journey to a brighter future begins here
      </p>
      
      <TypewriterEffectSmooth words={words} className="mt-5" />
      <br/>
      <br/>
      <br/>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-gray-100 border dark:border-black border-black text-blue-500 text-sm">
          Contact Us
        </button>
        <Link href="/Main/signup">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-blue-500  text-sm">
          Signup
        </button>
        </Link>
      </div>
    </div>
  );
}
