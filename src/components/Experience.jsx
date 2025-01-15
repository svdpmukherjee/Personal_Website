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

  const EntryCard = ({ entry, type, isEven }) => (
    <div
      className="reveal scroll-trigger group"
      style={{ "--delay": `${entry.delay}ms` }}
    >
      <div
        className={`backdrop-blur-md bg-white/5 p-4 sm:p-6 rounded-xl
          transition-all duration-500 ease-in-out
          hover:transform hover:scale-[1.02]
          border ${
            type === "education"
              ? "border-blue-500/20 hover:border-blue-500/40"
              : "border-purple-500/20 hover:border-purple-500/40"
          }
          ${
            isEven
              ? "hover:-translate-x-2 hover:shadow-[-8px_8px_16px_rgba(0,0,0,0.2)]"
              : "hover:translate-x-2 hover:shadow-[8px_8px_16px_rgba(0,0,0,0.2)]"
          }
        `}
      >
        <div className="flex items-start gap-4">
          <div
            className={`
            p-3 rounded-lg transition-colors duration-300
            ${
              type === "education"
                ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                : "bg-purple-500/10 group-hover:bg-purple-500/20"
            }
          `}
          >
            {type === "education" ? (
              <FaUniversity className="text-2xl sm:text-3xl text-blue-400" />
            ) : (
              <FaBuilding className="text-2xl sm:text-3xl text-purple-400" />
            )}
          </div>

          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight">
              {type === "education" ? entry.institution : entry.company}
            </h4>

            <p
              className={`
              flex items-center gap-2 mb-3 text-sm sm:text-base
              ${type === "education" ? "text-blue-300" : "text-purple-300"}
            `}
            >
              {type === "education" ? (
                <FaCalendarAlt className="text-sm sm:text-base" />
              ) : (
                <FaClock className="text-sm sm:text-base" />
              )}
              {entry.period}
            </p>

            <p className="text-gray-200 font-semibold mb-4 text-base sm:text-lg">
              {type === "education" ? entry.degree : entry.role}
            </p>

            <ul className="space-y-3 list-disc pl-4 text-gray-300 text-sm sm:text-base">
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
  );

  const Timeline = () => (
    <div className="absolute left-1/2 transform -translate-x-1/2 h-full">
      <div className="w-px h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500" />
    </div>
  );

  return (
    <div
      className="py-16 sm:py-24 bg-gradient-to-b from-cyan-900 to-slate-900"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-20 reveal">
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Education &
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* Mobile View */}
        <div className="lg:hidden space-y-12">
          <section className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-xl font-semibold text-blue-400">
              <FaGraduationCap className="text-2xl" />
              <h3>Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((entry, index) => (
                <EntryCard
                  key={index}
                  entry={entry}
                  type="education"
                  isEven={false}
                />
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-xl font-semibold text-purple-400">
              <FaBriefcase className="text-2xl" />
              <h3>Work Experience</h3>
            </div>
            <div className="space-y-6">
              {workExperience.map((entry, index) => (
                <EntryCard
                  key={index}
                  entry={entry}
                  type="work"
                  isEven={false}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-2 gap-12 relative">
          <Timeline />

          <div className="space-y-8 pr-12">
            {education.map((entry, index) => (
              <EntryCard
                key={index}
                entry={entry}
                type="education"
                isEven={true}
              />
            ))}
          </div>

          <div className="space-y-8 pl-12">
            {workExperience.map((entry, index) => (
              <EntryCard key={index} entry={entry} type="work" isEven={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
