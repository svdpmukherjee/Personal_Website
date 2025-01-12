import React from "react";
import { FaYoutube, FaFacebookF, FaDrum, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import bg_image from "../assets/bg-image.jpg";

const About = () => {
  return (
    <div className="relative py-16 px-4 overflow-hidden" id="about">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Background"
          className="w-full h-full object-cover opacity-10 blur-xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Title Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent text-center">
              A bit about myself...
            </h2>

            {/* Profile Image Section */}
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50"></div>
              <img
                src={bg_image}
                alt="Profile"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>

            {/* Fun Quote */}
            <div className="text-center italic text-gray-500">
              "Somewhere between coding and drumming, there's probably a
              solution to every problem!"
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-gray-600 leading-relaxed backdrop-blur-sm bg-white/50 rounded-xl p-6 shadow-lg">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaHeart className="text-red-400" />
                <span className="font-medium text-gray-800">
                  What gets me excited?
                </span>
              </div>
              <p className="text-gray-600">
                Solving tricky problems, playing with new tech, and finding ways
                to make AI actually useful in our daily lives. I'm constantly
                learning and experimenting - whether it's coding up new ideas or
                exploring the latest tech trends
              </p>
            </motion.div>

            <p>
              When I'm not geeking out over tech stuff, you'll find me{" "}
              <span className="gradient-text">behind the drums</span>{" "}
              <FaDrum className="inline text-black-500 text-xl" />. Check out
              some of our recent videos:{" "}
              <a
                href="https://www.youtube.com/watch?v=scUNnMiSQ38"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-red-500 hover:text-red-600 font-medium"
              >
                <FaYoutube className="inline text-xl" />
              </a>{" "}
              and{" "}
              <a
                href="https://www.facebook.com/61559775586891/videos/869684704937116"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium"
              >
                <FaFacebookF className="inline" />
              </a>
            </p>

            <div className="text-gray-600">
              <p>
                Oh, and I love learning languages! I am pretty comfortable in
                English, still working on my German (A2), and just started
                learning French. It's all part of the adventure of living and
                thriving in Luxembourg!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
