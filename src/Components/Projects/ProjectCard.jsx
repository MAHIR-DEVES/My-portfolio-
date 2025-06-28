import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  // Safely destructure with fallbacks
  const {
    _id,
    name = 'Untitled Project',
    image = 'https://via.placeholder.com/600x400',
    description = 'No description available',

    liveLink,
    githubClient,
    githubServer,
    technologyStack = [],
  } = project || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#0d1321]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321]/90 to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title and Links */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-white">{name}</h2>
          <div className="flex gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
            {githubClient && (
              <a
                href={githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-5">{description}</p>

        {/* Features */}
        {/* {features.length > 0 && (
          <div className="mb-5">
            <h3 className="text-sm font-semibold text-blue-400 mb-2">
              KEY FEATURES
            </h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {/* Tech Stack */}
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-blue-400 mb-2">
            TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologyStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#0d1321] border border-gray-700 rounded-full text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {liveLink && (
            <Link
              to={liveLink}
              target="_blank"
              className="px-4 py-2 bg-blue-500/10 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors text-sm"
            >
              Live Demo
            </Link>
          )}
          {githubClient && (
            <Link
              to={githubClient}
              target="_blank"
              className="px-4 py-2 bg-purple-500/10 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors text-sm"
            >
              Client Code
            </Link>
          )}
          {githubServer && (
            <Link
              to={githubServer}
              target="_blank"
              className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors text-sm"
            >
              Server Code
            </Link>
          )}
          <Link
            to={`/projectDetails/${_id}`}
            className="px-4 py-2 bg-gray-700/50 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
