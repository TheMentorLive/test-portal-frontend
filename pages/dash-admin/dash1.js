/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GoE0rAkoz7z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/public/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/public/ui/dropdown-menu"
import { Button } from "@/public/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/public/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/public/ui/chart"
import { BarChart, CartesianGrid, XAxis, Bar, PieChart, Pie, LineChart, Line } from "recharts"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/public/ui/table"

export default function Component() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      createdAt: "2023-04-01",
      updatedAt: "2023-06-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      createdAt: "2023-02-15",
      updatedAt: "2023-05-30",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      createdAt: "2023-01-01",
      updatedAt: "2023-07-01",
    },
  ])
  const [tests, setTests] = useState([
    {
      id: 1,
      name: "Test 1",
      description: "This is the first test",
      createdAt: "2023-06-01",
    },
    {
      id: 2,
      name: "Test 2",
      description: "This is the second test",
      createdAt: "2023-05-15",
    },
    {
      id: 3,
      name: "Test 3",
      description: "This is the third test",
      createdAt: "2023-04-30",
    },
  ])
  const [revenue, setRevenue] = useState([
    { month: "January", sales: 5000 },
    { month: "February", sales: 6000 },
    { month: "March", sales: 7500 },
    { month: "April", sales: 8000 },
    { month: "May", sales: 6500 },
    { month: "June", sales: 7000 },
  ])
  const [searchTerm, setSearchTerm] = useState("")
  const handleUserDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId))
  }
  const handleTestDelete = (testId) => {
    setTests(tests.filter((test) => test.id !== testId))
  }
  const handleCreateTest = () => {}
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const filteredTests = tests.filter((test) => test.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        
        <div className="relative flex-1 max-w-[550px] mt-7">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users and tests..."
            className="pl-8 w-full rounded-lg bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
      </header>
      <div className="flex flex-col md:flex-row gap-4 p-4 sm:p-6 md:p-8">
        <div className="flex-1 grid gap-4">
          <Card className="relative z-10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ revenue: { label: "Revenue", color: "hsl(var(--chart-1))" } }}
                className="min-h-[200px]"
              >
                <BarChart accessibilityLayer data={revenue} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
                  <Bar dataKey="sales" type="natural" fill='rgb(59, 130, 246)' strokeWidth={2} radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="relative z-10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Users & Tests</CardTitle>
              <PieChartIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  users: { label: "Users", color: "hsl(var(--chart-2))" },
                  tests: { label: "Tests", color: "hsl(var(--chart-3))" },
                }}
                className="min-h-[200px]"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    data={[
                      { type: "Users", value: filteredUsers.length, fill: "var(--color-users)" },
                      { type: "Tests", value: filteredTests.length, fill: "var(--color-tests)" },
                    ]}
                    dataKey="value"
                    nameKey="type"
                    label
                  />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1 grid gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <UsersIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{ users: { label: "Users", color: "hsl(var(--chart-2))" } }}
                className="min-h-[200px]"
              >
                <LineChart
                  accessibilityLayer
                  data={[
                    { month: "January", users: filteredUsers.length },
                    { month: "February", users: filteredUsers.length },
                    { month: "March", users: filteredUsers.length },
                    { month: "April", users: filteredUsers.length },
                    { month: "May", users: filteredUsers.length },
                    { month: "June", users: filteredUsers.length },
                  ]}
                  margin={{ left: 12, right: 12 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" hideLabel />} />
                  <Line
                    dataKey="users"
                    type="natural"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth={2}
                    dot={{ r: 4, fillOpacity: 1 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <Card className="relative z-10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tests</CardTitle>
              
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{filteredTests.length}</div>
              <p className="text-xs text-muted-foreground">Total tests on the platform</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="grid gap-4">
          <Card className="relative z-10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Test Management</CardTitle>
              <Button onClick={handleCreateTest} size="icon" className="w-24 bg-blue-400" variant="outline">
                <PlusIcon className="h-4 w-4" />
                <span>Craete</span>
                </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTests.map((test) => (
                    <TableRow key={test.id}>
                      <TableCell className="font-medium">{test.name}</TableCell>
                      <TableCell>{test.description}</TableCell>
                      <TableCell>{test.createdAt}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost" onClick={() => handleTestDelete(test.id)}>
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete {test.name}</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="relative z-10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.createdAt}</TableCell>
                      <TableCell>{user.updatedAt}</TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost" onClick={() => handleUserDelete(user.id)}>
                          <TrashIcon className="h-4 w-4" />
                          <span className="sr-only">Delete {user.name}</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}



function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}




function PieChartIcon(props) {
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}