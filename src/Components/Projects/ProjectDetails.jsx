import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d1321]">
          <div className="text-2xl text-[#ffeddf]">
            Something went wrong. Please try again later.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Validate and normalize project data
const normalizeProjectData = data => {
  return {
    name: data?.name || 'Untitled Project',
    image: data?.image || '',
    description: data?.description || '',
    features: Array.isArray(data?.features) ? data.features : [],
    liveLink: data?.liveLink || '',
    githubClient: data?.githubClient || '',
    githubServer: data?.githubServer || '',
    challenges: Array.isArray(data?.challenges) ? data.challenges : [],
    improvements: Array.isArray(data?.improvements) ? data.improvements : [],
    technologyStack: Array.isArray(data?.technologyStack)
      ? data.technologyStack
      : [],
  };
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(project);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/projectDetails/${id}`
        );
        const normalizedData = normalizeProjectData(response.data);
        setProject(normalizedData);
      } catch (err) {
        console.error('Failed to fetch project:', err);
        setError(err.message || 'Failed to load project');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1321]">
        <div className="animate-pulse text-2xl text-[#ffeddf]">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1321]">
        <div className="text-2xl text-[#ffeddf]">Error: {error}</div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-[#1d3557] hover:bg-[#457b9d] rounded-lg"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1321]">
        <div className="text-2xl text-[#ffeddf]">Project not found</div>
      </div>
    );
  }

  // Destructure with confidence since data is normalized
  const {
    name,
    image,
    description,
    features,
    liveLink,
    githubClient,
    githubServer,
    challenges,
    improvements,
    technologyStack,
  } = project;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0d1321] text-[#ffeddf] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-[#ff9f1c] hover:text-[#ffbf69] mb-8 transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" /> Back to Projects
          </button>

          {/* Project Header */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Project Image */}
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden border-2 border-[#1d3557] hover:border-[#457b9d] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[#1d3557]/30">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://via.placeholder.com/800x500?text=Project+Image';
                  }}
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff9f1c]">
                {name}
              </h1>
              <p className="text-lg mb-6 text-[#f1faee]">{description}</p>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1d3557] hover:bg-[#457b9d] rounded-lg transition-colors duration-300"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                )}
                {githubClient && (
                  <a
                    href={githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1d3557] hover:bg-[#457b9d] rounded-lg transition-colors duration-300"
                  >
                    <FiGithub className="mr-2" /> Client Code
                  </a>
                )}
                {githubServer && (
                  <a
                    href={githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-[#1d3557] hover:bg-[#457b9d] rounded-lg transition-colors duration-300"
                  >
                    <FiGithub className="mr-2" /> Server Code
                  </a>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-[#a8dadc]">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologyStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#1d3557] rounded-full text-sm text-[#f1faee]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            {features.length > 0 && (
              <div className="bg-[#1d3557]/50 p-6 rounded-xl border border-[#457b9d]/30">
                <h3 className="text-2xl font-bold mb-4 text-[#ff9f1c]">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#ff9f1c] mr-2">•</span>
                      <span className="text-[#f1faee]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {challenges.length > 0 && (
              <div className="bg-[#1d3557]/50 p-6 rounded-xl border border-[#457b9d]/30">
                <h3 className="text-2xl font-bold mb-4 text-[#ff9f1c]">
                  Challenges Faced
                </h3>
                <ul className="space-y-3">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#ff9f1c] mr-2">•</span>
                      <span className="text-[#f1faee]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Improvements */}
          {improvements.length > 0 && (
            <div className="bg-[#1d3557]/50 p-6 rounded-xl border border-[#457b9d]/30 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-[#ff9f1c]">
                Future Improvements
              </h3>
              <ul className="space-y-3">
                {improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#ff9f1c] mr-2">•</span>
                    <span className="text-[#f1faee]">{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProjectDetails;
