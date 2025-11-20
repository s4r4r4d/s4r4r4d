'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Line } from 'recharts';
import LineAnimation from '@/app/components/LineAnimation';
import { Playfair_Display } from 'next/font/google';
import { useState } from 'react';
import Hero from '@/app/components/Hero';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'] 
});

export default function Rituals() {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    '/checklist.png',
    '/growth.png',
    '/leaves.png',
    '/transport.png',
  ];

  const uiImages = [
    { src: '/rituals1.png', alt: 'Add to cart interface' },
    { src: '/rituals2.png', alt: 'Natural formula component' },
    { src: '/shopcart.png', alt: 'Shop cart section' },
    { src: '/mightlike.png', alt: 'Product details page' },
    { src: '/faqs.png', alt: 'Checkout process' } 
  ];

  return (
    <div className="min-h-screen py-10 bg-white">
 
      <motion.div 
        className="w-full border-b border-b-[#dddddd]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto pt-16">
          <div className="flex flex-col  justify-between items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-3xl font-normal text-[#333333] leading-tight mb-6">
                Portfolio Design representing Dual Nature
              </h1>
              <div className="relative mb-8">
                <div className="w-full h-px bg-[#dddddd]" />
                <div className="flex justify-between mt-3">
                  <span className="text-[#666666] text-lg font-light">Portfolio</span>
                  <span className="text-[#666666] text-lg font-light">November 2025</span>
                </div>
              </div>
              <p className="text-[#333333] text-lg font-light leading-relaxed max-w-xl">
                This project showcases my ability to blend design and development seamlessly. Crafted with Next.js and TailwindCSS, the portfolio reflects my dual expertise as both a UX specialist and a coder. Built with React, Typescript & Next.js.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center lg:justify-end items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
        
        
               <Hero/>
      
             
             
            </motion.div>
          </div>
        </div>
      </motion.div>

      
   
      <motion.div 
        className="w-full bg-[#fafafa] pt-16  border-b border-gray-200 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-8 mb-20">
          <h2 className="text-2xl text-center font-semibold text-[#333333] mb-16">
            Design System
            <LineAnimation className="w-30 h-10 -mt-1"/>
          </h2>

          {/* Design System Content */}
          <div>
            {/* Color Palette */}
            <div className="mb-16">
              <h4 className="text-lg font-medium text-[#333333] mb-6">Color Palette</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: 'Teal Mist', hex: '#5f8c8a' },
                  { name: 'Brick Rouge', hex: '#ab3131' },
                  { name: 'Golden Sand', hex: '#e0af7b' },
                  { name: 'Rose Smoke', hex: '#d28e90' },
                  { name: 'Fog Blue', hex: '#a7c1c0'},
                ].map((color) => (
                  <div key={color.hex} className="flex flex-col">
                    <div
                      className="w-full h-24 rounded-lg shadow-sm border border-[#eeeeee] mb-3"
                      style={{ backgroundColor: color.hex }}
                    />
                    <p className="text-[#333333] font-medium text-sm">{color.name}</p>
                    <p className="text-[#666666] text-xs">{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>

      
          
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-[100rem] mx-auto px-8 pt-16">

  
        {/* Every pixel serves a purpose Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">
            Every pixel serves a purpose
          </h2>
          <p className="text-[#333333] text-lg font-light leading-relaxed">
          
  Built with <span className="font-medium">Next.js</span>, this portfolio takes advantage of modern web practices — from server-side rendering and static generation to optimized image delivery and route transitions. My inspiration came from minimalist, content-driven portfolios where performance and clarity matter as much as aesthetics. <br/> <br/>
  I follow clean code principles, keeping every component reusable, accessible, and maintainable. Each animation or interaction serves a purpose — to guide attention, not distract it.
</p>

          
        </motion.div>

      </div>
    </div>
  );
}