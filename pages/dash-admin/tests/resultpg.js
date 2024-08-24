import React from 'react';
import { LuClipboardType } from "react-icons/lu";
import Layout from '../layout/layout';

export default function ResultsPage() {
  return (
    <Layout>
      <div className="container mx-auto p-4 md:pl-10 -mt-3 max-w-screen-xl">
        <header className="bg-white p-6 shadow-md rounded-lg mb-6">
          <div className="flex items-center gap-2 mb-4">
            <LuClipboardType className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Test Results</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">Test ID:</span>
              <span className="text-lg font-bold">ABC123</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">Status:</span>
              <span className="text-lg font-bold text-green-500">Passed</span>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <span className="text-4xl font-bold">20</span>
                <span className="text-gray-600">Total Questions</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <span className="text-4xl font-bold text-green-500">18</span>
                <span className="text-gray-600">Correct</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <span className="text-4xl font-bold text-red-500">1</span>
                <span className="text-gray-600">Incorrect</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
                <span className="text-4xl font-bold text-yellow-500">1</span>
                <span className="text-gray-600">Skipped</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Progress</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[200px] h-[200px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="text-4xl font-bold">90%</span>
                  <span className="text-gray-600">Accuracy</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl font-bold">18</span>
                <span className="text-gray-600">Score</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Breakdown</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 rounded-full w-4 h-4" />
                <span className="text-gray-600">Correct: 90%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-500 rounded-full w-4 h-4" />
                <span className="text-gray-600">Incorrect: 5%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 rounded-full w-4 h-4" />
                <span className="text-gray-600">Skipped: 5%</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
