'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import LineAnimation from '@/app/components/LineAnimation';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic'] 
});
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

export default function Rituals() {
  const [selectedImage, setSelectedImage] = useState<{
  src: string;
  alt: string;
} | null>(null);



  return (
    <div className="min-h-screen py-10 bg-white">
 
      <motion.div 
        className="w-full border-b border-b-[#dddddd]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-3xl mx-auto  font-normal text-[#333333] leading-tight mb-6">
                A skincare e-commerce platform frontend built with Vue.js
              </h1>
              <div className="relative mb-8">
                <div className="w-full h-px bg-[#dddddd]" />
                <div className="flex justify-between mt-3">
                  <span className="text-[#666666] text-lg font-light">Rituals</span>
                  <span className="text-[#666666] text-lg font-light">June 2025</span>
                </div>
              </div>
              <p className="text-[#333333] text-lg font-light leading-relaxed max-w-xl">
                A skincare e-commerce platform frontend built with <span className="font-medium">Vue.js & TypeScript.</span> 
                Designed and implemented the complete user journey - from browsing and filtering products to managing the shopping cart and checkout process.
                The design aesthetic - warm tones, high-quality visuals and elegant typography is built to reflect the brand's luxurious and calming identity.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center lg:justify-end items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="w-[280px] sm:w-[400px] md:w-[500px]"> 
        
                
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

    
      
   
      <motion.div 
        className="w-full bg-[#fafafa] py-12 sm:py-28 border-b border-gray-200 relative"
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
                  { name: 'Primary', hex: '#e9e8e1' },
                  { name: 'Light Beige', hex: '#f2f3ee' },
                  { name: 'Dark Green', hex: '#3f4a3d' },
                  { name: 'Text Light', hex: '#a0a0a0' },
                  { name: 'Borders', hex: '#DDDDDD'},
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

            {/* Typography + Components Grid */}
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left - Typography */}
              <div className="flex-1">
                <h4 className="text-lg font-medium text-[#333333] mb-6">Typography</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#8B7355] pl-6 py-4">
                    <p className="text-3xl font-semibold text-[#333333] mb-2">Heading 1</p>
                    <p className="text-sm text-[#666666]">32px / Font Weight: 600 / Line Height: 1.2</p>
                  </div>
                  <div className="border-l-4 border-[#8B7355] pl-6 py-4">
                    <p className="text-2xl font-semibold text-[#333333] mb-2">Heading 2</p>
                    <p className="text-sm text-[#666666]">24px / Font Weight: 600 / Line Height: 1.3</p>
                  </div>
                  <div className="border-l-4 border-[#8B7355] pl-6 py-4">
                    <p className="text-lg text-[#333333] font-normal mb-2">Body Text Regular</p>
                    <p className="text-sm text-[#666666]">18px / Font Weight: 400 / Line Height: 1.6</p>
                  </div>
                  <div className="border-l-4 border-[#8B7355] pl-6 py-4">
                    <p className="text-lg text-[#333333] font-light mb-2">Body Text Light</p>
                    <p className="text-sm text-[#666666]">18px / Font Weight: 300 / Line Height: 1.6</p>
                  </div>
                </div>
              </div>

              {/* Right - Component Grid */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-lg font-medium text-center text-[#333333] mb-6">Iconography</h4>
                <div className="grid grid-cols-2 gap-3 auto-rows-max sm:py-20">
                  {photos.map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-full h-32 flex justify-center items-center">
                        <Image
                          src={photo}
                          alt={`Component ${index + 1}`}
                          width={80}
                          height={80}
                          className={`w-20 h-20 rounded-full object-cover ${
                            index === 0 ? '' : 'border-2 border-[#3f4a3d]'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-[100rem] mx-auto px-8 py-20">

        {/* UI in action - Five Images with Modal */}
        <motion.div
          className="max-w-8xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
         <h2 className="text-2xl text-center font-semibold text-[#333333] mb-16">
            UI Highlights
            <LineAnimation className="w-30 h-10 -mt-1"/>
          </h2>

          {/* Five Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {uiImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative w-full h-auto"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg shadow-sm border border-[#dddddd] cursor-pointer hover:shadow-lg transition-shadow"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-2xl font-light hover:text-gray-300"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}

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
            The high contrast between carefully chosen colors creates what psychologists call "processing fluency" - the easier something is to visually understand, the more trustworthy it feels. This specific contrast ratio reduces cognitive load, allowing users to focus on purchasing, not processing.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">
            Strategic design engineered to sell
          </h2>
          <p className="text-[#333333] text-lg font-light leading-relaxed">
            Once users land on the product page, they can quickly scan and immediately see what matters most — the product details, pricing, and benefits at a glance.
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
            The interface was designed to make these details visually clear without needing to dig through information.
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
            When a user finds a product they like, a single click adds it to their cart and the checkout process feels inevitable, not forced.
          </p>
          <div className="flex py-10 flex-row">
            <p className="text-[#333333] text-lg font-normal leading-relaxed mt-4">
             Click 
              <a
              href="https://github.com/s4r4r4d"
              target="_blank"
              rel="noopener noreferrer">
              <u> here </u>
              </a>
               to view this project on my github.
              <Image
                src="/github.png"
                alt="github"
                width={20}
                height={20}
                className="w-5 h-5 inline-block ml-2 mb-1 object-contain"
              />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}