import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaLightbulb,
  FaChevronRight,
  FaAward,
} from "react-icons/fa";
import PhDProjectStory from "./PhDProjectStory";
import PortfolioIntro from "./PortfolioIntro";
import Project1Details from "./projects/Project1Details";
import Project2Details from "./projects/Project2Details";
import RagAgentDetails from "./projects/RagAgentDetails";
import PhobiaAppDetails from "./projects/PhobiaAppDetails";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: document.getElementById("portfolio").offsetTop - 100,
      behavior: "smooth",
    });
  };

  const portfolioData = {
    phd: {
      title: "PhD Projects",
      icon: <FaGraduationCap className="text-2xl text-blue-500" />,
      description:
        "Research focusing on privacy and security in remote examination (EdTech)",
      subProjects: [
        {
          id: "privacy-video",
          heading: "PROJECT 1",
          publication: {
            venue: "European Symposium on Usable Security",
            year: "2024",
            type: "conference",
          },
          title:
            "Privacy preservation in Recorded Video in a Webcam-monitored Remote Exam",
          links: {
            site: "#",
            github: "#",
            publication: "https://dl.acm.org/doi/10.1145/3688459.3688474",
          },
        },
        {
          id: "privacy-interventions",
          heading: "PROJECT 2",
          publication: {
            venue: "Computers & Education",
            year: "2023",
            type: "journal",
          },
          title:
            "Privacy-non-invasive Interventions to Prevent Cheating in an Unsupervised Remote Exam",
          links: {
            site: "#",
            github: "#",
            publication:
              "https://www.sciencedirect.com/science/article/pii/S0360131523002026",
          },
        },
      ],
    },
    side: {
      title: "Other Recent Projects",
      icon: <FaLightbulb className="text-2xl text-yellow-500" />,
      description:
        "Exploring innovative solutions through design thinking and AI",
      subProjects: [
        {
          id: "rag-agent",
          heading: "PROJECT 1",
          title: "Multimodal RAG agent app",
          links: {
            site: "#",
            github: "#",
          },
        },
        {
          id: "phobia-app",
          heading: "PROJECT 2",
          title: "Needle-phobia app",
          links: {
            site: "#",
            github: "#",
          },
        },
      ],
    },
  };

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setActiveProject(null);
    scrollToTop();
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
    scrollToTop();
  };

  const renderProjectContent = (project) => {
    switch (project.id) {
      case "privacy-video":
        return <Project1Details />;
      case "privacy-interventions":
        return <Project2Details />;
      case "rag-agent":
        return <RagAgentDetails />;
      case "phobia-app":
        return <PhobiaAppDetails />;
      default:
        return null;
    }
  };

  useEffect(() => {
    if (!activeCategory) {
      const timer = setTimeout(() => {
        const buttons = document.querySelectorAll(".category-button");
        buttons.forEach((button) => {
          button.classList.add("pulse-attention");
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50 py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Navigation Column */}
          <div className="lg:sticky lg:top-48 h-fit">
            <div className="space-y-6 relative">
              {/* Navigation Header */}
              {!activeCategory && (
                <div className="absolute -top-12 left-0 right-0 text-center text-blue-600 font-semibold animate-bounce">
                  ↓ Explore My Work ↓
                </div>
              )}

              {Object.entries(portfolioData).map(([key, category]) => (
                <motion.div
                  key={key}
                  initial={false}
                  animate={{
                    scale: activeCategory === key ? 1.05 : 1,
                    y: activeCategory === key ? -5 : 0,
                  }}
                >
                  <button
                    onClick={() => handleCategoryClick(key)}
                    className={`category-button w-full p-6 rounded-xl flex items-center gap-4 transition-all 
                      ${
                        activeCategory === key
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
                          : "bg-white hover:bg-blue-50 text-gray-800 border-2 border-gray-100 hover:border-blue-200"
                      }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        activeCategory === key ? "bg-white/20" : "bg-blue-50"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">{category.title}</h3>
                      <p
                        className={`text-sm ${
                          activeCategory === key
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {category.description}
                      </p>
                    </div>
                  </button>

                  {/* Sub-projects Panel */}
                  {activeCategory === key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 ml-4 space-y-3"
                    >
                      {category.subProjects.map((project) => (
                        <button
                          key={project.id}
                          onClick={() => handleProjectClick(project)}
                          className={`w-full p-4 rounded-lg border-2 transition-all
                            ${
                              activeProject?.id === project.id
                                ? "border-blue-200 bg-blue-50"
                                : "border-gray-100 hover:border-blue-100 bg-white"
                            }`}
                        >
                          <div className="flex items-center gap-2 text-blue-600 mb-2">
                            <FaChevronRight className="text-sm" />
                            <span className="text-xs font-bold">
                              {project.heading}
                            </span>
                          </div>

                          <p className="text-sm text-gray-700 text-left">
                            {project.title}
                          </p>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              {!activeCategory ? (
                <PortfolioIntro onCategorySelect={setActiveCategory} />
              ) : !activeProject && activeCategory === "phd" ? (
                <PhDProjectStory />
              ) : (
                <>
                  {activeProject ? (
                    <>
                      {activeCategory === "phd" &&
                        activeProject.publication && (
                          <div
                            className={`mb-6 px-4 py-3 rounded-lg ${
                              activeProject.publication?.type === "conference"
                                ? "bg-gradient-to-r from-blue-50 to-blue-100"
                                : "bg-gradient-to-r from-purple-50 to-purple-100"
                            }`}
                          >
                            <div className="flex items-center space-x-4">
                              <FaAward className="text-amber-500 text-xl flex-shrink-0" />
                              <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full bg-white shadow-sm ${
                                  activeProject.publication?.type ===
                                  "conference"
                                    ? "text-blue-700"
                                    : "text-purple-700"
                                }`}
                              >
                                {activeProject.publication?.type ===
                                "conference"
                                  ? "Conference Paper"
                                  : "Journal Article"}
                              </span>
                              <span className="text-sm font-medium flex-grow">
                                {activeProject.publication?.venue}
                              </span>
                              <span className="text-gray-600 text-sm flex-shrink-0">
                                {activeProject.publication?.year}
                              </span>
                            </div>
                          </div>
                        )}
                      <h3 className="text-2xl font-bold gradient-text mb-6">
                        {activeProject.title}
                      </h3>
                      {renderProjectContent(activeProject)}
                      <div className="flex gap-4 mt-8">
                        <a
                          href={activeProject.links.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Learn More
                        </a>
                        <a
                          href={activeProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all flex items-center gap-2"
                        >
                          <AiFillGithub /> GitHub
                        </a>
                        <a
                          href={activeProject.links.publication}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-gray-600 transition-all flex items-center gap-2"
                        >
                          <IoIosPaper /> Publication
                        </a>
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-600">
                      {portfolioData[activeCategory].description}
                    </p>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-attention {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
          }
          50% {
            transform: scale(1.01);
            box-shadow: 0 0 0 5px rgba(59, 130, 246, 0);
          }
        }
        .pulse-attention {
          animation: pulse-attention 7s infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
