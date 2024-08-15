// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/ss0gX5e1pud
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/public/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/public/ui/dropdown-menu"
// import { Avatar, AvatarImage, AvatarFallback } from "@/public/ui/avatar"
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/public/ui/tabs"
// import { Card, CardContent } from "@/public/ui/card"
// import { Badge } from "@/public/ui/badge"

// export default function dash() {
//   const [activeTab, setActiveTab] = useState("scheduled")
//   return (
//     <div className="flex flex-col h-screen">
//       <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between shadow-md">
//         <div className="flex items-center gap-4">
//           <Link href="#" className="flex items-center gap-2" prefetch={false}>
//             <BookIcon className="w-6 h-6" />
//             <span className="font-bold text-lg">Gen AI Learning</span>
//           </Link>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="hidden md:block">
//             <span className="font-medium">Hi, Your Name</span>
//           </div>
//           <Button variant="ghost" size="icon" className="rounded-full">
//             <BellIcon className="w-5 h-5" />
//             <span className="sr-only">Notifications</span>
//           </Button>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button  variant="ghost" size="icon" className="rounded-full">
//                 <Avatar className="w-8 h-8">
//                   <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
//                   <AvatarFallback>YN</AvatarFallback>
//                 </Avatar>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>My Account</DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <Link href="/dash-user/profile">
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               </Link>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Log Out</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <div className="flex flex-1">
//         <aside className="bg-background border-r hidden md:flex flex-col gap-4 py-6 px-4">
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "live" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <RocketIcon className="w-5 h-5" />
//             <span>Live Tests</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "dashboard" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <LayoutGridIcon className="w-5 h-5" />
//             <span>Dashboard</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "schedule" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <CalendarIcon className="w-5 h-5" />
//             <span>Schedule</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "mock" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <ClipboardIcon className="w-5 h-5" />
//             <span>Mock Tests</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "results" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <TrophyIcon className="w-5 h-5" />
//             <span>Results</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "assignments" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <FileTextIcon className="w-5 h-5" />
//             <span>Assignments</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "materials" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <BookOpenIcon className="w-5 h-5" />
//             <span>Study Materials</span>
//           </Link>
//           <Link
//             href="#"
//             className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
//               activeTab === "doubts" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
//             }`}
//             prefetch={false}
//           >
//             <MessageCircleIcon className="w-5 h-5" />
//             <span>Doubts</span>
//           </Link>
//           <div className="mt-auto">
//             <Link href={"/"}>
//             <Button variant="ghost" className="w-full justify-start gap-2 px-4 py-2">
//               <LogOutIcon className="w-5 h-5" />
//               <span>Log Out</span>
//             </Button></Link>
//           </div>
//         </aside>
//         <main className="flex-1 bg-background p-6">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold">Live Tests</h2>
//           </div>
//           <Tabs defaultValue="scheduled" value={activeTab} onValueChange={setActiveTab} className="w-full">
//             <TabsList className="mb-4">
//               <TabsTrigger value="scheduled">Scheduled Tests</TabsTrigger>
//               <TabsTrigger value="history">Test History</TabsTrigger>
//             </TabsList>
//             <TabsContent value="scheduled">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Aptitude Test</div>
//                       <Badge variant="outline">Scheduled</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch A</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       10:00 AM - 12:00 PM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 15, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Logical Reasoning</div>
//                       <Badge variant="outline">Scheduled</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch B</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       2:00 PM - 4:00 PM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 20, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Verbal Ability</div>
//                       <Badge variant="outline">Scheduled</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch C</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       9:00 AM - 11:00 AM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 25, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Quantitative Aptitude</div>
//                       <Badge variant="outline">Scheduled</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch D</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       11:00 AM - 1:00 PM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       July 1, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>
//             <TabsContent value="history">
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Aptitude Test</div>
//                       <Badge variant="outline">Completed</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch A</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       10:00 AM - 12:00 PM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 1, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Logical Reasoning</div>
//                       <Badge variant="outline">Completed</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch B</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       2:00 PM - 4:00 PM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 10, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Verbal Ability</div>
//                       <Badge variant="outline">Completed</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch C</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       9:00 AM - 11:00 AM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 15, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//                 <Card>
//                   <CardContent className="p-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="text-sm font-medium">Quantitative Aptitude</div>
//                       <Badge variant="outline">Completed</Badge>
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">Batch D</div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <ClockIcon className="w-4 h-4 inline-block mr-1" />
//                       11:00 AM - 1:00 PM
//                     </div>
//                     <div className="text-sm text-muted-foreground mb-2">
//                       <CalendarIcon className="w-4 h-4 inline-block mr-1" />
//                       June 20, 2023
//                     </div>
//                     <Button variant="link" className="mt-2">
//                       Review
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>
//           </Tabs>
//         </main>
//       </div>
//     </div>
//   )
// }

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   )
// }


// function BookIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//     </svg>
//   )
// }


// function BookOpenIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
//       <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
//     </svg>
//   )
// }


// function CalendarIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M8 2v4" />
//       <path d="M16 2v4" />
//       <rect width="18" height="18" x="3" y="4" rx="2" />
//       <path d="M3 10h18" />
//     </svg>
//   )
// }


// function ClipboardIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
//       <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
//     </svg>
//   )
// }


// function ClockIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   )
// }


// function FileTextIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//       <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//       <path d="M10 9H8" />
//       <path d="M16 13H8" />
//       <path d="M16 17H8" />
//     </svg>
//   )
// }


// function LayoutGridIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="7" height="7" x="3" y="3" rx="1" />
//       <rect width="7" height="7" x="14" y="3" rx="1" />
//       <rect width="7" height="7" x="14" y="14" rx="1" />
//       <rect width="7" height="7" x="3" y="14" rx="1" />
//     </svg>
//   )
// }


// function LogOutIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
//       <polyline points="16 17 21 12 16 7" />
//       <line x1="21" x2="9" y1="12" y2="12" />
//     </svg>
//   )
// }


// function MessageCircleIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
//     </svg>
//   )
// }


// function RocketIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
//       <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
//       <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
//       <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
//     </svg>
//   )
// }


// function TrophyIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
//       <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
//       <path d="M4 22h16" />
//       <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
//       <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
//       <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
//     </svg>
//   )
// }