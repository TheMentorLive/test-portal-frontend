import Link from "next/link";
import Layout from "./layout";
import { useDispatch } from "react-redux";
import { forgotPassword } from "@/redux/slices/authSlice";
import { useState } from "react";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const response = await dispatch(forgotPassword({ email }));
    if (response) {
      setEmail(""); // Clear email input after successful dispatch
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <Link href="/Main" className="flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-700 transition-all" prefetch={false}>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span className="underline">Back</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Forgot Password</h1>
            <p className="text-sm text-gray-600 mt-2 mb-8">
              Enter your email address and we&apos;ll send you a link to reset your password.
            </p>

            <form className="space-y-6" onSubmit={handleResetPassword}>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={onChangeEmail}
                  required
                  value={email}
                  className="w-full p-3 border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500 rounded-lg"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg mt-4 hover:bg-blue-700 transition-all"
              >
                Reset Password
              </button>
            </form>

            <div className="text-center mt-8">
              <span className="text-sm text-gray-600">Remember your password?</span>
              <Link href="/Main/login" className="text-sm text-blue-600 hover:text-blue-700 underline ml-1">
                Log in
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right side - full screen image */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <img
            src="/icons/forgotpass.jpg"
            alt="Forgot Password Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Layout>
  );
}
