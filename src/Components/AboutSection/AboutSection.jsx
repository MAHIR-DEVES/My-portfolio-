import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="bg-[#0d1321] text-white py-16 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Perfectly Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content Grid - Perfect Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-300">
              My Coding Journey
            </h3>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                My journey into programming began when I first discovered the
                magic of turning ideas into functional websites. What started as
                simple HTML pages has evolved into building full-stack
                applications with the MERN stack.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm particularly passionate about creating intuitive user
                interfaces that solve real problems while maintaining clean,
                efficient code that other developers can easily understand and
                build upon.
              </p>
            </div>
          </motion.div>
          {/* Beyond Coding */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-blue-300">
              Beyond Coding
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                When I'm not coding, you'll find me exploring new tech trends,
                reading sci-fi novels, or playing football with friends. I
                believe maintaining diverse interests fuels creativity in
                development.
              </p>
              <p className="leading-relaxed">
                My latest passion? Learning photography to better understand
                visual composition - which directly improves my UI design
                skills!
              </p>
            </div>
          </motion.div>

          {/* Right Column - Two Sections */}
          <div className="space-y-12">
            {/* What I Love Building */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-blue-300">
                What I Love Building
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    Interactive web applications with React and modern
                    JavaScript
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    Efficient backend systems with Node.js and Express
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    Responsive, accessible designs that work across all devices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">▹</span>
                  <span>
                    Projects that make a real difference in people's lives
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
