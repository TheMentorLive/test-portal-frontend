import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu
import { SearchIcon } from '../../public/icons/icons-dash';
import { Button } from "@/public/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/public/ui/dropdown-menu";
import { Input } from "@/public/ui/input";
import userLogo from "@/public/icons/user-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/router";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle logout
  const handleLogout = async () => {
    try {
      const response = dispatch(logout());
      if(response)
        router.push("/Main/signin")
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6 shadow-md">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={720}
          height={110}
          className="w-[140px] h-[50px] object-contain"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] border border-gray-300 focus:border-primary focus:outline-none"
          />
        </div>
      </nav>

      {/* Desktop Navigation Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {isLoggedIn ? (
          <>
            <button
              onClick={handleLogout}
              className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary">
              Logout
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                  <Image
                    src={userLogo}
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="rounded-full object-cover"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="rounded-lg border border-gray-300 shadow-lg bg-white"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Link
              href="/Main/signin"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Sign In
            </Link>
            <Link
              href="/Main/signup"
              className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary">
              Sign Up
            </Link>
          </>
        )}
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
        <div className="absolute top-16 left-0 w-full bg-background z-50 md:hidden shadow-lg">
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
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleLogout}
                  className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary w-3/4 text-center">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/Main/signin"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-3/4 text-center">
                  Sign In
                </Link>
                <Link
                  href="/Main/signup"
                  className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary w-3/4 text-center">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
