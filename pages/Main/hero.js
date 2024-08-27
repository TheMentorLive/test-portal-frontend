'use client'

import React, { useEffect, useState, useCallback } from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
import { Button } from "@/public/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/public/ui/card"
import { Input } from "@/public/ui/input"
import { Label } from "@/public/ui/label"
import { Loader2, Send, ArrowRight, Play, Sparkles } from "lucide-react"
import confetti from 'canvas-confetti'
import { isEmail } from '@/utils/validations/emailValidator'
import { BACKENDURL } from '@/utils/validations/contants'

const words = ["GenAI Learning", "AI Mastery", "Future Skills", "Tech Innovation"]

const TypingAnimation = () => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const typeText = useCallback(() => {
    const currentWord = words[wordIndex]
    const shouldDelete = isDeleting ? 1 : -1
    setText(current => currentWord.substring(0, current.length - shouldDelete))

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((current) => (current + 1) % words.length)
    }
  }, [wordIndex, isDeleting, text])

  useEffect(() => {
    const timer = setTimeout(typeText, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [typeText, isDeleting])

  return (
    <span className="inline-block min-w-[200px]">
      {text}
      <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-blink"></span>
    </span>
  )
}

const FloatingElement = ({ children, yOffset = 5, duration = 4 }) => (
  <motion.div
    animate={{
      y: [-yOffset, yOffset],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }}
  >
    {children}
  </motion.div>
)

const BackgroundAnimation = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-full h-full">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mix-blend-multiply filter blur-xl opacity-20"
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            opacity: [0.2, 0.3, 0.3, 0.3, 0.2],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  </div>
)

export default function ModernAnimatedHero() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    if((event.target).fullName.vale?.length<3){
      alert('Please enter Correct Name')
      setIsSubmitting(false)
      return
    }
    if(!isEmail((event.target).email.value)) {
      alert('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }
    // Simulate API call
    fetch(`${BACKENDURL}/mislenious/get-in-touch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName: event.target.fullName.value,
        email: event.target.email.value,
        message: event.target.message.value
      })
    })
      .then(response => {
        if (response.ok) {
          // Handle successful response
          console.log('Submission successful');
          setIsSubmitting(false)
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#60A5FA', '#3B82F6', '#2563EB']
          });
          // Clear form values
          event.target.reset();
        } else {
          // Handle error response
          console.log('Submission failed');
          setIsSubmitting(false)
          alert('Submission failed. Please try again.');
        }
      })
      .catch(error => {
        // Handle network error
        console.log('Network error');
        setIsSubmitting(false)
        alert('Network error. Please try again.');
      });

  }

  return (
    <div className="relative flex-1 px-4 md:px-10 lg:px-20 xl:px-32 py-12 font-serif min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <BackgroundAnimation />
      <div className="relative w-full flex items-center min-h-[calc(100vh-6rem)] justify-center z-10">
        <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block">
                Master the Future
              </span>
              <span className="block text-blue-400">
                with
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                <TypingAnimation />
              </span>
            </h1>
            <p className="max-w-[600px] text-gray-300 text-lg leading-relaxed">
              Unlock the power of Generative AI with our cutting-edge courses. Transform your skills, boost your career, and shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <FloatingElement yOffset={3} duration={3}>
                <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 rounded-md px-4 py-2 text-base font-semibold shadow-md hover:shadow-lg">
                  <Link href="#" className="flex items-center">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Explore Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </FloatingElement>
              <FloatingElement yOffset={3} duration={4}>
                <Button asChild variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-900/50 transition-all duration-300 rounded-md px-4 py-2 text-base font-semibold">
                  <Link href="#" className="flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Link>
                </Button>
              </FloatingElement>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md border-none shadow-xl bg-white/10 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-white">
                  Get In Touch with Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="full-name" className="text-sm font-medium text-gray-200">Full Name</Label>
                    <Input 
                      id="full-name" 
                      name="fullName" 
                      placeholder="John Doe" 
                      required
                      className="border-gray-600 focus:border-blue-400 bg-white/5 backdrop-blur-sm transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-200">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      placeholder="john@example.com" 
                      type="email" 
                      required
                      className="border-gray-600 focus:border-blue-400 bg-white/5 backdrop-blur-sm transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-200">Message</Label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your message" 
                      required
                      className="w-full min-h-[100px] rounded-md border border-gray-600 focus:border-blue-400 bg-white/5 backdrop-blur-sm transition-all duration-300 p-2 text-white placeholder-gray-400"
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
        </div>
      </div>
    </div>
  )
}