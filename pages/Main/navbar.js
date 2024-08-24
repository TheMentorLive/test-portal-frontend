import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="border-b bg-white border-gray-300">
      <header className="flex h-16 items-center justify-between bg-background px-4 md:px-6 lg:ml-48 lg:mr-[217px]">
        {/* Logo and Home Link */}
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image
            src="/logo.png"
            alt="Description of image"
            width={120} // Adjust width for responsiveness
            height={40} // Adjust height for responsiveness
            className="w-auto h-auto max-w-full max-h-full"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Courses
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline hover:underline-offset-4" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop SignIn/SignUp Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/Main/signin"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Sign In
          </Link>
          <Link
            href="/Main/signup"
            className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-3xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background z-50 md:hidden">
            <nav className="flex flex-col items-center gap-4 py-4">
              <Link href="#" className="text-lg font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                Courses
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline hover:underline-offset-4" prefetch={false}>
                Contact
              </Link>
              <Link
                href="/Main/signin"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 w-3/4 text-center"
                prefetch={false}
              >
                Sign In
              </Link>
              <Link
                href="/Main/signup"
                className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary w-3/4 text-center"
                prefetch={false}
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
