import { useState } from "react";
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
import Project1Details from "./projects/Project1Details";
import Project2Details from "./projects/Project2Details";
import RagAgentDetails from "./projects/RagAgentDetails";
import PhobiaAppDetails from "./projects/PhobiaAppDetails";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: document.getElementById("portfolio").offsetTop - 20,
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
          id: "phd-story",
          heading: "BRIEF ABOUT MY PHD WORK",
          publication: {
            venue: "Ongoing Research",
            year: "2021-2025",
            type: "research",
          },
          title:
            "User-centric Design Solutions to Prevent Cheating in Remote Exams",
          links: {
            publication: "https://orbilu.uni.lu/profile?uid=50046839",
          },
        },
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
    setActiveProject(activeProject?.id === project.id ? null : project);
    scrollToTop();
  };

  const renderProjectContent = (project) => {
    switch (project.id) {
      case "phd-story":
        return <PhDProjectStory />;
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

  const CategoryCard = ({ categoryKey, category }) => (
    <motion.div
      className={`w-full rounded-xl shadow-sm transition-all duration-300
        ${
          activeCategory === categoryKey
            ? "bg-gradient-to-r from-blue-500 to-blue-600"
            : "bg-white hover:shadow-md border border-gray-100"
        }`}
    >
      <div
        onClick={() => handleCategoryClick(categoryKey)}
        className="p-4 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-xl ${
              activeCategory === categoryKey ? "bg-white/20" : "bg-blue-50"
            }`}
          >
            {category.icon}
          </div>
          <div>
            <h3
              className={`text-lg font-bold mb-1 ${
                activeCategory === categoryKey ? "text-white" : "text-gray-800"
              }`}
            >
              {category.title}
            </h3>
            <p
              className={`text-sm ${
                activeCategory === categoryKey
                  ? "text-blue-100"
                  : "text-gray-500"
              }`}
            >
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Sub-projects Panel */}
      {activeCategory === categoryKey && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pb-4 space-y-3"
        >
          {category.subProjects.map((project) => (
            <motion.div
              key={project.id}
              className={`w-full rounded-lg overflow-hidden transition-all
                ${
                  activeProject?.id === project.id
                    ? "bg-white shadow-md"
                    : "bg-white/80"
                }`}
            >
              <button
                onClick={() => handleProjectClick(project)}
                className="w-full p-3 text-left"
              >
                <div className="flex items-center gap-2 text-blue-600 mb-1">
                  <FaChevronRight className="text-xs" />
                  <span className="text-xs gradient-text font-bold">
                    {project.heading}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{project.title}</p>
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div className="py-12 bg-gray-50" id="portfolio">
      <div className="max-w-[100%] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            My Projects
          </h2>
          <p className="text-sm text-gray-600">
            Explore my research projects and development work
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="space-y-4">
            {Object.entries(portfolioData).map(([key, category]) => (
              <CategoryCard key={key} categoryKey={key} category={category} />
            ))}
          </div>

          {/* Project Content */}
          {activeProject && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm space-y-4"
            >
              {/* Publication Badge */}
              {activeProject.publication &&
                activeProject.id !== "phd-story" && (
                  <div
                    className={`p-3 rounded-lg ${
                      activeProject.publication?.type === "conference"
                        ? "bg-blue-50"
                        : activeProject.publication?.type === "journal"
                        ? "bg-purple-50"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <FaAward className="text-amber-500 text-lg" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold">
                          {activeProject.publication?.type === "conference"
                            ? "Conference Paper"
                            : activeProject.publication?.type === "journal"
                            ? "Journal Article"
                            : "Research Project"}
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
              <div>
                <h3 className="text-xl font-bold gradient-text mb-4">
                  {activeProject.title}
                </h3>
                {renderProjectContent(activeProject)}
              </div>

              {/* Action Buttons  */}
              <div className="flex flex-wrap gap-3 mt-6">
                {activeProject.id === "phd-story" ? (
                  activeProject.links.publication && (
                    <a
                      href={activeProject.links.publication}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-700 text-white text-sm rounded-lg hover:bg-purple-600 
          transition-all flex items-center gap-2"
                    >
                      <IoIosPaper /> Research Repository
                    </a>
                  )
                ) : (
                  <>
                    <a
                      href={activeProject.links.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 
          transition-all flex items-center gap-2"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Learn More
                    </a>
                    <a
                      href={activeProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-gray-600 
          transition-all flex items-center gap-2"
                    >
                      <AiFillGithub /> GitHub
                    </a>
                    {activeProject.links.publication && (
                      <a
                        href={activeProject.links.publication}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-700 text-white text-sm rounded-lg hover:bg-purple-600 
            transition-all flex items-center gap-2"
                      >
                        <IoIosPaper /> Publication
                      </a>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
