import { Card, CardHeader, CardTitle, CardContent } from "@/public/ui/card"
import { Label } from "@/public/ui/label"
import { Input } from "@/public/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/public/ui/select"
import { Checkbox } from "@/public/ui/checkbox"
import { Button } from "@/public/ui/button"
import { Textarea } from "@/public/ui/textarea"

export default function Component() {
  return (
    <div className="m-4">
      <Card className="dark:text-black">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-semibold">Create Multiple Choice Question</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="question" className="font-medium">Question</Label>
              <Input
                id="question"
                placeholder="Enter your question"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="question-type" className="font-medium">Question Type</Label>
              <div id="question-type" className="flex items-center gap-6">
                <div className="flex items-center gap-2 cursor-pointer">
                  <input id="question-type-easy" type="radio" value="easy" name="question-type" className="form-radio text-blue-600" />
                  <Label htmlFor="question-type-easy">Easy</Label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input id="question-type-medium" type="radio" value="medium" name="question-type" className="form-radio text-blue-600" />
                  <Label htmlFor="question-type-medium">Medium</Label>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <input id="question-type-hard" type="radio" value="hard" name="question-type" className="form-radio text-blue-600" />
                  <Label htmlFor="question-type-hard">Hard</Label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Label htmlFor="tags" className="font-medium">Tags</Label>
              <Select>
                <SelectTrigger className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <SelectValue placeholder="Select tags" />
                </SelectTrigger>
                <SelectContent className="bg-white text-black border border-gray-300 rounded-lg shadow-md">
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                  <SelectItem value="biology">Biology</SelectItem>
                  <SelectItem value="math">Math</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                  <SelectItem value="literature">Literature</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="space-y-3">
                <Label htmlFor={`option${num}`} className="font-medium">Option {num}</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id={`option${num}`}
                    placeholder={`Enter Option ${num}`}
                    className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex items-center gap-2">
                    <Checkbox id={`check${num}`} />
                    <Label htmlFor={`check${num}`} className="ml-2">Correct Answer</Label>
                  </div>
                  <Button variant="destructive" className="bg-red-500 text-white hover:bg-red-600 px-4 py-2">Delete</Button>
                </div>
              </div>
            ))}
            <div className="space-y-3">
              <Label htmlFor="explanation" className="font-medium">Explanation</Label>
              <Textarea
                id="explanation"
                placeholder="Enter the explanation for the correct answer"
                className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button className="w-full mt-6 bg-blue-500 text-white hover:bg-blue-600 py-3">Add Option</Button>
            <div className="flex justify-between mt-4">
              <Button className="bg-red-500 text-white hover:bg-red-600 px-6 py-3">Delete Question</Button>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3">Save Question</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
