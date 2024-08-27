import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  duration = 0.3,
  delay = 0.5,
  children, // Use children instead of words
  filter = true,
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!scope.current) return; // Early exit if no scope

    const spans = scope.current.querySelectorAll("span");
    animate(
      spans,
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.1, { startDelay: delay }),
      }
    );
  }, [scope, animate, filter, duration, delay]);

  return (
    <div className={cn("relative inline-block")}>
      <motion.div
        ref={scope}
        className="text-black font-bold text-[54px] leading-none tracking-wide"
      >
        {React.Children.map(children, (child, idx) => (
          <motion.span
            key={idx}
            className="opacity-0 inline"
            style={{
              filter: filter ? "blur(10px)" : "none",
              marginRight: "0.1rem",
            }}
          >
            {child}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
