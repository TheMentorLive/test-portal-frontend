import { LuClipboardType } from "react-icons/lu";
import Layout from '../layout/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResult, fecthTestSummary } from "@/redux/slices/resultSlice";

// const mockSummaryData = {
//     statusCode: 200,
//     data: [
//         {
//             questionText: "what is 2",
//             options: [
//                 { _id: "66c070075ba6ebae1c8334ef", optionText: "1" },
//                 { _id: "66c070075ba6ebae1c8334f0", optionText: "2" }
//             ],
//             selectedOptions: [
//                 { _id: "66c070075ba6ebae1c8334f0", optionText: "2" }
//             ],
//             correctOptions: [
//                 { _id: "66c070075ba6ebae1c8334f0", optionText: "2" }
//             ],
//             explanation: "2 is two",
//             difficultyLevel: "Medium",
//             topic: "numbers"
//         },
//         {
//             questionText: "What is 5 + 3?",
//             options: [
//                 { _id: "66c074695ba6ebae1c8334f5", optionText: "7" },
//                 { _id: "66c074695ba6ebae1c8334f6", optionText: "8" },
//                 { _id: "66c074695ba6ebae1c8334f7", optionText: "9" }
//             ],
//             selectedOptions: [
//                 { _id: "66c074695ba6ebae1c8334f6", optionText: "8" }
//             ],
//             correctOptions: [
//                 { _id: "66c074695ba6ebae1c8334f6", optionText: "8" }
//             ],
//             explanation: "5 + 3 equals 8.",
//             difficultyLevel: "Easy",
//             topic: "Basic Arithmetic"
//         },
//         {
//             questionText: "What is the speed of light?",
//             options: [
//                 { _id: "66c074805ba6ebae1c8334fb", optionText: "299,792 km/s" },
//                 { _id: "66c074805ba6ebae1c8334fc", optionText: "150,000 km/s" },
//                 { _id: "66c074805ba6ebae1c8334fd", optionText: "500,000 km/s" }
//             ],
//             selectedOptions: [
//                 { _id: "66c074805ba6ebae1c8334fb", optionText: "299,792 km/s" }
//             ],
//             correctOptions: [
//                 { _id: "66c074805ba6ebae1c8334fb", optionText: "299,792 km/s" }
//             ],
//             explanation: "The speed of light in a vacuum is approximately 299,792 km/s.",
//             difficultyLevel: "Medium",
//             topic: "Basic Concepts"
//         },
//         {
//             questionText: "What is the chemical symbol for Sodium?",
//             options: [
//                 { _id: "66c0748b5ba6ebae1c833501", optionText: "Na" },
//                 { _id: "66c0748b5ba6ebae1c833502", optionText: "So" },
//                 { _id: "66c0748b5ba6ebae1c833503", optionText: "Sd" }
//             ],
//             selectedOptions: [
//                 { _id: "66c0748b5ba6ebae1c833502", optionText: "So" }
//             ],
//             correctOptions: [
//                 { _id: "66c0748b5ba6ebae1c833501", optionText: "Na" }
//             ],
//             explanation: "The chemical symbol for Sodium is Na.",
//             difficultyLevel: "Easy",
//             topic: "Elements"
//         },
//         {
//             questionText: "Which organelle is known as the powerhouse of the cell?",
//             options: [
//                 { _id: "66c074955ba6ebae1c833507", optionText: "Nucleus" },
//                 { _id: "66c074955ba6ebae1c833508", optionText: "Mitochondria" },
//                 { _id: "66c074955ba6ebae1c833509", optionText: "Ribosome" }
//             ],
//             selectedOptions: [
//                 { _id: "66c074955ba6ebae1c833509", optionText: "Ribosome" }
//             ],
//             correctOptions: [
//                 { _id: "66c074955ba6ebae1c833508", optionText: "Mitochondria" }
//             ],
//             explanation: "The mitochondria are known as the powerhouse of the cell.",
//             difficultyLevel: "Medium",
//             topic: "Cell Structure"
//         },
//         {
//             questionText: "Which ancient civilization built the pyramids of Giza?",
//             options: [
//                 { _id: "66c0749e5ba6ebae1c83350d", optionText: "Romans" },
//                 { _id: "66c0749e5ba6ebae1c83350e", optionText: "Egyptians" },
//                 { _id: "66c0749e5ba6ebae1c83350f", optionText: "Greeks" }
//             ],
//             selectedOptions: [
//                 { _id: "66c0749e5ba6ebae1c83350d", optionText: "Romans" }
//             ],
//             correctOptions: [
//                 { _id: "66c0749e5ba6ebae1c83350e", optionText: "Egyptians" }
//             ],
//             explanation: "The pyramids of Giza were built by the ancient Egyptians.",
//             difficultyLevel: "Easy",
//             topic: "Ancient Civilizations"
//         },
//         {
//             questionText: "What is the formula for force?",
//             options: [
//                 { _id: "66c074b65ba6ebae1c833519", optionText: "F = ma" },
//                 { _id: "66c074b65ba6ebae1c83351a", optionText: "F = mv" },
//                 { _id: "66c074b65ba6ebae1c83351b", optionText: "F = p/v" }
//             ],
//             selectedOptions: [
//                 { _id: "66c074b65ba6ebae1c833519", optionText: "F = ma" }
//             ],
//             correctOptions: [
//                 { _id: "66c074b65ba6ebae1c833519", optionText: "F = ma" }
//             ],
//             explanation: "The formula for force is F = ma (force equals mass times acceleration).",
//             difficultyLevel: "Medium",
//             topic: "Mechanics"
//         },
//         {
//             questionText: "What is the basic unit of heredity?",
//             options: [
//                 { _id: "66c074c05ba6ebae1c83351f", optionText: "Gene" },
//                 { _id: "66c074c05ba6ebae1c833520", optionText: "Chromosome" },
//                 { _id: "66c074c05ba6ebae1c833521", optionText: "DNA" }
//             ],
//             selectedOptions: [
//                 { _id: "66c074c05ba6ebae1c833520", optionText: "Chromosome" }
//             ],
//             correctOptions: [
//                 { _id: "66c074c05ba6ebae1c83351f", optionText: "Gene" }
//             ],
//             explanation: "The basic unit of heredity is the gene.",
//             difficultyLevel: "Hard",
//             topic: "Genetics"
//         }
//     ],
//     message: "Detailed test summary retrieved successfully",
//     success: true
// }; 

