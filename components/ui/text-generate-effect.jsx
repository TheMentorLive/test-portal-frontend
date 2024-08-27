"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.3, // Reduced duration for faster reveal
  delay = 0,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      scope.current.querySelectorAll("span"),
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.1, { startDelay: delay }), // Reduced stagger delay for faster reveal
      }
    );
  }, [scope, animate, filter, duration, delay]);

  return (
    <div className={cn(className)}>
      <div className="-mt-1">
        <motion.div
          ref={scope}
          className="text-black font-bold text-[54px] leading-none tracking-wide inline"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="opacity-0 inline" // Ensure span is inline and does not introduce breaks
              style={{
                filter: filter ? "blur(10px)" : "none",
                marginRight: "0.1rem", // Adjust this value to reduce the gap between words
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};