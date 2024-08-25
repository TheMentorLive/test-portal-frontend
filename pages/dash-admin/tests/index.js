import React, { useState, useEffect } from 'react';
import TestCard from '../components/TestCard';
import Layout from '../layout/layout'; // Import your existing Layout component
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTests,isElgibleForTest } from '@/redux/slices/testSlice';
import { getDetails } from '@/redux/slices/authSlice';
import Script from 'next/script';
import { useRouter } from 'next/router';

const TestsPage = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth?.data);
    const [tests, setTests] = useState([]);
    const isAdmin = useSelector((state) => {
        return state.auth?.role === 'admin';
    });
    console.log(isAdmin,"isAd");
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTests, setFilteredTests] = useState([]);
    const [filterType, setFilterType] = useState(''); // For filtering by type

    const router = useRouter();

    useEffect(() => {
        // Fetching tests data using Redux action
        if(!user) {
            dispatch(getDetails());
        }
        dispatch(fetchAllTests())
            .then((response) => {
                if (response?.payload) {
                    setTests(response.payload?.data);
                    setFilteredTests(response.payload?.data);
                } else {
                    setTests([]);
                    setFilteredTests([]);
                }
            })
            .catch((error) => {
                setTests([]);
                setFilteredTests([]);
            });
        dispatch(isElgibleForTest());
    }, [dispatch]);

    useEffect(() => {
        if (!tests || tests.length === 0) return;

        let filtered = [...tests]; // Copy tests array to avoid direct mutation

        if (searchTerm) {
            filtered = filtered.filter(test =>
                test.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (filterType) {
            filtered = filtered.filter(test => test.type === filterType);
        }

        setFilteredTests(filtered);
    }, [searchTerm, filterType, tests]);

    return (
        <Layout>
            <Head>
                <title>Quiz</title>
            </Head>
            <div className="container mx-auto p-4 md:pl-10 -mt-3 max-w-screen-xl">
                <div className="bg-white p-6 shadow-md rounded-lg mb-6">
                    <h1 className="text-2xl font-bold text-black mb-2">Available Exams</h1>
                    <p className="text-gray-600 mb-4">Find the right exam for your preparation</p>
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Search tests..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-3 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="flex gap-4 items-center">
                            <select
                                className="bg-white border border-black text-black px-4 py-2 rounded-md shadow-md"
                                onChange={(e) => setFilterType(e.target.value)}
                                value={filterType}
                            >
                                <option value="">All Types</option>
                                <option value="JEE">JEE</option>
                                <option value="NEET">NEET</option>
                            </select>
                            {isAdmin && (
                                <button 
                                onClick={() => router.push('/dash-admin/tests/createtest')}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors">
                                    Create Test
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTests?.length > 0 ? (
                        filteredTests.map(test => (
                            <TestCard key={test._id} test={test} isAdmin={isAdmin} />
                        ))
                    ) : (
                        <p>No tests available.</p> // Handle the case where no tests are available
                    )}
                </div>
            </div>
            <Script
             src="https://checkout.razorpay.com/v1/checkout.js"
             strategy="afterInteractive"
            />
        </Layout>
    );
};

export default dynamic(() => Promise.resolve(TestsPage), { ssr: false });
