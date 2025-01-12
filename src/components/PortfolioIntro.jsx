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
    <div className="space-y-8 px-4">
      {/* Main Introduction */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Bridging Research and Innovation
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          As a PhD researcher in Human-Computer Interaction at the University of
          Luxembourg, I am passionate about creating{" "}
          <span className="font-semibold text-blue-600">
            user-centered solutions{" "}
          </span>
          that enhance digital experiences. My work spans{" "}
          <span className="font-semibold text-gray-800">
            from academic research to practical applications
          </span>
          , always focusing on the{" "}
          <span className="text-gray-800">human element in technology</span>.
        </p>
      </div>

      {/* Areas Grid */}
      <div className="grid grid-cols-1 gap-3">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className={`p-4 bg-white rounded-lg shadow-sm border 
              ${
                area.type === "research"
                  ? "border-blue-100"
                  : "border-purple-100"
              }
              transition-all`}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-3">
              <div
                className={`text-xl ${
                  area.type === "research" ? "text-blue-500" : "text-purple-500"
                }`}
              >
                {area.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {area.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-sm text-gray-500 text-center italic">
        Select a category from above to explore my projects in detail
      </p>
    </div>
  );
};

export default PortfolioIntro;
