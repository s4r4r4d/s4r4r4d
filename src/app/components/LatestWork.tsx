'use client';

import { motion } from 'framer-motion';

export default function LatestWork() {
  const projects = [
    {
      id: 1,
      title: 'UI/UX Design and Development',
      category: 'NoticeAI - Notice Scraping & Filtering Platform',
      image: '/proj1.png',
    },
    {
      id: 2,
      title: 'Portfolio Design & Development',
      category: 'Designer & Developer Next.js, React, Typescript Portfolio ',
      image: '/proj2.png',
    },
    {
      id: 3,
      title: 'Rituals Skincare Brand Website ',
      category: 'Creating and developing a lean design system',
      image: '/project3.png',
    },
  ];

  // Simple fade-in animation
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="w-full border-t border-t-[#dddddd] bg-[#fafafa] py-26">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div 
          className="flex items-center justify-center mb-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="text-center text-gray-500 text-sm tracking-widest whitespace-nowrap">
            SOME OF MY LATEST WORK
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
        >
          {projects.map((x) => (
            <div
              key={x.id}
              className="bg-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition group"
            >
              <div className="w-full h-50 bg-[#f2f3f5] p-5 overflow-hidden">
                <img
                  src={x.image}
                  alt={x.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-[#ffffff]">
                <h3 className="text-lg font-light text-[#353535] mb-2">
                  {x.title}
                </h3>
                <div className="flex items-center justify-center gap-2 group">
                  <p className="text-sm font-light text-[#747474]">{x.category}</p>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="size-8 text-[#e4e4e4] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}