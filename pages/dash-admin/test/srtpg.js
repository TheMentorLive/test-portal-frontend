import { Button } from "@/public/ui/button"
import Navbar from "./navbar"
import Link from "next/link"

export default function Srtpg() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center -mt-20 min-h-screen bg-background">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <div className="flex flex-col w-full max-w-7xl p-12 bg-white rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 md:pr-12 ">
                <h1 className="mb-4 text-4xl font-bold">Welcome to GenAi Learning SDE-1 Test</h1>
                <div className="flex space-x-12">
                  <div>
                    <p className="text-sm text-muted-foreground">Test duration</p>
                    <p className="text-base font-medium">90 mins</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">No. of questions</p>
                    <p className="text-base font-medium">1 question</p>
                  </div>
                </div>
                <br />
                <h2 className="mb-4 text-2xl font-semibold">Description</h2>
                <ol className="mb-8 space-y-4 text-muted-foreground">
                  <li>
                    1. The JEE is a crucial exam for aspiring engineers in India, determining admission to prestigious institutes like IITs and NITs.
                  </li>
                  <li>
                    2. The exam rigorously tests candidates&apos; proficiency in Chemistry, and Mathematics, ensuring to have a strong foundation in these subjects.
                  </li>
                </ol>
              </div>

              <div className="md:w-1/2 md:pl-12 mt-7 md:border-l">
                <h2 className="mb-4 text-2xl font-semibold">Instructions</h2>
                <ol className="mb-8 space-y-4 text-muted-foreground">
                  <li>
                    1. This is a timed test. Please make sure you are not interrupted during the test, as the timer cannot be paused once started.
                  </li>
                  <li>2. Please ensure you have a stable internet connection.</li>
                  <li>
                    3. We recommend you try the{" "}
                    <a href="#">sample test</a>{" "}
                    for a couple of minutes before taking the main test.
                  </li>
                </ol>
                <div className="flex space-x-6">
                  <Link href="/dash-admin/test/mainpg">
                    <Button className="bg-primary text-primary-foreground">Start Test</Button>
                  </Link>
                  <Button variant="outline" className="border-primary text-primary">
                    Quit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
