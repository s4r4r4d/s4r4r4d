'use client';
import { PieChart, Pie, Cell } from 'recharts';
import { motion } from 'framer-motion';

export default function DesignerCoderChart() {
  const data = [
    { name: 'designer', value: 20 },
    { name: 'developer', value: 80 }
  ];
  const designerSkills = [
    'UI design',
    'UX design',
    'Figma',
    'Interaction design',
    '"Making it pop"'
  ];
  
  const coderSkills = [
    'Front-end development',
    'TailwindCSS',
    'JavaScript',
    'Typescript',
    'Vue.js',
    'React',
    'Next.js'
  ];

  return (
    <section className="w-full bg-background-main border-t border-b border-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-right"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-text-primary mb-6">UI/UX design</h2>
            <ul className="space-y-2 sm: text-left text-text-secondary">
              {designerSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="w-96 h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PieChart width={384} height={384}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={180}
                endAngle={-180}
                innerRadius={0}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                label={({ name }) => name}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#B8B8B8' : '#3F3F3F'} />
                ))}
              </Pie>
            </PieChart>
          </motion.div>

          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold text-text-primary mb-6">development</h2>
            <ul className="space-y-2 text-text-secondary">
              {coderSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}