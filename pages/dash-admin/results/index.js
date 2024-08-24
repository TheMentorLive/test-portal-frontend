import { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { getSubmissions } from '@/redux/slices/resultSlice';
import { useRouter } from 'next/router';
import Image from 'next/image';

function TestCard({ testName, submissionId, onViewResult }) {
  return (
    <div className="bg-white rounded-t-sm p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-between w-full sm:w-64 md:w-72 h-auto mx-auto">
      <Image
        src="/icons/test-result.png"
        alt={testName}
        width={256}
        height={128}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-black text-center mb-4">{testName}</h3>
      <button
        onClick={() => onViewResult(submissionId)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full"
      >
        View Results
      </button>
    </div>
  );
}

export default function Results() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getSubmissions())
      .then((response) => {
        setSubmissions(response.payload);
        setLoading(false);
      });
  }, [dispatch]); // Include dispatch in the dependency array

  const handleViewResult = (submissionId) => {
    router.push(`/dash-admin/results/${submissionId}`);
    console.log(`Fetching results for submission ID: ${submissionId}`);
    // Trigger the fetch request here with the submissionId
  };

  return (
    <Layout>
      <Head>
        <title>Results</title>
      </Head>
      <div className="bg-blue-500 rounded-t-sm text-white flex ml-14 flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Results Announcement</h1>
        <p className="mt-2 text-lg sm:text-xl">Check your latest test results below</p>
      </div>
      {loading ? (
        <div className="flex min-h-[600px] ml-14 flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <LoaderIcon className="mx-auto h-12 w-12 animate-spin text-primary" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Results</h1>
            <p className="mt-4 text-muted-foreground">Loading</p>
          </div>
        </div>
      ) : (
        <div className="min-h-[600px] ml-14 flex flex-col items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {submissions?.map(({ testName, submissionId }) => (
              <TestCard
                key={submissionId}
                testName={testName}
                submissionId={submissionId}
                onViewResult={handleViewResult}
              />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}

function LoaderIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  );
}
