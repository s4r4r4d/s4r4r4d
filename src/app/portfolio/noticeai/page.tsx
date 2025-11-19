'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import WorldMapAnimation from '@/app/components/WorldMapAnimation';
import { Line } from 'recharts';
import LineAnimation from '@/app/components/LineAnimation';

export default function NoticeAi() {
  return (
    <div className="min-h-screen py-10 bg-white">
 
      <motion.div 
        className="w-full border-b border-b-[#dddddd]"
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
              <h1 className="text-3xl font-normal text-[#333333] leading-tight mb-6">
                AI-powered platform for discovering <br></br> public notices across Europe.
              </h1>
              <div className="relative mb-8">
                <div className="w-full h-px bg-[#dddddd]" />
                <div className="flex justify-between mt-3">
                  <span className="text-[#666666] text-lg font-light">NoticeAI</span>
                  <span className="text-[#666666] text-lg font-light">January 2025</span>
                </div>
              </div>
              <p className="text-[#333333] text-lg font-light leading-relaxed max-w-xl">
                A friend and I developed <span className="font-medium">NoticeAI</span>, an
                AI-powered platform that automatically scrapes and filters public procurement
                notices. It helps businesses discover relevant tenders faster by classifying and
                prioritizing opportunities based on custom criteria.
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
<div className="border-b border-b-[#dddddd] py-5">
     <motion.div
          className="max-w-6xl mx-auto px-8 py-20 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-row items-center justify-start mb-6">
  <h2 className="text-2xl font-semibold text-[#333333] mr-2">
    Lightbulb moment
  </h2>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-[#333333]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
    />
  </svg>
</div>

          <p className="text-[#333333] text-lg font-light leading-relaxed">
            Finding public procurement opportunities across the EU shouldn't be this hard. The data is out there — it's publicly available — but it's disconnected across dozens of government portals, each with its own format and outdated search tools. Businesses spend hours digging through irrelevant notices, and by the time they find something relevant, they've already missed the deadline. Transparency on paper, but chaos in practice.

          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
            I realized this was a perfect use case for AI-powered classification and filtering. By building a scraper that could automatically collect procurement notices and categorize and prioritize them based on custom business criteria, we could turn an inefficient manual process into an intelligent, automated system. After validating the concept with several business owners who confirmed they'd actively use such a platform, we moved forward with development.
          </p>
        </motion.div>
</div>
      
      {/* Swiper Carousel Section */}
      
       {/* Swiper Carousel Section */}
<motion.div 
  className="w-full bg-[#fafafa] py-28 border-b border-gray-200 relative"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-5xl mx-auto px-8 mb-16">
    <div className="flex flex-row items-center justify-center">
      <h2 className="text-2xl font-semibold text-[#333333] mr-2 mb-10">
        UI highlights
        <LineAnimation className="w-30 h-10 -mt-1"/>
      </h2>
    </div>
  </div>
  
  <div className="max-w-6xl mx-auto px-8">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="pb-16"
    >
      <SwiperSlide>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img 
            src="/listofnotices.png" 
            className="w-full h-auto rounded-lg object-contain block shadow-lg border border-gray-200 bg-white" 
          />
          <img 
            src="/proj1.png" 
            className="w-full h-auto rounded-lg object-contain block shadow-lg border border-gray-200 bg-white" 
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img
            src="/noticeslisted.png"
            alt="NoticeAI notices listed"
            className="w-full h-auto rounded-lg object-contain block shadow-lg border border-gray-200 bg-white"
          />
          <img
            src="/testimonials.png"
            alt="NoticeAI testimonials"
            className="w-full h-auto rounded-lg object-contain block shadow-lg border border-gray-200 bg-white"
          />
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          <img
            src="/categoriespage.png"
            alt="NoticeAI categories page"
            className="w-full h-auto rounded-lg object-contain block shadow-lg border border-gray-200 bg-white"
          />
          <img
            src="/smartsearchy.png"
            alt="NoticeAI categories page"
            className="w-full h-auto rounded-lg object-contain block shadow-lg border border-gray-200 bg-white"
          />
        </div>
      </SwiperSlide>
    </Swiper>
    
    {/* Slide indicators */}
    <div className="flex justify-center gap-2 mt-8">
      <div className="w-2 h-2 rounded-full bg-[#333333]"></div>
      <div className="w-2 h-2 rounded-full bg-[#dddddd]"></div>
      <div className="w-2 h-2 rounded-full bg-[#dddddd]"></div>
    </div>
  </div>
  
  {/* Custom Navigation Arrows - kept as you requested */}
  <motion.div 
    className="custom-prev absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 cursor-pointer text-[#666666] bg-white border border-[#dddddd] hover:bg-[#f5f5f5] rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-10"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.4 }}
    whileHover={{ scale: 1.1 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  </motion.div>

  <motion.div 
    className="custom-next absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 cursor-pointer text-[#666666] bg-white border border-[#dddddd] hover:bg-[#f5f5f5] rounded-full w-10 h-10 flex items-center justify-center shadow-sm z-10"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.4 }}
    whileHover={{ scale: 1.1 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  </motion.div>
</motion.div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-8 py-20">

        {/* Context-aware Search Section */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">
            Context-aware search, instant results
          </h2>
          <p className="text-[#333333] text-lg font-light leading-relaxed">
            Our smart search doesn't just match keywords — it understands context. Start typing a single letter and watch as results load dynamically in real-time, intelligently categorized by relevance. Whether you're searching by industry, region, or budget, the system understands the contextual meaning behind your query and displays the most relevant tenders immediately. It's search that actually understands what you're looking for.
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
            Full-stack architecture
          </h2>
          <p className="text-[#333333] text-lg font-light leading-relaxed">
           The frontend was built with Next.js and React, with TypeScript helping us catch bugs early and keep the codebase organized as the project grew.
To keep the app fast even as the database grew, we optimized data loading and search behavior — making sure users always got immediate, relevant results without stressing the backend. 
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
           For authentication, we used Keycloak to handle user registration, login, and token management. The backend runs on FastAPI and Python, handling the scraping of EU procurement portals, structuring the data, and delivering relevant search results quickly. Everything ran inside Docker containers for consistency, with PostgreSQL managing data storage and complex filtering.
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
           On the design side, we used TailwindCSS and Chakra UI to keep the interface fast, accessible, and consistent. Framer Motion added subtle animations that made the search experience feel smooth and natural.
          </p>
        </motion.div>
         <motion.div
          className="max-w-3xl pt-20 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#333333] mb-6">
            Designed for Clarity
          </h2>
          <p className="text-[#333333] text-lg font-light leading-relaxed">
          Once users land on the search page, they can quickly scan through notices and immediately see what matters most — the country, publication date, and how close each deadline is.
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
          The interface was designed to make these details visually clear at a glance, without needing to open every notice.
          </p>
          <p className="text-[#333333] text-lg font-light leading-relaxed mt-4">
         When a user finds one that fits, a single click opens all the key information in a clean, readable layout. From there, they can either visit the official source page or download the notice PDF directly to their computer.
          </p>
          <div className="flex py-10 flex-row">
        <p className="text-[#333333] text-lg font-normal leading-relaxed mt-4">
         Searching through public tenders has never felt this simple — or this fast. Click <u>here</u> to view this project on my github.
      <img
                  src="/github.png"
                  alt="github"
                  className="w-5 h-5 inline-block ml-2 mb-1 object-contain"
                />
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}