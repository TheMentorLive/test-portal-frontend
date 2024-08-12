'use client'


import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import Link from "next/link";
import { Label } from "@/public/ui/label";
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your custom registration logic here
    toast.success('Registration logic to be implemented', { position: 'top-center' });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
       <div className="h-4 w-4">
       <Image src="/placeholder.svg"  alt="Logo" /> 
      </div>
      <div className="w-full md:w-1/2 bg-card p-8 space-y-6 flex items-center justify-center">
        <div className="space-y-2 text-left">
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
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link href="/Main/signin" className="text-primary underline" prefetch={false}>
              Sign in
            </Link>
          </p>
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
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
              />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
            <div className="flex gap-4">
              <Button variant="outline">Sign up with Google</Button>
              <Button variant="outline">Sign up with LinkedIn</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-muted flex items-center justify-center">
        <Image
          src="/placeholder.svg"
          width={600}
          height={600}
          alt="Sign up"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
