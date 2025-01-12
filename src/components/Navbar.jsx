import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { FaApple, FaFolder, FaHome } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [pathKey, setPathKey] = useState(0);

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
  }, [activeSection, sections]);

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
      className="text-2xl  font-bold gradient-text font-dancing hover:opacity-80 transition-opacity mx-2"
    >
      {children}
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="px-2 md:px-4 pt-2">
        <div className="flex items-center gap-2">
          {/* Name and Flags - Give it more space with flex-grow-0 to prevent shrinking */}
          <div className="backdrop-blur-sm bg-white/60 rounded-lg px-3 py-2 flex-shrink-0 w-auto">
            <div>
              {/* <div className="text-xl md:text-2xl font-bold gradient-text font-dancing whitespace-nowrap">
                Suvadeep Mukherjee
              </div>
              <div className="flex gap-1">
                <span className="text-base md:text-xl">
                  <ReactCountryFlag countryCode="LU" />
                </span>
                <span className="text-base md:text-xl">
                  <ReactCountryFlag countryCode="IN" />
                </span>
              </div> */}
              <div className="flex items-center justify-between">
                <NameButton>Suvadeep</NameButton>
                <span className="text-xl h-3">
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

          {/* URL Path Section - Make it take only the space it needs */}
          <div className="flex-shrink flex-grow-0">
            <div className="backdrop-blur-md bg-white/30 rounded-2xl border border-gray-700/50 shadow-lg p-1">
              <div className="flex items-center h-6 md:h-8 px-2 gap-2">
                <div className="flex items-center space-x-1">
                  <button
                    onClick={() => handleNavClick("home")}
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Home"
                  >
                    <FaApple className="text-cyan-400 text-base md:text-xl" />
                  </button>

                  <span className="text-gray-500 text-base md:text-xl">›</span>

                  <button
                    onClick={() => handleNavClick("home")}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <span className="text-gray-700 text-base md:text-xl">
                      {getCurrentSection()?.id === "home" ? (
                        <FaHome />
                      ) : (
                        <FaFolder />
                      )}
                    </span>
                  </button>

                  <div className="flex items-center space-x-1">
                    <span className="text-gray-500 text-base md:text-xl">
                      ~
                    </span>
                    <span className="text-gray-500 text-base md:text-xl">
                      /
                    </span>
                    <span className="text-gray-700 w-24 md:w-24 text-base md:text-xl overflow-hidden text-ellipsis">
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

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 focus:outline-none p-1 ml-1"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <AiOutlineClose className="text-lg md:text-xl" />
                  ) : (
                    <AiOutlineMenu className="text-lg md:text-xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 mx-2">
            <div className="backdrop-blur-md bg-white/90 rounded-lg shadow-lg border border-gray-200/50 overflow-hidden">
              <nav className="flex flex-col">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className={`flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 text-left transition-colors duration-200 text-base md:text-lg 
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
    </div>
  );
};

export default Navbar;
