/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QQD0eboNsyb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/public/ui/button"

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-lg border bg-card p-6 shadow-lg">
        <div className="grid gap-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Test Results</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">Submission ID</div>
            <div className="text-sm font-medium">ABC123</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">Total Questions</div>
            <div className="text-sm font-medium">20</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">Correct Answers</div>
            <div className="text-sm font-medium">18</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">Score</div>
            <div className="text-sm font-medium">90%</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">Passed</div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-green-500">Passed</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">Evaluated At</div>
            <div className="text-sm font-medium">June 23, 2023 at 10:30 AM</div>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="ghost" className="bg-primary text-primary-foreground hover:bg-primary/80">
              View Answers
            </Button>
            <Button variant="ghost" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
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