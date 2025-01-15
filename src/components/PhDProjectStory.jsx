import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import exam_hall from "../assets/traditional_exam.jpg";
import exam_remote from "../assets/remote_exam.jpg";
import webcam from "../assets/webcam.png";
import proctored_issues from "../assets/proctored_issues.jpg";
import proctored_compromise from "../assets/proctored_compromise.png";
import unproctored_compromise from "../assets/unproctored_compromise.png";
import {
  FaLaptop,
  FaBalanceScale,
  FaUsers,
  FaLock,
  FaUserShield,
  FaHeartbeat,
  FaChevronRight,
} from "react-icons/fa";

// Common Components
const QuoteBox = ({ heading, text }) => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      {heading}
    </h3>
    <p className="text-md md:text-md text-gray-700 leading-relaxed text-left px-6 py-6 bg-blue-50/50 rounded-lg border border-blue-100 shadow-sm">
      {text}
    </p>
  </div>
);

const NavigationButton = ({ item, activeSection, setActiveSection }) => (
  <motion.button onClick={() => setActiveSection(item.id)} className="relative">
    <motion.div
      className={`w-8 h-8 rounded-full flex items-center justify-center 
        ${
          activeSection === item.id
            ? "bg-gradient-to-r from-blue-600 to-cyan-500"
            : "bg-gray-400"
        }
        transition-colors duration-300`}
      whileHover={{ scale: 1.1 }}
    >
      {activeSection === item.id && (
        <>
          <motion.div
            className="absolute w-12 h-12 rounded-full border border-blue-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
          <motion.div
            className="absolute w-16 h-16 rounded-full border border-blue-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 0,
              delay: 0.7,
            }}
          />
          <motion.div
            className="absolute w-20 h-20 rounded-full border border-blue-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
            }}
            transition={{
              duration: 4,
              times: [0, 0.3, 0.7, 1],
              repeat: Infinity,
              repeatDelay: 0,
              delay: 1.4,
            }}
          />
        </>
      )}
      <span className="text-xs font-bold text-white">{item.id}</span>
    </motion.div>
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center w-32">
      <div
        className={`whitespace-nowrap text-xs font-bold mb-1 
        ${activeSection === item.id ? "text-blue-600" : "text-gray-500"}`}
      >
        {item.title}
      </div>
      {/* <div className="text-[10px] text-gray-500 leading-tight">
        {item.subtitle}
      </div> */}
    </div>
  </motion.button>
);

const NavigationCircles = ({
  navigationItems,
  activeSection,
  setActiveSection,
}) => (
  <div className="flex justify-center mb-32 relative">
    <div className="absolute top-1/2 w-full h-px bg-gray-400 transform -translate-y-1/2" />
    <div className="flex justify-between items-center w-full max-w-2xl relative z-10">
      {navigationItems.map((item) => (
        <NavigationButton
          key={item.id}
          item={item}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ))}
    </div>
  </div>
);

// const NextSectionButton = ({
//   navigationItems,
//   activeSection,
//   setActiveSection,
// }) => {
//   const currentIndex = navigationItems.findIndex(
//     (item) => item.id === activeSection
//   );
//   const nextItem = navigationItems[currentIndex + 1];

//   if (!nextItem) return null;

