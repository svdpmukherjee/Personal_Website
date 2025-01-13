import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaLightbulb,
  FaChevronRight,
  FaAward,
  FaArrowUp,
} from "react-icons/fa";
import PhDProjectStory from "./PhDProjectStory";
import PortfolioIntro from "./PortfolioIntro";
import Project1Details from "./projects/Project1Details";
import Project2Details from "./projects/Project2Details";
import RagAgentDetails from "./projects/RagAgentDetails";
import PhobiaAppDetails from "./projects/PhobiaAppDetails";

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        const portfolioTop = portfolioSection.offsetTop;
        const scrollPosition = window.pageYOffset;
        setIsVisible(scrollPosition > portfolioTop + 300);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = portfolioSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg 
        hover:bg-blue-600 transition-colors duration-300 z-50 lg:hidden flex items-center gap-2"
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg" />
    </motion.button>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [showExplorePrompt, setShowExplorePrompt] = useState(true);

  const scrollToSection = () => {
    const portfolioSection = document.getElementById("portfolio");
    const offset = window.innerWidth >= 1024 ? 100 : 80; // Different offset for desktop/mobile

    if (portfolioSection) {
      const elementPosition = portfolioSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (activeCategory) {
      setShowExplorePrompt(false);
    }

    if (!activeCategory) {
      const timer = setTimeout(() => {
        const buttons = document.querySelectorAll(".category-button");
        buttons.forEach((button) => {
          button.classList.add("pulse-attention");
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
    setActiveProject(null);
    scrollToSection();
  };

  const handleProjectClick = (project) => {
    setActiveProject(activeProject?.id === project.id ? null : project);
    scrollToSection();
  };

  const handleBackToCategories = () => {
    const categoriesSection = document.querySelector(
      ".portfolio-section-header"
    );
    if (categoriesSection) {
      const offset = 80;
      const elementPosition =
        categoriesSection.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
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
          links: { site: "#", github: "#" },
        },
        {
          id: "phobia-app",
          heading: "PROJECT 2",
          title: "Needle-phobia app",
          links: { site: "#", github: "#" },
        },
      ],
    },
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

  // Category Button Component
  const CategoryButton = ({ categoryKey, category }) => (
    <motion.div
      initial={false}
      animate={{
        scale: activeCategory === categoryKey ? 1.05 : 1,
        y: activeCategory === categoryKey ? -5 : 0,
      }}
    >
      <button
        onClick={() => handleCategoryClick(categoryKey)}
        className={`category-button w-full p-6 rounded-xl flex items-center gap-4 transition-all 
          ${
            activeCategory === categoryKey
              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
              : "bg-white hover:bg-blue-50 text-gray-800 border-2 border-gray-100 hover:border-blue-200"
          }`}
      >
        <div
          className={`p-3 rounded-lg ${
            activeCategory === categoryKey ? "bg-white/20" : "bg-blue-50"
          }`}
        >
          {category.icon}
        </div>
        <div className="text-left">
          <h3 className="font-bold text-lg">{category.title}</h3>
          <p
            className={`text-sm ${
              activeCategory === categoryKey ? "text-blue-100" : "text-gray-500"
            }`}
          >
            {category.description}
          </p>
        </div>
      </button>

      {/* SubProjects Panel */}
      <AnimatePresence>
        {activeCategory === categoryKey && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 ml-8 space-y-3 overflow-hidden"
          >
            {category.subProjects.map((project) => (
              <motion.button
                key={project.id}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={() => handleProjectClick(project)}
                className={`w-full p-4 rounded-lg border-2 transition-all text-left
                  ${
                    activeProject?.id === project.id
                      ? "border-blue-200 bg-blue-50"
                      : "border-gray-100 hover:border-blue-100 bg-white"
                  }`}
              >
                <div className="flex items-center gap-2 text-blue-600 mb-2">
                  <FaChevronRight className="text-sm" />
                  <span className="text-xs font-bold">{project.heading}</span>
                </div>
                <p className="text-sm ">{project.title}</p>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 py-12 lg:py-16" id="portfolio">
      {/* Mobile View */}
      <div className="lg:hidden px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            My Projects
          </h2>
          <p className="text-sm text-gray-600">
            Explore my research projects and development work
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-4 ">
          {Object.entries(portfolioData).map(([key, category]) => (
            <motion.div key={key}>
              <button
                onClick={() => handleCategoryClick(key)}
                className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all
                  ${
                    activeCategory === key
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      : "bg-white hover:bg-blue-50 text-gray-800 border border-gray-100"
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
                      activeCategory === key ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </button>

              {/* Sub-projects */}
              {activeCategory === key && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 space-y-3"
                >
                  {category.subProjects.map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleProjectClick(project)}
                      className={`w-full p-4 rounded-lg text-left transition-all
                        ${
                          activeProject?.id === project.id
                            ? "bg-blue-50 border border-blue-200"
                            : "bg-white border border-gray-100 hover:border-blue-200"
                        }`}
                    >
                      <div className="flex items-center gap-2 text-blue-600 mb-2">
                        <FaChevronRight className="text-xs" />
                        <span className="text-xs font-bold">
                          {project.heading}
                        </span>
                      </div>
                      <p className="text-sm ">{project.title}</p>
                    </button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Project Content for Mobile */}
        {(activeProject || (activeCategory === "phd" && !activeProject)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-white rounded-xl p-4 shadow-sm"
          >
            {activeCategory === "phd" && !activeProject ? (
              <PhDProjectStory />
            ) : (
              <>
                {/* Publication Badge */}
                {activeProject?.publication && (
                  <div
                    className={`mb-4 p-3 rounded-lg ${
                      activeProject.publication?.type === "conference"
                        ? "bg-blue-50"
                        : "bg-purple-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FaAward className="text-amber-500 text-lg" />
                      <div>
                        <span className="text-xs font-semibold block">
                          {activeProject.publication?.type === "conference"
                            ? "Conference Paper"
                            : "Journal Article"}
                        </span>
                        <span className="text-sm text-gray-600">
                          {activeProject.publication?.venue} (
                          {activeProject.publication?.year})
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project Content */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold gradient-text">
                    {activeProject?.title}
                  </h3>
                  {renderProjectContent(activeProject)}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={activeProject?.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 
                      transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Learn More
                  </a>
                  <a
                    href={activeProject?.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 
                      transition-colors flex items-center gap-2"
                  >
                    <AiFillGithub /> GitHub
                  </a>
                  {activeProject?.links.publication && (
                    <a
                      href={activeProject.links.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-700 text-white text-sm rounded-lg hover:bg-purple-600 
                        transition-colors flex items-center gap-2"
                    >
                      <IoIosPaper /> Publication
                    </a>
                  )}
                </div>
              </>
            )}
            {/* Back to Categories Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handleBackToCategories}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 
                  text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FaArrowUp className="text-sm" />
                Back to Categories
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-0">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            My Projects
          </h2>
          <p className="text-sm text-gray-600">
            Explore my research projects and development work
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* Navigation Column */}

          <div className="col-start-1 col-span-1 lg:sticky lg:top-24 lg:self-start max-h-screen overflow-y-auto">
            {/* Explore Work Animation - Desktop Only */}
            {!activeCategory && (
              <div className="absolute -top-12 left-0 right-0 text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-blue-600 font-semibold animate-bounce"
                >
                  ↓ Explore My Work ↓
                </motion.div>
              </div>
            )}
            <div className="space-y-6">
              {/* Category Buttons */}
              {Object.entries(portfolioData).map(([key, category]) => (
                <CategoryButton
                  key={key}
                  categoryKey={key}
                  category={category}
                />
              ))}
            </div>
          </div>

          {/* Content Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeProject?.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8"
              >
                {!activeCategory ? (
                  <div className="hidden lg:block">
                    <PortfolioIntro />
                  </div>
                ) : !activeProject && activeCategory === "phd" ? (
                  <div
                    className={`${
                      window.innerWidth >= 1024 ? "desktop-view" : ""
                    }`}
                  >
                    <PhDProjectStory />
                  </div>
                ) : (
                  activeProject && (
                    <div className="space-y-6">
                      {/* Publication Badge */}
                      {activeProject.publication && (
                        <div
                          className={`p-4 rounded-lg ${
                            activeProject.publication?.type === "conference"
                              ? "bg-gradient-to-r from-blue-50 to-blue-100"
                              : "bg-gradient-to-r from-purple-50 to-purple-100"
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <FaAward className="text-amber-500 text-xl flex-shrink-0" />
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full bg-white shadow-sm ${
                                activeProject.publication?.type === "conference"
                                  ? "text-blue-700"
                                  : "text-purple-700"
                              }`}
                            >
                              {activeProject.publication?.type === "conference"
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

                      {/* Project Content */}
                      <h3 className="text-2xl font-bold gradient-text">
                        {activeProject.title}
                      </h3>
                      {renderProjectContent(activeProject)}

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 mt-8">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={activeProject.links.site}
                          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 
                            transition-colors flex items-center gap-2"
                        >
                          <FaExternalLinkAlt /> Learn More
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          href={activeProject.links.github}
                          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 
                            transition-colors flex items-center gap-2"
                        >
                          <AiFillGithub /> GitHub
                        </motion.a>
                        {activeProject.links.publication && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={activeProject.links.publication}
                            className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-600 
                              transition-colors flex items-center gap-2"
                          >
                            <IoIosPaper /> Publication
                          </motion.a>
                        )}
                      </div>
                    </div>
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <BackToTopButton />

      {/* Animations */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .desktop-view .next-section-button {
            display: none;
          }
        }

        @media (max-width: 1023px) {
          .portfolio-intro {
            display: none;
          }
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
