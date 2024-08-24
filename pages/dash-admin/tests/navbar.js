import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/public/ui/dropdown-menu";
import { Button } from "@/public/ui/button";

export default function Navbar({name}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/logo.png" // Path to your image file
          alt="Description of image"
          href="/"
          width={120} // Adjust width for responsiveness
          height={110} // Adjust height for responsiveness
          className="w-auto h-auto" // Automatically scale the image
        />
      </Link>

     

      {/* Desktop SignIn/SignUp Buttons */}
      
      <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon" className="flex items-center space-x-2">
      <Image
        src="/icons/user-logo.png"
        width={36}
        height={36}
        alt="Avatar"
        className="overflow-hidden rounded-full"
        style={{ aspectRatio: "36/36", objectFit: "cover" }}
      />
      <span className="text-sm font-medium ">{name}</span> {/* Replace with the actual name */}
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
            
          <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" size="icon" className="flex items-center space-x-2">
      <Image
        src="/placeholder.svg"
        width={36}
        height={36}
        alt="Avatar"
        className="overflow-hidden rounded-full"
        style={{ aspectRatio: "36/36", objectFit: "cover" }}
      />
      <span className="text-sm font-medium">John Doe</span> {/* Replace with the actual name */}
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
          </nav>
        </div>
      )}
    </header>
  );
}
