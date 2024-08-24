'use client'

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatePassword } from "@/redux/slices/authSlice"
import Head from 'next/head'
import Image from "next/image"
import { User, Lock, Eye, EyeOff } from 'lucide-react'
import Layout from "./layout/layout"
import dynamic from "next/dynamic"

 function ProfilePage() {
  const [showPasswordFields, setShowPasswordFields] = useState(false)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const dispatch = useDispatch()
  
  const user = useSelector((state) => state.auth?.data?.data?.user)

  const handleUpdatePassword = async () => {
    try {
      const response = await dispatch(updatePassword({ oldPassword, newPassword }))
      if (response) {
        setOldPassword("")
        setNewPassword("")
        setShowPasswordFields(false)
        alert("Password updated successfully!")
      }
    } catch (error) {
      console.error("Failed to update password:", error)
      alert("Failed to update password. Please try again.")
    }
  }

  return (
    <Layout>
      <Head>
        <title>Profile Settings</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32 mb-4">
              <Image
                src="/icons/user-logo.png"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-gray-200"
              />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gray-800 mb-2">
              {user?.name || "John Doe"}
            </h1>
            <p className="text-gray-600 flex items-center">
              <User size={16} className="mr-2" />
              {user?.email || "email@example.com"}
            </p>
          </div>
          <div className="w-full space-y-4">
            <button
              onClick={() => setShowPasswordFields(!showPasswordFields)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-200 ease-in-out flex items-center justify-center"
            >
              <Lock size={18} className="mr-2" />
              {showPasswordFields ? "Cancel" : "Update Password"}
            </button>

            {showPasswordFields && (
              <div className="space-y-4 bg-gray-50 p-4 rounded-md">
                <div>
                  <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Old Password
                  </label>
                  <div className="relative">
                    <input
                      type={showOldPassword ? "text" : "password"}
                      id="oldPassword"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword(!showOldPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                    >
                      {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      id="newPassword"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                    >
                      {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleUpdatePassword}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200 ease-in-out"
                >
                  Change Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(ProfilePage), { ssr: false })