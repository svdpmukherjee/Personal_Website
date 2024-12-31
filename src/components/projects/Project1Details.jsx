import React from "react";
import reviewer from "../../assets/reviewer.jpg";
import regions from "../../assets/regions.png";

const Project1Details = () => {
  const challenges = [
    {
      title: "Privacy Invasion",
      description: "Unknown reviewers accessing recordings of private spaces",
    },
    {
      title: "Bias Risk",
      description: "Potential discrimination based on visible characteristics",
    },
    {
      title: "Data Security",
      description: "Concerns about storage and access of private recordings",
    },
  ];

  const approachPoints = [
    {
      title: "Limitations of One-Size-Fits-All",
      description:
        "Current approaches apply same privacy protection to entire video, compromising either security or privacy",
    },
    {
      title: "Need for Region-Specific Analysis",
      description:
        "Different video regions serve distinct purposes in cheating detection and carry varying privacy risks",
    },
    {
      title: "Key Video Regions Identified",
      description: "Face, Body, Background, Other individuals present",
    },
    {
      title: "Varying Protection Needs",
      description:
        "Each region requires different levels of privacy protection while maintaining its functional purpose",
    },
    {
      title: "Research Direction",
      description:
        "Exploring optimal privacy protection methods for each region to balance security and privacy",
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-600">
        Ever taken an exam from home where you had to keep your webcam on?
      </h3>

      {/* Problem Statement Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto">
            <img
              src={reviewer}
              alt="Webcam monitoring during remote exam"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              The Challenge
            </h3>
            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-700">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solution Approach Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto relative ">
            <img
              src={regions}
              alt="Video regions illustration"
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Our Approach: Region-Based Privacy Protection
            </h3>
            <div className="space-y-3">
              {approachPoints.map((point, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-gray-700">{point.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1Details;
