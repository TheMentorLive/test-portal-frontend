import Link from "next/link"

export default function Navbar() {
  return (
  <div className="flex-1 ml-20 mr-20 items-center justify-center">
  <header
      className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="flex items-center ml-14 gap-2" prefetch={false}>
        
        <span className="text-lg font-bold">Gen AI</span>
      </Link>
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="#"
              className="hover:underline hover:underline-offset-4"
              prefetch={false}>
              Courses
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:underline hover:underline-offset-4"
              prefetch={false}>
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:underline hover:underline-offset-4"
              prefetch={false}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="/Main/signin"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}>
          Login
        </Link>
        <Link
          href="/Main/signup"
          className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}>
          Sign Up
        </Link>
      </div>
    </header>
    </div>
    );
}