"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/public/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/public/ui/card";
import { Input } from "@/public/ui/input";
import { Label } from "@/public/ui/label";
import { TextGenerateEffect } from "@/public/ui/text-generate-effect"; // Ensure the path is correct
import { motion, useAnimation } from 'framer-motion';
import { Loader2, Send } from "lucide-react";
import toast from "react-hot-toast";
import { isEmail } from '@/utils/validations/emailValidator';
import { BACKENDURL } from '@/utils/validations/contants';

export default function Hero() {
  const heroRef = useRef(null);
  const controls = useAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    if (event.target.fullName.value?.length < 3) {
      alert('Please enter a valid name');
      setIsSubmitting(false);
      return;
    }

    if (!isEmail(event.target.email.value)) {
      alert('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    fetch(`${BACKENDURL}/mislenious/get-in-touch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
    })
      .then(response => {
        if (response.ok) {
          toast.success('We get in touch soon!');
          event.target.reset();
        } else {
          toast.error('Failed to send message');
          throw new Error('Failed to send message');
        }
      })
      .catch(error => {
        toast.error(`Failed to send message: ${error.message}`);
      })
      .finally(() => {
        event.target.reset();
        setIsSubmitting(false);
      });

  };

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
                className="inline"
                duration={0.3}
                delay={0}
              />
              <TextGenerateEffect
                words="with"
                className="inline"
                duration={0.3}
                delay={0.5}
              />
              <TextGenerateEffect
                words="GenAI Learning"
                className="inline"
                duration={0.3}
                delay={1.0}
              />
            </h1>
            <p className="max-w-full md:max-w-[600px] text-green-50 text-muted-foreground md:text-xl lg:text-base xl:text-lg">
              GenAI Learning offers world-class online courses and programs to help you achieve your career goals. Learn from
              industry experts and transform your future.
            </p>
            <div className="flex flex-col gap-6 md:flex-row">
              <Link
                href="#"
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
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="full-name" className="text-sm font-medium text-gray-900">Full Name</Label>
                    <Input 
                      id="full-name" 
                      name="fullName" 
                      placeholder="John Doe" 
                      required
                      className="border-gray-300 focus:border-blue-400 bg-white transition-all duration-300 text-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-900">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      type="email" 
                      required
                      className="border-gray-300 focus:border-blue-400 bg-white transition-all duration-300 text-black placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-900">Message</Label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      required
                      className="w-full min-h-[100px] rounded-md border border-gray-300 focus:border-blue-400 bg-white transition-all duration-300 p-2 text-black placeholder-gray-400"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 rounded-md py-2 text-base font-semibold shadow-md hover:shadow-lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Start Learning
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
