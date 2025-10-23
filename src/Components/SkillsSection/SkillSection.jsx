import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaNetworkWired } from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiMongoose,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiJson,
  SiFigma,
} from 'react-icons/si';
import { IoLogoFirebase } from 'react-icons/io5';

const SkillSection = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6" /> },
        { name: 'React', icon: <FaReact className="w-6 h-6" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" /> },
        { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
        { name: 'Firebase', icon: <IoLogoFirebase className="w-6 h-6" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6" /> },
      ],
      color: 'border-blue-500',
    },
    {
      name: 'Backend',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" /> },
        { name: 'Mongoose', icon: <SiMongoose className="w-6 h-6" /> },
        { name: 'MySQL', icon: <SiMysql className="w-6 h-6" /> },
        { name: 'Express', icon: <SiExpress className="w-6 h-6" /> },
        { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" /> },
        { name: 'RESTful API', icon: <FaNetworkWired className="w-6 h-6" /> },
      ],
      color: 'border-purple-500',
    },
    {
      name: 'Tools',
      skills: [
        { name: 'Git', icon: <SiGit className="w-6 h-6" /> },
        { name: 'GitHub', icon: <SiGithub className="w-6 h-6" /> },
        { name: 'Postman', icon: <SiPostman className="w-6 h-6" /> },
        { name: 'Vercel', icon: <SiVercel className="w-6 h-6" /> },
        { name: 'Netlify', icon: <SiNetlify className="w-6 h-6" /> },
        { name: 'Figma', icon: <SiFigma className="w-6 h-6" /> },
      ],
      color: 'border-amber-500',
    },
  ];

  return (
    <section id="skill">
      <div className="bg-[#0d1321] text-white py-16 px-6 md:px-0">
        <div className="max-w-7xl mx-auto">
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
                className={`bg-[#0d1321]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-opacity-50 ${category.color} border-opacity-20`}
              >
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <div
                    className={`w-16 h-1 bg-gradient-to-r ${category.color
                      .replace('border', 'from')
                      .replace('-500', '-400')} to-${
                      category.color.replace('border-', '').split('-')[0]
                    }-600 mx-auto rounded-full`}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center justify-center p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
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
            className="mt-16 w-full"
          >
            <div className="text-center mb-6">
              <span className="text-lg text-gray-300">Specialized in</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {/* React */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 rounded-full border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300">
                <FaReact className="text-cyan-400 text-xl" />
                <span className="text-cyan-400 font-medium">React</span>
              </div>
              {/* Next.js */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 rounded-full border border-gray-500/30 hover:border-gray-500/60 transition-all duration-300">
                <SiNextdotjs className="text-gray-400 text-xl" />
                <span className="text-gray-400 font-medium">Next.js</span>
              </div>
              {/* TypeScript */}
              <div className="flex items-center gap-3 px-4 py-2 bg-gray-900/80 rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
                <SiTypescript className="text-blue-400 text-xl" />
                <span className="text-blue-400 font-medium text-sm sm:text-base">
                  TypeScript
                </span>
              </div>
              {/* MongoDB */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 rounded-full border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
                <SiMongodb className="text-blue-400 text-xl" />
                <span className="text-blue-400 font-medium">MongoDB</span>
              </div>

              {/* Mongoose */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 rounded-full border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <SiMongoose className="text-purple-400 text-xl" />
                <span className="text-purple-400 font-medium">Mongoose</span>
              </div>
              {/* MySQL */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 rounded-full border border-blue-600/30 hover:border-blue-600/60 transition-all duration-300">
                <SiMysql className="text-blue-500 text-xl" />
                <span className="text-blue-500 font-medium">MySQL</span>
              </div>

              {/* Node.js */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-900/80 rounded-full border border-green-600/30 hover:border-green-600/60 transition-all duration-300">
                <FaNodeJs className="text-green-500 text-xl" />
                <span className="text-green-500 font-medium">Node.js</span>
              </div>

              {/* Express */}
              <div className="flex items-center gap-3 px-6 py-3 bg-gray-800/70 rounded-full border border-gray-500 hover:bg-gray-700 hover:border-gray-400 transition-all duration-300">
                <SiExpress className="text-white text-xl" />
                <span className="text-white font-medium">Express</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
