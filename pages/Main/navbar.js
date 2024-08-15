import Link from "next/link"
import Image from 'next/image';

export default function Navbar() {
  return (
  <div className="flex-1 ml-36 mr-48 items-center justify-center">
  <header
      className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Link href="#" className="flex items-center ml-14 gap-2" prefetch={false}>
      <Image
        src="/logo.png" // Path to your image file
        alt="Description of image"
        width={140} // Adjust width as needed
        height={129} // Adjust height as needed
        className="mx-2" // Optional: add margin if needed
      />
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
          </li><li>
            <Link
              href="/dash-admin/dash"
              className="hover:underline hover:underline-offset-4"
              prefetch={false}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link
          href="/Main/signin"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          prefetch={false}>
          SignIn
        </Link>
        <Link
          href="/Main/signup"
          className="rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border border-primary"
          prefetch={false}>
          SignUp
        </Link>
      </div>
    </header>
    </div>
    );
}