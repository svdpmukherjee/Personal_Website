import React, { useState, useEffect } from "react";

const iconFiles = import.meta.glob("/src/assets/icons/*.svg", {
  eager: true,
  import: "default",
});

const icons = Object.entries(iconFiles).reduce((acc, [path, icon]) => {
  const filename = path.split("/").pop().replace(".svg", "");
  return { ...acc, [filename]: icon };
}, {});

// Mobile components - keeping exactly as in project
const MobileExpertiseDots = ({ level }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className={`w-1 h-1 rounded-full transition-all duration-300 
          ${
            index < Math.round(level * 5)
              ? "bg-gradient-to-r from-blue-500 to-cyan-400"
              : "bg-gray-200"
          }`}
      />
    ))}
  </div>
);

const MobileSkillItem = ({ item }) => {
  const IconSrc = icons[item.iconName];
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <img src={IconSrc} alt={item.name} className="w-5 h-5" />
        <span className="text-sm text-gray-700 font-medium">{item.name}</span>
      </div>
      <MobileExpertiseDots level={item.expertiseLevel} />
    </div>
  );
};

const MobileStackSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2.5">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-2">
      {items.map((item, index) => (
        <MobileSkillItem key={index} item={item} />
      ))}
    </div>
  </div>
);

// Desktop components
const DesktopSkillBar = ({ level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(level * 100);
  }, [level]);

  return (
    <div className="relative w-full">
      <div className="flex gap-1 h-3">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="flex-1 bg-gray-200 rounded-sm overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-sm 
                transition-all duration-1000 ease-out"
              style={{
                width: `${
                  idx < Math.floor(width / 20) ? 100 : (width % 20) * 5
                }%`,
                transitionDelay: `${idx * 100}ms`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const DesktopSkillItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconSrc = icons[item.iconName];

  return (
    <div
      className="relative group rounded-lg p-4 transition-all duration-300
        hover:shadow-lg hover:shadow-blue-100 bg-white border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
      />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <img
            src={IconSrc}
            alt={item.name}
            className={`w-6 h-6 transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            }`}
          />
          <span className="text-sm text-gray-700 font-medium">{item.name}</span>
        </div>
        <DesktopSkillBar level={item.expertiseLevel} />
      </div>
    </div>
  );
};

const DesktopStackSection = ({ title, items }) => (
  <div className="space-y-4 w-full">
    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
        <DesktopSkillItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stacks = {
    development: {
      frontend_backend: {
        title: "Frontend & Backend",
        items: [
          {
            name: "ReactJS",
            iconName: "react",
            expertiseLevel: 0.9,
          },
          {
            name: "TailwindCSS",
            iconName: "tailwind",
            expertiseLevel: 0.85,
          },
          {
            name: "Python",
            iconName: "python",
            expertiseLevel: 0.9,
          },
          {
            name: "FastAPI",
            iconName: "fastapi",
            expertiseLevel: 0.85,
          },
          {
            name: "MongoDB",
            iconName: "mongodb",
            expertiseLevel: 0.8,
          },
          {
            name: "GitHub",
            iconName: "github",
            expertiseLevel: 0.9,
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
            expertiseLevel: 0.9,
          },
          {
            name: "LimeSurvey",
            iconName: "limesurvey",
            expertiseLevel: 0.85,
          },
          {
            name: "STATA",
            iconName: "stata",
            expertiseLevel: 0.8,
          },
          {
            name: "R",
            iconName: "r",
            expertiseLevel: 0.8,
          },
        ],
      },
      design: {
        title: "Design Tools",
        items: [
          {
            name: "Figma",
            iconName: "figma",
            expertiseLevel: 0.9,
          },
          {
            name: "Miro",
            iconName: "miro",
            expertiseLevel: 0.85,
          },
          {
            name: "Photoshop",
            iconName: "photoshop",
            expertiseLevel: 0.8,
          },
          {
            name: "Illustrator",
            iconName: "illustrator",
            expertiseLevel: 0.75,
          },
        ],
      },
    },
    cloud: {
      title: "DevOps & Cloud",
      items: [
        {
          name: "AWS",
          iconName: "aws",
          expertiseLevel: 0.8,
        },
        {
          name: "Docker",
          iconName: "docker",
          expertiseLevel: 0.8,
        },
      ],
    },
    ai: {
      title: "AI & ML",
      items: [
        {
          name: "PyTorch",
          iconName: "pytorch",
          expertiseLevel: 0.8,
        },
        {
          name: "Langchain",
          iconName: "langchain",
          expertiseLevel: 0.9,
        },
      ],
    },
  };

  if (isMobile) {
    return (
      <div className="space-y-6">
        <MobileStackSection
          title={stacks.development.frontend_backend.title}
          items={stacks.development.frontend_backend.items}
        />
        <MobileStackSection
          title={stacks.tools.research.title}
          items={stacks.tools.research.items}
        />
        <MobileStackSection
          title={stacks.cloud.title}
          items={stacks.cloud.items}
        />

        <MobileStackSection
          title={stacks.tools.design.title}
          items={stacks.tools.design.items}
        />
        <MobileStackSection title={stacks.ai.title} items={stacks.ai.items} />
      </div>
    );
  }

  return (
    <div className="w-full p-6 space-y-12 bg-gradient-to-b from-transparent via-gray-50 to-blue-50/30">
      <div className="grid grid-cols-2 gap-10">
        <div className="space-y-6">
          <DesktopStackSection
            title={stacks.development.frontend_backend.title}
            items={stacks.development.frontend_backend.items}
          />
          <DesktopStackSection
            title={stacks.tools.design.title}
            items={stacks.tools.design.items}
          />
        </div>
        <div className="space-y-6">
          <DesktopStackSection
            title={stacks.tools.research.title}
            items={stacks.tools.research.items}
          />
          <div className="space-y-6">
            <DesktopStackSection
              title={stacks.cloud.title}
              items={stacks.cloud.items}
            />
            <DesktopStackSection
              title={stacks.ai.title}
              items={stacks.ai.items}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
