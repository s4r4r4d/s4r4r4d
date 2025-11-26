'use client';
import Link from 'next/link';
import packageJson from '../../../package.json';

const version = packageJson.version;
export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f5] border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-8">
  
        <div className="flex items-center justify-between mb-8">
          <p className="text-[#757575] font-light text-sm">© {new Date().getFullYear()} Sara Radojicic<br></br>v{packageJson.version}</p>
          
        
          <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm">
            <Link href="/about" className="text-[#757575] hover:text-gray-800 text-sm font-light transition">about</Link>
             <Link href="/portfolio" className="text-[#757575] hover:text-gray-800 text-sm font-light transition">portfolio</Link>
            <Link href="/more" className="text-[#757575] hover:text-gray-800 text-sm font-light transition">blog</Link>
            <Link href="/contact" className="text-[#757575] hover:text-gray-800 text-sm font-light transition">contact</Link>
          </div>
        </div>
<div className="flex relative justify-center group">
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="absolute bottom-25"
  >
    <div className="w-32 h-16 border-t border-gray-200 rounded-t-full flex items-center bg-[#f5f5f5] justify-center cursor-pointer  group-hover:translate-y-1 transition-all duration-300">
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