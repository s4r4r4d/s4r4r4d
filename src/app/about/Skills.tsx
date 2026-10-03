'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const branches = [
    {
      h: 'automation',
      tag: 'execution',
      items: ['Power Automate', 'PAD', 'n8n', 'Python', 'RPA', 'RAG', 'agentic AI'],
    },
    {
      h: 'project management',
      tag: 'context',
      items: ['communicate with clients', 'consulting', 'gathering requirements'],
    },
    {
      h: 'interfaces',
      tag: 'visibility',
      items: ['Vue.js', 'React', 'Next.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Angular', 'Figma'],
    },
    {
      h: 'delivery',
      tag: 'ownership',
      items: ['owning delivery', 'full lifecycle', 'running on production', 'maintaining it on production'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#fafafa] border-t border-gray-200 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="font-semibold text-right text-xl sm:text-2xl md:text-3xl mb-3 text-[#333333]">
          Complementary skills
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <p className="text-xs sm:text-sm text-[#999999] font-light">
          end to end process ownership
        </p>

        <div className="mt-6 space-y-6">
          {branches.map((b) => (
            <div key={b.h} className="border-t border-gray-200 pt-5">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-sm sm:text-base font-medium text-[#333333]">{b.h}</span>
                <span className="text-xs sm:text-sm text-[#AAAAAA] font-light">{b.tag}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {b.items.map((i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm text-[#666666] border border-gray-200 rounded-full px-3 py-1 bg-white"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