//   return (
//     <div className="flex justify-end mt-12">
//       <button
//         onClick={() => setActiveSection(nextItem.id)}
//         className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400
//           text-white rounded-lg hover:opacity-90 transition-opacity"
//       >
//         {nextItem.title} <FaChevronRight className="text-sm" />
//       </button>
//     </div>
//   );
// };
const NextSectionButton = ({
  navigationItems,
  activeSection,
  setActiveSection,
}) => {
  const currentIndex = navigationItems.findIndex(
    (item) => item.id === activeSection
  );
  const nextItem = navigationItems[currentIndex + 1];

  if (!nextItem) return null;

  const handleNext = () => {
    setActiveSection(nextItem.id);
    const navigationElement = document.querySelector(
      ".flex.justify-center.mb-32"
    );
    if (navigationElement) {
      const offset = 100; // Adjust this value as needed
      const elementPosition =
        navigationElement.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-end mt-12">
      <button
        onClick={handleNext}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        {nextItem.title} <FaChevronRight className="text-sm" />
      </button>
    </div>
  );
};

// Foundation Section Components
const TraditionalApproach = () => (
  <div className="space-y-6">
    <h3 className="text-lg md:text-xl font-bold text-blue-600 flex items-center gap-3 mb-4">
      <span className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
        <FaUsers className="text-lg" />
      </span>
      Traditional Approach
    </h3>
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={exam_hall}
          alt="Traditional exam hall"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Physical Examination Centers with Invigilation
      </h4>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-red-600">
          <span className="px-4 py-2 bg-red-50 rounded-full text-sm font-medium">
            High resource requirements
          </span>
        </div>
        <div className="flex items-center gap-2 text-red-600">
          <span className="px-4 py-2 bg-red-50 rounded-full text-sm font-medium">
            Burden on travel time and cost
          </span>
        </div>
      </div>
    </div>
  </div>
);

const ModernApproach = () => (
  <div className="space-y-6">
    <h3 className="text-lg md:text-xl font-bold text-cyan-600 flex items-center gap-3">
      <span className="w-10 h-10 flex items-center justify-center bg-cyan-100 rounded-full">
        <FaLaptop className="text-xl" />
      </span>
      Modern Approach
    </h3>
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={exam_remote}
          alt="Remote exam setup"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Remote Examination with Webcam Monitoring
      </h4>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-emerald-600">
          <span className="px-4 py-2 bg-emerald-50 rounded-full text-sm font-medium">
            Cost-effective solutions
          </span>
        </div>
        <div className="flex items-center gap-2 text-emerald-600">
          <span className="px-4 py-2 bg-emerald-50 rounded-full text-sm font-medium">
            No geographical barriers
          </span>
        </div>
        <div className="flex items-center gap-2 text-emerald-600">
          <span className="px-4 py-2 bg-emerald-50 rounded-full text-sm font-medium">
            Crisis adaptable (e.g. COVID-19)
          </span>
        </div>
      </div>
    </div>
  </div>
);

const FoundationSection = () => (
  <div className="space-y-12">
    <QuoteBox
      heading="Examination is Paramount to Measure Competence"
      text={`In today's digital age, examinations remain fundamental to
      academic assessment and merit-based professional recruitment.
      However, the transition to remote testing brings new challenges in
      maintaining positive experience while ensuring exam credibility.`}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <TraditionalApproach />
      <ModernApproach />
    </div>
  </div>
);

// State of Art Section Components
const MonitoringApproach = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
      <span className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
        <FaUserShield className="text-xl text-gray-600" />
      </span>
      Current Monitoring Approach
    </h3>
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={webcam}
          alt="Webcam monitoring"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="p-6 bg-amber-50 rounded-lg">
        <p className="text-gray-700 italic leading-relaxed">
          "Webcam exam recording prevents dishonest students from cheating but
          may cause significant stress for honest students, raises privacy
          concerns about video reviews by unknown individuals, and risks bias
          that may impact performance and well-being"
        </p>
      </div>
    </div>
  </div>
);

const ComplexitySection = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
      <span className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
        <FaLock className="text-xl text-gray-600" />
      </span>
      Underlying Complexities
    </h3>
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={proctored_issues}
          alt="Privacy concerns"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Privacy Implications
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
              Privacy Invasion Concerns
            </span>
            <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
              Risks of Identity Leak
            </span>
            <span className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium">
              Limited Transparency in Video Usage
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Other Implications
          </h4>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
              Potential bias in Accusations
            </span>
            <span className="px-4 py-2 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
              Increased Stress and Anxiety
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const StateOfArtSection = () => (
  <div className="space-y-12">
    <QuoteBox
      heading="The Privacy-Security Balance"
      text={`Current remote examination systems with webcam-monitoring face significant challenges 
      in balancing security measures with students' privacy and experience. The transition 
      to digital exam platforms requires careful consideration of various complexities.`}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <MonitoringApproach />
      <ComplexitySection />
    </div>
  </div>
);

