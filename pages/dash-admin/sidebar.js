import { useRouter } from 'next/router';
import { TooltipProvider, Tooltip, TooltipTrigger } from "@/public/ui/tooltip";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/public/ui/sheet";
import { Button } from "@/public/ui/button";
import { HomeIcon, LineChartIcon, FilePenIcon, SettingsIcon, BookIcon, UsersIcon, MenuIcon } from '../../public/icons/icons-dash';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

function Sidebar({ handleLinkClick, sidebarOpen, toggleSidebar }) {
  const router = useRouter();
  const user = useSelector((state)=> state.auth?.data);
  const isAdmin = user?.role === 'admin';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [user]);

  const getActiveSection = () => {
    const currentPath = router.pathname;
    if (currentPath.includes('/dash-admin/questionBank')) return 'Question Bank';
    if (currentPath.includes('/dash-admin/tests')) return 'Quiz';
    if (currentPath.includes('/dash-admin/users')) return 'Users';
    if (currentPath.includes('/dash-admin/results')) return 'Results';
    if (currentPath.includes('/dash-admin/profile')) return 'Settings';
    return 'Dashboard'; // Default to Dashboard
  };

  const activeSection = getActiveSection();

  const adminLinks = [
    { href: "/dash-admin/DashboardPage", icon: <HomeIcon className="ml-4 h-5 w-5" />, label: "Dashboard", section: "Dashboard" },
    { href: "/dash-admin/questionBank", icon: <BookIcon className="ml-4 h-5 w-5" />, label: "Question Bank", section: "Question Bank" }, 
    { href: "/dash-admin/users", icon: <UsersIcon className="ml-4 h-5 w-5" />, label: "Users", section: "Users" },
  ];

  const commonLinks = [
    { href: "/dash-admin/tests", icon: <FilePenIcon className="ml-4 h-5 w-5" />, label: "Quiz", section: "Quiz" },
    { href: "/dash-admin/results", icon: <LineChartIcon className="ml-4 h-5 w-5" />, label: "Results", section: "Results" }
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed inset-y-0 mt-[65px] left-0 z-10 hidden sm:flex flex-col border-r-2 border-gray-300 bg-background w-36 sm:w-52 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 w-full">
          <TooltipProvider>
            {isAdmin && adminLinks.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 p-2 rounded-lg transition-colors w-full ${
                      activeSection === item.section 
                        ? 'font-bold text-white bg-blue-500' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => handleLinkClick(item.section)}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            ))}
            {commonLinks.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-4 p-2 rounded-lg transition-colors w-full ${
                      activeSection === item.section 
                        ? 'font-bold text-white bg-blue-500' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => handleLinkClick(item.section)}
                  >
                    {item.icon}
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                </TooltipTrigger>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5 w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href="/dash-admin/profile" 
                  className={`flex items-center gap-4 p-2 rounded-lg transition-colors w-full ${
                    activeSection === 'Settings' 
                      ? 'font-bold text-white bg-blue-500' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`} 
                  prefetch={false}
                >
                  <SettingsIcon className="ml-4 h-5 w-5" />
                  <span className="hidden sm:inline">Settings</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="sm:hidden">
        <Sheet open={sidebarOpen} onOpenChange={toggleSidebar}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="fixed top-20 left-4 z-50 rounded-full w-12 h-12 shadow-lg">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80vw] sm:max-w-xs p-0 bg-background">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
                <SheetClose asChild>
                  <Button variant="ghost" className="-mt-52" size="icon">
                    <span className="sr-only">Close</span>
                    
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex-1 overflow-y-auto">
                <div className="grid gap-4 p-4">
                  {isAdmin && adminLinks.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      className={`flex items-center gap-4 p-2 rounded-lg transition-colors w-full ${
                        activeSection === item.section 
                          ? 'font-bold text-white bg-blue-500' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`} 
                      onClick={() => {
                        handleLinkClick(item.section);
                        toggleSidebar();
                      }}
                      prefetch={false}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                  {commonLinks.map((item) => (
                    <Link 
                      key={item.label} 
                      href={item.href} 
                      className={`flex items-center gap-4 p-2 rounded-lg transition-colors w-full ${
                        activeSection === item.section 
                          ? 'font-bold text-white bg-blue-500' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`} 
                      onClick={() => {
                        handleLinkClick(item.section);
                        toggleSidebar();
                      }}
                      prefetch={false}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                  <Link 
                    href="/dash-admin/profile" 
                    className={`flex items-center gap-4 p-2 rounded-lg transition-colors w-full ${
                      activeSection === 'Settings' 
                        ? 'font-bold text-white bg-blue-500' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`} 
                    onClick={() => {
                      handleLinkClick('Settings');
                      toggleSidebar();
                    }}
                    prefetch={false}
                  >
                    <SettingsIcon className="ml-4 h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Sidebar), { ssr: false });