// pages/dash.js
import { useState } from 'react';
import Navbar from './navbar';
import { Button } from "@/public/ui/button";
import Sidebar from './sidebar';
import Qlist from './qlist'; // Import Qlist component
import Link from 'next/link';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [editingQuiz, setEditingQuiz] = useState(null); // New state to track editing quiz

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setEditingQuiz(null); // Reset editing quiz when switching sections
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleEditQuiz = () => {
    setEditingQuiz(true); // Set editingQuiz to true when Edit button is clicked
  };

  return (
    <div>
      <div className='flex-1 justify-center align-middle'> <Navbar />
      </div>
      <hr className="border-gray-300 w-full"/>
      <div className="flex min-h-screen w-full bg-muted/40">
        {/* Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          handleLinkClick={handleLinkClick} 
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            {/* Header content can be added here */}
          </header>
          <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8">
            {activeSection === "Quiz" && !editingQuiz && (
              <div className='mt-10'>
                <Button variant="primary" className="mb-4 ml-[1370px] bg-blue-500">+ Create</Button>
                <div className="grid grid-cols-1 gap-4 md:ml-48 sm:grid-cols-2 lg:grid-cols-2">
                  {/* Quiz Cards */}
                  <div className="card border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">Quiz Card 1</h3>
                    <p className="mt-2 text-sm text-gray-600">Description of the quiz card.</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" className="text-blue-500 border-blue-500" onClick={handleEditQuiz}>Edit</Button>
                      <Button variant="outline" className="text-red-500 border-red-500">Delete</Button>
                      <Link href="/dash-admin/test/srtpg">
                      <Button variant="outline" className="text-green-500 border-green-500">Start</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="card border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">Quiz Card 2</h3>
                    <p className="mt-2 text-sm text-gray-600">Description of the quiz card.</p>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" className="text-blue-500 border-blue-500" onClick={handleEditQuiz}>Edit</Button>
                      <Button variant="outline" className="text-red-500 border-red-500">Delete</Button>
                      <Button variant="outline" className="text-green-500 border-green-500">Start</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "Question Bank" && !editingQuiz && (
              <div className='mt-10'>
                <Button variant="primary" className="mb-4 ml-[1370px] bg-blue-500">+ Create</Button>
                <div className="grid grid-cols-1 gap-4  md:ml-48 sm:grid-cols-2 lg:grid-cols-2">
                  {/* Question Bank Cards */}
                  <div className="card border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">Question Bank Card 1</h3>
                    <p className="mt-2 text-sm text-gray-600">Description of the question bank card.</p>
                    <div className="mt-4 flex gap-2">
                    <Button variant="outline" className="text-blue-500 border-blue-500" onClick={handleEditQuiz}>Edit</Button>
                      <Button variant="outline" className="text-red-500 border-red-500">Delete</Button>
                    </div>
                  </div>
                  <div className="card border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
                    <h3 className="text-lg font-semibold">Question Bank Card 2</h3>
                    <p className="mt-2 text-sm text-gray-600">Description of the question bank card.</p>
                    <div className="mt-4 flex gap-2">
                    <Button variant="outline" className="text-blue-500 border-blue-500" onClick={handleEditQuiz}>Edit</Button>
                      <Button variant="outline" className="text-red-500 border-red-500">Delete</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {editingQuiz && <Qlist />} 
          </main>
        </div>
      </div>
    </div>
  );
}
