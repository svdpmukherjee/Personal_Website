import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  FaExternalLinkAlt,
  FaGraduationCap,
  FaLightbulb,
  FaChevronRight,
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

  const portfolioData = {
    phd: {
      title: "PhD Projects",
      icon: <FaGraduationCap className="text-2xl text-blue-500" />,
      description:
        "Research focusing on privacy and security in remote examination",
      subProjects: [
        {
          id: "privacy-video",
          heading: "PROJECT 1",
          title:
            "Privacy preservation in Recorded Video in a Webcam-monitored Remote Exam",
          links: {
            site: "#",
            github: "#",
          },
        },
        {
          id: "privacy-interventions",
          heading: "PROJECT 2",
          title:
            "Privacy-non-invasive Interventions to Prevent Cheating in an Unsupervised Remote Exam",
          links: {
            site: "#",
            github: "#",
          },
        },
      ],
    },
    side: {
      title: "Side Projects",
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
          title: "Needle-phobia trump app",
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
  };

  const handleProjectClick = (project) => {
    setActiveProject(project);
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

  return (
    <div className="min-h-screen bg-gray-50 py-20" id="portfolio">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          My <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Project Navigation */}
          <div className="lg:sticky lg:top-48 h-fit">
            <div className="space-y-4">
              {Object.entries(portfolioData).map(([key, category]) => (
                <div key={key} className="space-y-2">
                  {/* Main Category */}
                  <button
                    onClick={() => handleCategoryClick(key)}
                    className={`w-full p-4 rounded-lg flex items-center gap-3 transition-all
                    ${
                      activeCategory === key
                        ? "bg-blue-100 shadow-md border border-blue-200"
                        : "bg-white hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    {category.icon}
                    <span className="font-semibold text-gray-800">
                      {category.title}
                    </span>
                  </button>

                  {/* Sub Projects */}
                  {activeCategory === key && (
                    <div className="ml-6 space-y-2">
                      {category.subProjects.map((project) => (
                        <button
                          key={project.id}
                          onClick={() => handleProjectClick(project)}
                          className={`w-full p-4 rounded-lg flex flex-col items-start gap-2 transition-all
                          ${
                            activeProject?.id === project.id
                              ? "bg-blue-50 shadow-sm border border-blue-200"
                              : "bg-white hover:bg-gray-50 border border-gray-200"
                          }`}
                        >
                          <div className="flex items-center gap-2 w-full">
                            <FaChevronRight
                              className={`text-sm ${
                                activeProject?.id === project.id
                                  ? "text-blue-500"
                                  : "text-gray-400"
                              }`}
                            />
                            <span className="text-xs font-semibold text-blue-500">
                              {project.heading}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 text-left pl-6 leading-tight">
                            {project.title}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content Display */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              {!activeCategory ? (
                <PortfolioIntro />
              ) : !activeProject && activeCategory === "phd" ? (
                <PhDProjectStory />
              ) : (
                <>
                  {activeProject ? (
                    <>
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
                          <FaExternalLinkAlt /> Learn
                        </a>
                        <a
                          href={activeProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all flex items-center gap-2"
                        >
                          <AiFillGithub /> GitHub
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
