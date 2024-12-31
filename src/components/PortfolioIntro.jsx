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

  const researchAreas = [
    {
      icon: <FaUserGraduate />,
      title: "Human-Computer Interaction",
      description:
        "Exploring the intersection of human behavior and digital interfaces",
    },
    {
      icon: <FaBrain />,
      title: "User Experience Research",
      description:
        "Conducting studies to understand and enhance user interactions",
    },
    {
      icon: <FaChartLine />,
      title: "Data-Driven Solutions",
      description: "Leveraging analytics to create impactful user experiences",
    },
  ];

  const sideInterests = [
    {
      icon: <FaRobot />,
      title: "AI Applications",
      description: "Building intelligent systems for real-world problems",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description: "Creating end-to-end solutions with modern technologies",
    },
    {
      icon: <FaUniversity />,
      title: "EdTech Innovation",
      description: "Improving educational experiences through technology",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Main Introduction */}
      <div className=" space-y-6 max-w-3xl mx-auto">
        <h3 className=" text-center text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          Bridging Research and Innovation
        </h3>
        <p className="text-lg text-gray-500 leading-relaxed">
          As a PhD researcher in Human-Computer Interaction at the University of
          Luxembourg, I am passionate about creating{" "}
          <span className="gradient-text">user-centered solutions </span>
          that enhance digital experiences. My work spans from academic research
          to practical applications, always focusing on the human element in
          technology.
        </p>
      </div>

      {/* Research Areas */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-gray-700 mb-6">
          Current Research Focus
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onHoverStart={() => setHoveredCard(`research-${index}`)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="text-3xl text-blue-500 mb-4">{area.icon}</div>
              <h5 className="text-lg font-semibold text-gray-800 mb-2">
                {area.title}
              </h5>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Interests */}
      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-gray-700 mb-6">
          Side Projects & Interests
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sideInterests.map((interest, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:border-purple-200 transition-all"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onHoverStart={() => setHoveredCard(`interest-${index}`)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="text-3xl text-purple-500 mb-4">
                {interest.icon}
              </div>
              <h5 className="text-lg font-semibold text-gray-800 mb-2">
                {interest.title}
              </h5>
              <p className="text-gray-600">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 italic">
          Select a category from the left to explore my projects in detail
        </p>
      </div>
    </div>
  );
};

export default PortfolioIntro;
