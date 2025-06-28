import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="bg-[#0d1321] text-white py-5 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Contact Icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-[#0d1321]/80 rounded-xl border border-gray-800">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-900/30 flex items-center justify-center mt-1">
                <FiMail className="text-blue-400 text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-blue-300">
                  Email
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  For professional inquiries
                </p>
                <a
                  href="mailto:mdmeherab657@gmail.com"
                  className="text-white hover:text-blue-400 transition-colors break-all text-sm sm:text-base"
                >
                  mdmeherab657@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-[#0d1321]/80 rounded-xl border border-gray-800">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-900/30 flex items-center justify-center mt-1">
                <FiPhone className="text-purple-400 text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-purple-300">
                  Phone
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  Call or text me directly
                </p>
                <a
                  href="tel:+880 1310530842"
                  className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base"
                >
                  +880 1310530842
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-[#0d1321]/80 rounded-xl border border-gray-800">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-900/30 flex items-center justify-center mt-1">
                <FaWhatsapp className="text-green-400 text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-green-300">
                  WhatsApp
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  For quick messages
                </p>
                <a
                  href="https://wa.me/8801310520842"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-400 transition-colors text-sm sm:text-base"
                >
                  +880 1310530842
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-[#0d1321]/80 rounded-xl border border-gray-800">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#4361ee]/30 flex items-center justify-center mt-1">
                <BsLinkedin className="text-[#4cc9f0] text-xl sm:text-2xl" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 text-[#4cc9f0]">
                  LinkedIn
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-2">
                  Professional network
                </p>
                <a
                  href="https://www.linkedin.com/in/md-meherab-07565a26b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4cc9f0] transition-colors text-sm sm:text-base"
                >
                  https://www.linkedin.com/in/md-meherab-07565a26b/
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-[#0d1321]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center text-white">
              Send Me a Message
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 text-sm sm:text-base"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 sm:py-3 bg-[#0d1321] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 text-sm sm:text-base"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 sm:py-3 bg-[#0d1321] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 text-sm sm:text-base"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hello, I'd like to discuss..."
                  rows="4"
                  className="w-full px-4 py-2 sm:py-3 bg-[#0d1321] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
