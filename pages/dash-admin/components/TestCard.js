import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa'; // Importing delete icon from react-icons
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getRazorPayId, purchaseTest, verifyUserPayment } from '@/redux/slices/paymentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTest } from '@/redux/slices/testSlice';

const TestCard = ({ test = {}, isAdmin = false }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const razorpay_key = useSelector((state) => state?.payment?.key);
    const { allowedTests } = useSelector((state) => state?.test);
    const [orderResponse, setOrderResponse] = useState(null); // Initializing with null
    const handlePayment = async (test) => {
        try {
            // Dispatching the purchaseTest action to get the order response
            const response = await dispatch(purchaseTest({ amount: test?.price }));
            const orderData = response?.payload?.data;

            if (!orderData) {
                throw new Error("Failed to get order response");
            }

            setOrderResponse(orderData);

            // Creating the Razorpay payment options after orderResponse is set
            const paymentDetails = {
                razorpay_order_id: '',
                razorpay_payment_id: '',
                razorpay_signature: '',
            };

            var options = {
                key: razorpay_key, // Enter the Key ID generated from the Dashboard
                amount: orderData?.amount || 0, // Ensuring the amount is correctly populated
                currency: "INR",
                name: "The Mentor Pvt Ltd", // Your business name
                description: "Test Transaction",
                image: "https://media.licdn.com/dms/image/v2/C4E0BAQHekeqCPnvCcQ/company-logo_200_200/company-logo_200_200/0/1630635152075/thementorlive_logo?e=1732752000&v=beta&t=-WRiuUdSQyqM_grePkOivEMrzB4_gzHBhaPN9WHpw5w",
                order_id: orderData?.id, // Ensuring order ID is present
                callback_url: "https://test-platform-backend.onrender.com/api/v1/payment/verify",
                notes: {
                    "address": "Bangalore, Karnataka" // You can add as many custom notes as you like
                },
                theme: {
                    "color": "#83f28f"
                },
                handler: async (response) => {
                    paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                    paymentDetails.razorpay_order_id = response.razorpay_order_id;
                    paymentDetails.razorpay_signature = response.razorpay_signature;
                    const res = await dispatch(verifyUserPayment({ ...paymentDetails, testId: test._id }));
                    res?.payload?.success ? window.location.reload() : router.push('/checkout/failure');
                }
            };

            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Payment failed:", error);
            // Handle any errors, like showing a notification or message to the user
        }
    };

    useEffect(() => {
        // Dispatching actions to check eligibility and get Razorpay key on component mount
        dispatch(getRazorPayId());
    }, [dispatch]);

    const handleEnterIntoTest = (test) => {
        // Redirect to test page with the test object passed as query parameters
        router.push({
            pathname: '/dash-admin/tests/srtpg',
            query: { ...test }
        });
    };

    function isEligible() {
        return allowedTests?.some((allowedTest) => allowedTest.testId === test._id);
    }

    const handleDelete = async(id) => {
        const continueDelete = confirm("Are you sure you want to delete this test?");
        if (!continueDelete) return;
        await dispatch(deleteTest(id));
        // Handle delete logic here
        window.location.reload();
    }

    return (
        <div className="bg-white border border-blue-300 shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="relative h-48 overflow-hidden p-4">
                <Image
                    src='/icons/test.png' // Ensure this path is correct
                    alt={test.type || "Test Image"} // Providing a fallback alt text
                    width={400} // Adjust width for responsiveness
                    height={400} // Adjust height for responsiveness
                    className="w-full h-full object-cover rounded-lg"
                    priority // Added rounded-lg for rounded corners
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
                    <button 
                    onClick={() => handleDelete(test._id)}
                    className="bg-red-600 text-white flex items-center justify-center px-4 py-2 rounded-md mt-4 hover:bg-red-700 transition-colors w-full">
                        <FaTrash className="mr-2" /> {/* Using react-icons for delete symbol */}
                        Delete
                    </button>
                ) : (
                    <>
                        {(test.isPaid && !isEligible() ) && (
                            <button
                                onClick={() => handlePayment(test)}
                                className="bg-green-600 text-white w-full px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition-colors">
                                {`Pay ₹${test.price}`}
                            </button>
                        )}
                        {(!isAdmin&&(isEligible()||!test.isPaid))&&(<button
                            onClick={() => handleEnterIntoTest(test)}
                            className={`bg-blue-600 text-white w-full px-4 py-2 rounded-md hover:bg-blue-700 transition-colors ${test.isPaid ? 'mt-2' : 'mt-4'}`}>
                            Enter Test
                        </button>)}
                    </>
                )}
            </div>
        </div>
    );
};

export default TestCard;
