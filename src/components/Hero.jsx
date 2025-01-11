import React, { useState } from "react";
import background from "../assets/background.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { useScrollEffects } from "./ScrollEffects";
import ProfilePicture from "./ProfilePicture";
import InteractiveExpertise from "./InteractiveExpertise";

const Hero = () => {
  useScrollEffects();
  const [showContent, setShowContent] = useState(false);
  const [currentKeyIndex, setCurrentKeyIndex] = useState(-1);
  const [showButtons, setShowButtons] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // const introContent = {
  //   "Core Expertise": [
  //     "End-to-End Mixed-Methods User Research Design",
  //     "User Behavior Analytics",
  //     "Data-Driven UX Solutions",
  //   ],
  //   "Technical Skills": [
  //     "Research Prototyping & Development",
  //     "Data Analytics (Quantitative & Qualitative)",
  //     "Interactive Data Viz & Scientific Reporting",
  //   ],
  // };

  // const contentKeys = Object.keys(introContent);

  const wrapInColor = (text, type) => {
    const colors = {
      key: "text-amber-500",
      string: "text-emerald-500",
      colon: "text-gray-400",
      comma: "text-gray-400",
      bracket: "text-purple-500",
      brace: "text-purple-500",
    };
    return <span className={colors[type]}>{text}</span>;
  };

  // const renderJsonContent = () => {
  //   const indent = (level) => "    ".repeat(level);

  //   return (
  //     <div className="whitespace-pre-wrap text-sm lg:text-base xl:text-lg">
  //       {wrapInColor("{", "brace")}
  //       {Object.entries(introContent).map(([key, value], index) => {
  //         if (index > currentKeyIndex) return null;

  //         const isLast = index === contentKeys.length - 1;

  //         if (Array.isArray(value)) {
  //           return (
  //             <React.Fragment key={key}>
  //               {"\n"}
  //               {indent(1)}
  //               {wrapInColor(`"${key}"`, "key")}
  //               {wrapInColor(":", "colon")} {wrapInColor("[", "bracket")}
  //               {value.map((item, i) => (
  //                 <React.Fragment key={i}>
  //                   {"\n"}
  //                   {indent(2)}
  //                   {wrapInColor(`"${item}"`, "string")}
  //                   {i < value.length - 1 ? wrapInColor(",", "comma") : ""}
  //                 </React.Fragment>
  //               ))}
  //               {"\n"}
  //               {indent(1)}
  //               {wrapInColor("]", "bracket")}
  //               {!isLast && wrapInColor(",", "comma")}
  //             </React.Fragment>
  //           );
  //         }

  //         return (
  //           <React.Fragment key={key}>
  //             {"\n"}
  //             {indent(1)}
  //             {wrapInColor(`"${key}"`, "key")}
  //             {wrapInColor(":", "colon")} {wrapInColor(`"${value}"`, "string")}
  //             {!isLast && wrapInColor(",", "comma")}
  //           </React.Fragment>
  //         );
  //       })}
  //       {"\n"}
  //       {wrapInColor("}", "brace")}
  //     </div>
  //   );
  // };

  // // const handleNameTypingComplete = () => {
  // //   setShowContent(true);
  // //   let index = 0;
  // //   const interval = setInterval(() => {
  // //     if (index >= contentKeys.length) {
  // //       clearInterval(interval);
  // //       setTimeout(() => setShowButtons(true), 500);
  // //       return;
  // //     }
  // //     setCurrentKeyIndex(index);
  // //     index++;
  // //   }, 1000);
  // // };
  // const handleNameTypingComplete = () => {
  //   setTimeout(() => setShowButtons(true), 500);
  // };

  return (
    <div
      className="min-h-screen pt-16 sm:pt-36 lg:pt-24 flex items-center justify-center px-4 sm:px-6 lg:px-8"
      id="home"
    >
      <div className="max-w-[1400px] w-full mx-auto pt-8 sm:pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 xl:gap-12 items-start">
          {/* Left Column - Image Container */}
          <div className="w-full flex flex-col items-center space-y-6 lg:sticky lg:top-24">
            <div className="relative w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px] aspect-square mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120%] h-[120%] overflow-hidden">
                  <img
                    src={background}
                    alt="background"
                    className="w-full h-full object-cover filter opacity-70"
                  />
                </div>
              </div>
              <ProfilePicture />
            </div>

            {/* Name Animation */}
            <div className="h-16 flex items-center">
              <TypeAnimation
                sequence={[
                  "Hello! I am Suvo...",
                  1000,
                  () => handleNameTypingComplete(),
                ]}
                wrapper="h1"
                speed={50}
                className="text-3xl sm:text-4xl lg:text-5xl font-dancing bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold"
                repeat={0}
                cursor={false}
              />
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-500 transform ${
                showButtons
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base">
                  Read My CV
                </button>
                <div className="flex gap-2">
                  <SocialLink
                    href="https://linkedin.com/in/svdpmukherjee"
                    Icon={AiFillLinkedin}
                    hoverClass="group-hover:text-blue-600"
                  />
                  <SocialLink
                    href="https://github.com/svdpmukherjee"
                    Icon={AiFillGithub}
                    hoverClass="group-hover:text-black"
                  />
                  <SocialLink
                    href="https://scholar.google.com/citations?user=BOmtS4sAAAAJ&hl=en&inst=15483811489544987344&oi=ao"
                    Icon={SiGooglescholar}
                    hoverClass="group-hover:text-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - InteractiveExpertise */}
          <div className="w-full flex flex-col space-y-6 py-4">
            <InteractiveExpertise />
          </div>
        </div>
      </div>
    </div>
  );
};

// Extracted SocialLink component for better organization
const SocialLink = ({ href, Icon, hoverClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gray-100 transition-all duration-300 group"
  >
    <Icon
      className={`text-2xl sm:text-3xl lg:text-4xl text-gray-600 ${hoverClass}`}
    />
  </a>
);

export default Hero;
