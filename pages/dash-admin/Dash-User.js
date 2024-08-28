import Layout from './layout/layout';
import Head from 'next/head';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/public/ui/card"
import { Badge } from "@/public/ui/badge"

import { Button } from "@/public/ui/button"



export default function Users() {
  return (
    <Layout >
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className="flex flex-1 flex-col gap-4 -mt-5 md:gap-8 md:p-10">
        <div className="grid ml-6 grid-cols-1 md:w-[1242px] gap-4 md:grid-cols-2 lg:grid-cols-4">

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tests Completed</CardTitle>
              <CircleCheckIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">987</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Tests</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Purchased Tests</CardTitle>
              <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
            </CardContent>
          </Card>
        </div>


        <main className="grid flex-1 w-auto md:w-[1292px]  sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

            {/* Completed Tests */}


            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Completed Tests</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Here are the tests you&apos;ve successfully completed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">JEE Main 2024</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive test covering all JEE Main topics.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="secondary">Completed</Badge>
                      <div className="text-sm font-medium">100%</div>
                    </div>
                    <Button className="mt-4">
                      View Results
                    </Button>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">NEET 2024</h3>
                    <p className="text-sm text-muted-foreground">
                      Detailed test for NEET exam preparation.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="secondary">Completed</Badge>
                      <div className="text-sm font-medium">100%</div>
                    </div>
                    <Button className="mt-4">
                      View Results
                    </Button>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">JEE Advanced 2024</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced level test for JEE preparation.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <Badge variant="secondary">Completed</Badge>
                      <div className="text-sm font-medium">100%</div>
                    </div>
                    <Button className="mt-4">
                      View Results
                    </Button>
                  </div>
                  <Button className="ml-4 w-28">
                    View All <span className="ml-2">&gt;</span>
                  </Button>
                </div>
              </CardContent>
            </Card>



            {/* Available tests */}

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Available Tests</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Here are the upcoming JEE and NEET tests available for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">JEE Main Test</h3>
                    <p className="text-sm text-muted-foreground">
                      Prepare for the JEE Main exam with this comprehensive test.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-medium">Duration: 2 hours</div>
                      <Button size="sm">View Test</Button>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">NEET Mock Test</h3>
                    <p className="text-sm text-muted-foreground">
                      Evaluate your NEET preparation with this mock test.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-medium">Duration: 3 hours</div>
                      <Button size="sm">View Test</Button>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">JEE Advanced Practice Test</h3>
                    <p className="text-sm text-muted-foreground">
                      Challenge yourself with this JEE Advanced practice test.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-medium">Duration: 2.5 hours</div>
                      <Button size="sm">View Test</Button>
                    </div>
                  </div>
                  <Button className="w-28">
                    View All <span className="ml-2">&gt;</span>
                  </Button>
                </div>
              </CardContent>
            </Card>


            {/* Payment History */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Payment History</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Below is the list of your recent payments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="grid grid-cols-4 gap-4 font-semibold mb-2">
                    <div>Name</div>
                    <div>Date</div>
                    <div>Amount</div>
                    <div>Status</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        date: "2024-08-23",
                        description: "Sample Test - JEE",
                        amount: "$100.00",
                        status: "Paid"
                      },
                      {
                        date: "2024-08-23",
                        description: "Sample Test - JEE",
                        amount: "$100.00",
                        status: "Paid"
                      },
                      {
                        date: "2024-08-23",
                        description: "Sample Test - JEE",
                        amount: "$100.00",
                        status: "Paid"
                      },
                      {
                        date: "2024-08-23",
                        description: "Sample Test - JEE",
                        amount: "$100.00",
                        status: "Paid"
                      },
                      {
                        date: "2024-08-23",
                        description: "Sample Test - JEE",
                        amount: "$100.00",
                        status: "Paid"
                      }
                    ].map((payment, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 py-2 border-b border-muted">
                        <div className="text-sm">{payment.description}</div>
                        <div className="text-sm">{payment.date}</div>
                        <div className="text-sm font-medium">{payment.amount}</div>
                        <div className="text-sm text-green-500">{payment.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
          <div>

            {/* Achievements */}


            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Achievements</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Celebrate your accomplishments and milestones.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Completed Coding Bootcamp</h3>
                    <p className="text-sm text-muted-foreground">
                      Congratulations on successfully completing the intensive coding bootcamp and enhancing your programming skills!
                    </p>
                    <div className="mt-4 text-sm font-medium">July 10, 2023</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Top Performer Award</h3>
                    <p className="text-sm text-muted-foreground">
                      Recognized as a top performer in the recent project challenge for outstanding performance and dedication.
                    </p>
                    <div className="mt-4 text-sm font-medium">August 5, 2023</div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Published Article</h3>
                    <p className="text-sm text-muted-foreground">
                      Your article on modern web development trends was published in a leading tech journal. Great job!
                    </p>
                    <div className="mt-4 text-sm font-medium">September 15, 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <br />


            {/* Announcements */}

            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Announcements</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  Check out the latest announcements from your instructors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Upcoming Hackathon</h3>
                    <p className="text-sm text-muted-foreground">
                      Join us for a 24-hour coding challenge on May 20th. Prizes will be awarded!
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-medium">May 20, 2023</div>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Guest Speaker Event</h3>
                    <p className="text-sm text-muted-foreground">
                      We&apos;re excited to host a guest speaker session with a senior engineer from a top tech company. Join
                      us on June 1st.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-medium">June 1, 2023</div>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <h3 className="text-lg font-semibold">End-of-Term Celebration</h3>
                    <p className="text-sm text-muted-foreground">
                      Let&apos;s come together to celebrate the end of the term and your hard work. Join us on June 15th for
                      food, drinks, and fun!
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-sm font-medium">June 15, 2023</div>
                      <Button size="sm">Learn More</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </main>

        <div className='w-auto ml-[22px] md:w-[1245px]'>

        </div>
      </main>


    </Layout>
  );
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


function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
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








