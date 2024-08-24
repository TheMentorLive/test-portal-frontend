import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Layout from './layout/layout'
import { fetchAllUsers, getAllPayments } from '@/redux/slices/dashboardSlice'
import { fetchAllTests } from '@/redux/slices/testSlice'
import { Card, CardContent, CardHeader, CardTitle } from "@/public/ui/card"
import { Button } from "@/public/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/public/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'
import { DollarSign, Users, FileText, ShoppingCart, PlusCircle, Trash2 } from 'lucide-react'
import { FaRupeeSign } from 'react-icons/fa'
import { deleteUser } from '@/redux/slices/authSlice'
import { deleteTest } from '@/redux/slices/testSlice'
import { useRouter } from 'next/router'

 function Dashboard() {
  const dispatch = useDispatch()
  const { allUsers, Payments } = useSelector((state) => state.dashboard)
  const { testList } = useSelector((state) => state.test)
  const router = useRouter()
  const [isDeleteHovered, setIsDeleteHovered] = useState(null)
  const [displayedUsers, setDisplayedUsers] = useState([])
  const [displayedTests, setDisplayedTests] = useState([])
  const [userPage, setUserPage] = useState(1)
  const [testPage, setTestPage] = useState(1)
  const itemsPerPage = 5

  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(getAllPayments())
    dispatch(fetchAllTests())
  }, [dispatch])

  useEffect(() => {
    if (allUsers?.data) {
      setDisplayedUsers(allUsers.data.slice(0, itemsPerPage))
    }
  }, [allUsers])

  useEffect(() => {
    if (testList) {
      setDisplayedTests(testList.slice(0, itemsPerPage))
    }
  }, [testList])

  const loadMoreUsers = () => {
    const nextPage = userPage + 1
    const newUsers = allUsers.data.slice(0, nextPage * itemsPerPage)
    setDisplayedUsers(newUsers)
    setUserPage(nextPage)
  }

  const loadMoreTests = () => {
    const nextPage = testPage + 1
    const newTests = testList.slice(0, nextPage * itemsPerPage)
    setDisplayedTests(newTests)
    setTestPage(nextPage)
  }

  const userCount = allUsers?.count || 0
  const testCount = testList?.length || 0
  const unitsSold = Payments?.allPayments?.length || 0
  const revenueGenerated = unitsSold * 100 // Assuming $100 per unit sold

  const monthlyRevenueData = Payments?.finalMonths ? Object.entries(Payments.finalMonths).map(([name, value]) => ({
    name: name.slice(0, 3),
    value: value * 100 // Assuming $100 per unit
  })) : []

  // Prepare data for user distribution pie chart
  const registeredUsers = userCount
  const testPurchasedUsers = new Set(Payments?.allPayments?.map(payment => payment.userId)).size
  const userDistributionData = [
    { name: 'Registered Users', value: registeredUsers },
    { name: 'Test Purchased Users', value: testPurchasedUsers }
  ]

  // Prepare data for exam type distribution pie chart
  const examTypeData = testList.reduce((acc, test) => {
    acc[test.type] = (acc[test.type] || 0) + 1
    return acc
  }, {})
  const examTypeChartData = Object.entries(examTypeData).map(([name, value]) => ({ name, value }))

  // Prepare data for test popularity pie chart
  const testPopularityData = testList.map(test => {
    const purchaseCount = Payments?.allPayments?.filter(payment => payment.testId === test._id).length || 0
    return { name: test.title, value: purchaseCount }
  }).sort((a, b) => b.value - a.value).slice(0, 5)  // Top 5 most popular tests

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

  const handleDeleteUser = async(userId) => {
    const continueDelete = confirm('Are you sure you want to delete this user?')
    if (!continueDelete) return;
    await dispatch(deleteUser(userId))
  }

  const handleTestDelete = async(testId) => {
    const continueDelete = confirm('Are you sure you want to delete this test?');
    if (!continueDelete) return;
    await dispatch(deleteTest(testId))
  }

  if (!allUsers || !Payments || !testList) {
    return (
      <Layout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <div className="flex min-h-[600px] ml-14 flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <LoaderIcon className="mx-auto h-12 w-12 animate-spin text-primary" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Loading Dashboard</h1>
            <p className="mt-4 text-muted-foreground">
              We're fetching the latest data for you. Please wait a moment.
            </p>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8 ml-14">
        <h1 className="text-3xl font-bold mb-8 text-blue-800 animate-fade-in">Analytics Dashboard</h1>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-blue-500 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-slide-up">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userCount}</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-600 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
              <FileText className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{testCount}</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-700 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Units Sold</CardTitle>
              <ShoppingCart className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{unitsSold}</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-800 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <FaRupeeSign className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{revenueGenerated}</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Revenue Chart */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyRevenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* User Distribution Pie Chart */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">User Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={userDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {userDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Exam Type Distribution Pie Chart */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">Exam Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={examTypeChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {examTypeChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Test Popularity Pie Chart */}
          <Card className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">Top 5 Popular Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={testPopularityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {testPopularityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Management */}
        <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-800">User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedUsers.map((user) => (
                    <TableRow key={user._id} className="transition-all duration-300 hover:bg-blue-50">
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          className={`transition-all duration-300 ${
                            isDeleteHovered === user._id ? 'bg-red-600 scale-105' : 'bg-red-500'
                          }`}
                          onMouseEnter={() => setIsDeleteHovered(user._id)}
                          onMouseLeave={() => setIsDeleteHovered(null)}
                          onClick={() => {
                            // Implement delete functionality here
                            handleDeleteUser(user._id)
                            console.log(`Delete user with ID: ${user._id}`)
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {displayedUsers.length < allUsers.data.length && (
              <div className="mt-4 text-center">
                <Button
                  onClick={loadMoreUsers}
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                >
                  Load More Users
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Test Management */}
        <Card className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-blue-800">Test Management</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Button 
              onClick={() => router.push('/dash-admin/tests/createtest')}
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create New Test
              </Button>
            </div>
            <div className="overflow-x-auto max-h-96 overflow-y-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Questions</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedTests.map((test) => (
                    <TableRow key={test._id} className="transition-all duration-300 hover:bg-blue-50">
                      <TableCell>{test.title}</TableCell>
                      <TableCell>{test.type}</TableCell>
                      <TableCell>{test.isPaid ? `₹${test.price}` : 'Free'}</TableCell>
                      <TableCell>{test.numberOfQuestions}</TableCell>
                      <TableCell>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="transition-all duration-300 hover:bg-red-600 hover:scale-105"
                          onClick={() => {
                            // Implement delete functionality here
                            handleTestDelete(test._id)
                            console.log(`Delete test with ID: ${test._id}`)
                          }}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {displayedTests.length < testList.length && (
              <div className="mt-4 text-center">
                <Button
                  onClick={loadMoreTests}
                  className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
                >
                  Load More Tests
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

function LoaderIcon(props) {
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
      <path d="M12 2v4" />
      <path d="m16.2 7.8 2.9-2.9" />
      <path d="M18 12h4" />
      <path d="m16.2 16.2 2.9 2.9" />
      <path d="M12 18v4" />
      <path d="m4.9 19.1 2.9-2.9" />
      <path d="M2 12h4" />
      <path d="m4.9 4.9 2.9 2.9" />
    </svg>
  )
}
export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
