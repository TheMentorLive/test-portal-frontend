"use client";

import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/public/ui/button";
import { Progress } from "@/public/ui/progress";
import Navbar from "./navbar";
import { BookOpenIcon, ChevronLeftIcon, ChevronRightIcon, FlagIcon } from '@/public/icons/icons';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/public/ui/card";
import dynamic from "next/dynamic";
import { submitTest } from "@/redux/slices/testSlice";
import { useRouter } from "next/navigation";

function Mainpg() {
  const dispatch = useDispatch();
  const router = useRouter();
  const test = useSelector((state) => state.test.test);
  const { user } = useSelector((state) => state.auth.data.data);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [questionTimeRemaining, setQuestionTimeRemaining] = useState(180); // 3 minutes for each question
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    if (test && test.questions) {
      setTimeRemaining(test.questions.length * 180); // Total time in seconds
    }
  }, [test]);

  // Memoize handleQuestionChange to avoid unnecessary re-renders
  const handleQuestionChange = useCallback((direction) => {
    if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setQuestionTimeRemaining(180);
    } else if (direction === "next" && currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setQuestionTimeRemaining(180);
    }
  }, [currentQuestion, test.questions.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });

      setQuestionTimeRemaining((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          handleQuestionChange("next");
          return 180; // Reset for the next question
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestion, handleQuestionChange]); // handleQuestionChange is now a stable dependency

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionIndex, optionId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: optionId,
    }));
  };

  const handleQuestionFlag = (questionIndex) => {
    if (flaggedQuestions.includes(questionIndex)) {
      setFlaggedQuestions(flaggedQuestions.filter((index) => index !== questionIndex));
    } else {
      setFlaggedQuestions([...flaggedQuestions, questionIndex]);
    }
  };

  const handleSubmit = async () => {
    const submissionData = {
      testId: test._id,
      answers: test.questions.map((question, index) => ({
        questionId: question._id,
        selectedOptionIds: answers[index] ? [answers[index]] : [],
      })),
    };
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    const submitResponse = await dispatch(submitTest(submissionData));
    router.push('/dash-admin/test/submit');

    setShowConfirmDialog(false);
  };

  if (!test || !test.questions || test.questions.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <Navbar name={user.name || "Jon"} />
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
              <button
                size="lg"
                variant="solid"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium border border-primary"
                onClick={() => setShowConfirmDialog(true)}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Question Map UI */}
          <div className="grid grid-cols-10 gap-2 mb-4">
            {test.questions.map((question, index) => (
              <button
                key={question._id}
                onClick={() => setCurrentQuestion(index)}
                className={`text-center p-2 border rounded ${
                  answers[index] ? "bg-green-500 text-white border-green-500" : "border-gray-400"
                } ${currentQuestion === index ? "bg-blue-500 text-white" : ""}`}
              >
                {index + 1}
              </button>
            ))}
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
                  disabled={currentQuestion === test.questions.length - 1}
                  className="border border-gray-400"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                  <span className="sr-only">Next question</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-medium border-b border-gray-400 pb-2">
                {test.questions[currentQuestion].questionText}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {test.questions[currentQuestion].options.map((option) => (
                  <Button
                    key={option._id}
                    variant={answers[currentQuestion] === option._id ? "primary" : "outline"}
                    onClick={() => handleAnswerSelect(currentQuestion, option._id)}
                    className={`justify-start border ${
                      answers[currentQuestion] === option._id
                        ? "bg-green-500 text-white border-green-500"
                        : "border-gray-400"
                    }`}
                  >
                    {option.optionText}
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
                  Progress: {((Object.keys(answers).length / test.questions.length) * 100).toFixed(0)}%
                </span>
                <Progress value={(Object.keys(answers).length / test.questions.length) * 100} />
              </div>
            </div>
          </div>
        </main>
      </div>
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-lg font-medium mb-4">Confirm Submission</h2>
            <p className="text-muted-foreground mb-6">Are you sure you want to submit your test?</p>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(Mainpg), { ssr: false });
