import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const SkillSection = () => {
  const skillCategories = [
    {
      name: 'MERN Stack',
      skills: [
        {
          name: 'MongoDB',
          icon: <SiMongodb className="w-full h-full" />,
          level: 90,
        },
        {
          name: 'Express',
          icon: <SiExpress className="w-full h-full" />,
          level: 85,
        },
        {
          name: 'React',
          icon: <FaReact className="w-full h-full" />,
          level: 95,
        },
        {
          name: 'Node.js',
          icon: <FaNodeJs className="w-full h-full" />,
          level: 88,
        },
      ],
      color: 'from-purple-500 to-blue-500',
    },
    {
      name: 'Frontend',
      skills: [
        {
          name: 'JavaScript',
          icon: <SiJavascript className="w-full h-full" />,
          level: 95,
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="w-full h-full" />,
          level: 90,
        },
        {
          name: 'Next.js',
          icon: <TbBrandNextjs className="w-full h-full" />,
          level: 80,
        },
      ],
      color: 'from-blue-400 to-cyan-400',
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit className="w-full h-full" />, level: 85 },
        {
          name: 'VS Code',
          icon: (
            <div className="w-full h-full flex items-center justify-center text-lg">
              {}VS
            </div>
          ),
          level: 95,
        },
      ],
      color: 'from-amber-500 to-yellow-400',
    },
  ];

  return (
    <div className="bg-[#0d1321] text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0d1321]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`mb-6 text-center py-2 bg-gradient-to-r ${category.color} rounded-lg`}
              >
                <h3 className="text-xl font-semibold text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.03 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                      <span className="ml-auto text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MERN Stack Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="text-center mb-4">
            <span className="text-lg text-gray-300">Specialized in</span>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800">
            <div className="flex items-center gap-1 text-blue-400">
              <SiMongodb className="text-2xl" />
              <span>MongoDB</span>
            </div>
            <div className="text-gray-500">|</div>
            <div className="flex items-center gap-1 text-green-500">
              <SiExpress className="text-2xl" />
              <span>Express</span>
            </div>
            <div className="text-gray-500">|</div>
            <div className="flex items-center gap-1 text-cyan-400">
              <FaReact className="text-2xl" />
              <span>React</span>
            </div>
            <div className="text-gray-500">|</div>
            <div className="flex items-center gap-1 text-green-600">
              <FaNodeJs className="text-2xl" />
              <span>Node.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSection;
