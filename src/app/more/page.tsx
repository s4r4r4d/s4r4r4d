'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryPage() {
  const photos = [
    '/setup.jpg',
    '/ul.jpg',
    '/coding.jpg',
    '/work.jpg',
    '/portrait-colored-fixed.png',
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-normal mt-10 text-text-primary mb-4">
            Developer who understands the "why" behind the code
          </h1>
          <p className="text-xl text-text-light font-light mb-8">
            Building software with business sense, not just technical skills.
          </p>
        </motion.div>

        <motion.div
          className="flex items-center border-gray-600 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/sara.png"
            alt="Sara Radojicic"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-gray-600 object-cover"
            priority
          />
          <div>
            <p className="text-text-primary font-medium">Sara Radojicic</p>
            <p className="text-[#999999] text-xs">November 2024</p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 grid-rows-2 gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src={photos[0]}
            alt="Photo 1"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={photos[1]}
            alt="Photo 2"
            width={300}
            height={600}
            className="w-full h-full row-span-2 object-cover rounded-lg"
          />
          <Image
            src={photos[2]}
            alt="Photo 3"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
          <Image
            src={photos[3]}
            alt="Photo 4"
            width={300}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="bg-background-main">
            <Image
              src={photos[4]}
              alt="Photo 5"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-text-secondary font-light leading-relaxed mb-6">
            I believe great software starts with understanding people's needs. As a front-end developer, I combine technical expertise with user-centered design to build application that make sense.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">
            Here's what I'll cover:
          </h2>
          <ul className="space-y-2 text-text-secondary mb-8">
            <li>• Education that shaped me to think in business metrics, not just technical specs</li>
            <li>• Building with purpose, not just pixels</li>
            <li>• Where I'm headed next</li>
          </ul>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">
            Building with purpose, not just pixels.
          </h2>
          <p className="text-lg text-text-secondary font-light leading-relaxed mb-6">
            This mindset comes from my unique path - studying organization of information systems and business informatics for my master's taught me to see technology through business lens.<br></br>
            Now, with 2+ years of hands-on experience as a developer I approach every project differently. When I'm building a feature, I'm not just thinking about clean code or smooth animations - I'm asking myself: How does this help business grow? What problem does this solve for users? 
            <br></br> This perspective has made me a better developer and a more valuable teammate.
          </p>
          <p className="text-lg text-text-secondary font-light leading-relaxed mb-6">
            I get genuinely excited when I can use both sides of my brain – when I'm not just coding 
            in isolation but understanding why users clicks where they click, what keeps them coming back, 
            and how my code can make their experience better. <br></br>Some of my favorite projects have been the 
            messy ones where I needed to dig into analytics, talk to actual users, and then build something 
            that solved real problems. That's when coding feels less like work and more like solving puzzles 
            that actually matter.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">
            What I do differently
          </h2>
          <p className="text-lg text-text-secondary font-light leading-relaxed mb-6">
            Need someone who can dive into your analytics, identify the real problem, bring everyone along, and then build it? That's where I thrive. I focus on outcomes that matter – the kind that show up in  KPIs, not just  git commits.
          </p>
          <p className="text-lg font-light text-text-secondary leading-relaxed mb-6">
            This isn't just about being a "good communicator." It's about solving the right 
            problems, not just solving problems right.
          </p>

          <h2 className="text-2xl font-semibold text-text-primary mt-12 mb-4">
            Where I'm headed
          </h2>
          <p className="text-lg text-text-secondary font-light leading-relaxed mb-6">
            I want to keep building at the intersection of business and technology. Whether 
            that's front-end development, product management, leading software projects or something in between, I'm 
            drawn to roles where understanding <b>both sides</b>is an advantage.
          </p>
          <p className="text-lg text-text-secondary font-light leading-relaxed">
            If you're working on something where this mindset would be valuable, I'd love to 
            <Link href="/contact"> <u>hear about it.</u></Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}