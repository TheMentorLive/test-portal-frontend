import React, { useState } from "react";
import Layout from "./layout/layout";
import { useDispatch } from "react-redux";
import { updatePassword } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";
import Image from "next/image";
const ProfilePage = () => {
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.data.data);
  const handleUpdatePassword = () => {
    // Handle password update logic here
    const response = dispatch(updatePassword({ oldPassword, newPassword }));
    if(response) {
      setOldPassword("");
      setNewPassword("");
      setShowPasswordFields(false);
    }
    console.log("Password updated:", { oldPassword, newPassword });
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <Image
              src="/icons/user-logo.png" // Placeholder image
              alt="Profile"
              width={120} // Adjust width for responsiveness
          height={110} 
              className="w-24 h-24 rounded-full mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{user.email||"email@gmail.com"}</h1>
          </div>
          <div className="w-full">
            <button
              onClick={() => setShowPasswordFields(!showPasswordFields)}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mb-4"
            >
              {showPasswordFields ? "Cancel" : "Update Password"}
            </button>

            {showPasswordFields && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="oldPassword" className="block text-black mb-2">
                    Old Password
                  </label>
                  <input
                    type="password"
                    id="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-black mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  onClick={handleUpdatePassword}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
