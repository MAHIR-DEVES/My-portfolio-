import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../assets/banner.png';
import { FaFacebook, FaNodeJs, FaReact, FaXTwitter } from 'react-icons/fa6';
import { BsGithub } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import {
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import { FaWhatsapp } from 'react-icons/fa';

const Banner = () => {
  // Image animation variants
  const imageAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Glow effect animation
  const glowAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: [0.1, 0.2, 0.1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/8801310520842', '_blank');
  };

  // Floating tech icons animation
  const techIcons = [
    {
      icon: <SiNextdotjs className="text-gray-400" />,
      position: 'top-0 left-0',
    },
    {
      icon: <FaReact className="text-blue-400" />,
      position: 'bottom-0 right-0',
    },

    {
      icon: <FaNodeJs className="text-blue-500" />,
      position: 'bottom-0 left-0',
    },
    {
      icon: <SiTypescript className="text-blue-500" />,
      position: 'top-0 right-0',
    },
  ];

  return (
    <section id="banner">
      <div className="bg-[#0d1321] text-white py-8 mt-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col-reverse items-center gap-8 lg:gap-12 xl:gap-16 md:flex-row">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300">
              Hello, I'm
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
              MD Meherab Hossen
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-300">
              <span>I am a </span>
              <span className="text-blue-500">
                <Typewriter
                  words={[
                    'Frontend Developer',
                    'Backend Developer',
                    'React Developer',
                    'Next.js Developer',
                    'MERN Stack Developer',
                    'Full Stack Developer',
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
              I'm a passionate developer from Bangladesh specializing in
              creating beautiful, functional websites and web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                <a href="/Final Resume.pdf" download>
                  {' '}
                  Download Resume
                </a>
              </motion.button>

              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
              >
                <FaWhatsapp className="text-lg" /> {/* WhatsApp icon */}
                Contact Me
              </motion.button>
            </div>
            <div className="flex items-center gap-5 pt-4">
              {[
                {
                  icon: <FaFacebook />,
                  color: 'text-blue-400',
                  border: 'border-blue-400',
                  hoverBg: 'hover:bg-blue-400',
                  hoverText: 'hover:text-[#0d1321]',
                  hoverShadow: 'hover:shadow-blue-400/30',
                  link: 'https://www.facebook.com/meherab.hossen.7568',
                },
                {
                  icon: <BsGithub />,
                  color: 'text-gray-300',
                  border: 'border-gray-300',
                  hoverBg: 'hover:bg-gray-300',
                  hoverText: 'hover:text-[#0d1321]',
                  hoverShadow: 'hover:shadow-gray-300/30',
                  link: 'https://github.com/MAHIR-DEVES',
                },
                {
                  icon: <LiaLinkedin />,
                  color: 'text-blue-500',
                  border: 'border-blue-500',
                  hoverBg: 'hover:bg-blue-500',
                  hoverText: 'hover:text-[#0d1321]',
                  hoverShadow: 'hover:shadow-blue-500/30',
                  link: 'https://www.linkedin.com/in/md-meherab-07565a26b/',
                },
                {
                  icon: <FaXTwitter />,
                  color: 'text-gray-300',
                  border: 'border-gray-300',
                  hoverBg: 'hover:bg-gray-300',
                  hoverText: 'hover:text-[#0d1321]',
                  hoverShadow: 'hover:shadow-gray-300/30',
                  link: 'https://x.com/Mdmeher25341474',
                },
              ].map((item, index) => (
                <motion.button
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-full bg-[#0d1321] border-2 ${item.color} ${item.border} ${item.hoverBg} ${item.hoverText} transition-all duration-300 hover:shadow-lg ${item.hoverShadow}`}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {React.cloneElement(item.icon, { className: 'w-5 h-5' })}
                  </a>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Animated Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <motion.div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <motion.img
                src={banner}
                alt="Meherab Hossen"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-500/20"
                variants={imageAnimation}
              />

              <motion.div
                className="absolute -inset-3 sm:-inset-4 bg-blue-500/10 rounded-full -z-10"
                variants={glowAnimation}
              />

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${tech.position} text-3xl`}
                  animate={{
                    y: [0, -10, 0],
                    transition: {
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.3,
                    },
                  }}
                >
                  {tech.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
