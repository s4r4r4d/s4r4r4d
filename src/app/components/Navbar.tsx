'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black h-23 text-white z-50">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-11 h-11 mt-1.5"/>
          </div>
        </Link>
        
        <div className="flex gap-8 items-center">
          <Link href="/about" className="hover:text-gray-300 transition">about</Link>
          <a href="#portfolio" className="hover:text-gray-300 transition">portfolio</a>
          <a href="#blog" className="hover:text-gray-300 transition">blog</a>
          <Link href="/contact" className="hover:text-gray-300 transition">contact</Link>
        </div>
        
        <div className="flex gap-6 items-center">
          <a href="https://www.linkedin.com/in/sara-radojicic-110360383/" className="hover:text-gray-300 transition">in</a>
        </div>
      </div>
    </nav>
  );
}