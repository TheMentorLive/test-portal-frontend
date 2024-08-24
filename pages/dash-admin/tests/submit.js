import React from 'react';
import { Button } from '@/public/ui/button';
import Layout from '../layout/layout'; // Adjust the path if necessary
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const ThankYouPage = () => {
  const router = useRouter();

  const handleViewResults = () => {
    router.push('/dash-admin/results'); // Adjust the path as needed
  };
  return (
    <Layout>
      <main className="flex-1 flex flex-col justify-center items-center bg-gray-100 p-4 sm:p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          We appreciate you taking the time to complete the test. Your responses have been recorded, and we will evaluate them as soon as possible.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          You can view your results once they are processed by clicking the button below.
        </p>
        <Button
          variant="solid"
          className="bg-blue-500 text-white hover:bg-blue-600 border border-blue-500"
          onClick={handleViewResults}
        >
          View Results
        </Button>
      </main>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(ThankYouPage), { ssr: false });
