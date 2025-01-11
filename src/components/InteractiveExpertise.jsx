import React, { useState, useEffect, useMemo, useCallback } from "react";

const HexagonTitle = ({ children, isCenter, className = "" }) => (
  <span
    className={`text-white font-bold whitespace-normal ${
      isCenter ? "text-sm sm:text-base" : "text-xs sm:text-sm"
    } ${className}`}
  >
    {children}
  </span>
);

const InfoBoxTitle = ({ children, className = "" }) => (
  <h4 className={`text-xs sm:text-sm font-bold ${className}`}>{children}</h4>
);

const InfoBoxText = ({ children, className = "" }) => (
  <li className={`text-xs sm:text-sm text-slate-600 ${className}`}>
    {children}
  </li>
);

const InteractiveExpertise = () => {
  const [activeArea, setActiveArea] = useState(null);
  const [visibleHexagons, setVisibleHexagons] = useState([]);
  const [glowingIndex, setGlowingIndex] = useState(0);

  // Fixed base sizes that will scale with container
  const SHAPE_CONFIG = {
    centerHexagon: {
      size: 120, // Base size for center hexagon
      scale: 1.5, // Scale factor for center hexagon
    },
    circleSize: 100, // Base size for surrounding circles
    spacing: 160, // Base spacing between shapes
  };

  // Calculate container size based on viewport
  const getContainerSize = useCallback(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    if (vw < 640) {
      return 300; // Mobile
    } else if (vw < 1024) {
      return 400; // Tablet
    }
    return 500; // Desktop
  }, []);

  const [containerSize, setContainerSize] = useState(getContainerSize());

  // Memoize areas data
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

  // Calculate spacing based on screen size
  //   const baseRadius = 45;
  //   const getScaledRadius = (width) => {
  //     if (width >= 1024) return baseRadius * 1.2;
  //     if (width >= 768) return baseRadius * 1.1;
  //     return baseRadius * 0.9;
  //   };

  //   const [spacing, setSpacing] = useState(() => {
  //     const { radius, spacing: spacingMultiplier } = getBaseSizes(
  //       dimensions.width
  //     );
  //     return {
  //       radius,
  //       verticalSpacing: radius * spacingMultiplier,
  //       horizontalSpacing: radius * spacingMultiplier,
  //     };
  //   });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setContainerSize(getContainerSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getContainerSize]);

  // Initial animation
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

  const handleAreaHover = useCallback((areaId) => {
    setActiveArea(areaId);
  }, []);

  const handleAreaLeave = useCallback(() => {
    setActiveArea(null);
  }, []);

  // Calculate positions relative to container size
  const getShapePosition = (x, y) => {
    const centerOffset = containerSize / 2;
    const spacingFactor = containerSize / 500; // Scale spacing based on container size
    return {
      left: centerOffset + x * SHAPE_CONFIG.spacing * spacingFactor,
      top: centerOffset + y * SHAPE_CONFIG.spacing * spacingFactor,
    };
  };

  // Render info box
  const renderInfoBox = useCallback(() => {
    if (!activeArea || areas.find((a) => a.id === activeArea)?.isCenter)
      return null;

    const activeAreaData = areas.find((a) => a.id === activeArea);
    if (!activeAreaData) return null;

    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300">
        <div className="w-64 sm:w-72 bg-white rounded-xl shadow-xl p-4">
          <InfoBoxTitle className={activeAreaData.textColor}>
            {activeAreaData.title}
          </InfoBoxTitle>
          <ul className="space-y-2">
            {activeAreaData.bullets?.map((bullet, idx) => (
              <InfoBoxText key={idx} className="flex items-start">
                <span className={`${activeAreaData.textColor} mr-2`}>•</span>
                {bullet}
              </InfoBoxText>
            ))}
          </ul>
        </div>
      </div>
    );
  }, [activeArea, areas]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        {/* Main container */}
        <div className="absolute inset-0">
          <div
            className="relative mx-auto rounded-full bg-gray-50 shadow-lg"
            style={{
              width: containerSize,
              height: containerSize,
              margin: "0 auto",
            }}
          >
            {areas.map((area) => {
              const { left, top } = getShapePosition(area.x, area.y);
              const isGlowing =
                !area.isCenter && glowingIndex === areas.indexOf(area) - 1;
              const shapeSize = area.isCenter
                ? SHAPE_CONFIG.centerHexagon.size
                : SHAPE_CONFIG.circleSize;

              return (
                <div
                  key={area.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 
                    transition-all duration-700 ${
                      visibleHexagons.includes(area.id)
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    }`}
                  style={{
                    left,
                    top,
                    width: shapeSize,
                    height: shapeSize,
                    zIndex: area.isCenter ? 10 : 20,
                  }}
                  onMouseEnter={() => handleAreaHover(area.id)}
                  onMouseLeave={handleAreaLeave}
                >
                  <div
                    className={`
                      w-full h-full
                      flex flex-col items-center justify-center 
                      text-center p-2
                      transition-all duration-300 cursor-pointer
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
                      clipPath: area.isCenter
                        ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                        : undefined,
                    }}
                  >
                    <HexagonTitle isCenter={area.isCenter}>
                      {area.title}
                    </HexagonTitle>
                    {area.isCenter && (
                      <span className="text-white/90 text-xs mt-1">
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
