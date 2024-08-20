import { Button } from "@/public/ui/button";
import Navbar from "./navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTest } from "@/redux/slices/testSlice";
import Loading from "../components/Loader"; // Ensure you have this component
import dynamic from "next/dynamic";

function Srtpg() {
  const router = useRouter();
  const { query } = router;
  const test = { ...query };
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [testData, setTestData] = useState(null);

  const dispatch = useDispatch();

  const fetchTestData = async () => {
    try {
      setIsLoading(true);
      console.log("Fetching test data...",test._id);
      const response = await dispatch(fetchTest(test._id)); // Adjust based on your actual action
       // Adjust according to your actions response structure
    } catch (error) {
      console.error("Error fetching test data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleStartTest = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
        .then(() => {
          setIsFullScreen(true);
          fetchTestData().then(() => {
            // Navigate to the test page after fetching data
            router.push('/dash-admin/test/mainpg');
          });
        })
        .catch((err) => {
          console.error("Error attempting to enable full-screen mode:", err);
        });
    } else {
      console.warn("Fullscreen API is not supported by this browser.");
    }
  };

  useEffect(() => {
    fetchTestData();
}, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-6">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                {`Welcome to GenAi Learning ${test?.title}`}
              </h1>
              <div className="flex flex-col md:flex-row mb-6 text-gray-700">
                <div className="mb-4 md:mb-0 md:mr-8">
                  <p className="text-sm">Test Duration</p>
                  <p className="text-lg font-semibold">90 mins</p>
                </div>
                <div>
                  <p className="text-sm">No. of Questions</p>
                  <p className="text-lg font-semibold">{`${test?.numberOfQuestions} question(s)`}</p>
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Description</h2>
              <ol className="list-decimal list-inside mb-6 text-gray-600 space-y-3">
                <li>
                  {test?.type === 'JEE'
                    ? "The JEE is a crucial exam for aspiring engineers in India, determining admission to prestigious institutes like IITs and NITs."
                    : "The NEET is a crucial exam for aspiring doctors in India, determining admission to prestigious medical colleges."
                  }
                </li>
                <li>
                  The exam rigorously tests candidates proficiency in Chemistry and Mathematics, ensuring a strong foundation in these subjects.
                </li>
                <li>
                  {`The test consists of ${test?.numberOfQuestions} questions, each carrying 4 marks, and a negative marking of 1 mark for each wrong answer.`}
                </li>
                <li>
                  {test?.description}
                </li>
              </ol>
            </div>

            <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Instructions</h2>
              <ol className="list-decimal list-inside mb-6 text-gray-600 space-y-3">
                <li>This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started.</li>
                <li>Please ensure you have a stable internet connection.</li>
                <li>We recommend you try the <a href="#" className="text-blue-500 underline">sample test</a> for a couple of minutes before taking the main test.</li>
              </ol>
              <div className="flex flex-col md:flex-row md:space-x-6">
                <Button
                  onClick={handleStartTest}
                  className="bg-blue-600 text-white mb-4 md:mb-0"
                  disabled={isFullScreen}
                >
                  Start Test
                </Button>
                <Link href="/dash-admin/test">
                  <Button className="bg-gray-600 text-white">Back</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(Srtpg), { ssr: false });
