'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function MoreAboutMe(){
  return(
    <section className="w-full bg-white py-20 border-t mx-auto  border-gray-200">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">
          

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

         <Image
  src="/gallery2.jpg"
  alt="A clean and modern workspace with a laptop, a notebook, and a cup of coffee."
  width={320}   
  height={320}  
  className="rounded-lg shadow-lg w-80 h-80"
/>
            
        
            <Image
  src="/sara.png"
  alt="A portrait of Sara Radojicic."
  width={112}   
  height={112}   
  className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-28 h-28 rounded-full border-white shadow-2xl object-cover"
/>
          </motion.div>


          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl mb-6 font-semibold text-text-primary">
              My story
            </h2>
            <p className="font-normal text-text-secondary leading-relaxed mb-6">
              Learn a little bit more about me - how I got into tech, and how I'm building my career as a front-end developer. I've included key things I've learned, my educational path, and the direction I want to develop professionally in the future.
            </p>
            <Link href="/more" className="text-text-primary font-light underline hover:text-text-secondary transition">
              Read my story
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}