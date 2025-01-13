import React, { useState } from "react";
import { useScrollEffects } from "./ScrollEffects";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import background from "../assets/background.png";
import ProfilePicture from "./ProfilePicture";
import InteractiveExpertise from "./InteractiveExpertise";

const Hero = () => {
  useScrollEffects();
  const [showButtons, setShowButtons] = useState(false);

  const handleNameTypingComplete = () => {
    setTimeout(() => setShowButtons(true), 500);
  };

  const SocialLink = ({ href, Icon, hoverClass }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-gray-100 transition-all duration-300 group"
    >
      <Icon className={`text-3xl text-gray-600 ${hoverClass}`} />
    </a>
  );

  return (
    <div className="pt-16 lg:pt-32 md:pt-24 px-4 md:px-6 lg:px-8" id="home">
      <div className="max-w-[1400px] mx-auto ">
        {/* Flex container for side-by-side layout on larger screens */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-24 xl:gap-32 pt-8 ">
          {/* Left Column - Profile and Social */}
          <div className="lg:w-1/3 flex flex-col items-center lg:sticky lg:top-24 ">
            {/* Profile Picture Container */}
            <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl aspect-square relative mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[120%] overflow-hidden">
                  <img
                    src={background}
                    alt="background"
                    className="w-full h-full object-cover filter opacity-80 scale-110"
                  />
                </div>
              </div>
              <ProfilePicture />
            </div>

            {/* Name Animation */}
            <div className="h-16 flex items-center mb-4">
              <TypeAnimation
                sequence={[
                  "Hello! I am Suvo...",
                  1000,
                  () => handleNameTypingComplete(),
                ]}
                wrapper="span"
                speed={50}
                className="text-3xl md:text-4xl lg:text-4xl font-dancing bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold"
                repeat={0}
                cursor={false}
              />
            </div>

            {/* Social Links and CV Button */}
            <div
              className={`w-full max-w-sm transition-all duration-500 transform ${
                showButtons
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-4 p-4">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-xl text-xl">
                  Download My CV
                </button>
                <div className="flex gap-4 pb-8">
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

          {/* Right Column - Status, Career Interest, and Interactive Expertise */}
          <div className="lg:w-1/2 space-y-12 mt-8 lg:mt-0 ">
            {/* Current Activity & Career Interest */}
            <div className="space-y-12 reveal">
              {/* Current Status */}
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl sm:text-3xl font-bold text-slate-600">
                  Current Status
                </h2>
                <p className="text-xl lg:text-xl sm:text-2xl text-slate-600">
                  Pursuing PhD in Human-Computer Interaction at University of
                  Luxembourg (Finishing in Aug 2025 Tentatively)
                </p>
              </div>

              {/* Career Interest */}
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl sm:text-3xl  font-bold text-slate-600">
                  Career Interest
                </h2>
                <p className="text-xl lg:text-xl sm:text-2xl text-slate-600">
                  <span className="font-semibold">
                    R&D Specialist at the Intersection of Technology and
                    Psychology:{" "}
                  </span>
                  Dedicated to Advancing User Experience Research to Inspire
                  Meaningful Innovation in Digital Solutions
                </p>
              </div>
            </div>

            {/* Interactive Expertise Component */}
            <div className="mt-12 md:mt-24 lg:mt-36">
              <div className="w-full h-px mb-12 md:mb-24"></div>
              <InteractiveExpertise />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
