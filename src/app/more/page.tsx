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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mt-10 text-[#333333] mb-4">
            Developer who understands the "why" behind the code
          </h1>
          <p className="text-xl text-[#757575] font-light mb-8">
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
            <p className="text-[#333333] font-medium">Sara Radojicic</p>
            <p className="text-[#999999] text-xs">November 2026</p>
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
          <div className="bg-[#fafafa]">
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
          <p className="text-lg text-[#666666] font-light leading-relaxed mb-6">
            I believe great software starts with understanding people's needs.
          </p>

          

          <h2 className="text-2xl font-semibold text-[#333333] mt-12 mb-4">
            Building with purpose.
          </h2>
          <p className="text-lg text-[#666666] font-light leading-relaxed mb-6">
            This mindset comes from my unique path - a bachelor&apos;s in information technology, and now a master&apos;s in business informatics, taught me to see technology through a business lens.<br></br>
            That is why I quite often ask myself: How does this help the business grow? What problem does this solve for users?<br></br>
            This perspective has made me a better developer and a more valuable teammate.
          </p>

          <h2 className="text-2xl font-semibold text-[#333333] mt-12 mb-4">
            Where I'm headed
          </h2>
          <p className="text-lg text-[#666666] font-light leading-relaxed mb-6">
            The intersection of business and technology. I enjoy building and leading, and I 
            lean toward product and project management roles, where my technical expertise 
            meets my strength in building good relationships with people and businesses. I 
            want to help{' '}
            <motion.span
              initial={{ backgroundSize: '0% 6px' }}
              whileInView={{ backgroundSize: '100% 6px' }}
              viewport={{ once: true, amount: 0.9 }}
              transition={{ duration: 0.8, ease: [0.3, 0.9, 0.4, 1], delay: 0.3 }}
              style={{
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 6' preserveAspectRatio='none'><path d='M1 3.4 C 45 2.2 90 4.4 134 3 C 162 2.1 182 3.5 199 2.6' stroke='%23D1514A' stroke-width='1.1' fill='none' stroke-linecap='round'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 100%',
                paddingBottom: '4px',
                boxDecorationBreak: 'clone',
                WebkitBoxDecorationBreak: 'clone',
              }}
            >
              shape both the product and the team behind it
            </motion.span>
            .
          </p>
          <p className="text-lg text-[#666666] font-light leading-relaxed">
            If you're working on something where this mindset would be valuable, I'd love to 
            <Link href="/contact"> <u>hear about it.</u></Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}