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
  

  return (
    <Layout>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left side */}
        <div className="flex-1 flex items-center justify-center p-4 -mt-10 md:p-8">
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
            <h1 className="text-3xl font-bold">Create New password</h1>
            <br/>
            <br/>
            
            <form className="space-y-4" >
              <div className="space-y-2">
                <Label htmlFor="Password">New Password</Label>
                <Input
                  id="Password"
                  type="Password"
                  placeholder="Enter New Password"
                  required
                 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="Password">Confrim New Password</Label>
                <Input
                  id="Password"
                  type="Password"
                  placeholder="Enter Confrim Password"
                  required
                  
                />
              </div>

              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
            
            
          </div>
        </div>
        {/* Right side */}
        
      </div>
    </Layout>
  );
}
