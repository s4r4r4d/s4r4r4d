'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

export default function SkillsChart() {
  const skills = [
    { name: 'javascript', value: 80, color: '#4BC6B9' },
    { name: 'typescript', value: 83, color: '#EF8354' },
    { name: 'vue.js', value: 85, color: '#EE4B6A' },
    { name: 'next.js', value: 67, color: '#DF3B57' },
    { name: 'angular', value: 30, color: '#0F7173' },
    { name: 'figma', value: 20, color: '#7fd1b9' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.2}}
      className="bg-[#fafafa] border-t border-gray-200 pb-36 py-20"
    >
      <div className="max-w-5xl h-[400px] mx-auto px-8 rounded-2xl">
        <h2 className="font-semibold text-right text-4xl mb-6 text-[#333]">My Skills</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={skills} margin={{ top: 20, right: 20, left: 40, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: '#666', fontSize: 14 }} />
            <YAxis
              domain={[0, 100]}
              ticks={[25, 50, 75, 100]}
              tickFormatter={(value) => {
                if (value === 25) return 'Beginner';
                if (value === 50) return 'Intermediate';
                if (value === 75) return 'Advanced';
                if (value === 100) return 'Expert';
                return '';
              }}
              tick={{
                fill: '#666',
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
            />
          
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {skills.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
