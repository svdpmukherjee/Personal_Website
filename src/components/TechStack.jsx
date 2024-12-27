import { useState, useEffect, useRef } from "react";

const iconFiles = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
  import: "default",
});

const icons = Object.entries(iconFiles).reduce((acc, [path, icon]) => {
  const filename = path.split("/").pop().replace(".svg", "");
  return { ...acc, [filename]: icon };
}, {});

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options.threshold, options.root, options.rootMargin]);

  return [elementRef, isIntersecting];
};

const SkillBar = ({ level }) => {
  const [width, setWidth] = useState(0);
  const [ref, isInView] = useIntersectionObserver({ threshold: 0 });

  useEffect(() => {
    if (isInView) {
      setWidth(level * 100);
    }
  }, [isInView, level]);

  const percentage = Math.round(level * 100);
  const segments = 5;
  const segmentWidth = 100 / segments;

  // Calculate how filled each segment should be
  const getSegmentFill = (segmentIndex) => {
    const segmentStart = segmentIndex * segmentWidth;
    const segmentEnd = (segmentIndex + 1) * segmentWidth;

    if (width >= segmentEnd) return 100; // Fully filled
    if (width <= segmentStart) return 0; // Empty

    // Partially filled
    return ((width - segmentStart) / segmentWidth) * 100;
  };

  return (
    <div ref={ref} className="relative w-full">
      {/* Segments Container */}
      <div className="flex gap-1 h-3">
        {[...Array(segments)].map((_, index) => (
          <div
            key={index}
            className="flex-1 bg-gray-200 rounded-sm overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm transition-all duration-1000 ease-out"
              style={{
                width: `${getSegmentFill(index)}%`,
                transitionDelay: `${index * 100}ms`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Percentage Label
      <div className="absolute -top-6 right-0 text-sm text-gray-600">
        {percentage}%
      </div> */}
    </div>
  );
};

const TechnologyCard = ({ name, iconName, color, expertiseLevel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconSrc = icons[iconName];

  return (
    <div
      className={`relative group rounded-lg p-4 transition-all duration-300
        hover:shadow-lg hover:shadow-blue-100 bg-white border border-gray-100
        ${isHovered ? "transform scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={IconSrc}
            alt={name}
            className={`w-6 h-6 ${color} transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          />
          <span className="text-sm text-gray-700 font-medium">{name}</span>
        </div>
        <SkillBar level={expertiseLevel} />
      </div>
    </div>
  );
};

const StackSection = ({ title, items }) => (
  <div className="space-y-4 w-full">
    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
      {title}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <TechnologyCard
          key={index}
          name={item.name}
          iconName={item.iconName}
          color={item.color}
          expertiseLevel={item.expertiseLevel}
        />
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const stacks = {
    development: {
      frontend: {
        title: "Frontend Dev Tools",
        items: [
          {
            name: "React",
            iconName: "react",
            color: "text-sky-500",
            expertiseLevel: 0.9,
          },
          {
            name: "Next.js",
            iconName: "nextjs",
            color: "text-gray-800",
            expertiseLevel: 0.8,
          },
          {
            name: "Vue.js",
            iconName: "vuejs",
            color: "text-emerald-500",
            expertiseLevel: 0.75,
          },
          {
            name: "Tailwind",
            iconName: "tailwind",
            color: "text-cyan-500",
            expertiseLevel: 0.85,
          },
        ],
      },
      backend: {
        title: "Backend Dev Tools",
        items: [
          {
            name: "Python",
            iconName: "python",
            color: "text-blue-500",
            expertiseLevel: 0.9,
          },
          {
            name: "FastAPI",
            iconName: "fastapi",
            color: "text-teal-600",
            expertiseLevel: 0.85,
          },
          {
            name: "Streamlit",
            iconName: "streamlit",
            color: "text-rose-600",
            expertiseLevel: 0.8,
          },
          {
            name: "MongoDB",
            iconName: "mongodb",
            color: "text-rose-600",
            expertiseLevel: 0.8,
          },
        ],
      },
    },
    tools: {
      research: {
        title: "Research Tools",
        items: [
          {
            name: "MAXQDA",
            iconName: "maxqda",
            color: "text-blue-600",
            expertiseLevel: 0.9,
          },
          {
            name: "Lime Survey",
            iconName: "limesurvey",
            color: "text-emerald-600",
            expertiseLevel: 0.85,
          },
          {
            name: "STATA",
            iconName: "stata",
            color: "text-indigo-600",
            expertiseLevel: 0.8,
          },
          {
            name: "R",
            iconName: "r",
            color: "text-blue-700",
            expertiseLevel: 0.85,
          },
        ],
      },
      design: {
        title: "Design Tools",
        items: [
          {
            name: "Figma",
            iconName: "figma",
            color: "text-purple-600",
            expertiseLevel: 0.9,
          },
          {
            name: "Miro",
            iconName: "miro",
            color: "text-amber-500",
            expertiseLevel: 0.85,
          },
          {
            name: "Photoshop",
            iconName: "photoshop",
            color: "text-blue-700",
            expertiseLevel: 0.8,
          },
          {
            name: "Illustrator",
            iconName: "illustrator",
            color: "text-orange-600",
            expertiseLevel: 0.75,
          },
        ],
      },
    },
    cloud: {
      title: "DevOps and DVC Tools",
      items: [
        {
          name: "AWS",
          iconName: "aws",
          color: "text-orange-500",
          expertiseLevel: 0.8,
        },
        {
          name: "Google Cloud",
          iconName: "google_cloud",
          color: "text-blue-500",
          expertiseLevel: 0.75,
        },
        {
          name: "Docker",
          iconName: "docker",
          color: "text-sky-600",
          expertiseLevel: 0.8,
        },
        {
          name: "GitHub",
          iconName: "github",
          color: "text-gray-800",
          expertiseLevel: 0.9,
        },
      ],
    },
    ai: {
      title: "AI & ML Tools",
      items: [
        {
          name: "PyTorch",
          iconName: "pytorch",
          color: "text-orange-600",
          expertiseLevel: 0.85,
        },
        {
          name: "HuggingFace",
          iconName: "huggingface",
          color: "text-orange-600",
          expertiseLevel: 0.85,
        },
      ],
    },
  };

  return (
    <div className="w-full p-6 space-y-12 bg-gradient-to-b from-transparent via-gray-50 to-blue-50/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Development Stack */}
        <div className="space-y-12">
          <StackSection
            title={stacks.development.frontend.title}
            items={stacks.development.frontend.items}
          />
          <StackSection
            title={stacks.development.backend.title}
            items={stacks.development.backend.items}
          />
        </div>

        {/* Tools Stack */}
        <div className="space-y-12">
          <StackSection
            title={stacks.tools.research.title}
            items={stacks.tools.research.items}
          />
          <StackSection
            title={stacks.tools.design.title}
            items={stacks.tools.design.items}
          />
        </div>

        {/* Cloud & AI */}
        <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <StackSection title={stacks.cloud.title} items={stacks.cloud.items} />
          <StackSection title={stacks.ai.title} items={stacks.ai.items} />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
