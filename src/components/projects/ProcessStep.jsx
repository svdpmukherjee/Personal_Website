import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Minimize2 } from "lucide-react";
import interview_tasks from "../../assets/Interview_tasks.jpg";
import test_stimuli from "../../assets/test_stimuli.jpg";
import study_design from "../../assets/study_design.jpg";

const ProcessStep = ({ number, title, description, hasImage = false }) => {
  // Helper function to get the appropriate image and caption based on step number
  const getImageDetails = (stepNumber) => {
    switch (stepNumber) {
      case "1":
        return {
          src: interview_tasks,
          caption:
            "Interactive Miro workshops and expert interviews in progress",
        };
      case "2":
        return {
          src: test_stimuli,
          caption:
            "Set of 22 high-fidelity images generated for testing various privacy-protecting techniques in different test-taking contexts",
        };
      case "3":
        return {
          src: study_design,
          caption:
            "Study design with example survey items what were asked to participants",
        };
      default:
        return null;
    }
  };
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold flex-shrink-0">
            {number}
          </div>
          <div className="space-y-4 w-full">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <div className="text-gray-600 leading-relaxed">{description}</div>
            </div>

            {hasImage && (
              <div>
                <button
                  onClick={toggleExpanded}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium mt-2"
                >
                  {isExpanded ? (
                    <>
                      <Minimize2 className="w-4 h-4" />
                      Hide Image
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-4 h-4" />
                      View Image
                    </>
                  )}
                </button>

                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="bg-gray-50 p-4 rounded-lg">
                      {getImageDetails(number) && (
                        <>
                          <img
                            src={getImageDetails(number).src}
                            alt={`Step ${number} visualization`}
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                          <p className="text-sm text-gray-500 mt-2 text-center">
                            {getImageDetails(number).caption}
                          </p>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
