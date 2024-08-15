'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Link from "next/link";
import { Label } from "@/public/ui/label";
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";
import Layout from './layout';
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import { isEmail } from '@/utils/validations/emailValidator';
import { createAccount, googleSinup, linkedinSignup } from '@/redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export default function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function handleGoogleSignup(e) {
    e.preventDefault();
    const response = await dispatch(googleSinup());
    console.log(response);
    if (response.payload?.data?.status === 200) {
      toast.success(response.payload.data.message);
    }
  }

  async function handleLinkedinSignup(e) {
    e.preventDefault();
    const response = await dispatch(linkedinSignup());
    console.log(response);
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (!email || !name || !password) {
      toast.error("Please fill all the details");
      return;
    }
    if (name.length < 5) {
      toast.error("Name should be length of 5 or greater");
      return;
    }
    if (!isEmail(email)) {
      toast.error("Email is invalid");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    console.log("Form data", formData);
    const response = await dispatch(createAccount({ name, email, password }));
    console.log(response);
    setEmail('');
    setName('');
    setPassword('');
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Left side */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-md bg-card p-6 md:p-8 space-y-6">
            <Link href="/Main" className="flex items-center gap-2 mb-4" prefetch={false}>
              <svg
                className="w-5 h-5 text-primary"
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
              <span className="text-primary underline">Back</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold">Create an Account</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Already have an account?{" "}
              <Link href="/Main/signin" className="text-primary underline" prefetch={false}>
                Sign in
              </Link>
            </p>
            <form className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="py-2 px-3 md:py-3 md:px-4" // Adjust padding for responsiveness
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="py-2 px-3 md:py-3 md:px-4" // Adjust padding for responsiveness
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="py-2 px-3 md:py-3 md:px-4" // Adjust padding for responsiveness
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                onClick={handleRegister}
              >
                Sign Up
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium bg-card">
                <span className="bg-card px-2 text-gray-500">Or Sign Up with</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGoogleSignup}
                variant="outline"
                className="py-6 flex items-center justify-center gap-1"
              >
                <FcGoogle className='align-middle text-2xl' /> <span> Sign Up with Google </span>
              </Button>
              <Button
                onClick={handleLinkedinSignup}
                variant="outline"
                className="py-6 flex items-center justify-center gap-1"
              >
                <FaLinkedin className='align-middle text-2xl' /> <span> Sign Up with LinkedIn </span>
              </Button>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-muted p-4 md:p-8">
          <Image
            src="/placeholder.svg"
            width={600}
            height={600}
            alt="Sign up"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </Layout>
  );
}
