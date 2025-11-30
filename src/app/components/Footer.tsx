'use client';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="w-full bg-background-footer border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-8">
  
        <div className="flex items-center justify-between mb-8">
          <p className="text-text-light font-light text-sm">© 2025 Sara Radojicic</p>
          
        
          <div className="flex gap-8">
            <Link href="/about" className="text-text-light hover:text-gray-800 text-sm font-light transition">about</Link>
             <Link href="/portfolio" className="text-text-light hover:text-gray-800 text-sm font-light transition">portfolio</Link>
            <Link href="/more" className="text-text-light hover:text-gray-800 text-sm font-light transition">blog</Link>
            <Link href="/contact" className="text-text-light hover:text-gray-800 text-sm font-light transition">contact</Link>
          </div>
        </div>
<div className="flex relative justify-center group">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="absolute bottom-25"
  >
    <div className="w-32 h-16 border-t border-gray-200 rounded-t-full flex items-center bg-background-footer justify-center cursor-pointer  group-hover:translate-y-1 transition-all duration-300">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-600 size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>
    </div>
  </button>
</div> 
      </div>
    </footer>
  );
}