// Research Section Components
const ApproachComparison = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <FaHeartbeat className="text-2xl text-red-400" />
        Current Proctored Approach
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Most institutions use webcam-based proctoring for intensive exam
        monitoring, prioritizing security but compromising student privacy and
        comfort
      </p>
      <div className="flex items-center justify-center h-36">
        <img
          src={proctored_compromise}
          alt="Proctored exam concerns"
          className="max-h-full w-auto object-contain rounded-lg"
        />
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <FaHeartbeat className="text-2xl text-green-400" />
        No-Intervention Approach
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Some educators conduct exams without monitoring, trusting students
        completely. While this preserves privacy, it risks compromising exam
        credibility
      </p>
      <div className="flex items-center justify-center h-36">
        <img
          src={unproctored_compromise}
          alt="No intervention approach"
          className="max-h-full w-auto object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
);

const HumanCenteredApproach = () => (
  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 md:p-8 rounded-xl">
    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
      My research aims to...
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <FaBalanceScale className="text-2xl text-blue-500 mb-4" />
        <h4 className="font-bold text-lg text-gray-800 mb-3">
          Balanced Approach
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Creating solutions that harmonize examination security with student
          comfort and psychological well-being.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <FaLock className="text-2xl text-blue-500 mb-4" />
        <h4 className="font-bold text-lg text-gray-800 mb-3">
          Privacy Protection
        </h4>
        <p className="text-gray-600 leading-relaxed">
          Developing security measures that respect student privacy and data
          protection without compromising assessment validity.
        </p>
      </div>
      {/* User-First Design Card */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <FaUsers className="text-2xl md:text-3xl text-blue-500 mb-3" />
        <h4 className="font-bold text-base md:text-lg text-gray-800 mb-2">
          User-First Design
        </h4>
        <p className=" text-gray-600 leading-relaxed">
          Prioritizing student well-being while maintaining examination
          credibility through innovative, user-centered solutions.
        </p>
      </div>
    </div>

    <div className="mt-8 md:mt-10 max-w-2xl mx-auto">
      <p className="text-base md:text-lg text-gray-700 italic leading-relaxed px-4 py-3 bg-white/50 rounded-lg">
        In a nutshell... <br />
        My research aims to transform remote examinations from a source of
        stress into an opportunity for students to demonstrate their true
        potential, all while maintaining the standards of academic integrity.
      </p>
    </div>
  </div>
);

const ResearchSection = () => (
  <div className="space-y-12">
    <QuoteBox
      heading="Addressing the Research Gaps"
      text={`A truly effective remote examination system must balance exam security
      with student's positive experience. My research focuses on developing solutions that 
      protect both examination credibility and student privacy.`}
    />
    <ApproachComparison />
    <HumanCenteredApproach />
  </div>
);

// Main Component
const PhDProjectStory = () => {
  const [activeSection, setActiveSection] = useState(1);

  const navigationItems = [
    { id: 1, title: "Foundation", subtitle: "Transition in Exam Settings" },
    { id: 2, title: "State-of-the-Art", subtitle: "Challenges & Trade-offs" },
    { id: 3, title: "My Research", subtitle: "User-Centric Approach" },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 1:
        return <FoundationSection />;
      case 2:
        return <StateOfArtSection />;
      case 3:
        return <ResearchSection />;
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            User-centric Design Solutions to Prevent Cheating in Remote Exams
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            A human-centered approach to prevent exam cheating while preserving
            students&apos; privacy and well-being in remote computer-based exams
          </p>
        </div>

        <div className="flex justify-between items-center py-8 relative">
          <div className="absolute top-1/2 w-full h-px bg-gray-300 transform -translate-y-1/2" />
          {navigationItems.map((item) => (
            <NavigationButton
              key={item.id}
              item={item}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhDProjectStory;
