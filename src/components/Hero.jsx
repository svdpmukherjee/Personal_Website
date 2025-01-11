import React, { useState } from "react";
import background from "../assets/background.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { useScrollEffects } from "./ScrollEffects";
import ProfilePicture from "./ProfilePicture";
import InteractiveExpertise from "./InteractiveExpertise";

// Typography components for consistent responsive text
const MainHeading = ({ children, className = "" }) => (
  <h1
    className={`text-2xl sm:text-3xl lg:text-4xl font-dancing 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
    text-transparent bg-clip-text font-bold ${className}`}
  >
    {children}
  </h1>
);

const SectionHeading = ({ children, className = "" }) => (
  <h2
    className={`text-lg sm:text-xl lg:text-2xl font-bold text-slate-600 ${className}`}
  >
    {children}
  </h2>
);

const BodyText = ({ children, className = "" }) => (
  <p className={`text-base sm:text-lg lg:text-xl text-slate-600 ${className}`}>
    {children}
  </p>
);

const SocialLink = ({ href, Icon, hoverClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gray-100 transition-all duration-300 group"
  >
    <Icon
      className={`text-xl sm:text-2xl lg:text-3xl text-gray-600 ${hoverClass}`}
    />
  </a>
);

const Hero = () => {
  useScrollEffects();
  const [showButtons, setShowButtons] = useState(false);

  const handleNameTypingComplete = () => {
    setTimeout(() => setShowButtons(true), 500);
  };

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
                wrapper="span"
                speed={50}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-dancing
                  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                  text-transparent bg-clip-text font-bold"
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
                <button
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                  text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 
                  shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base"
                >
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

          {/* Right Column - Content */}
          <div className="w-full flex flex-col space-y-8">
            <div className="space-y-8">
              <div>
                <SectionHeading>Current Activity</SectionHeading>
                <BodyText>
                  Pursuing PhD in Human-Computer Interaction at University of
                  Luxembourg
                </BodyText>
              </div>

              <div>
                <SectionHeading>Career Interest</SectionHeading>
                <BodyText>
                  R&D Specialist at the Intersection of Technology and
                  Psychology: Dedicated to advancing User Experience Research to
                  inspire meaningful innovation in digital solutions.
                </BodyText>
              </div>
            </div>

            {/* Interactive Expertise Component */}
            <InteractiveExpertise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
