const TechStack = () => {
  const stacks = {
    development: {
      frontend_backend: {
        title: "Frontend & Backend",
        items: [
          {
            name: "React",
            iconName: "react",
            expertiseLevel: 0.9,
          },
          {
            name: "Tailwind",
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
            name: "Lime Survey",
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
            expertiseLevel: 0.7,
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

  // Load icons dynamically
  const iconFiles = import.meta.glob("/src/assets/icons/*.svg", {
    eager: true,
    import: "default",
  });

  const icons = Object.entries(iconFiles).reduce((acc, [path, icon]) => {
    const filename = path.split("/").pop().replace(".svg", "");
    return { ...acc, [filename]: icon };
  }, {});

  // Component to render expertise level dots
  const ExpertiseDots = ({ level }) => {
    const dots = 5;
    const filledDots = Math.round(level * dots);

    return (
      <div className="flex gap-1">
        {[...Array(dots)].map((_, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full transition-all duration-300 
              ${
                index < filledDots
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400"
                  : "bg-gray-200"
              }`}
          />
        ))}
      </div>
    );
  };

  // Component to render a single skill item
  const SkillItem = ({ item }) => {
    const IconSrc = icons[item.iconName];

    return (
      <div className="flex flex-col items-center justify-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm ">
        <div className="flex items-center gap-2 mb-2">
          <img src={IconSrc} alt={item.name} className="w-5 h-5" />
          <span className="text-sm text-gray-700 font-medium">{item.name}</span>
        </div>
        <ExpertiseDots level={item.expertiseLevel} />
      </div>
    );
  };

  // Component to render a stack section
  const StackSection = ({ title, items }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2.5">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, index) => (
          <SkillItem key={index} item={item} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <StackSection
        title={stacks.development.frontend_backend.title}
        items={stacks.development.frontend_backend.items}
      />
      <StackSection
        title={stacks.tools.research.title}
        items={stacks.tools.research.items}
      />
      <StackSection
        title={stacks.tools.design.title}
        items={stacks.tools.design.items}
      />
      <StackSection title={stacks.cloud.title} items={stacks.cloud.items} />
      <StackSection title={stacks.ai.title} items={stacks.ai.items} />
    </div>
  );
};

export default TechStack;
