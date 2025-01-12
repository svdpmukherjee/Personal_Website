import { useScrollEffects } from "./ScrollEffects";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUniversity,
  FaBuilding,
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
        "Conducting research at the intersection of cheating prevention and user experience in remote computer-based examinations",
        "Leading multiple user studies and developing prototypes for testing novel design solutions",
        "Published research papers in top-tier conferences and journals",
      ],
      delay: 0,
    },
    {
      institution: "Eindhoven University of Technology (Netherlands)",
      period: "2014 - 2016",
      degree: "M.Sc. in Human-Technology Interaction",
      description: [
        "Specialized in user experience research and interface design",
        "Completed thesis on investigating the perception of spatial color nonuniformity in LED lighting",
        "Participated in multiple industry-collaborative projects (e.g. TNO, Philips Lighting)",
        "Core coursework: Advanced HCI, Research Methods, Cognitive Psychology",
      ],
      delay: 400,
    },
    {
      institution: "Heritage Institute of Technology (India)",
      period: "2007 - 2011",
      degree: "B.Tech in Information Technology",
      description: [
        "Graduated with distinction in Information Technology",
        "Led student technical projects and competitions",
        "Core coursework: Programming, Algorithms, Databases",
        "Participated in zonal-based hackathons",
      ],
      delay: 800,
    },
  ];

  const workExperience = [
    {
      company: "Sterlite EdIndia Foundation (India)",
      period: "2021 Apr - 2021 Oct",
      role: "Data Analyst and Researcher",
      description: [
        "Led data-driven strategies to enhance school performance, supporting district school coordinators across India",
        "Designed and implemented data analytics frameworks to assess and track educational outcomes effectively",
        "Worked closely with administrators and stakeholders to generate actionable insights for informed decision-making",
      ],
      delay: 200,
    },
    {
      company: "Signify N.V. (formerly Philips Lighting) (Netherlands)",
      period: "2016 Jan - 2016 Oct",
      role: "Research Intern",
      description: [
        "Carried out user research to address a color-over-angle issue in smart lighting systems",
        "Designed and executed user studies to evaluate interfaces",
        "Developed prototypes for testing the proposed solutions",
      ],
      delay: 600,
    },
    {
      company: "Infosys Limited (India)",
      period: "2011 - 2014",
      role: "Senior Software Engineer",
      description: [
        "Led development teams in maintaining enterprise applications in Finance and Banking sector",
        "Managed client relationships and project deliverables with American Express",
        "Mentored junior developers and conducted training",
      ],
      delay: 1000,
    },
  ];

  const EntryCard = ({ entry, type }) => (
    <div
      className="reveal scroll-trigger bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10
        hover:border-white/20 transition-all duration-300 shadow-lg"
      style={{ "--delay": `${entry.delay}ms` }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          {type === "education" ? (
            <FaUniversity className="text-xl text-blue-400 flex-shrink-0" />
          ) : (
            <FaBuilding className="text-xl text-purple-400 flex-shrink-0" />
          )}
          <h4 className="text-lg font-bold text-white leading-tight">
            {type === "education" ? entry.institution : entry.company}
          </h4>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span
            className={`${
              type === "education" ? "text-blue-300" : "text-purple-300"
            } flex items-center gap-2`}
          >
            {type === "education" ? (
              <FaCalendarAlt className="text-sm" />
            ) : (
              <FaClock className="text-sm" />
            )}
            {entry.period}
          </span>
        </div>

        <div className="text-base font-medium text-gray-200">
          {type === "education" ? entry.degree : entry.role}
        </div>

        <ul className="space-y-2 list-disc pl-4 text-sm text-gray-300">
          {entry.description.map((point, i) => (
            <li key={i} className="leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div
      className="py-16 bg-gradient-to-b from-cyan-900 to-slate-900"
      id="experience"
    >
      <div className="max-w-[90%] mx-auto px-4 space-y-12">
        <h2 className="text-2xl font-bold text-center gradient-text reveal">
          Education &{" "}
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-purple-600 to-purple-400">
            Experience
          </span>
        </h2>

        {/* Education Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-400">
            <FaGraduationCap className="text-xl" />
            <h3>Education</h3>
          </div>
          <div className="space-y-4">
            {education.map((entry, index) => (
              <EntryCard key={index} entry={entry} type="education" />
            ))}
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold text-purple-400">
            <FaBriefcase className="text-xl" />
            <h3>Work Experience</h3>
          </div>
          <div className="space-y-4">
            {workExperience.map((entry, index) => (
              <EntryCard key={index} entry={entry} type="work" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
