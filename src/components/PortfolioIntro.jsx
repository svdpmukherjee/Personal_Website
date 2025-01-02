import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaBrain,
  FaChartLine,
  FaUniversity,
  FaRobot,
} from "react-icons/fa";

const PortfolioIntro = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const areas = [
    {
      icon: <FaUserGraduate />,
      title: "Human-Computer Interaction",
      description:
        "Exploring the intersection of human behavior and digital interfaces",
      type: "research",
      color: "blue",
    },
    {
      icon: <FaBrain />,
      title: "User Experience Research",
      description:
        "Conducting studies to understand and enhance user interactions",
      type: "research",
      color: "blue",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Solutions",
      description: "Leveraging analytics to create impactful user experiences",
      type: "research",
      color: "blue",
    },
    {
      icon: <FaRobot />,
      title: "AI Applications",
      description: "Building intelligent systems for real-world problems",
      type: "side",
      color: "purple",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description: "Creating end-to-end solutions with modern technologies",
      type: "side",
      color: "purple",
    },
    {
      icon: <FaUniversity />,
      title: "EdTech Innovation",
      description: "Improving educational experiences through technology",
      type: "side",
      color: "purple",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Main Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
          Bridging Research and Innovation
        </h3>
        <p className="text-md text-left text-gray-500 leading-relaxed">
          As a PhD researcher in Human-Computer Interaction at the University of
          Luxembourg, I am passionate about creating{" "}
          <span className="gradient-text font-semibold">
            user-centered solutions{" "}
          </span>
          that enhance digital experiences. My work spans{" "}
          <span className="text-black font-semibold">
            from academic research to practical applications
          </span>
          , always focusing on the{" "}
          <span className="text-black ">human element in technology</span>.
        </p>
      </div>

      {/* Combined Research Areas & Side Interests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className={`p-4 bg-white rounded-xl shadow-sm border border-gray-100 
              ${
                area.type === "research"
                  ? "hover:border-blue-200"
                  : "hover:border-purple-200"
              } 
              transition-all`}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div
              className={`text-2xl ${
                area.type === "research" ? "text-blue-500" : "text-purple-500"
              } mb-3`}
            >
              {area.icon}
            </div>
            <h5 className="text-base font-semibold text-gray-800 mb-2">
              {area.title}
            </h5>
            <p className="text-sm text-gray-600">{area.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-500 italic text-sm">
          Select a category from the left to explore my projects in detail
        </p>
      </div>
    </div>
  );
};

export default PortfolioIntro;
