import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar"
import Link from "next/link"
import Image from 'next/image';
import { Button } from "@/public/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/public/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/public/ui/card"
import { Badge } from "@/public/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-16 px-4 bg-blue-600">
        <div   className="flex items-center">
        <Link href="/">
        <Image
        src="/logo.png" // Path to your image file
        alt="Description of image"
        width={140} // Adjust width as needed
        height={129} // Adjust height as needed
        className="mx-2"
        // Optional: add margin if needed
      />
      </Link>
        </div>
        <h1 className="text-xl font-bold text-white">Hi, Your Name</h1>
        <div className="flex items-center space-x-4">
          <BellIcon className="w-6 h-6 text-white" />
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 p-4 bg-gray-100">
          <nav className="space-y-4">
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-blue-600 bg-blue-100 rounded"
              prefetch={false}
            >
              <LogInIcon className="w-5 h-5" />
              <span>Live Tests</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <LayoutDashboardIcon className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <CalendarIcon className="w-5 h-5" />
              <span>Schedule</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <PuzzleIcon className="w-5 h-5" />
              <span>Mock Tests</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <CheckIcon className="w-5 h-5" />
              <span>Results</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <BlocksIcon className="w-5 h-5" />
              <span>Assignments</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <BlocksIcon className="w-5 h-5" />
              <span>Study Materials</span>
            </Link>
            <Link
              href="#"
              className="flex items-center p-2 space-x-2 text-gray-600 hover:bg-gray-200 rounded"
              prefetch={false}
            >
              <DicesIcon className="w-5 h-5" />
              <span>Doubts</span>
            </Link>
            <Button variant="destructive" className="w-full mt-4">
              <LogOutIcon className="w-5 h-5" />
              Log Out
            </Button>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Live Tests</h2>
            <Button>+Add Test</Button>
          </div>
          <Tabs defaultValue="testHistory" className="mt-4">
            <TabsList>
              <TabsTrigger value="scheduledTests">Scheduled Tests</TabsTrigger>
              <TabsTrigger value="testHistory">Test History</TabsTrigger>
            </TabsList>
            <TabsContent value="testHistory">
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array(9)
                  .fill()
                  .map((_, index) => (
                    <Card key={index} className="p-4">
                      <CardHeader>
                        <CardTitle className="text-lg font-bold">Physics - Mechanics</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <BoxIcon className="w-4 h-4" />
                          <span>Batch A1 - P1</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <TimerIcon className="w-4 h-4" />
                          <span>02:00 P.M</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <CalendarIcon className="w-4 h-4" />
                          <span>10 Aug 2024</span>
                        </div>
                        <Badge variant="secondary">Status: Completed</Badge>
                      </CardContent>
                      <CardFooter className="pt-4">
                        <Button variant="default" className="w-full">
                          Review
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
function BlocksIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
    </svg>
  )
}


function BoxIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function DicesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="12" height="12" x="2" y="10" rx="2" ry="2" />
      <path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" />
      <path d="M6 18h.01" />
      <path d="M10 14h.01" />
      <path d="M15 6h.01" />
      <path d="M18 9h.01" />
    </svg>
  )
}


function LayoutDashboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function LogInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function TimerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}