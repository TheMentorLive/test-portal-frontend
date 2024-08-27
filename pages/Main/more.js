"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "../../public/ui/typewriter-effect";
export default function More() {
  const words = [
    {
      text: "Unlock ‎ ",
    },
    {
      text: "your ‎ ",
    },
    {
      text: "potential ‎  ",
    },
    {
      text: "with ‎  ",
    },
    {
      text: "GenAi Learning.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-900 dark:text-neutral-900 text-xs sm:text-base  ">
      Your journey to a brighter future begins here
      </p>
      <TypewriterEffectSmooth words={words} />
      <br/>
      <br/>
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Contact Us
        </button>
        <Link href="/Main/signup">
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
        </Link>
      </div>
    </div>)
  );
}
