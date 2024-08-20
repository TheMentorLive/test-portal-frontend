import React from 'react';
import { Button } from '@/public/ui/button';
import Navbar from './navbar';
import Layout from '../layout/layout'
import { useRouter } from 'next/router';

const ThankYouPage = () => {
  const router = useRouter();

  const handleViewResults = () => {
    router.push('/results'); // Adjust the path as needed
  };

  return (
    <Layout>
    <div className="flex flex-col min-h-screen w-auto bg-white text-black">
      <main className="flex-1 flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6">We appreciate you taking the time to complete the test. Your responses have been recorded, and we will evaluate them as soon as possible.</p>
        <p className="text-lg mb-8">You can view your results once they are processed by clicking the button below.</p>
        <Button
          variant="solid"
          className="bg-blue-500 text-white hover:bg-blue-600 border border-blue-500"
          onClick={handleViewResults}
        >
          View Results
        </Button>
      </main>
    </div>
    </Layout>
  );
};

export default ThankYouPage;
