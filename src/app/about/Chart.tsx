'use client';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnalysisBuildChart() {
  const data = [
    { name: 'analysis', value: 40 },
    { name: 'engineering', value: 60 }
  ];
  const COLORS = ['#B8B8B8', '#3F3F3F'];

  // outside the pie on large screens, inside the slices on phones where there is no room
  const [outside, setOutside] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const sync = () => setOutside(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  const renderLabel = (props: {
    cx?: string | number; cy?: string | number; midAngle?: number;
    outerRadius?: string | number; name?: string; index?: number;
  }) => {
    const RADIAN = Math.PI / 180;
    const cx = Number(props.cx ?? 0);
    const cy = Number(props.cy ?? 0);
    const outer = Number(props.outerRadius ?? 0);
    const angle = Number(props.midAngle ?? 0);
    const r = outside ? outer + 16 : outer * 0.62;
    const dx = Math.cos(-angle * RADIAN);
    return (
      <text
        x={cx + r * dx}
        y={cy + r * Math.sin(-angle * RADIAN)}
        fill={outside ? '#666666' : props.index === 0 ? '#3F3F3F' : '#FFFFFF'}
        textAnchor={outside ? (dx >= 0 ? 'start' : 'end') : 'middle'}
        dominantBaseline="central"
        fontSize={13}
      >
        {props.name}
      </text>
    );
  };

  const analysisSkills = [
    'Process discovery',
    'Business & requirements analysis',
    'Product thinking',
    'Stakeholder workshops',
    'Scope & exception mapping',
    'Knowing what not to automate'
  ];

  const buildSkills = [
    'Power Automate Desktop',
    'Power Platform',
    'AI agents & LLM integration',
    'Error handling & idempotent design',
    'JavaScript / TypeScript',
    'Vue.js',
    'Python'
  ];

  return (
    <section className="w-full bg-[#fafafa] border-t border-b border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <motion.div
            className="flex-1 text-center lg:text-right"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#333333] mb-2">
              knowing what to automate
            </h2>
            <p className="text-sm text-[#999999] mb-6 font-light">
              the half that decides whether any of it was worth building
            </p>
            <ul className="space-y-2 text-[#666666]">
              {analysisSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  startAngle={180}
                  endAngle={-180}
                  innerRadius={0}
                  outerRadius={outside ? '70%' : '80%'}
                  fill="#8884d8"
                  dataKey="value"
                  label={renderLabel}
                  labelLine={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#333333] mb-2">
              building it
            </h2>
            <p className="text-sm text-[#999999] mb-6 font-light">
              software robots and agents that survive contact with the real world
            </p>
            <ul className="space-y-2 text-[#666666]">
              {buildSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
