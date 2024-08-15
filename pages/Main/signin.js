'use client';

import Link from "next/link";
import { useState } from 'react';
import { toast } from "react-toastify";
import { Label } from "@/public/ui/label";
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";
import Image from 'next/image';
import Layout from "./layout";
import { login } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { googleSinup } from "@/redux/slices/authSlice";
import { linkedinSignup } from "@/redux/slices/authSlice";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

export default function Signin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlegoogleLogin = async () => {
    const response = await dispatch(googleSinup());
  }

  const handleLinkedInLogin = async () => {
    const response = await dispatch(linkedinSignup());
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the details");
      return;
    }
    const response = await dispatch(login({ email, password }));
    console.log(response);
    setEmail("");
    setPassword("");
    if (response.payload?.data?.statusCode === 200) {
      router.push("/Main/dash");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-100">
          <div className="max-w-md w-full bg-card p-8 space-y-6">
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
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/Main/signup" className="text-primary underline" prefetch={false}>
                Create one
              </Link>
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium bg-card">
                <span className="bg-card px-2 text-gray-500">Or Sign In with</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {handlegoogleLogin()}}
                variant="outline"
                className="py-6 flex items-center justify-center gap-1"
              >
                <FcGoogle className='align-middle text-2xl' /> <span> Sign in with Google </span>
              </Button>
              <Button
                onClick={() => {handleLinkedInLogin()}}
                variant="outline"
                className="py-6 flex items-center justify-center gap-1"
              >
                <FaLinkedin className='align-middle text-2xl' /> <span> Sign in with LinkedIn </span>
              </Button>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-muted">
          <Image
            src="/placeholder.svg"
            width={600}
            height={600}
            alt="Sign in"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </Layout>
  );
}
