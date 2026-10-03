'use client';

import { motion } from 'framer-motion';

type N = { x: number; y: number; r: number; l: string[] };

export default function Skills() {
  const hubs: { l: string[]; x: number; y: number; r: number }[] = [
    { l: ['interfaces'], x: 299.6, y: 360, r: 33.2 },
    { l: ['project', 'management'], x: 684.6, y: 360, r: 34.2 },
    { l: ['automation'], x: 480, y: 207.5, r: 32.3 },
    { l: ['delivery'], x: 480, y: 534.8, r: 34.2 },
  ];

  const kids: N[] = [
    { x: 201, y: 259.6, r: 23.8, l: ['Vue.js'] }, { x: 256.8, y: 244.7, r: 19.9, l: ['React'] },
    { x: 312.6, y: 261.4, r: 22.8, l: ['Next.js'] }, { x: 364.7, y: 246.5, r: 19.9, l: ['Nuxt'] },
    { x: 201, y: 462.3, r: 26.6, l: ['TypeScript'] }, { x: 260.5, y: 477.2, r: 26.6, l: ['JavaScript'] },
    { x: 314.5, y: 456.7, r: 21.8, l: ['Angular'] }, { x: 366.5, y: 469.7, r: 19.9, l: ['Figma'] },

    { x: 636.2, y: 255.8, r: 29.4, l: ['communicate', 'with clients'] }, { x: 736.7, y: 255.8, r: 23.8, l: ['consulting'] },
    { x: 636.2, y: 467.9, r: 29.4, l: ['knowing what', 'to automate'] }, { x: 736.7, y: 469.7, r: 29.4, l: ['gathering', 'requirements'] },

    { x: 375.8, y: 114.5, r: 25.6, l: ['Power', 'Automate'] }, { x: 433.5, y: 103.3, r: 19, l: ['PAD'] },
    { x: 483.7, y: 105.2, r: 19, l: ['n8n'] }, { x: 533.9, y: 116.3, r: 21.8, l: ['Python'] },
    { x: 586, y: 103.3, r: 19, l: ['RPA'] },
    { x: 392.6, y: 207.5, r: 19, l: ['RAG'] }, { x: 573, y: 207.5, r: 23.8, l: ['agentic', 'AI'] },

    { x: 418.6, y: 627.8, r: 31.3, l: ['running on', 'production'] }, { x: 541.4, y: 627.8, r: 31.3, l: ['maintaining it', 'on production'] },
    { x: 385.1, y: 534.8, r: 25.6, l: ['delivering', 'solo'] }, { x: 580.4, y: 534.8, r: 24.7, l: ['full', 'lifecycle'] },
  ];

  const arms = [
    { t: 'visibility', x: 383.3, y: 362.8 },
    { t: 'context', x: 589.7, y: 362.8 },
    { t: 'execution', x: 480, y: 280 },
    { t: 'ownership', x: 480, y: 455.8 },
  ];

  const node = (n: N, stroke: string, size: number) => (
    <g key={`${n.x}-${n.y}`}>
      <circle cx={n.x} cy={n.y} r={n.r} fill="#FFFFFF" stroke={stroke} strokeWidth={stroke === '#333333' ? 1.5 : 1} />
      {n.l.map((ln, i) => (
        <text key={ln} x={n.x} y={n.y + 2.8 + (i - (n.l.length - 1) / 2) * 9.5}
              textAnchor="middle" fontSize={size} fill={stroke === '#333333' ? '#333333' : '#666666'}>{ln}</text>
      ))}
    </g>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#fafafa] border-t border-gray-200 py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="font-semibold text-right text-xl sm:text-2xl md:text-3xl mb-3 text-[#333333]">
          Complementary skills
        </h2>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">

        <div className="hidden md:block w-full">
          <svg viewBox="170 80 620 586" className="w-full h-auto" role="img"
               aria-label="Skill map: end to end process ownership at the centre, with interfaces, communication, automation and delivery on four labelled arms.">
            <g stroke="#D4D4D4" strokeWidth="1" fill="none">
              <line x1="435.4" y1="360" x2="332.1" y2="360" />
              <line x1="524.6" y1="360" x2="653.9" y2="360" />
              <line x1="480" y1="315.4" x2="480" y2="239.1" />
              <line x1="480" y1="404.6" x2="480" y2="501.4" />

              <line x1="299.6" y1="327.4" x2="299.6" y2="309.8" /><line x1="201" y1="309.8" x2="364.7" y2="309.8" />
              <line x1="201" y1="309.8" x2="201" y2="282.8" /><line x1="256.8" y1="309.8" x2="256.8" y2="264.2" />
              <line x1="312.6" y1="309.8" x2="312.6" y2="283.7" /><line x1="364.7" y1="309.8" x2="364.7" y2="266.1" />
              <line x1="299.6" y1="392.6" x2="299.6" y2="410.2" /><line x1="202.9" y1="410.2" x2="366.5" y2="410.2" />
              <line x1="202.9" y1="410.2" x2="202.9" y2="438.1" /><line x1="258.7" y1="410.2" x2="258.7" y2="451.1" />
              <line x1="314.5" y1="410.2" x2="314.5" y2="435.3" /><line x1="366.5" y1="410.2" x2="366.5" y2="450.2" />

              <line x1="684.6" y1="326.5" x2="684.6" y2="304.2" /><line x1="636.2" y1="304.2" x2="736.7" y2="304.2" />
              <line x1="636.2" y1="304.2" x2="636.2" y2="284.7" /><line x1="736.7" y1="304.2" x2="736.7" y2="279.1" />
              <line x1="684.6" y1="393.5" x2="684.6" y2="415.8" /><line x1="636.2" y1="415.8" x2="736.7" y2="415.8" />
              <line x1="636.2" y1="415.8" x2="636.2" y2="439.1" /><line x1="736.7" y1="415.8" x2="736.7" y2="440.9" />

              <line x1="480" y1="175.9" x2="480" y2="161" /><line x1="375.8" y1="161" x2="586" y2="161" />
              <line x1="375.8" y1="161" x2="375.8" y2="139.6" /><line x1="433.5" y1="161" x2="433.5" y2="121.9" />
              <line x1="483.7" y1="161" x2="483.7" y2="123.8" /><line x1="533.9" y1="161" x2="533.9" y2="137.7" />
              <line x1="586" y1="161" x2="586" y2="121.9" />
              <line x1="448.4" y1="207.5" x2="411.2" y2="207.5" /><line x1="511.6" y1="207.5" x2="549.8" y2="207.5" />

              <line x1="480" y1="568.3" x2="480" y2="581.3" /><line x1="418.6" y1="581.3" x2="541.4" y2="581.3" />
              <line x1="418.6" y1="581.3" x2="418.6" y2="597.1" /><line x1="541.4" y1="581.3" x2="541.4" y2="597.1" />
              <line x1="446.5" y1="534.8" x2="411.2" y2="534.8" /><line x1="513.5" y1="534.8" x2="556.3" y2="534.8" />
            </g>

            {[
              { t: 'frameworks', x: 338.6, y: 312.6 },
              { t: 'stack', x: 340.5, y: 413 },
              { t: 'clients', x: 662.3, y: 307 },
              { t: 'analysis', x: 662.3, y: 418.6 },
              { t: 'tooling', x: 560, y: 163.8 },
              { t: 'operations', x: 510.7, y: 584.1 },
            ].map((g) => (
              <g key={g.t}>
                <rect x={g.x - g.t.length * 2.1 - 4} y={g.y - 8} width={g.t.length * 4.2 + 8} height={11} fill="#FAFAFA" />
                <text x={g.x} y={g.y} textAnchor="middle" fontSize="6.7" fill="#B0B0B0">{g.t}</text>
              </g>
            ))}

            {arms.map((a) => (
              <g key={a.t}>
                <rect x={a.x - a.t.length * 2.6 - 5} y={a.y - 10} width={a.t.length * 5.2 + 10} height={14} fill="#FAFAFA" />
                <text x={a.x} y={a.y} textAnchor="middle" fontSize="8" fill="#999999">{a.t}</text>
              </g>
            ))}

            {kids.map((n) => node(n, '#D8D8D8', 7.6))}
            {hubs.map((h) => node({ x: h.x, y: h.y, r: h.r, l: h.l }, '#333333', 8.6))}

            <circle cx="480" cy="360" r="45.6" fill="#333333" />
            <text x="480" y="352.6" textAnchor="middle" fontSize="9" fill="#FFFFFF">end to end</text>
            <text x="480" y="363.7" textAnchor="middle" fontSize="9" fill="#FFFFFF">process</text>
            <text x="480" y="374.9" textAnchor="middle" fontSize="9" fill="#FFFFFF">ownership</text>
          </svg>
        </div>
        </div>

        <div className="md:hidden space-y-6">
          <p className="text-xs text-[#999999] font-light">
            end to end process ownership
          </p>
          {[
            { h: 'automation', tag: 'execution', items: ['Power Automate', 'PAD', 'n8n', 'Python', 'RPA', 'RAG', 'agentic AI'] },
            { h: 'project management', tag: 'context', items: ['communicate with clients', 'consulting', 'knowing what to automate', 'gathering requirements'] },
            { h: 'interfaces', tag: 'visibility', items: ['Vue.js', 'React', 'Next.js', 'Nuxt', 'TypeScript', 'JavaScript', 'Angular', 'Figma'] },
            { h: 'delivery', tag: 'ownership', items: ['delivering solo', 'full lifecycle', 'running on production', 'maintaining it on production'] },
          ].map((b) => (
            <div key={b.h} className="border-t border-gray-200 pt-4">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-sm font-medium text-[#333333]">{b.h}</span>
                <span className="text-xs text-[#AAAAAA] font-light">{b.tag}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {b.items.map((i) => (
                  <span key={i} className="text-xs text-[#666666] border border-gray-200 rounded-full px-3 py-1 bg-white">
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
