import React from "react";
import reviewer from "../../assets/reviewer.jpg";
import regions from "../../assets/methods.jpg";

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
      description: "Concerns about storage and usage of video recordings",
    },
  ];

  const approachPoints = [
    {
      title: "Limitations of One-Size-Fits-All",
      description:
        "Current approaches apply same privacy protection to entire video (e.g. Blurring), compromising either security or privacy",
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
        "Each region requires different levels of privacy protection while maintaining its functional purpose of cheating detection",
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
      <p className="text-md  text-gray-600">
        Students take exams with their webcams on, recording videos that are
        later reviewed to determine if cheating occurred
      </p>

      {/* Problem Statement Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto flex items-center bg-gray-100 justify-center">
            <img
              src={reviewer}
              alt="Webcam monitoring during remote exam"
              className="object-contain rounded-2xl p-4 border-8"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              The Challenge
            </h3>
            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="font-medium  text-red-600 ">
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
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 h-64 md:h-auto flex items-center bg-gray-100 justify-center">
            <img
              src={regions}
              alt="Webcam monitoring during remote exam"
              className="object-contain rounded-2xl p-4 border-8"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Our Approach: Region-Based Privacy Protection
            </h3>
            <div className="space-y-3">
              {approachPoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg shadow-sm"
                >
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
