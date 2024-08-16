"use client"

import Link from "next/link";
import { useState } from "react"
import { Input } from "@/public/ui/input";
import { Button } from "@/public/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/public/ui/table";
import { Pagination } from "@/public/ui/pagination";

export default function Qlist() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is ur name?",
      type: "multiple choice",
      difficulty: "easy",
      author: "John Doe",
      createdAt: "2023-04-15",
      updatedAt: "2023-04-16",
    },
    {
      id: 2,
      text: "Explain the photoseenthisis? ",
      type: "short answer",
      difficulty: "medium",
      author: "Jane Smith",
      createdAt: "2023-03-20",
      updatedAt: "2023-03-22",
    },
  ])
  
  const [searchText, setSearchText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [questionsPerPage, setQuestionsPerPage] = useState(10)
  
  const filteredQuestions = questions.filter((question) =>
    question.text.toLowerCase().includes(searchText.toLowerCase()),
  )
  
  const indexOfLastQuestion = currentPage * questionsPerPage
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage
  const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion)
  const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage)
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  const handleDelete = (id) => {
    setQuestions(questions.filter((question) => question.id !== id))
  }
  
  const handleEdit = (id) => {}
  
  return (
    <div className="container mx-auto md:ml-48 px-4 py-8">
      <div className="mb-6 border-b  border-gray-400 pb-4">
        <h1 className="text-3xl font-bold">Question Management</h1>
      </div>
      <div className="mb-6 flex items-center justify-between border-b  border-gray-400 pb-4">
        <div className="w-full max-w-md border rounded-md">
          <Input
            type="text"
            placeholder="Search questions..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full rounded-md border  border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <Link href="/dash-admin/addq">
        <Button variant="outline" size="sm" className="border mr-[200px]  border-gray-400">
          Add Question
        </Button>
        </Link>
      </div>
      <div className="border  border-gray-400 rounded-md">
        <Table>
          <TableHeader className="bg-gray-100 border-b  border-gray-400">
            <TableRow className="-ml-40">
              <TableHead>Question</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentQuestions.map((question) => (
              <TableRow key={question.id} className="border-b  border-gray-400">
                <TableCell>{question.text}</TableCell>
                <TableCell>{question.type}</TableCell>
                <TableCell>{question.difficulty}</TableCell>
                <TableCell>{question.createdAt}</TableCell>
                <TableCell>{question.updatedAt}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border  border-gray-400" onClick={() => handleEdit(question.id)}>
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="border  border-gray-400" onClick={() => handleDelete(question.id)}>
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-6 flex justify-end">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  )
}
