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
    <div className="pt-16 px-4 md:px-6 lg:px-8" id="home">
      {/* Adjust main container width */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto pt-8">
        <div className="w-full flex flex-col items-center space-y-4 md:space-y-6">
          {/* Profile Picture Container */}
          <div className="relative w-full aspect-square">
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
          <div className="h-12 md:h-16 flex items-center">
            <TypeAnimation
              sequence={[
                "Hello! I am Suvo...",
                1000,
                () => handleNameTypingComplete(),
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl md:text-3xl lg:text-4xl font-dancing bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold"
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
            <div className="flex flex-col items-center gap-4 p-4">
              <button
                className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 
                text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 
                shadow-xl hover:shadow-xl w-full text-base md:text-xl"
              >
                Download My CV
              </button>
              <div className="flex gap-2 pb-8 md:pb-16">
                <SocialLink
                  href="https://linkedin.com/in/svdpmukherjee"
                  Icon={AiFillLinkedin}
                  hoverClass="group-hover:text-blue-600 "
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

          {/* Current Activity & Career Interest */}
          <div className="space-y-8 md:space-y-12 w-full md:w-[130%] text-left mt-4">
            <div className="space-y-3 md:space-y-4 reveal">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-600">
                Current Status
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600">
                Pursuing PhD in Human-Computer Interaction at University of
                Luxembourg
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 pb-12 md:pb-20 reveal">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-600">
                Career Interest
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-600">
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
          <InteractiveExpertise />
        </div>
      </div>
    </div>
  );
};

export default Hero;
