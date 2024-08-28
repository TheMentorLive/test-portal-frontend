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
    <div className="flex flex-col items-center justify-center h-[50rem]">
      <p className="text-neutral-900 dark:text-neutral-900 text-xs sm:text-base">
      Your journey to a brighter future begins here
      </p>
      
      <TypewriterEffectSmooth words={words} className="mt-5" />
      <br/>
      <br/>
      <br/>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <button
        className="bg-slate-800 w-40 h-10 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-xl p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span
            className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div
          className="relative h-8 flex justify-center  space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span>{`Contact Us`}</span>
        </div>
        <span
          className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
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
