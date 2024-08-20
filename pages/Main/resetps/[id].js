import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { Label } from "@/public/ui/label";
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";
import Layout from "../layout";
import { resetPassword } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function ResetPass() {
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter(); // Fixed variable name

  const { id } = router.query;

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeConformPassword = (e) => {
    setConformPassword(e.target.value);
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      toast.error("Password and confirm password do not match");
      return;
    }
    const resetPasswordToken = id;
    console.log("password and token", password, resetPasswordToken);
    const response = await dispatch(resetPassword({ password, resetPasswordToken }));
    if (response) {
      setPassword("");
      setConformPassword("");
      router.push("/Main/signin");
    } else {
      setPassword("");
      setConformPassword("");
    }
  }

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
            <h1 className="text-3xl font-bold">Create New Password</h1>
            <form className="space-y-4" noValidate>
              <div className="space-y-2">
                <Label htmlFor="Password">New Password</Label>
                <Input
                  id="Password"
                  type="password"
                  onChange={onChangePassword}
                  placeholder="Enter New Password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ConfirmPassword">Confirm New Password</Label>
                <Input
                  id="ConfirmPassword"
                  type="password"
                  onChange={onChangeConformPassword}
                  placeholder="Confirm New Password"
                  required
                />
              </div>
              <Button 
                onClick={handleResetPassword}
                type="submit" 
                className="w-full">
                Reset Password
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
