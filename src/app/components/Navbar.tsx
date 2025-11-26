'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div
        className="
          max-w-7xl mx-auto w-full
          flex items-center justify-between gap-4
          px-4 sm:px-8 py-4

          /* phones under 400px */
          max-[400px]:px-2
          max-[400px]:py-3
        "
      >
        {/* Logo */}
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
              className="
                w-11 h-11 mt-1.5
                max-[400px]:w-7 max-[400px]:h-7
              "
              priority
            />
          </div>
        </Link>

        {/* LINKS + IN together */}
        <div
          className="
            flex items-center gap-6

            /* THIS makes it centered on very small screens */
            max-[400px]:flex-1
            max-[400px]:justify-center
            max-[400px]:gap-3
          "
        >
          <Link href="/about" className="hover:text-gray-300 transition text-white max-[400px]:text-[13px]">
            about
          </Link>
          <Link href="/portfolio" className="hover:text-gray-300 transition text-white max-[400px]:text-[13px]">
            portfolio
          </Link>
          <Link href="/more" className="hover:text-gray-300 transition text-white max-[400px]:text-[13px]">
            blog
          </Link>
          <Link href="/contact" className="hover:text-gray-300 transition text-white max-[400px]:text-[13px]">
            contact
          </Link>

          {/* “in” stays tight to contact */}
          <a
            href="https://www.linkedin.com/in/sara-radojicic/"
            className="hover:text-gray-300 transition ml-1 max-[400px]:ml-0 max-[400px]:text-[13px]"
          >
            in
          </a>
        </div>
      </div>
    </nav>
  );
}
