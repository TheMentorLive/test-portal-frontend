// pages/auth-failed.js
import React from 'react';
import Layout from '../Main/layout';

const AuthFailed = () => {
  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">Authentication Failed</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">Please log in again.</p>
        <a href="/login">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 text-sm sm:text-base md:text-lg">
            Login Again
          </button>
        </a>
      </div>
    </div>
    </Layout>
  );
};

export default AuthFailed;