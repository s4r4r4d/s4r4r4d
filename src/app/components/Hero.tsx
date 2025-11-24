'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const leftHalfRef = useRef<HTMLDivElement>(null);
  const rightHalfRef = useRef<HTMLDivElement>(null);
  const designerTextRef = useRef<HTMLDivElement>(null);
  const coderTextRef = useRef<HTMLDivElement>(null);
  const designerImageRef = useRef<HTMLDivElement>(null);
  const coderImageRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    // Initial animation on mount - sweep from left to right
    const animateInitial = async () => {
      await controls.start({
        clipPathProgress: 70,
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      });
      setHasAnimated(true);
    };

    animateInitial();
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasAnimated) return; // Don't allow mouse control until initial animation is done

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
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasAnimated]);

  return (
    <motion.div 
      className="flex flex-col bg-white items-center p-32 justify-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center relative">

        <motion.div 
          ref={designerTextRef} 
          className="text-center transition-opacity duration-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-semibold text-[#333333] mb-2">designer</h2>
          <p className="text-[#333333] font-light text-base max-w-xs">
            Product designer specialising in UI design and design systems.
          </p>
        </motion.div>

        {/* Center Image */}
        <div className="relative w-150 h-150 rounded-lg z-10">
          {/* Behind image - designer work */}
          <motion.div 
            ref={designerImageRef}
            className="absolute inset-0 transition-opacity duration-100 z-0"
            style={{ 
              width: '400px',  
              height: '400px', 
              top: '50%',      
              left: '50%',    
              marginTop: '-100px',  
              marginLeft: '-250px'  
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.5, x: -60 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          >
            <Image
              src="/colours.png"
              alt="Designer work"
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </motion.div>

          {/* Left half - colored portrait */}
          <motion.div
            ref={leftHalfRef}
            className="absolute inset-0 w-full h-full z-20"
            initial={{ clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/portrait-colored-fixed.png"
                alt="Designer"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right half - coder portrait */}
          <motion.div
            ref={rightHalfRef}
            className="absolute inset-0 w-full h-full z-20"
            initial={{ clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)' }}
            animate={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-full h-full"
              style={{ transform: 'translateY(-22px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src="/sara.png"
                alt="Coder"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          ref={coderTextRef} 
          className="text-center transition-opacity duration-100"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h2 className="text-5xl font-semibold text-[#333333] mb-2">
            <span className="font-semibold">frontend<br/>developer</span> 
          </h2>
          <p className="text-[#333333] text-base font-light max-w-xs">
            Front end developer who writes clean, elegant and efficient code.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}