import React from 'react';
import {
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDribbble,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1321] border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-0 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaCode className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Meherab Hossain
              </span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Crafting digital experiences with precision and passion. Let's
              build the future together, one line of code at a time.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Navigation</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Home', 'About', 'Work', 'Skills', 'Projects', 'Contact'].map(
                item => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 text-sm font-medium group flex items-center space-x-1"
                  >
                    <span>{item}</span>
                    <FaExternalLinkAlt className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Let's Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@yourdomain.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <span className="text-sm">mdmeherab657@gamil.com</span>
              </a>

              {/* Social Platforms */}
              <div className="flex space-x-3 pt-2">
                {[
                  {
                    icon: FaGithub,
                    color: 'hover:bg-gray-700',
                    name: 'GitHub',
                  },
                  {
                    icon: FaLinkedin,
                    color: 'hover:bg-blue-600',
                    name: 'LinkedIn',
                  },
                  {
                    icon: FaTwitter,
                    color: 'hover:bg-blue-400',
                    name: 'Twitter',
                  },
                  {
                    icon: FaDribbble,
                    color: 'hover:bg-pink-500',
                    name: 'Dribbble',
                  },
                ].map(platform => (
                  <a
                    key={platform.name}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${platform.color} transform hover:-translate-y-1`}
                    aria-label={platform.name}
                  >
                    <platform.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} All rights reserved</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <FaHeart className="w-3 h-3 text-red-400" />
                <span>by Meherab Hossain</span>
              </span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-xs">Based in Your Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
