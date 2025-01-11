import React, { useState, useEffect, useMemo, useCallback } from "react";

const InteractiveExpertise = () => {
  const [activeArea, setActiveArea] = useState(null);
  const [visibleHexagons, setVisibleHexagons] = useState([]);
  const [glowingIndex, setGlowingIndex] = useState(0);

  // Memoize areas data to prevent recreation on every render
  const areas = useMemo(
    () => [
      {
        id: "center",
        title: "Research & Development",
        subtitle: "Interdisciplinary Specialist",
        color: "from-slate-700 to-slate-900",
        textColor: "text-slate-800",
        x: 0,
        y: 0,
        isCenter: true,
      },
      {
        id: "user",
        title: "User Research",
        color: "from-purple-400 to-purple-600",
        textColor: "text-purple-500",
        x: 0,
        y: -1,
        bullets: [
          "User Behavioral Analysis",
          "UX Research & Evaluation",
          "Usability Testing",
        ],
      },
      {
        id: "technical",
        title: "Technical Development",
        color: "from-red-400 to-red-600",
        textColor: "text-red-500",
        x: 0.866,
        y: -0.5,
        bullets: [
          "Full Stack Development",
          "Research Prototyping",
          "System Architecture Design",
        ],
      },
      {
        id: "research",
        title: "Research Methods",
        color: "from-blue-400 to-blue-600",
        textColor: "text-blue-500",
        x: 0.866,
        y: 0.5,
        bullets: [
          "Mixed Methods Design",
          "Data Analysis",
          "Insights Generation",
        ],
      },
      {
        id: "innovation",
        title: "Innovation & AI",
        color: "from-emerald-400 to-emerald-600",
        textColor: "text-emerald-500",
        x: 0,
        y: 1,
        bullets: [
          "AI Integration",
          "Agentic AI Development",
          "Human-AI Interaction",
        ],
      },
      {
        id: "project",
        title: "Project Management",
        color: "from-amber-400 to-amber-600",
        textColor: "text-amber-500",
        x: -0.866,
        y: 0.5,
        bullets: ["Problem Solving", "Team Collaboration", "Technical Writing"],
      },
      {
        id: "privacy",
        title: "Privacy-Preserving Solutions",
        color: "from-cyan-400 to-cyan-600",
        textColor: "text-cyan-500",
        x: -0.866,
        y: -0.5,
        bullets: [
          "Privacy by Design",
          "Responsible AI Development",
          "Data Protection Frameworks",
        ],
      },
    ],
    []
  );

  // Calculate spacing based on screen size - moved inside component to reduce complexity
  const baseRadius = 60;
  const getScaledRadius = (width) => {
    if (width >= 1024) return baseRadius * 1.2;
    if (width >= 768) return baseRadius * 1.1;
    return baseRadius * 0.9;
  };

  const [spacing, setSpacing] = useState(() => {
    const radius = getScaledRadius(window.innerWidth);
    return {
      radius,
      verticalSpacing: radius * 3,
      horizontalSpacing: radius * 3,
    };
  });

  // Handle window resize
  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const radius = getScaledRadius(window.innerWidth);
        setSpacing({
          radius,
          verticalSpacing: radius * 3,
          horizontalSpacing: radius * 3,
        });
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Initial animation to show hexagons
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleHexagons(["center"]);
      setTimeout(() => {
        setVisibleHexagons(areas.map((area) => area.id));
      }, 300);
    }, 100);

    return () => clearTimeout(timer);
  }, [areas]);

  // Glow animation effect
  useEffect(() => {
    if (activeArea) return;

    const interval = setInterval(() => {
      setGlowingIndex((prev) => (prev + 1) % (areas.length - 1));
    }, 500);

    return () => clearInterval(interval);
  }, [activeArea, areas.length]);

  // Memoized event handlers
  const handleAreaHover = useCallback((areaId) => {
    setActiveArea(areaId);
  }, []);

  const handleAreaLeave = useCallback(() => {
    setActiveArea(null);
  }, []);

  // Render the info box for active area
  const renderInfoBox = useCallback(() => {
    if (!activeArea || areas.find((a) => a.id === activeArea)?.isCenter)
      return null;

    const activeAreaData = areas.find((a) => a.id === activeArea);
    if (!activeAreaData) return null;

    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300">
        <div className="w-64 sm:w-72 bg-white rounded-xl shadow-xl p-4">
          <h4
            className={`font-bold ${activeAreaData.textColor} text-base mb-2`}
          >
            {activeAreaData.title}
          </h4>
          <ul className="space-y-2">
            {activeAreaData.bullets?.map((bullet, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <span className={`${activeAreaData.textColor} mr-2`}>•</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }, [activeArea, areas]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Header Content */}
      <div className="mb-8 space-y-8">
        <div>
          <h3 className="text-2xl sm:text-xl font-bold text-slate-600">
            Current Activity
          </h3>
          <p className="text-slate-600 text-md sm:text-base">
            Pursuing PhD in Human-Computer Interaction at University of
            Luxembourg
          </p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-xl font-bold text-slate-600">
            Career Interest
          </h3>
          <p className="text-slate-600 text-md sm:text-base">
            R&D Specialist at the Intersection of Technology and Psychology:
            Dedicated to advancing User Experience Research to inspire
            meaningful innovation in digital solutions.
          </p>
        </div>
      </div>

      {/* Main Expertise Diagram */}
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        {/* Circular Background */}
        <div
          className="absolute inset-0 rounded-full bg-gray-50 shadow-lg"
          style={{
            width: "95%",
            height: "95%",
            left: "2.5%",
            top: "2.5%",
          }}
        />

        {/* Expertise Areas Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-[500px] max-h-[500px] sm:max-w-[600px] sm:max-h-[600px] lg:max-w-[700px] lg:max-h-[700px]">
            {areas.map((area, index) => {
              const scale = area.isCenter ? 1.5 : 1;
              const xPos = area.x * spacing.horizontalSpacing;
              const yPos = area.y * spacing.verticalSpacing;
              const isGlowing =
                !area.isCenter && glowingIndex === areas.indexOf(area) - 1;

              return (
                <div
                  key={area.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700
                    ${
                      visibleHexagons.includes(area.id)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }`}
                  style={{
                    left: `calc(50% + ${xPos}px)`,
                    top: `calc(50% + ${yPos}px)`,
                    zIndex: area.isCenter ? 10 : 20,
                  }}
                  onMouseEnter={() => handleAreaHover(area.id)}
                  onMouseLeave={handleAreaLeave}
                >
                  <div
                    className={`
                      flex flex-col items-center justify-center text-center p-2 sm:p-3
                      transform transition-all duration-300 cursor-pointer
                      ${
                        area.isCenter
                          ? "shadow-2xl ring-2 ring-white/50"
                          : "shadow-lg hover:shadow-xl rounded-full"
                      }
                      ${
                        activeArea === area.id
                          ? "hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]"
                          : ""
                      }
                      ${
                        isGlowing && !activeArea
                          ? "shadow-[0_0_30px_rgba(59,130,246,0.9)]"
                          : ""
                      }
                      bg-gradient-to-br ${area.color}
                    `}
                    style={{
                      width: `${spacing.radius * 2 * scale}px`,
                      height: `${spacing.radius * 2 * scale}px`,
                      clipPath: area.isCenter
                        ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                        : undefined,
                    }}
                  >
                    <span className="text-white font-bold text-sm sm:text-base lg:text-lg px-1">
                      {area.title}
                    </span>
                    {area.isCenter && (
                      <span className="text-white/90 text-xs sm:text-sm mt-1">
                        {area.subtitle}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Info Box */}
            {renderInfoBox()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveExpertise;
