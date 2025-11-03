'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function Experience(){
    return(
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                     className="flex-1"
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity:1, x:0 }}
                     viewport={{ once: true}}
                     transition={{ duration: 0.8 }}
                     >
                    <h2 className="text-4xl font-semibold text-[#333333]">
                        My experience
                    </h2>
                    <p className="text-md text-[#666666] mt-4 leading-relaxed mb-4">
                       For nearly 2 years, I have been working as a frontend developer at Slovenian IT company SRC d.o.o. <br/>From user experience analysis, system design to developing the UI of a web app for accessing documents, at SRC I have gained valuable hands-on experience and insight into the whole development process—from idea to deployment.
                    </p>
                    <p className="text-md font-light text-[#666666]">
                        I have also documented the entire development process in my graduation thesis, available to <u>read here</u>.
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
                </div>
            </div>
        </section>
    )
}