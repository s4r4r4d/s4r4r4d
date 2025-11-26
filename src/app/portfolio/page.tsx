'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LatestWork from '../components/LatestWork';

export default function SimpleGallery() {
  return (
    <div className="min-h-screen border-b border-b-[#dddddd] pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-8 border-b border-b-[#dddddd]">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-start py-5">

          {/* TEXT SECTION */}
          <motion.div
            className="mx-auto py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-7xl font-semibold mb-6 text-[#333333]">portfolio.</h1>
            <p className="text-[#757575] text-lg mt-1 mb-10 font-light">
              Check out some of my latest product design&development <br /> case studies.
            </p>
            <span className="text-[#333333] text-lg font-light">
              Over the years, I've worked across different projects using React and Vue.js,<br />
              adopted TypeScript (game-changer for catching bugs), became fluent in TailwindCSS, <br />
              and started building with Next.js. It's been 2 years of constant learning and actual production code.
            </span>
          </motion.div>

          {/* IMAGE – hidden on phones */}
          <motion.div
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
          </motion.div>

        </div>
      </div>
      <LatestWork />
    </div>
  );
}
