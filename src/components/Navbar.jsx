import { useState, useEffect } from "react";
import { FaApple, FaFolder, FaHome } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [pathKey, setPathKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "skills", label: "Skill Set", icon: <FaFolder /> },
    { id: "experience", label: "Experiences", icon: <FaFolder /> },
    { id: "portfolio", label: "Projects", icon: <FaFolder /> },
    { id: "about", label: "About Me", icon: <FaFolder /> },
    { id: "contact", label: "Contact", icon: <FaFolder /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            if (activeSection !== id) {
              setActiveSection(id);
              setPathKey((prev) => prev + 1);
              window.history.replaceState(null, "", `#${id}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const getCurrentSection = () => {
    return sections.find((section) => section.id === activeSection);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
    window.history.replaceState(null, "", "#home");
  };

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const NameButton = ({ children }) => (
    <button
      onClick={scrollToTop}
      className="text-3xl xl:text-4xl font-bold gradient-text hover:opacity-80 transition-opacity min-h-[45px] mx-2"
    >
      {children}
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-3 lg:px-4 pt-2 sm:pt-3 lg:pt-4">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Left Section - Name with Flags */}
          <div className="min-w-[200px] sm:min-w-[200px] lg:min-w-[200px]">
            {/* Desktop Version */}
            <div className="hidden lg:block backdrop-blur-sm bg-white/60 rounded-lg p-2">
              <div className="flex flex-col gap-1 font-dancing">
                <div className="flex items-center justify-between">
                  <NameButton>Suvadeep</NameButton>
                  <span className="text-xl h-1">
                    <ReactCountryFlag countryCode="LU" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <NameButton>Mukherjee</NameButton>
                  <span className="text-xl h-10">
                    <ReactCountryFlag countryCode="IN" />
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden backdrop-blur-sm bg-white/60 rounded-lg px-3 py-2">
              <div className="flex items-center justify-between">
                <div className="text-base sm:text-lg font-bold gradient-text font-dancing">
                  Suvadeep Mukherjee
                </div>
              </div>
              <div className="flex gap-1">
                <span className="text-sm sm:text-base">
                  <ReactCountryFlag countryCode="LU" />
                </span>
                <span className="text-sm sm:text-base">
                  <ReactCountryFlag countryCode="IN" />
                </span>
              </div>
            </div>
          </div>

          {/* Center Section - Search Bar and Navigation */}
          <div className="flex-1 min-w-0">
            <div className="backdrop-blur-md bg-white/30 rounded-2xl sm:rounded-3xl border border-gray-700/50 shadow-lg p-1 sm:p-2">
              <div className="flex items-center justify-between h-8 sm:h-10 lg:h-12 px-2 sm:px-3 gap-2 sm:gap-3 lg:gap-4">
                {/* URL Path Section */}
                <div className="flex items-center space-x-1 sm:space-x-2 transition-transform duration-300 hover:scale-110 hover:cursor-pointer">
                  <button
                    onClick={scrollToTop}
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Scroll to top"
                  >
                    <FaApple className="text-cyan-400 text-base sm:text-lg lg:text-xl" />
                  </button>

                  <span className="text-gray-500 text-base sm:text-lg lg:text-xl">
                    ›
                  </span>

                  <button
                    onClick={scrollToTop}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <span className="text-gray-700 text-base sm:text-lg lg:text-xl">
                      {getCurrentSection()?.id === "home" ? (
                        <FaHome />
                      ) : (
                        <FaFolder />
                      )}
                    </span>
                  </button>

                  <div className="flex items-center space-x-1">
                    <span className="text-gray-500 text-base sm:text-lg lg:text-xl">
                      ~
                    </span>
                    <span className="text-gray-500 text-base sm:text-lg lg:text-xl">
                      /
                    </span>
                    <span className="text-gray-700 min-w-[60px] sm:min-w-[80px] lg:min-w-[100px] text-base sm:text-lg lg:text-xl">
                      <TypeAnimation
                        key={pathKey}
                        sequence={[getCurrentSection()?.id || "home"]}
                        wrapper="span"
                        speed={50}
                        cursor={true}
                      />
                    </span>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="hidden lg:flex items-center space-x-2 lg:space-x-3">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleNavClick(section.id)}
                      className={`text-xs sm:text-sm lg:text-base px-2 py-1 rounded-md transition-all duration-200 whitespace-nowrap relative group
                        ${
                          activeSection === section.id
                            ? "text-blue-700"
                            : "text-gray-700 hover:bg-gray-300/50"
                        }`}
                    >
                      {section.label}
                      {activeSection === section.id && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400" />
                      )}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </button>
                  ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-gray-700 focus:outline-none p-1"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <AiOutlineClose className="text-lg sm:text-xl" />
                  ) : (
                    <AiOutlineMenu className="text-lg sm:text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="lg:hidden absolute left-0 right-0 top-full mt-2 mx-2">
                <div className="backdrop-blur-md bg-white/90 rounded-lg shadow-lg border border-gray-200/50 overflow-hidden">
                  <nav className="flex flex-col">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => handleNavClick(section.id)}
                        className={`flex items-center gap-2 px-4 py-3 text-left transition-colors duration-200 text-sm
                          ${
                            activeSection === section.id
                              ? "text-blue-600 bg-blue-50/50"
                              : "text-gray-700 hover:bg-gray-50/50"
                          }`}
                      >
                        {section.icon}
                        {section.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>

          {/* Optional Right Section if needed */}
          <div className="w-[180px] sm:w-[200px] lg:w-[240px] hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
