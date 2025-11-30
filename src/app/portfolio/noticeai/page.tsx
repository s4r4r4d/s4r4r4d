'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import WorldMapAnimation from '@/app/components/WorldMapAnimation';
import LineAnimation from '@/app/components/LineAnimation';
import { useState } from 'react';
  const galleryImages = [
    { 
      thumbnail: '/thumbnail5.png', // Thumbnail image
      fullscreen: '/listofnotices.png', // Modal image
      alt: 'List of notices'
    },
    { 
      thumbnail: '/b.png',
      fullscreen: '/proj1.png',
      alt: 'NoticeAI project showcase',

    },
    { 
      thumbnail: '/thumbnail2.png',
      fullscreen: '/noticeslisted.png',
      alt: 'NoticeAI notices listed'
    },
    { 
      thumbnail: '/c.png',
      fullscreen: '/testimonials.png',
      alt: 'NoticeAI testimonials'
    },
    { 
      thumbnail: '/smartsearchy.png',
      fullscreen: '/smartsearchy.png',
      alt: 'NoticeAI smart search'
    },
  ];

export default function NoticeAi() {
 const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);



  return (
    <div className="min-h-screen py-10 bg-white">
 
      <motion.div 
        className="w-full border-b border-b-border-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-3xl font-normal text-text-primary leading-tight mb-6">
                AI-powered platform for discovering <br></br> public notices across Europe.
              </h1>
              <div className="relative mb-8">
                <div className="w-full h-px bg-border-light" />
                <div className="flex justify-between mt-3">
                  <span className="text-text-secondary text-lg font-light">NoticeAI</span>
                  <span className="text-text-secondary text-lg font-light">January 2025</span>
                </div>
              </div>
              <p className="text-text-primary text-lg font-light leading-relaxed max-w-xl">
                A friend and I developed <span className="font-medium">NoticeAI</span>, an
                AI-powered platform that scrapes and filters public procurement
                notices. It helps businesses discover relevant tenders faster by classifying and
                prioritizing opportunities based on custom criteria. Built with Next.js, Python & used Keycloak for user authentication.
              </p>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center lg:justify-end items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="w-[280px] sm:w-[400px] md:w-[500px]"> 
                <WorldMapAnimation />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Design System Section */}
      <motion.div 
        className="w-full bg-background-main py-28 border-b border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl text-center font-semibold text-text-primary mb-16">
            Design System
            <LineAnimation className="w-30 h-10 -mt-1"/>
          </h2>

          {/* Design System Content */}
          <div>
            {/* Color Palette */}
            <div className="mb-16">
              <h4 className="text-lg font-medium text-text-primary mb-6">Color Palette</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: 'Primary Color', hex: 'noticeai-primary' },
                  { name: 'Light Gray', hex: 'noticeai-dark-gray' },
                  { name: 'Secondary Color', hex: 'noticeai-secondary' },
                  { name: 'Light Text', hex: 'noticeai-light-text' },
                  { name: 'Borders', hex: 'noticeai-borders'},
                ].map((color) => (
                  <div key={color.hex} className="flex flex-col">
                    <div
                      className={`w-full h-24 rounded-lg shadow-sm border border-border-medium mb-3 bg-${color.hex}`}
                    />
                    <p className="text-text-primary font-medium text-sm">{color.name}</p>
                    <p className="text-text-secondary text-xs">{color.hex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography + Components Grid */}
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left - Typography */}
              <div className="flex-1">
                <h4 className="text-lg font-medium text-text-primary mb-6">Typography</h4>
                <div className="space-y-6">
                  <div className="border-l-4 border-noticeai-primary pl-6 py-4">
                    <p className="text-3xl font-semibold text-text-primary mb-2">Heading 1</p>
                    <p className="text-sm text-text-secondary">32px / Font Weight: 600 / Line Height: 1.2</p>
                  </div>
                  <div className="border-l-4 border-noticeai-primary pl-6 py-4">
                    <p className="text-2xl font-semibold text-text-primary mb-2">Heading 2</p>
                    <p className="text-sm text-text-secondary">24px / Font Weight: 600 / Line Height: 1.3</p>
                  </div>
                  <div className="border-l-4 border-noticeai-primary pl-6 py-4">
                    <p className="text-lg text-text-primary font-normal mb-2">Body Text Regular</p>
                    <p className="text-sm text-text-secondary">18px / Font Weight: 400 / Line Height: 1.6</p>
                  </div>
                  <div className="border-l-4 border-noticeai-primary pl-6 py-4">
                    <p className="text-lg text-text-primary font-light mb-2">Body Text Light</p>
                    <p className="text-sm text-text-secondary">18px / Font Weight: 300 / Line Height: 1.6</p>
                  </div>
                </div>
              </div>

              {/* Right - Components */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-lg font-medium text-center text-text-primary mb-6">Components</h4>
                <div className="space-y-2">
                  <div className="py-10 rounded-3xl ">
                    <button className="px-8 rounded-full bg-noticeai-primary font-thin py-3 hover:bg-noticeai-primary/80 text-white ring-1 ring-white/15  transition ">
                      Primary Button
                    </button>
                  </div>
                  <div className="rounded-3xl ">
                    <button className="px-8 py-3 rounded-full bg-noticeai-dark-gray backdrop-blur-sm  text-white  hover:bg-noticeai-dark-gray/80 border border-[#3a3a3a]  font-thin transition">
                      Secondary Button
                    </button>
                  </div>
                  
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbulb Moment Section */}
      <div className="border-b border-b-border-light py-5">
        <motion.div
          className="max-w-6xl mx-auto px-8 py-20 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-row items-center justify-start mb-6">
            <h2 className="text-2xl font-semibold text-text-primary mr-2">
              Lightbulb moment
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>

          <p className="text-text-primary text-lg font-light leading-relaxed">
            Finding public notices across the EU shouldn't be this hard. The data is out there — it's publicly available — but it's disconnected across dozens of government portals, each with its own format and outdated search tools. Businesses spend hours digging through irrelevant notices, and by the time they find something relevant, they've already missed the deadline. 
          </p>
          <p className="text-text-primary text-lg font-light leading-relaxed mt-4">
            I realized this was a perfect use case for AI-powered classification and filtering. By building a scraper that could collect procurement notices and categorize and prioritize them based on your search context, we could turn an inefficient manual process into an intelligent, automated system.        </p>
        </motion.div>
      </div>

      {/* Gallery Section - Modal Style */}
      <div className="max-w-[100rem] mx-auto px-8 py-20 bg-background-main  border-b border-border-medium">
        {/* UI Highlights */}
        <motion.div
          className="max-w-8xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl text-center font-semibold text-text-primary mb-16">
            UI Highlights
            <LineAnimation className="w-30 h-10 -mt-1"/>
          </h2>

          {/* Five Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            {galleryImages.map((x, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="relative w-full h-48 rounded-lg overflow-hidden shadow-sm border border-border-light cursor-pointer hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage(x)}
                >
                  <Image
                    src={x.thumbnail}
                    alt={x.alt}
                    fill
                    className="object-cover "
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
                src={selectedImage.fullscreen}
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
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* Context-aware Search Section */}
        <motion.div
          className="max-w-3xl mx-auto "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            Context-aware search, instant results
          </h2>
          <p className="text-text-primary text-lg font-light leading-relaxed">
            Our smart search doesn't just match keywords — it understands context. Start typing a single letter and watch as results load dynamically in real-time, intelligently categorized by relevance. Whether you're searching by industry, region, or budget, the system understands the contextual meaning behind your query and displays the most relevant tenders immediately. It's search that actually understands what you're looking for.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl pt-20 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            Designed for Clarity
          </h2>
          <p className="text-text-primary text-lg font-light leading-relaxed">
            Once users land on the search page, they can quickly scan through notices and immediately see what matters most — the country, publication date, and how close each deadline is.
          </p>
          <p className="text-text-primary text-lg font-light leading-relaxed mt-4">
            When a user finds one that fits, a single click opens all the key information in a clean, readable layout. From there, they can either visit the official source page or download the notice PDF directly to their computer.
          </p>
          <div className="flex py-10 flex-row">
            <p className="text-text-primary text-lg font-normal leading-relaxed mt-4">
              Searching through public tenders has never felt this simple — or this fast. Click 
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