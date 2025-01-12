import { useState, useEffect, useRef } from "react";
import { useScrollEffects } from "./ScrollEffects";

const InteractiveExpertise = () => {
  useScrollEffects();
  const [activeArea, setActiveArea] = useState(null);
  const [visibleHexagons, setVisibleHexagons] = useState([]);
  const [glowingIndex, setGlowingIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const componentRef = useRef(null);

  const areas = [
    {
      id: "center",
      title: "Research & Development",
      subtitle: "Interdisciplinary Specialist",
      color: "from-slate-700 to-slate-900",
      textColor: "text-slate-800",
      isCenter: true,
    },
    {
      id: "technical",
      title: "Technical Development",
      color: "from-red-400 to-red-800",
      textColor: "text-red-500",
      bullets: [
        "Full Stack Development",
        "Research Prototyping",
        "System Architecture Design",
      ],
    },
    {
      id: "research",
      title: "Research Methods",
      color: "from-blue-400 to-blue-800",
      textColor: "text-blue-500",
      bullets: [
        "Mixed Methods Experimental Design",
        "Quantitative & Qualitative Data Collection & Analysis",
        "Meaningful Insights Through Visualization",
      ],
    },
    {
      id: "innovation",
      title: "Innovation with AI",
      color: "from-emerald-400 to-emerald-800",
      textColor: "text-emerald-500",
      bullets: [
        "AI Integration to Applications",
        "Agentic AI Development",
        "Human-AI Interaction",
      ],
    },
    {
      id: "project",
      title: "Problem Solving",
      color: "from-amber-400 to-amber-800",
      textColor: "text-amber-500",
      bullets: [
        "Collaborative Brainstorming",
        "Design Solutions",
        "Technical Writing",
      ],
    },
    {
      id: "privacy",
      title: "Privacy-Preserving Solutions",
      color: "from-cyan-400 to-cyan-800",
      textColor: "text-cyan-500",
      bullets: [
        "Privacy by Design",
        "Responsible AI Development",
        "Data Protection Frameworks",
      ],
    },
    {
      id: "user",
      title: "User Research",
      color: "from-purple-400 to-purple-800",
      textColor: "text-purple-500",
      bullets: [
        "User Behavioral Analysis",
        "UX Research & Evaluation",
        "Usability Testing",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setVisibleHexagons(["center"]);
            setTimeout(() => {
              setVisibleHexagons(areas.map((area) => area.id));
            }, 700);
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (activeArea) return;
    const interval = setInterval(() => {
      setGlowingIndex((prev) => (prev + 1) % (areas.length - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [activeArea, areas.length]);

  const handleAreaClick = (areaId) => {
    setActiveArea(areaId === activeArea ? null : areaId);
  };

  return (
    <div
      ref={componentRef}
      className="relative w-[260px] xs:w-[280px] sm:w-[340px] aspect-square mx-auto mt-8 reveal"
    >
      {/* Center Hexagon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`w-28 xs:w-36 sm:w-40 h-28 xs:h-36 sm:h-40 bg-gradient-to-br from-slate-500 to-slate-900 
          transform transition-all duration-700 ${
            visibleHexagons.includes("center")
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-2">
            <span className="text-white text-xs xs:text-sm sm:text-base font-bold">
              Research & Development
            </span>
            <span className="text-white/90 text-[10px] xs:text-[11px] sm:text-[12px] mt-1">
              Interdisciplinary Specialist
            </span>
          </div>
        </div>
      </div>

      {/* Surrounding Circles */}
      {areas
        .filter((area) => !area.isCenter)
        .map((area, index) => {
          const angle = (2 * Math.PI * index) / (areas.length - 1);
          const radius = 120; // Adjust based on mobile screen size
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={area.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 
              transition-all duration-700  ${
                visibleHexagons.includes(area.id)
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
              }`}
              style={{
                left: `${50 + (x / (radius + 10)) * 50}%`,
                top: `${50 + (y / (radius + 10)) * 50}%`,
                zIndex: activeArea === area.id ? 30 : 20,
              }}
              onClick={() => handleAreaClick(area.id)}
            >
              <div
                className={`w-20 xs:w-24 sm:w-32 h-20 xs:h-24 sm:h-32 rounded-full flex items-center justify-center
                cursor-pointer transition-all duration-300 shadow-lg
                bg-gradient-to-br ${area.color}
                ${
                  activeArea === area.id
                    ? "scale-110 shadow-[0_0_20px_rgba(59,0,255,10)]"
                    : ""
                }
                ${
                  !activeArea && glowingIndex === index
                    ? // ? "shadow-[0_0_20px_rgba(0,0,255,10)]"
                      // : ""
                      "shadow-[0_0_20px_rgba(59,0,255,10)]"
                    : ""
                }`}
              >
                <span className="text-white font-bold text-xs xs:text-xs sm:text-base p-2 text-center">
                  {area.title}
                </span>
              </div>
            </div>
          );
        })}

      {/* Info Box */}
      {activeArea && !areas.find((a) => a.id === activeArea)?.isCenter && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50
          w-56 xs:w-60 sm:w-64 bg-white rounded-xl shadow-xl p-3 transition-opacity duration-300"
        >
          <h4
            className={`text-sm xs:text-base sm:text-lg font-bold ${
              areas.find((a) => a.id === activeArea)?.textColor
            }`}
          >
            {areas.find((a) => a.id === activeArea)?.title}
          </h4>
          <ul className="mt-2 space-y-1">
            {areas
              .find((a) => a.id === activeArea)
              ?.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="text-xs xs:text-sm sm:text-base text-slate-600 flex items-start"
                >
                  <span
                    className={`${
                      areas.find((a) => a.id === activeArea)?.textColor
                    } mr-1`}
                  >
                    •
                  </span>
                  {bullet}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InteractiveExpertise;
