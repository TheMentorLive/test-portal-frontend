// pages/tests.js
import React, { useState, useEffect } from 'react';
import TestCard from './components/TestCard';
import Layout from './layout/layout'; // Import your existing Layout component
import dynamic from 'next/dynamic';

const TestsPage = () => {
    const [tests, setTests] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false); // Simulating admin user
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTests, setFilteredTests] = useState([]);
    const [filterType, setFilterType] = useState(''); // For filtering by type

    useEffect(() => {
        // Mock fetching tests data
        const mockResponse = {
            statusCode: 200,
            data: [
                {
                    _id: "66c1d48f4b2347f45c964afd",
                    title: "Sample Test 1",
                    type: "JEE",
                    description: "This is a sample test for JEE preparation.",
                    duration: "40 minutes",
                    createdBy: "66bed0fb23b291f43cd1d0d3",
                    createdAt: "2024-08-18T11:01:35.810Z",
                    updatedAt: "2024-08-18T11:01:35.810Z",
                    numberOfQuestions:10
                },
                {
                    _id: "66c1d5e6ad5b420b4be56e7e",
                    title: "Sample Test 2",
                    type: "NEET",
                    description: "This is a sample test for NEET preparation.",
                    duration: "40 minutes",
                    createdBy: "66bed0fb23b291f43cd1d0d3",
                    createdAt: "2024-08-18T11:07:18.777Z",
                    updatedAt: "2024-08-18T11:07:18.777Z",
                    numberOfQuestions:8
                }
            ],
            message: "Tests Fetched Successfully",
            success: true
        };

        // Simulate API call delay
        setTimeout(() => {
            setTests(mockResponse.data);
            setFilteredTests(mockResponse.data);
        }, 1000);

        // Set user role
        setIsAdmin(false); // Example: admin user
    }, []);

    useEffect(() => {
        let filtered = tests;

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
            <div className="container mx-auto p-4 md:pl-10 max-w-screen-xl"> {/* Centered container with max width */}
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
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors">
                                    Create Test
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredTests.map(test => (
                        <TestCard key={test._id} test={test} isAdmin={isAdmin} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default dynamic(() => Promise.resolve(TestsPage), { ssr: false });