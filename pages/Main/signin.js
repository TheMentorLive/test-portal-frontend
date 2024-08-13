import Link from "next/link";
import { useState } from 'react';
import { toast } from "react-toastify";
import { Label } from "@/public/ui/label";
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";
import Image from 'next/image';
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://test-platform-backend.onrender.com/api/v1/users/signin";
    const data = { email, password };

    try {
      const response = await axios.post(url, data);
      console.log('Response:', response.data);
      if (response.data.statusCode === 200) {
        toast.success("Logged in successfully!");
        window.location.href = "/Main/dash";
      } else if (response.data.statusCode === 401) {
        toast.error("Invalid credentials. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      
      if (error.response && error.response.status === 404) {
        toast.error("User not registered. Please sign up first.");
      } else if (error.response && error.response.status === 401) {
        toast.error("Incorrect email or password. Please try again.");
      } else {
        toast.error("Something went wrong, try again later.");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-4 w-4">
        <Image src="/placeholder.svg" width={600} height={600} alt="Logo" />
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
            <div className="flex gap-4">
              <Button variant="outline">Sign in with Google</Button>
              <Button variant="outline">Sign in with LinkedIn</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-muted flex items-center justify-center">
        <Image src="/placeholder.svg" width={600} height={600} alt="Sign in" className="max-w-full h-auto" />
      </div>
    </div>
  );
}
