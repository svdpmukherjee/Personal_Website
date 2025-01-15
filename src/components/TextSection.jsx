import React, { useEffect, useState, useRef } from "react";
import TechStack from "./TechStack";
import Highlight from "./Highlight";
import { useScrollEffects } from "./ScrollEffects";

const MobileView = () => (
  <div className="space-y-12">
    {/* Vision Section */}
    <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-2 shadow-lg reveal">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        My Vision
      </h2>
      <div className="space-y-4 text-base text-gray-600">
        <p className="leading-relaxed">
          In today's digital landscape, creating{" "}
          <Highlight delay={300} color="#ef59e8" style="circular_1">
            meaningful solutions
          </Highlight>{" "}
          requires understanding both human needs and technological
          capabilities. My research focuses on designing and developing digital
          solutions that{" "}
          <Highlight delay={600} color="#FFFF00" style="rectangular">
            prioritizes user experiences.
          </Highlight>
        </p>
        <p className="leading-relaxed">
          My work combines technical expertise with human behavior research to
          create solutions that are both{" "}
          <Highlight delay={900} color="#0000FF" style="circular_1">
            robust
          </Highlight>{" "}
          and ethically sound.
        </p>
        <p className="leading-relaxed">
          By{" "}
          <Highlight delay={600} color="#00ff00" style="rectangular">
            bridging technology and human needs
          </Highlight>
          , I ensure privacy and user experience remain paramount in every
          solution. While AI offers powerful capabilities, my interest
          emphasizes{" "}
          <Highlight delay={1200} color="#dd0000" style="circular_1">
            responsible innovation
          </Highlight>{" "}
          where technology amplifies human agency.
        </p>
      </div>
    </div>

    {/* Tech Stack Section */}
    <div className="reveal">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center gradient-text">
        My Skill Stack
      </h2>
      <TechStack isMobileView={true} />
    </div>
  </div>
);

const DesktopView = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:pt-24 reveal">
    {/* Vision Section */}
    <div className="lg:sticky lg:top-24 lg:self-start">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 gradient-text">
        My Vision
      </h2>
      <div className="text-md sm:text-lg text-gray-600 dark:text-gray-300 space-y-6 ">
        <p className="leading-relaxed">
          In today's digital landscape, creating{" "}
          <Highlight delay={300} color="#ef59e8" style="circular_1">
            meaningful solutions
          </Highlight>{" "}
          requires understanding both human needs and technological
          capabilities. My research focuses on designing and developing digital
          solutions that{" "}
          <Highlight delay={600} color="#FFFF00" style="rectangular">
            prioritizes user experiences.
          </Highlight>
        </p>
        <p className="leading-relaxed">
          My work combines technical expertise with human behavior research to
          create solutions that are both{" "}
          <Highlight delay={900} color="#0000FF" style="circular_1">
            robust
          </Highlight>{" "}
          and ethically sound.
        </p>
        <p className="leading-relaxed">
          By{" "}
          <Highlight delay={600} color="#00ff00" style="rectangular">
            bridging technology and human needs
          </Highlight>
          , I ensure privacy and user experience remain paramount in every
          solution. While AI offers powerful capabilities, my interest
          emphasizes{" "}
          <Highlight delay={1200} color="#dd0000" style="circular_1">
            responsible innovation
          </Highlight>{" "}
          where technology amplifies human agency.
        </p>
      </div>
    </div>

    {/* Tech Stack Section */}
    <div>
      <h2 className="text-3xl sm:text-3xl font-bold mb-8 gradient-text">
        Technical and Research Skill Stack
      </h2>
      <TechStack isMobileView={false} />
    </div>
  </div>
);

const TextSection = () => {
  const [isMobile, setIsMobile] = useState(true);
  useScrollEffects();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Switch at lg breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${
        isMobile
          ? "px-4 py-16 max-w-sm mx-auto"
          : "max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      }`}
      id="skills"
    >
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default TextSection;
