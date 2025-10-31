'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const designerTextRef = useRef<HTMLDivElement>(null);
  const coderTextRef = useRef<HTMLDivElement>(null);
  const designerImageRef = useRef<HTMLDivElement>(null);
  const coderImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const percentage = (e.clientX / window.innerWidth) * 100;

      if (leftHalfRef.current) {
        leftHalfRef.current.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      }

      if (rightHalfRef.current) {
        rightHalfRef.current.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
      }

      // Designer fades when going RIGHT (to coder side)
      if (designerTextRef.current) {
        designerTextRef.current.style.opacity = String(percentage / 100);
      }
      if (designerImageRef.current) {
        designerImageRef.current.style.opacity = String(percentage / 100);
      }

      // Coder fades when going LEFT (to designer side)
      if (coderTextRef.current) {
        coderTextRef.current.style.opacity = String(1 - percentage / 100);
      }
      if (coderImageRef.current) {
        coderImageRef.current.style.opacity = String(1 - percentage / 100);
      }
       console.log(designerImageRef.current)
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col pt-6 bg-white items-center justify-center w-full min-h-screen">

      <div className="flex items-center justify-center relative">

        <div ref={designerTextRef} className="text-center transition-opacity duration-100">
          <h2 className="text-5xl font-semibold text-[#333333] mb-2">designer</h2>
          <p className="text-[#333333] text-base max-w-xs">
            Product designer specialising in UI design and design systems.
          </p>
        </div>

        {/* Center Image */}
        <div className="relative w-150 h-150  rounded-lg z-10">
          {/* Behind image - lower z-index */}
          <div 
            ref={designerImageRef}
            className="absolute inset-0 transition-opacity duration-100 z-0"
            style={{ 
            transform: 'translateX(-60px)',
            width: '400px',  
            height: '400px', 
            top: '50%',      
            left: '50%',    
            marginTop: '-100px',  
            marginLeft: '-250px'  
        }}
            
            
          >
            <img
              src="/colours.png"
              alt="Designer work"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div
            ref={leftHalfRef}
            className="absolute inset-0 w-full h-full z-20"
            style={{
              clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
            }}
          >
            <img
              src="/portrait-colored-fixed.png"
              alt="Designer"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            ref={rightHalfRef}
            className="absolute inset-0 w-full h-full z-20"
            style={{
              clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
            }}
          >
            <img
              src="/sara.png"
              alt="Coder"
              className="w-full h-full object-cover"
              style={{ transform: 'translateY(-22px)' }}
            />
          </div>
        </div>

        <div ref={coderTextRef} className="text-center transition-opacity duration-100">
          <h2 className="text-5xl font-semibold text-[#333333] mb-2">&lt;developer&gt;</h2>
          <p className="text-[#333333] text-base font-normal max-w-xs">
            Front end developer who writes clean, elegant and efficient code.
          </p>
        </div>
      </div>
    </div>
  );
}