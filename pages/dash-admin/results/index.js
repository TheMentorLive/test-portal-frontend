'use client'

import { useEffect, useState } from 'react'
import Layout from '../layout/layout'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import { getSubmissions } from '@/redux/slices/resultSlice'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'


function TestCard({ testName, submissionId, onViewResult }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between h-full">
      <div className="p-4">
        <div className="relative w-full h-40 mb-4">
          <Image
            src="/icons/test-result.png"
            alt={testName}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">{testName}</h3>
      </div>
      <div className="p-4 pt-0">
        <button
          onClick={() => onViewResult(submissionId)}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          View Results
        </button>
      </div>
    </div>
  )
}

 function Results() {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(getSubmissions())
      .then((response) => {
        setSubmissions(response.payload)
        setLoading(false)
      })
  }, [dispatch])

  const handleViewResult = (submissionId) => {
    router.push(`/dash-admin/results/${submissionId}`)
  }

  return (
    <Layout>
      <Head>
        <title>Results</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Results Announcement</h1>
            <p className="mt-4 text-xl text-center text-blue-100">Check your latest test results below</p>
          </div>
        </div>
        
        <main className="flex-grow px-4 py-12 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
            </div>
          ) : (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {submissions?.map(({ testName, submissionId }) => (
                  <TestCard
                    key={submissionId}
                    testName={testName}
                    submissionId={submissionId}
                    onViewResult={handleViewResult}
                  />
                ))}
              </div>
              {submissions?.length === 0 && (
                <p className="text-center text-gray-500 mt-8">No results available at the moment.</p>
              )}
            </div>
          )}
        </main>
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Results), { ssr: false });