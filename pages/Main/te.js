"use client";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const words = `Oxygen intoxicates you. In a catastrophic emergency, we take giant, panicked breaths. Suddenly, a sense of euphoria washes over, rendering us docile. You accept your fate. It's all laid out here: emergency water landing at six hundred miles per hour, blank faces, as calm as Hindu cows.`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
