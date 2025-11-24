'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Chart from './Chart'; 
import Experience from './Experience';
import Skills from './Skills';
import MoreAboutMe from './Information';
import Image from 'next/image';

export default function SimpleGallery() {
  const galleryImages = [
    '/gallery2.jpg',
    '/gallery3.jpeg',
    '/gallery4.jpeg',
    '/gallery5.jpg',
    '/gallery6.jpeg',
  ];

  return(
    <div className="min-h-screen border-b border-b-[#dddddd] pt-5 bg-white">
      <div className="max-w-7xl mx-auto px-8 border-b border-b-[#dddddd]">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-start py-5">
          <motion.div 
            className="mx-auto py-20"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-7xl font-semibold text-[#333333]">about.</h1>
            <p className="text-[#757575] text-lg mt-1 mb-10 font-light">
              I'm a front-end developer based in Ljubljana - a small green capital tucked <br/>between the Alps and the Adriatic.
            </p>
            <span className="text-[#333333] text-lg font-light">Since 2021, I've enjoyed turning complex problems<br/> into simple, beautiful and intuitive designs.
              When I'm not<br/> pushing pixels, you'll find me cooking, working out or reading.
            </span>
          </motion.div>
          <motion.div 
            className="w-80 mx-auto"
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
      <div className="flex items-center justify-center gap-10 flex-wrap py-12">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative w-36 h-36 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut"}}
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 144px"
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      <Chart/>
      <Experience/>
      <Skills/>
      <MoreAboutMe/>
    </div>
  )
}