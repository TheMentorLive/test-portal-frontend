// components/Sidebar.js

import React, { useState } from 'react';
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar";
import { Button } from "@/public/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from "@/public/ui/dropdown-menu";
import { FileTextIcon, PackageIcon, UsersIcon, BookIcon, LineChartIcon, MountainIcon } from '@/public/icons/icons';

export default function Sidebar({ activeTab, setActiveTab }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative lg:flex lg:w-64 lg:flex-col">
      {/* Sidebar */}
      <div className={`fixed inset-0 top-0 left-0 z-40 flex flex-col border-r bg-gray-100 dark:border-gray-800 dark:bg-white lg:relative lg:block lg:w-64 ${isSidebarOpen ? "block" : "hidden"}`}>
        <header className="flex h-16 items-center justify-between border-b px-6 dark:bg-gray-400">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg">Admin</span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <nav className="flex-1 overflow-auto py-4">
          <ul className="grid gap-1 px-4">
            {["Dashboard", "Quiz", "users", "Question Bank", "analytics"].map(tab => (
              <li key={tab}>
                <Button
                  variant={activeTab === tab ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-2 rounded-md px-3 py-2 text-sm font-medium ${activeTab === tab ? "bg-gray-200 dark:bg-gray-600 text-blue-500" : "text-gray-500"}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "Dashboard" && <FileTextIcon className={`h-4 w-4 ${activeTab === tab ? "text-blue-500" : "text-gray-500"}`} />}
                  {tab === "Quiz" && <PackageIcon className={`h-4 w-4 ${activeTab === tab ? "text-blue-500" : "text-gray-500"}`} />}
                  {tab === "users" && <UsersIcon className={`h-4 w-4 ${activeTab === tab ? "text-blue-500" : "text-gray-500"}`} />}
                  {tab === "Question Bank" && <BookIcon className={`h-4 w-4 ${activeTab === tab ? "text-blue-500" : "text-gray-500"}`} />}
                  {tab === "analytics" && <LineChartIcon className={`h-4 w-4 ${activeTab === tab ? "text-blue-500" : "text-gray-500"}`} />}
                  {tab}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Open/Close Button for Small Screens */}
      <button
        className="fixed top-4 left-4 z-50 block lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
        onClick={() => setIsSidebarOpen(prev => !prev)}
      >
        {isSidebarOpen ? "Close" : "Open"}
      </button>
    </div>
  );
}
