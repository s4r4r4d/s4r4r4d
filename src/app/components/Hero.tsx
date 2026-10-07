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
  const [hasMoved, setHasMoved] = useState(false);
  const movedRef = useRef(false);
  const travelRef = useRef(0);
  const lastXRef = useRef<number | null>(null);

  const controls = useAnimation();

  useEffect(() => {
    const animateInitial = async () => {
      await controls.start({ transition: { duration: 2, ease: 'easeInOut' } });
      setHasAnimated(true);
    };
    animateInitial();
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasAnimated) return;
      if (window.innerWidth < 768) return; // phones have their own layout

      // retire the cue only once the cursor has actually been swept, not on
      // the first incidental twitch
      if (lastXRef.current !== null) {
        travelRef.current += Math.abs(e.clientX - lastXRef.current);
      }
      lastXRef.current = e.clientX;
      if (!movedRef.current && travelRef.current > 260) {
        movedRef.current = true;
        setHasMoved(true);
      }

      const percentage = (e.clientX / window.innerWidth) * 100;

      if (leftHalfRef.current) {
        leftHalfRef.current.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      }
      if (rightHalfRef.current) {
        rightHalfRef.current.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
      }
      if (designerTextRef.current) designerTextRef.current.style.opacity = String(percentage / 100);
      if (designerImageRef.current) designerImageRef.current.style.opacity = String(percentage / 100);
      if (coderTextRef.current) coderTextRef.current.style.opacity = String(1 - percentage / 100);
      if (coderImageRef.current) coderImageRef.current.style.opacity = String(1 - percentage / 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasAnimated]);

  return (
    <motion.div
      className="flex flex-col bg-white items-center justify-center w-full p-8 md:p-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* PHONES: the painted portrait, wiped in. No cursor here, so no split. */}
      <div className="flex flex-col items-center md:hidden py-6">
        <div className="relative w-full max-w-[18rem] aspect-square">
          {/* painted half */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <Image
                src="/portrait-colored-fixed.png"
                alt="Designer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* photo half */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
            animate={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
          >
            <div className="relative w-full h-full -translate-y-[3.7%]">
              <Image
                src="/sara.png"
                alt="Coder"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center text-center mt-5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
        >
          <h2 className="text-2xl font-normal text-[#333333] leading-tight">
            developer &amp; project manager
          </h2>
          <p className="text-[#757575] font-light text-sm max-w-xs mt-3">
            I build the automations, and I own the process around them end to end.
          </p>
        </motion.div>
      </div>

      {/* DESKTOP: the split portrait the cursor sweeps across */}
      <div className="hidden md:flex items-center justify-center relative">
        <motion.div
          ref={designerTextRef}
          className="text-center transition-opacity duration-100"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-semibold text-[#333333] mb-2">developer</h2>
          <p className="text-[#333333] font-light text-base max-w-xs">
            Software robots and AI agents that run business processes for large enterprises.
          </p>
        </motion.div>

        <div className="relative w-150 h-150 rounded-lg z-10">
          <motion.div
            ref={designerImageRef}
            className="absolute inset-0 transition-opacity duration-100 z-0"
            style={{
              width: '400px',
              height: '400px',
              top: '50%',
              left: '50%',
              marginTop: '-100px',
              marginLeft: '-250px',
            }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.5, x: -60 }}
            transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
          >
            <Image
              src="/colours.png"
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </motion.div>

          <motion.div
            ref={leftHalfRef}
            className="absolute inset-0 w-full h-full z-20"
            initial={{ clipPath: 'polygon(0 0, 0% 0, 0% 100%, 0 100%)' }}
            animate={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
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

          <motion.div
            ref={rightHalfRef}
            className="absolute inset-0 w-full h-full z-20"
            initial={{ clipPath: 'polygon(0% 0, 0% 0, 0% 100%, 0% 100%)' }}
            animate={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          >
            <motion.div
              className="relative w-full h-full -translate-y-[3.7%]"
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
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h2 className="text-5xl font-semibold text-[#333333] mb-2">
            <span className="font-semibold">
              project
              <br />
              manager
            </span>
          </h2>
          <p className="text-[#333333] text-base font-light max-w-xs">
            Working with the client to decide what to automate, then owning it to production.
          </p>
        </motion.div>
      </div>

      {/* cursor cue: appears once the intro wipe finishes, retires the moment it is used */}
      <motion.div
        className="hidden md:flex flex-col items-center gap-2 mt-4 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasMoved ? 0 : 1, y: hasMoved ? -4 : 0 }}
        transition={{ duration: 0.7, delay: hasMoved ? 0 : 2.1, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <div className="relative flex items-center justify-center w-[132px] h-[14px]">
          <span className="absolute inset-x-0 top-1/2 h-px bg-[#e6e6e6]" />
          <svg viewBox="0 0 6 10" className="absolute left-0 w-[5px] h-[9px]" fill="none"
               stroke="#cfcfcf" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 1 L1 5 L5 9" />
          </svg>
          <svg viewBox="0 0 6 10" className="absolute right-0 w-[5px] h-[9px]" fill="none"
               stroke="#cfcfcf" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 1 L5 5 L1 9" />
          </svg>
          <motion.span
            className="absolute w-[7px] h-[7px] rounded-full bg-[#9E3B37]"
            animate={{ x: [-46, 46, -46] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.18em] text-[#a8a8a8]">
          move your cursor
        </span>
      </motion.div>
    </motion.div>
  );
}
