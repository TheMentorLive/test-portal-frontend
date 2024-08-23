import { Button } from "@/public/ui/button";
import Navbar from "./navbar";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useCallback } from "react";
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

  // Wrap fetchTestData with useCallback to prevent re-creation on every render
  const fetchTestData = useCallback(async () => {
    try {
      setIsLoading(true);
      console.log("Fetching test data...", test._id);
      const response = await dispatch(fetchTest(test._id)); // Adjust based on your actual action
      // Handle the response accordingly
    } catch (error) {
      console.error("Error fetching test data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, test._id]); // Include dispatch and test._id as dependencies

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
  }, [fetchTestData]); // Include fetchTestData in the dependency array

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
      <title>GenAI Learning - Test</title>
      </Head>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-7xl p-12 bg-white rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-12">
              <h1 className="mb-4 text-4xl font-bold">
                Welcome to GenAi Learning {test?.title}
              </h1>
              <div className="flex space-x-12">
                <div>
                  <p className="text-sm text-muted-foreground">Test duration</p>
                  <p className="text-base font-medium">90 mins</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">No. of questions</p>
                  <p className="text-base font-medium">{`${test?.numberOfQuestions} question(s)`}</p>
                </div>
              </div>
              <br/>
              <h2 className="mb-4 text-2xl font-semibold">Description</h2>
              <ol className="mb-8 space-y-4 text-muted-foreground">
                <li>
                  {test?.type === 'JEE'
                    ? "The JEE is a crucial exam for aspiring engineers in India, determining admission to prestigious institutes like IITs and NITs."
                    : "The NEET is a crucial exam for aspiring doctors in India, determining admission to prestigious medical colleges."
                  }
                </li>
                <li>
                  The exam rigorously tests candidates&rsquo; proficiency in Chemistry and Mathematics, ensuring a strong foundation in these subjects.
                </li>
                <li>
                  {`The test consists of ${test?.numberOfQuestions} questions, each carrying 4 marks, and a negative marking of 1 mark for each wrong answer.`}
                </li>
                <li>{test?.description}</li>
              </ol>
            </div>

            <div className="md:w-1/2 mt-20 md:pl-12 md:border-l">
              <h2 className="mb-4 text-2xl font-semibold">Instructions</h2>
              <ol className="mb-8 space-y-4 text-muted-foreground">
                <li>This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started.</li>
                <li>Please ensure you have a stable internet connection.</li>
                <li>
                  We recommend you try the{" "}
                  <a href="#">
                    sample test
                  </a>{" "}
                  for a couple of minutes before taking the main test.
                </li>
              </ol>
              <div className="flex space-x-6">
                <Button
                  onClick={handleStartTest}
                  className="bg-primary text-primary-foreground"
                  disabled={isFullScreen}
                >
                  Start Test
                </Button>
                <Link href="/dash-admin/test">
                  <Button variant="outline" className="border-primary text-primary">
                    Back
                  </Button>
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
