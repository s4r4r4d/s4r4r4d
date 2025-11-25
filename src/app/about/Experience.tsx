'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
export default function Experience(){
    const images = [
        {src: '/sc1.png', rotate: -12, zIndex: 3},
        {src: '/sc2.png', rotate: 5, zIndex: 6},
        {src: '/sc3.png', rotate: -20, zIndex: 10},
        {src: '/sc4.png', rotate: -18, zIndex: 4},
        {src: '/sc5.png', rotate: 10, zIndex: 2},
        {src: '/sc6.png', rotate: -38, zIndex: 3},
        {src: '/sc7.png', rotate: -10, zIndex: 1},
    ];

    return(
        <section className="w-full bg-white  py-20">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                     className="flex-2"
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity:1, x:0 }}
                     viewport={{ once: true}}
                     transition={{ duration: 0.8 }}
                     >
                    <h2 className="text-4xl mb-10 font-semibold text-[#333333]">
                        My experience
                    </h2>
                    <p className="text-md text-[#666666] mt-4 leading-relaxed mb-4">
                       For nearly 2 years, I have been working as a frontend developer at Slovenian IT company SRC d.o.o. <br/>From user experience analysis, system design to developing the UI of a web app for accessing documents, at SRC I have gained valuable hands-on experience and insight into the whole development process—from idea to deployment.
                    </p>
                    <p className="text-md font-light text-[#666666]">
                        I have also documented the entire development process in my graduation thesis, available to <a href="/graduation_thesis.pdf" download="Sara_Radojicic_Thesis.pdf"><u>read here</u></a>.
                    </p>
                    </motion.div>

                    <motion.div
                    className="flex-1"
                    initial = {{ opacity: 0, x:30 }}
                    whileInView={{ opacity:1, x: 0}}
                    viewport = {{ once: true }}
                    transition = {{ duration: 0.8, delay: 0.2 }}
                    >
                    </motion.div>
            <div className="flex-1 relative h-96 flex items-center sm: py-30 sm: mb-10 justify-center">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="absolute w-64 h-80 shadow-xl rounded-lg overflow-hidden"
                style={{ zIndex: img.zIndex, rotate: `${img.rotate}deg` }}
                initial={{ opacity: 0, scale: 1.0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.3 }}
              >
                <Image
  src={img.src}
  alt=""
  width={800}
  height={600}
  className="w-full h-full object-cover"
/>

              </motion.div>
            ))}
          </div>
                   
                </div>
            </div>
        </section>
    )
}