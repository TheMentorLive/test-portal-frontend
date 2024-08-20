import Navbar from '../navbar'
import Sidebar from '../sidebar';
import { useState } from 'react';

export default function Layout({ children }) {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setSidebarOpen(false); // Close the sidebar on mobile when a link is clicked
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          activeSection={activeSection} 
          handleLinkClick={handleLinkClick} 
          sidebarOpen={sidebarOpen} 
          toggleSidebar={toggleSidebar} 
        />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:ml-[140px] sm:pl-10 sm:pr-10">
          {children}
        </main>
      </div>
    </div>
  );
}
