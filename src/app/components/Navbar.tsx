'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div
        className="
          max-w-7xl mx-auto w-full
          flex items-center justify-between
          px-4 sm:px-8 py-4
          max-[400px]:px-2 max-[400px]:py-3
        "
      >


        <Link href="/" className="flex items-center">
          <div
            className="
              w-12 h-12 bg-white rounded-full flex items-center justify-center
              max-[400px]:w-8 max-[400px]:h-8
            "
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={44}
              height={44}
              className="w-11 h-11 mt-1.5 max-[400px]:w-7 max-[400px]:h-7"
              priority
            />
          </div>
        </Link>

      
        <div
          className="
            hidden sm:flex
            flex-1 justify-center gap-6
          "
        >
          <Link href="/about" className="hover:text-gray-300 transition">
            about
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300 transition">
            portfolio
          </Link>
          <Link href="/more" className="hover:text-gray-300 transition">
            blog
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition">
            contact
          </Link>
        </div>


        <a
          href="https://www.linkedin.com/in/sara-radojicic/"
          className="hover:text-gray-300 ml-2 transition"
        >
          in
        </a>

        
        <div
          className="
            sm:hidden flex-1
            flex justify-center gap-3
            max-[400px]:text-[13px]
          "
        >
          <Link href="/about">about</Link>
          <Link href="/portfolio">portfolio</Link>
          <Link href="/more">blog</Link>
          <Link href="/contact">contact</Link>
        </div>

      </div>
    </nav>
  );
}
