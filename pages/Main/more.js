"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../../public/ui/typewriter-effect";

export default function More() {
  const words = [
    {
      text: "Unlock ",
      className: "text-[47px]", // Adjust text size here
    },
    {
      text: "your ",
      className: "text-[47px]", // Adjust text size here
    },
    {
      text: "potential ",
      className: "text-[47px]", // Adjust text size here
    },
    {
      text: "with ",
      className: "text-[47px]", // Adjust text size here
    },
    {
      text: "GenAi Learning.",
      className: "text-[47px] text-blue-500 dark:text-blue-500", // Adjust text size here
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-900 dark:text-neutral-900 text-xs sm:text-base mb-4">
        Your journey to a brighter future begins here
      </p>
      <TypewriterEffectSmooth words={words} className="text-2xl" /> {/* Adjust text size here */}
      <br />
      <br />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact Us
        </button>
        <Link href="/Main/signup">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
