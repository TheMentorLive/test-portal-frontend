'use client'

import { useState, useEffect } from 'react'
import { XCircle, AlertTriangle, ArrowLeft, HelpCircle } from 'lucide-react'
import Link from 'next/link'

export default function PaymentFailure() {
  const [countdown, setCountdown] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col items-center mb-8">
            <XCircle className="w-16 h-16 text-blue-500 mb-4" aria-hidden="true" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Payment Failed</h1>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-600 text-center">
              We're sorry, but we couldn't process your payment at this time.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-blue-500 mr-2" aria-hidden="true" />
                <h2 className="text-sm font-semibold text-blue-800">What might have gone wrong?</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                <li>Insufficient funds in your account</li>
                <li>Incorrect payment information</li>
                <li>Temporary issue with your payment provider</li>
                <li>Transaction flagged for security reasons</li>
              </ul>
            </div>
            
            <p className="text-sm text-gray-500 text-center">
              You will be redirected to the quizzes page in {countdown} seconds.
            </p>
          </div>
          
          <div className="mt-8 space-y-4">
            <button
              onClick={() => window.history.back()}
              className="w-full bg-white text-blue-600 border border-blue-300 hover:bg-blue-50 font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Try Payment Again
            </button>
            
            <Link href="/dash-admin/tests" className="block w-full">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">
                Go to Quizzes
              </button>
            </Link>
          </div>
          
          <div className="mt-6 text-center">
            <Link href="/support" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800">
              <HelpCircle className="w-4 h-4 mr-1" aria-hidden="true" />
              Need help? Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}