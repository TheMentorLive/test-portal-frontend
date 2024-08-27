"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/public/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/public/ui/card";
import { Input } from "@/public/ui/input";
import { Label } from "@/public/ui/label";
import { TextGenerateEffect } from "@/public/ui/text-generate-effect"; // Ensure the path is correct
import { motion, useAnimation } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = heroRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 50 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll effect on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="flex-1 px-4 md:px-10 lg:px-20 xl:px-32 py-8 font-body">
      <section ref={heroRef} className="w-full flex items-center min-h-[100dvh] justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="container grid gap-6 px-4 mr-16 ml-16 -mt-48 md:px-6 lg:grid-cols-2 lg:gap-24"
        >
          <div className="space-y-4 pt-24">
            <h1 className="text-3xl font-heading font-bold text-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              <TextGenerateEffect
                words="Master the Future"
                className="inline" // Ensure text stays inline
                duration={0.3} // Updated duration
                delay={0} // Start immediately
              />
              
              <TextGenerateEffect
                words="with"
                className="inline " // Ensure text stays inline
                duration={0.3} // Updated duration
                delay={0.5} // Start after the previous text
              />
              
              <TextGenerateEffect
                words="GenAI Learning"
                className="inline" // Ensure text stays inline
                duration={0.3} // Updated duration
                delay={1.0} // Start after the previous text
              />
            </h1>
            <p className="max-w-full md:max-w-[600px] text-green-50 text-muted-foreground md:text-xl lg:text-base xl:text-lg">
              GenAI Learning offers world-class online courses and programs to help you achieve your career goals. Learn from
              industry experts and transform your future.
            </p>
            <div className="flex flex-col gap-6 md:flex-row">
              <Link
                href=""
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Courses
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 md:mt-14 space-y-8">
            <Card className="w-full max-w-md border-opacity-40 border-blue-400">
              <CardHeader>
                <CardTitle className="text-xl md:text-[29px] font-heading">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name" className="text-sm font-body">Full Name</Label>
                  <Input id="full-name" placeholder="Full Name" className="border-opacity-40 border-blue-400 focus:border-blue-700 font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-body">Email</Label>
                  <Input id="email" placeholder="Email" type="email" className="border-opacity-40 border-blue-400 focus:border-blue-700 font-body" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-sm font-body">Contact</Label>
                  <Input id="contact" placeholder="Contact" className="border-opacity-40 border-blue-400 focus:border-blue-700 font-body" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-500 text-white font-body">Start Learning</Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
