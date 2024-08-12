/**
 * v0 by Vercel.
 * @see https://v0.dev/t/usXPLuIE2xp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import Link from "next/link"

export default function Component() {
  return (
    <footer className="grid grid-cols-4 items-start py-6 bg-[#e3e6f1] flex-1  justify-center text-black px-10 gap-x-8">
      <div className="flex flex-col ml-40 items-center space-y-6">
        <Image
          src="/placeholder.svg"
          height="100"
          width="200"
          alt="Company Logo"
          style={{ aspectRatio: "200/100", objectFit: "cover" }}
        />
        <div className="flex space-x-4">
          <Link href="#" prefetch={false}>
            <FacebookIcon className="h-6 w-6 text-black" />
          </Link>
          <Link href="#" prefetch={false}>
            <TwitterIcon className="h-6 w-6 text-black" />
          </Link>
          <Link href="#" prefetch={false}>
            <InstagramIcon className="h-6 w-6 text-black" />
          </Link>
          <Link href="#" prefetch={false}>
            <LinkedinIcon className="h-6 w-6 text-black" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col ml-20 space-y-2">
        <h3 className="font-bold">Company</h3>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          About us
        </Link>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Our team
        </Link>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Careers
        </Link>
      </div>
      <div className="flex flex-col ml-20 space-y-2">
        <h3 className="font-bold">Help</h3>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Support
        </Link>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          FAQs
        </Link>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Contact us
        </Link>
      </div>
      <div className="flex flex-col ml-20 space-y-1">
        <h3 className="font-bold">Explore</h3>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Services
        </Link>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Products
        </Link>
        <Link href="#" className="text-gray-900 hover:text-black" prefetch={false}>
          Blog
        </Link>
      </div>
      <div className="col-span-4 text-center mt-6">
        <p className="text-sm">{`\u00A9 2024 Your Genailearning. All rights reserved.`}</p>
      </div>
    </footer>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}