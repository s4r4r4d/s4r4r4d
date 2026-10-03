'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LatestWork from '../components/LatestWork';

export default function SimpleGallery() {
  return (
    <div className="min-h-screen border-b border-b-[#dddddd] pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-start py-5">

          {/* TEXT SECTION */}
          <motion.div
            className="w-full min-w-0 sm:w-auto mx-auto py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 text-[#333333]">portfolio.</h1>
            <p className="text-[#757575] text-base sm:text-lg mt-1 mb-10 font-light max-w-prose">
              Automation, agents, and the interfaces around them.
            </p>
            <span className="text-[#333333] text-base sm:text-lg font-light max-w-prose inline-block">
              Most of what I build at work runs inside client systems and cannot be shown. What
              follows is the shape of it instead: how a process ran before, what I automated, and
              what I deliberately left to people. Alongside that, the agents and interfaces I build
              in my own time.
            </span>
          </motion.div>

          {/* IMAGE – hidden on phones */}
          {/* <motion.div
            className="hidden sm:block w-80 mx-auto"     // ONLY visible on sm and up
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Image
              src="/hello-whitebg.png"
              alt="Profile"
              width={500}
              height={400}
              className="w-full py-24 h-auto"
              priority
            />
          </motion.div> */}

        </div>
      </div>
      <LatestWork />
    </div>
  );
}
