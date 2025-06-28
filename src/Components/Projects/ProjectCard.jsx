import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  // Safely destructure with fallbacks
  const {
    name = 'Untitled Project',
    image = 'https://via.placeholder.com/600x400',
    description = 'No description available',
    features,
    liveLink,
    githubClient,
    githubServer,
    technologyStack,
    challenges,
    improvements,
  } = project || {};

  // Normalize all array fields
  const normalizedFeatures = Array.isArray(features) ? features : [];
  const normalizedTechStack = Array.isArray(technologyStack)
    ? technologyStack
    : [];
  const normalizedChallenges = Array.isArray(challenges)
    ? challenges
    : challenges
    ? [challenges]
    : [];
  const normalizedImprovements = Array.isArray(improvements)
    ? improvements
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      className="bg-[#0d1321]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Project Image with Gradient Overlay */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name} screenshot`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1321]/90 to-transparent"></div>

        {/* Live & GitHub Links (floating) */}
        {(liveLink || githubClient) && (
          <div className="absolute bottom-4 right-4 flex gap-3">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0d1321] rounded-full border border-gray-700 text-gray-300 hover:text-blue-400 hover:border-blue-400 transition-all"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            {githubClient && (
              <a
                href={githubClient}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#0d1321] rounded-full border border-gray-700 text-gray-300 hover:text-purple-400 hover:border-purple-400 transition-all"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Project Title */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          {name}
        </h2>

        {/* Project Description */}
        <p className="text-gray-300 mb-5 flex-1">{description}</p>

        {/* Tech Stack */}
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-blue-400 mb-2">
            TECH STACK
          </h3>
          <div className="flex flex-wrap gap-2">
            {normalizedTechStack.length > 0 ? (
              normalizedTechStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#0d1321] border border-gray-700 rounded-full text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-gray-500 text-sm">Not specified</span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-blue-400 mb-2">
            KEY FEATURES
          </h3>
          {normalizedFeatures.length > 0 ? (
            <ul className="space-y-2">
              {normalizedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-gray-500 text-sm">No features listed</span>
          )}
        </div>

        {/* Challenges & Improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-auto">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2">
              CHALLENGES
            </h3>
            {normalizedChallenges.length > 0 ? (
              <ul className="space-y-2">
                {normalizedChallenges.slice(0, 3).map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-400 text-sm"
                  >
                    <span className="text-red-400 mr-2 mt-1">▹</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-gray-500 text-sm">
                No challenges listed
              </span>
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2">
              IMPROVEMENTS
            </h3>
            {normalizedImprovements.length > 0 ? (
              <ul className="space-y-2">
                {normalizedImprovements
                  .slice(0, 3)
                  .map((improvement, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-400 text-sm"
                    >
                      <span className="text-green-400 mr-2 mt-1">▹</span>
                      <span>{improvement}</span>
                    </li>
                  ))}
              </ul>
            ) : (
              <span className="text-gray-500 text-sm">
                No improvements listed
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
