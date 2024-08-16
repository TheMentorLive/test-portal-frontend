"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/public/ui/select"
import { Button } from "@/public/ui/button"
import { Progress } from "@/public/ui/progress"
import Navbar from "./navbar"
import { BookOpenIcon, ChevronLeftIcon, ChevronRightIcon, FlagIcon } from '@/public/icons/icons';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/public/ui/card"

export default function Mainpg() {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [flaggedQuestions, setFlaggedQuestions] = useState([])
  const [timeRemaining, setTimeRemaining] = useState(3600)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language)
  }

  const handleQuestionChange = (direction) => {
    if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    } else if (direction === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answerIndex,
    }))
  }

  const handleQuestionFlag = (questionIndex) => {
    if (flaggedQuestions.includes(questionIndex)) {
      setFlaggedQuestions(flaggedQuestions.filter((index) => index !== questionIndex))
    } else {
      setFlaggedQuestions([...flaggedQuestions, questionIndex])
    }
  }

  const questions = [
    {
      id: 1,
      text: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "Which of these is not a primary color?",
      answers: ["Red", "Blue", "Green", "Purple"],
      correctAnswer: 3,
    },
    {
      id: 3,
      text: "What is the largest ocean on Earth?",
      answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: 3,
    },
    {
      id: 4,
      text: "Which of these is not a common programming language?",
      answers: ["JavaScript", "Python", "Java", "Elvish"],
      correctAnswer: 3,
    },
  ]

  return (
    <div>
       <Navbar/>
  
    <div className="flex flex-col h-screen">
    
      <main className="flex-1 bg-background text-foreground p-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Exam</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium border border-primary">
              {formatTime(timeRemaining)}
            </div>
            <Link href="/dash-admin/test/typg">
            <Button size="sm" className="border border-primary">Submit</Button>
            </Link>
          </div>
        </div>
        <div className="bg-card text-card-foreground rounded-md p-6 border border-card-border">
          <div className="flex justify-between items-center mb-4 border-b border-card-border pb-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Question {currentQuestion + 1}</span>
              {flaggedQuestions.includes(currentQuestion) && <FlagIcon className="h-5 w-5 text-primary" />}
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuestionChange("prev")}
                disabled={currentQuestion === 0}
                className="border border-gray-400"
              >
                <ChevronLeftIcon className="h-5 w-5" />
                <span className="sr-only">Previous question</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuestionChange("next")}
                disabled={currentQuestion === questions.length - 1}
                className="border border-gray-400"
              >
                <ChevronRightIcon className="h-5 w-5" />
                <span className="sr-only">Next question</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg font-medium border-b border-gray-400 pb-2">{questions[currentQuestion].text}</p>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <Button
                  key={index}
                  variant={answers[currentQuestion] === index ? "primary" : "outline"}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  className={`justify-start border ${answers[currentQuestion] === index ? "bg-green-500 text-white border-green-500" : "border-gray-400"}`}
                >
                  {answer}
                </Button>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center border-t border-gray-400 pt-4">
            <Button
              variant={flaggedQuestions.includes(currentQuestion) ? "primary" : "outline"}
              onClick={() => handleQuestionFlag(currentQuestion)}
              className="border border-gray-400"
            >
              {flaggedQuestions.includes(currentQuestion) ? "Unflag" : "Flag"}
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{flaggedQuestions.length} flagged</span>
              <span className="text-muted-foreground">{Object.keys(answers).length} answered</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center border-t border-gray-400 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">
                Progress: {currentQuestion + 1}/{questions.length}
              </span>
              <Progress value={((currentQuestion + 1) / questions.length) * 100} className="border border-gray-400" />
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuestionChange("prev")}
                disabled={currentQuestion === 0}
                className="border border-gray-400"
              >
                <ChevronLeftIcon className="h-5 w-5" />
                <span className="sr-only">Previous question</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleQuestionChange("next")}
                disabled={currentQuestion === questions.length - 1}
                className="border border-gray-400"
              >
                <ChevronRightIcon className="h-5 w-5" />
                <span className="sr-only">Next question</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="-mt-5">
          <Card className="border border-card-border">
            <CardHeader>
              <CardTitle>Question Map</CardTitle>
              <CardDescription>View the status of all questions at a glance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-md flex items-center justify-center cursor-pointer transition-colors border border-gray-400 ${
                      currentQuestion === index
                        ? "bg-primary text-primary-foreground"
                        : flaggedQuestions.includes(index)
                        ? "bg-red-500 text-white"
                        : answers[index] !== undefined
                        ? "bg-green-500 text-white"
                        : "bg-card text-card-foreground"
                    }`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
    </div>
  )
}
