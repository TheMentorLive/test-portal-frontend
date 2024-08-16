// components/Sidebar.js
import { TooltipProvider, Tooltip, TooltipTrigger } from "@/public/ui/tooltip";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/public/ui/sheet";
import { Button } from "@/public/ui/button";
import { HomeIcon, LineChartIcon,  FilePenIcon, SettingsIcon, BookIcon, UsersIcon, MenuIcon } from '../../public/icons/icons-dash';

export default function Sidebar({ activeSection, handleLinkClick, sidebarOpen, toggleSidebar }) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed inset-y-0 mt-[65px] left-0 z-10 flex flex-col border-r-2 border-gray-300 bg-background w-36 sm:w-52 transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}>
        <nav className="flex flex-col items-center -ml-12 gap-4 px-2 sm:py-5">
          <TooltipProvider>
            {[
              { href: "#", icon: <HomeIcon className="-ml-2 h-5 w-5" />, label: "Dashboard", section: "Dashboard" },
              { href: "#", icon: <BookIcon className="ml-5 h-5 w-5" />, label: "Question Bank", section: "Question Bank" },
              { href: "#", icon: <FilePenIcon className="-ml-14 h-5 w-5" />, label: "Quiz", section: "Quiz" },
              { href: "#", icon: <UsersIcon className=" -ml-12 h-5 w-5" />, label: "Users", section: "Users" },
              { href: "#", icon: <LineChartIcon className="-ml-10 h-5 w-5" />, label: "Results", section: "Results" }
            ].map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <a
                    href={item.href}
                    className={`flex items-center gap-4 p-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground ${activeSection === item.section ? 'font-bold' : ''}`}
                    onClick={() => handleLinkClick(item.section)}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </TooltipTrigger>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="#" className="flex items-center -ml-20 gap-4 p-2 rounded-lg text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
                  <SettingsIcon className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden" onClick={toggleSidebar}>
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            {[
              { href: "#", icon: <HomeIcon className="h-5 w-5" />, label: "Dashboard", section: "Dashboard" },
              { href: "#", icon: <BookIcon className="h-5 w-5" />, label: "Question Bank", section: "Question Bank" },
              { href: "#", icon: <FilePenIcon className="h-5 w-5" />, label: "Quiz", section: "Quiz" },
              { href: "#", icon: <UsersIcon className="h-5 w-5" />, label: "Users", section: "Users" },
              { href: "#", icon: <LineChartIcon className="h-5 w-5" />, label: "Results", section: "Results" },
              { href: "#", icon: <SettingsIcon className="h-5 w-5" />, label: "Settings", section: "Settings" }
            ].map((item) => (
              <Link key={item.label} href={item.href} className={`flex items-center gap-4 px-2.5 transition-colors ${activeSection === item.section ? 'font-bold' : 'text-muted-foreground hover:text-foreground'}`} prefetch={false}>
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
