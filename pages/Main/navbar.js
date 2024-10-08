"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const controls = useAnimation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = navbarRef.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: -50 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll effect on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="border-b bg-white border-gray-300">
      <header
        ref={navbarRef}
        className="flex h-16 items-center justify-between bg-background px-4 md:px-6 lg:ml-48 lg:mr-[217px]"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {/* Logo and Home Link */}
          <Link href="/" prefetch={false}>
            <Image
              src="/logo.png"
              alt="Description of image"
              width={120} // Adjust width for responsiveness
              height={40} // Adjust height for responsiveness
              className="w-auto h-auto max-w-full max-h-full"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="hidden md:flex"
        >
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
        </motion.nav>

        {/* Desktop SignIn/SignUp Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-4"
        >
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
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="md:hidden flex items-center"
        >
          <button onClick={toggleMobileMenu} className="text-3xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-background z-50 md:hidden"
          >
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
          </motion.div>
        )}
      </header>
    </div>
  );
}
