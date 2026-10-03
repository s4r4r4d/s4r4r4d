'use client';
import { motion } from 'framer-motion';
import Chart from './Chart'; 
import Experience from './Experience';
import Skills from './Skills';
import MoreAboutMe from './Information';
import Image from 'next/image';

export default function SimpleGallery() {

  return(
    <div className="min-h-screen border-b border-b-[#dddddd] pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 border-b border-b-[#dddddd]">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-start py-5">
          <motion.div 
            className="mx-auto py-20"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#333333]">about.</h1>
            <p className="text-[#757575] text-base sm:text-lg mt-1 mb-10 font-light max-w-prose">
              I&apos;m an automation developer based in Ljubljana - a small green capital tucked between the Alps and the Adriatic.
            </p>
            <div className="text-[#333333] text-base sm:text-lg font-light max-w-prose space-y-6">
              <p>
                I started in frontend development because I liked writing code that solved real business problems - and most of all, building interfaces that were easy to use.
              </p>
              <p>
                These days I automate those tasks instead - software robots and AI agents for large enterprises. Businesses get more productive when their teams focus on decisions, exceptions and judgment instead of manual work.
              </p>
              <p className="font-medium">
                I build the systems that make that possible.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="w-full max-w-[18rem] sm:max-w-xs mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/ContactImage.png"   
              alt="Profile"
              width={500}              
              height={300}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>  
      <Chart/>
      <Experience/>
      <Skills/>
      <MoreAboutMe/>
    </div>
  )
}