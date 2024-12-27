import { useScrollEffects } from "./ScrollEffects";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBuilding,
  FaUniversity,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

const Experience = () => {
  useScrollEffects();

  const education = [
    {
      institution: "University of Luxembourg",
      period: "2021 Nov - 2025 Aug (tentative)",
      degree: "Ph.D. in Human-Computer Interaction",
      description: [
        "Conducting research on improving user experience in AI-driven interfaces",
        "Leading multiple user studies and developing prototypes for testing novel interaction paradigms",
        "Published research papers in top-tier HCI conferences and journals",
        "Collaborating with industry partners on real-world applications",
      ],
      delay: 0,
    },
    {
      institution: "Eindhoven University of Technology",
      period: "2014 - 2016",
      degree: "M.Sc. in Human-Technology Interaction",
      description: [
        "Specialized in user experience research and interface design",
        "Completed thesis on adaptive user interfaces",
        "Participated in multiple industry-collaborative projects",
        "Core coursework: Advanced HCI, Research Methods, Cognitive Psychology",
      ],
      delay: 400,
    },
    {
      institution: "Heritage Institute of Technology",
      period: "2007 - 2011",
      degree: "B.Tech in Information Technology",
      description: [
        "Graduated with distinction in Information Technology",
        "Led student technical projects and competitions",
        "Core coursework: Programming, Algorithms, Databases",
        "Active participant in coding competitions and hackathons",
      ],
      delay: 800,
    },
  ];

  const workExperience = [
    {
      company: "Sterlite EdIndia Foundation",
      period: "2021 Apr - 2021 Oct",
      role: "Data Analyst",
      description: [
        "Led data-driven initiatives to improve educational outcomes",
        "Developed analytics frameworks to track student performance",
        "Collaborated with stakeholders to create actionable insights",
        "Implemented data visualization dashboards for reporting",
      ],
      delay: 200,
    },
    {
      company: "Philips Lighting, Eindhoven",
      period: "2016 Jan - 2016 Oct",
      role: "Research Intern",
      description: [
        "Conducted user research for smart lighting systems",
        "Designed and executed user studies to evaluate interfaces",
        "Developed prototypes for testing lighting control systems",
        "Contributed to user-centered design guidelines",
      ],
      delay: 600,
    },
    {
      company: "Infosys Limited",
      period: "2011 - 2014",
      role: "Senior Software Engineer",
      description: [
        "Led development teams in creating enterprise applications",
        "Managed client relationships and project deliverables",
        "Implemented agile methodologies to improve efficiency",
        "Mentored junior developers and conducted training",
      ],
      delay: 1000,
    },
  ];

  return (
    <div
      className="py-20 bg-gradient-to-b from-cyan-900 to-slate-900"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 reveal text-blue-300">
          Education & <span className="gradient-text">Experience</span>
        </h2>

        {/* Section Headers */}
        <div className="grid grid-cols-2 mb-12 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-2">
              <FaGraduationCap className="text-3xl" />
              Education
            </h3>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-400 flex items-center justify-center gap-2">
              <FaBriefcase className="text-3xl" />
              Work Experience
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Education Column */}
          <div className="space-y-8 pr-12">
            {education.map((entry, index) => (
              <div
                key={index}
                className="reveal scroll-trigger"
                style={{ "--delay": `${entry.delay}ms` }}
              >
                <div className="glass p-6 rounded-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-500/40">
                  <div className="flex items-start gap-3">
                    <FaUniversity className="text-2xl text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {entry.institution}
                      </h4>
                      <p className="text-blue-300 flex items-center gap-2 mb-3">
                        <FaCalendarAlt className="text-sm flex-shrink-0" />
                        {entry.period}
                      </p>
                      <p className="text-gray-200 font-semibold mb-3">
                        {entry.degree}
                      </p>
                      <ul className="space-y-2 list-disc pl-4 text-gray-300">
                        {entry.description.map((point, i) => (
                          <li key={i} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Work Experience Column */}
          <div className="space-y-8 pl-12">
            {workExperience.map((entry, index) => (
              <div
                key={index}
                className="reveal scroll-trigger"
                style={{ "--delay": `${entry.delay}ms` }}
              >
                <div className="glass p-6 rounded-lg hover:shadow-xl transition-all duration-300 border border-purple-500/20 hover:border-purple-500/40">
                  <div className="flex items-start gap-3">
                    <FaBuilding className="text-2xl text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {entry.company}
                      </h4>
                      <p className="text-purple-300 flex items-center gap-2 mb-3">
                        <FaClock className="text-sm flex-shrink-0" />
                        {entry.period}
                      </p>
                      <p className="text-gray-200 font-semibold mb-3">
                        {entry.role}
                      </p>
                      <ul className="space-y-2 list-disc pl-4 text-gray-300">
                        {entry.description.map((point, i) => (
                          <li key={i} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