export default function ResultPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const result = useSelector((state) => state.result.result);
    
    // State for managing the summary section
    const [summaryData, setSummaryData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchResult(id));
        }
    }, [id, dispatch]);

    const handleSummaryClick = () => {
        setIsLoading(true);
        dispatch(fecthTestSummary(id))
            .then((response) => {
                setSummaryData(response.payload.data);
                setIsLoading(false);
        });
    };

    if (!result) {
        return (
            <Layout>
                <div className="flex justify-center items-center h-screen">
                    <p className="text-lg font-medium">Loading result data...</p>
                </div>
            </Layout>
        );
    }

    const {
        totalQuestions = 0,
        correctAnswers = 0,
        skippedQuestions = 0,
        passed = false,
        submissionId: { testId = "ABC123" } = {},
        accuracy = 0,
        score = 0
    } = result;

    const incorrectAnswers = totalQuestions - correctAnswers - skippedQuestions;

    const calculatePercentage = (count) => (totalQuestions > 0 ? (count / totalQuestions) * 100 : 0);

    const correctPercentage = calculatePercentage(correctAnswers);
    const incorrectPercentage = calculatePercentage(incorrectAnswers);
    const skippedPercentage = calculatePercentage(skippedQuestions);

    return (
        <Layout>
            <div className="rounded-t-sm text-white flex ml-14 flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
                <header className="bg-primary text-primary-foreground py-6 sm:py-8 px-4 sm:px-6 md:px-10 w-full rounded-md text-center">
                    <div className="mx-auto flex flex-col items-center gap-2 sm:gap-4 w-full">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <LuClipboardType className="w-5 h-5 sm:w-6 sm:h-6" />
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Test Results</h1>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-sm sm:text-md md:text-lg font-medium">Test ID:</span>
                            <span className="text-sm sm:text-md md:text-lg font-bold">{testId}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className="text-sm sm:text-md md:text-lg font-medium">Status:</span>
                            <span className={`text-sm sm:text-md md:text-lg font-bold ${passed ? "text-green-500" : "text-red-500"}`}>
                                {passed ? "Passed" : "Failed"}
                            </span>
                        </div>
                    </div>
                </header>
                <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <div className="bg-card rounded-lg shadow-md p-4 sm:p-6 flex flex-col gap-4">
                        <h2 className="text-lg sm:text-xl text-black font-bold">Statistics</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-400 rounded-lg p-3 sm:p-4 flex flex-col items-center gap-2">
                                <span className="text-2xl sm:text-4xl text-white font-bold">{totalQuestions}</span>
                                <span className="text-sm sm:text-base text-muted-foreground">Total Questions</span>
                            </div>
                            <div className="bg-blue-400 rounded-lg p-3 sm:p-4 flex flex-col items-center gap-2">
                                <span className="text-2xl sm:text-4xl font-bold text-green-500">{correctAnswers}</span>
                                <span className="text-sm sm:text-base text-muted-foreground">Correct</span>
                            </div>
                            <div className="bg-blue-400 rounded-lg p-3 sm:p-4 flex flex-col items-center gap-2">
                                <span className={`text-2xl sm:text-4xl font-bold ${incorrectPercentage > 50 ? "text-red-500" : "text-gray-500"}`}>
                                    {incorrectAnswers}
                                </span>
                                <span className="text-sm sm:text-base text-muted-foreground">Incorrect</span>
                            </div>
                            <div className="bg-blue-400 rounded-lg p-3 sm:p-4 flex flex-col items-center gap-2">
                                <span className={`text-2xl sm:text-4xl font-bold ${skippedPercentage > 25 ? "text-yellow-500" : "text-gray-500"}`}>
                                    {skippedQuestions}
                                </span>
                                <span className="text-sm sm:text-base text-muted-foreground">Skipped</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-4 sm:p-6 flex flex-col gap-4">
                        <h2 className="text-lg sm:text-xl font-bold text-black">Progress</h2>
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-full max-w-[150px] sm:max-w-[200px] h-[150px] sm:h-[200px]">
                                <div />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-blue-400 p-3 sm:p-5 rounded-lg">
                                    <span className="text-2xl sm:text-4xl font-bold text-white">{accuracy.toFixed(2)}%</span>
                                    <span className="text-sm sm:text-base text-muted-foreground">Accuracy</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2 bg-blue-400 p-3 sm:p-5 rounded-lg">
                                <span className="text-xl sm:text-2xl font-bold text-white">{score}</span>
                                <span className="text-sm sm:text-base text-muted-foreground">Score</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-4 sm:p-6 flex flex-col gap-4">
                        <h2 className="text-lg sm:text-xl text-black font-bold">Breakdown</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-500 rounded-full w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="text-sm sm:text-base text-muted-foreground">Correct: {correctPercentage.toFixed(1)}%</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`bg-red-500 rounded-full w-3 h-3 sm:w-4 sm:h-4`} />
                                <span className="text-sm sm:text-base text-muted-foreground">Incorrect: {incorrectPercentage.toFixed(1)}%</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`bg-yellow-500 rounded-full w-3 h-3 sm:w-4 sm:h-4`} />
                                <span className="text-sm sm:text-base text-muted-foreground">Skipped: {skippedPercentage.toFixed(1)}%</span>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="flex justify-center py-6">
                    <button 
                        onClick={handleSummaryClick} 
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition"
                    >
                        {isLoading ? "Loading Summary..." : "Summary of Test"}
                    </button>
                </div>
                {summaryData && (
                    <section className="container mx-auto py-8 px-4 sm:px-6 bg-slate-800 rounded-lg lg:px-10 grid gap-8">
                        <h2 className="text-lg sm:text-xl text-center bg-blue-600 text-white p-3 rounded-lg font-bold">Detailed Test Summary</h2>
                        {summaryData.map((question, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                                <h3 className="text-md sm:text-lg text-black font-bold mb-2">{`${index+1}. ${question.questionText}`}</h3>
                                <p className="text-sm sm:text-base mb-4 text-gray-600">
                                    <strong>Topic:</strong> {question.topic} | <strong>Difficulty:</strong> {question.difficultyLevel}
                                </p>
                                <ul className="space-y-2 mb-4">
                                    {question.options.map((option) => {
                                        const isSelected = question.selectedOptions.some((selOpt) => selOpt._id === option._id);
                                        const isCorrect = question.correctOptions.some((corOpt) => corOpt._id === option._id);
                                        return (
                                            <li
                                                key={option._id}
                                                className={`text-sm sm:text-base p-2 rounded-lg ${
                                                    isCorrect ? "bg-green-100 text-green-700" :
                                                    isSelected ? "bg-red-100 text-red-700" :
                                                    "bg-gray-100 text-gray-800"
                                                }`}
                                            >
                                                {option.optionText}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="text-sm sm:text-base text-gray-600">
                                    <strong>Explanation:</strong> {question.explanation}
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </div>
        </Layout>
    );
}
