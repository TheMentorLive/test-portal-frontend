import { LuClipboardType } from "react-icons/lu"; 
import Layout from '../layout/layout';

export default function Component() {
  return (
    <Layout>
      <div className="ml-2 flex flex-col flex-1 bg-blue overflow-y-auto">
        <header className="bg-primary text-primary-foreground py-8 px-6 md:px-10 w-full rounded-md">
          <div className="mx-auto flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-2">
              <LuClipboardType className="w-6 h-6" />
              <h1 className="text-2xl font-bold">Test Results</h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">Test ID:</span>
              <span className="text-lg font-bold">ABC123</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium">Status:</span>
              <span className="text-lg font-bold text-green-500">Passed</span>
            </div>
          </div>
        </header>
        <main className="container mx-auto py-12 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg shadow-md p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card-foreground rounded-lg p-4 flex flex-col items-center gap-2">
                <span className="text-4xl font-bold">20</span>
                <span className="text-muted-foreground">Total Questions</span>
              </div>
              <div className="bg-card-foreground rounded-lg p-4 flex flex-col items-center gap-2">
                <span className="text-4xl font-bold text-green-500">18</span>
                <span className="text-muted-foreground">Correct</span>
              </div>
              <div className="bg-card-foreground rounded-lg p-4 flex flex-col items-center gap-2">
                <span className="text-4xl font-bold text-red-500">1</span>
                <span className="text-muted-foreground">Incorrect</span>
              </div>
              <div className="bg-card-foreground rounded-lg p-4 flex flex-col items-center gap-2">
                <span className="text-4xl font-bold text-yellow-500">1</span>
                <span className="text-muted-foreground">Skipped</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Progress</h2>
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[200px] h-[200px]">
                <div />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <span className="text-4xl font-bold">90%</span>
                  <span className="text-muted-foreground">Accuracy</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-2xl font-bold">18</span>
                <span className="text-muted-foreground">Score</span>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6 flex flex-col gap-4">
            <h2 className="text-xl font-bold">Breakdown</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-green-500 rounded-full w-4 h-4" />
                <span className="text-muted-foreground">Correct: 90%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-red-500 rounded-full w-4 h-4" />
                <span className="text-muted-foreground">Incorrect: 5%</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-500 rounded-full w-4 h-4" />
                <span className="text-muted-foreground">Skipped: 5%</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
