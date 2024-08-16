import { Button } from "@/public/ui/button"
import Navbar from "./navbar"

export default function Component() {
  return (
    <div>
        <Navbar/>
    <div className="flex flex-col items-center justify-center  bg-background">
      <div className="flex flex-col items-center justify-center   bg-background">
        <div className="flex flex-col items-center justify-center   bg-background">
          <div className="flex flex-col items-center justify-center mt-32  bg-background">
            <div className="flex flex-col w-full max-w-4xl p-16 bg-white rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-16">
                  <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center">
                
                    </div>
                    <h1 className="text-4xl font-bold">Test Results</h1>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full">
                    
                    <div className="mt-10 flex space-x-8">
                      <Button className="bg-primary text-primary-foreground">Check Answers</Button>
                      <Button variant="outline" className="border-primary text-primary">
                        Retake Test
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-16 md:border-l">
                  <h2 className="mb-6 text-2xl font-semibold">Test Summary</h2>
                  <div className="flex space-x-[100px] mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Test duration</p>
                      <p className="text-base font-medium">90 mins</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">No. of questions</p>
                      <p className="text-base font-medium">1 question</p>
                    </div>
                  </div>
                  <div className="flex space-x-[140px] mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Score</p>
                      <p className="text-base font-medium text-primary">100%</p>
                    </div >
                    <div>
                      <p className="text-sm text-muted-foreground">Rank</p>
                      <p className="text-base font-medium">Top 10%</p>
                    </div>
                  </div>
                  <div className="flex space-x-[75px] mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Completion Time</p>
                      <p className="text-base font-medium">60 mins</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Attempts</p>
                      <p className="text-base font-medium">1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

