import { useRouter } from 'next/router';
import { TooltipProvider, Tooltip, TooltipTrigger } from "@/public/ui/tooltip";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/public/ui/sheet";
import { Button } from "@/public/ui/button";
import { HomeIcon, LineChartIcon, FilePenIcon, SettingsIcon, BookIcon, UsersIcon, MenuIcon } from '../../public/icons/icons-dash';

export default function Sidebar({ handleLinkClick, sidebarOpen, toggleSidebar }) {
  const router = useRouter();
  const currentPath = router.pathname;

  const getActiveSection = () => {
    if (currentPath.includes('/dash-admin/questionBank')) return 'Question Bank';
    if (currentPath.includes('/dash-admin/tests')) return 'Quiz';
    if (currentPath.includes('/dash-admin/users')) return 'Users';
    if (currentPath.includes('/dash-admin/results')) return 'Results';
    if (currentPath.includes('/dash-admin/profile')) return 'Settings';
    return 'Dashboard'; // Default to Dashboard
  };

  const activeSection = getActiveSection();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed inset-y-0 mt-[65px] left-0 z-10 hidden sm:flex flex-col border-r-2 border-gray-300 bg-background w-36 sm:w-52 transition-transform duration-300`}>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 w-full">
          <TooltipProvider>
            {[
              { href: "/dash-admin/DashboardPage", icon: <HomeIcon className="ml-4 h-5 w-5" />, label: "Dashboard", section: "Dashboard" },
              { href: "/dash-admin/questionBank", icon: <BookIcon className="ml-4 h-5 w-5" />, label: "Question Bank", section: "Question Bank" },
              { href: "/dash-admin/tests", icon: <FilePenIcon className="ml-4 h-5 w-5" />, label: "Quiz", section: "Quiz" },
              { href: "/dash-admin/users", icon: <UsersIcon className=" ml-4 h-5 w-5" />, label: "Users", section: "Users" },
              { href: "/dash-admin/results", icon: <LineChartIcon className="ml-4 h-5 w-5" />, label: "Results", section: "Results" }
            ].map((item) => (
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
                    <span>{item.label}</span>
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
                  <span>Settings</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" onClick={toggleSidebar}>
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs p-4 bg-background">
            <SheetClose asChild>
              <Button variant="ghost" className="self-end">
                Close
              </Button>
            </SheetClose>
            <nav className="grid gap-6 text-lg font-medium mt-4">
              {[
                { href: "/dash-admin/DashboardPage", icon: <HomeIcon className="h-5 w-5" />, label: "Dashboard", section: "Dashboard" },
                { href: "/dash-admin/questionBank", icon: <BookIcon className="h-5 w-5" />, label: "Question Bank", section: "Question Bank" },
                { href: "/dash-admin/tests", icon: <FilePenIcon className="h-5 w-5" />, label: "Quiz", section: "Quiz" },
                { href: "/dash-admin/users", icon: <UsersIcon className="h-5 w-5" />, label: "Users", section: "Users" },
                { href: "/dash-admin/results", icon: <LineChartIcon className="h-5 w-5" />, label: "Results", section: "Results" },
                { href: "/dash-admin/profile", icon: <SettingsIcon className="h-5 w-5" />, label: "Settings", section: "Settings" }
              ].map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={`flex items-center gap-4 px-2.5 transition-colors w-full ${
                    activeSection === item.section 
                      ? 'font-bold text-white bg-blue-500' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`} 
                  onClick={() => handleLinkClick(item.section)}
                  prefetch={false}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
