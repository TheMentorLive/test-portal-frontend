import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Importing delete icon from react-icons
import { useRouter } from 'next/router';
import Image from 'next/image';

const TestCard = ({ test = {}, isAdmin = false }) => {
    const router = useRouter();

    const handleEnterIntoTest = (test) => {
        // Redirect to test page with the test object passed as query parameters
        router.push({
            pathname: '/dash-admin/test/srtpg',
            query: { ...test }
        });
    };

    return (
        <div className="bg-white border border-blue-300 shadow-md rounded-lg overflow-hidden">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src='/icons/test.png' // Ensure this path is correct
                    alt={test.type || "Test Image"} // Providing a fallback alt text
                    width={120} // Adjust width for responsiveness
                    height={110} // Adjust height for responsiveness
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-black">{test.title || "Test Title"}</h2>
                <p className="text-gray-700 mb-2">{test.description || "Test Description"}</p>
                
                <div className="flex flex-col justify-center gap-1 mt-4">
                    <span className="bg-gray-50 rounded-sm text-gray-800 px-2 py-1">
                        Type: {test.type || "N/A"}
                    </span>
                    <span className="bg-gray-50 rounded-sm text-gray-800 px-2 py-1">
                        Duration: {test.duration || "N/A"}
                    </span>
                </div>

                {/* Conditional rendering of buttons */}
                {isAdmin ? (
                    <button className="bg-red-600 text-white flex items-center justify-center px-4 py-2 rounded-md mt-4 hover:bg-red-700 transition-colors w-full">
                        <FaTrash className="mr-2" /> {/* Using react-icons for delete symbol */}
                        Delete
                    </button>
                ) : (
                    <>
                        {test.isPaid && (
                            <button className="bg-green-600 text-white w-full px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition-colors">
                                Pay
                            </button>
                        )}
                        <button 
                            onClick={() => handleEnterIntoTest(test)}
                            className={`bg-blue-600 text-white w-full px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${test.isPaid ? 'mt-2' : 'mt-4'}`}>
                            Enter Test
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TestCard;
