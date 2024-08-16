import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu
import { SearchIcon } from '../../public/icons/icons-dash';
import { Button } from "@/public/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/public/ui/dropdown-menu";
import { Input } from "@/public/ui/input";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      {/* Logo and Home Link */}
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/logo.png" // Path to your image file
          alt="Description of image"
          href="/"
          width={720} // Adjust width for responsiveness
          height={110} // Adjust height for responsiveness
          className="w-[140px] h-[50px]" // Automatically scale the image
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6 text-sm font-medium">
          
          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" />
          </div>
        </ul>
      </nav>

      {/* Desktop SignIn/SignUp Buttons */}
      <div className="hidden md:flex items-center gap-4">
        
        <Link
          href="/Main/signup"
          className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary"
          prefetch={false}>
          Logout
        </Link>
        <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <Image src="/placeholder.svg" width={36} height={36} alt="Avatar" className="overflow-hidden rounded-full" style={{ aspectRatio: "36/36", objectFit: "cover" }} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-3xl focus:outline-none">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background z-50 md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link
              href="#"
              className="text-lg font-medium hover:underline hover:underline-offset-4"
              prefetch={false}>
              Courses
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline hover:underline-offset-4"
              prefetch={false}>
              About
            </Link>
            <Link
              href="#"
              className="text-lg font-medium hover:underline hover:underline-offset-4"
              prefetch={false}>
              Contact
            </Link>
            <Link
              href="/Main/signin"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-3/4 text-center"
              prefetch={false}>
              Sign In
            </Link>
            <Link
              href="/Main/signup"
              className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary w-3/4 text-center"
              prefetch={false}>
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
