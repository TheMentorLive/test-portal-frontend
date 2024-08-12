import Link from "next/link";
import { useState } from 'react';
import { toast } from "react-toastify";
import { Label } from "@/public/ui/label";
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";
import Image from 'next/image';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your custom sign-in logic here
    toast.success("Sign-In logic to be implemented", { position: "top-center" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-4 w-4">
      <Image src="/placeholder.svg" alt="Logo" /> 
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
