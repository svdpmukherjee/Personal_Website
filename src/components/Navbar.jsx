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

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  const NameButton = ({ children }) => (
    <button
      onClick={() => handleNavClick("home")}
      className="font-bold gradient-text font-dancing hover:opacity-80 transition-opacity mx-1 sm:mx-2"
    >
      {children}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      {/* Desktop Navigation */}
      <div className="hidden lg:block pt-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-6 h-16">
            {/* Logo and Name */}
            <div className="flex-shrink-0">
              <div className="backdrop-blur-sm bg-white/60 rounded-lg px-4 py-2">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <NameButton>
                      <span className="text-4xl">Suvadeep</span>
                    </NameButton>
                    <span className="ml-2 h-1">
                      <ReactCountryFlag countryCode="LU" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <NameButton>
                      <span className="text-4xl">Mukherjee</span>
                    </NameButton>
                    <span className="ml-2">
                      <ReactCountryFlag countryCode="IN" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* URL Path Section */}
            <div className="flex-1">
              <div className="backdrop-blur-md bg-white/30 rounded-2xl border border-gray-700/50 shadow-lg p-2">
                <div className="flex items-center h-8 px-3 gap-2">
                  <button
                    onClick={() => handleNavClick("home")}
                    className="hover:opacity-70 transition-opacity"
                    aria-label="Home"
                  >
                    <FaApple className="text-cyan-400 text-2xl" />
                  </button>

                  <span className="text-gray-500 text-2xl">›</span>

                  <button
                    onClick={() => handleNavClick("home")}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <span className="text-gray-700 text-2xl">
                      {getCurrentSection()?.id === "home" ? (
                        <FaHome />
                      ) : (
                        <FaFolder />
                      )}
                    </span>
                  </button>

                  <div className="flex items-center gap-1">
                    <span className="text-gray-500 text-2xl">~</span>
                    <span className="text-gray-500 text-2xl">/</span>
                    <span className="text-gray-700 flex-1 text-lgq overflow-hidden text-ellipsis whitespace-nowrap">
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
              </div>
            </div>

            {/* Desktop Menu Items */}
            <div className="flex items-center gap-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === section.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Navigation */}
      <div className="lg:hidden">
        <div className="pt-2 px-1 sm:px-2 md:px-4">
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Name and Flags Section */}
            <div className="backdrop-blur-sm bg-white/60 rounded-lg px-2 sm:px-3 py-1 sm:py-2 flex-shrink-0">
              <div>
                <div className="flex items-center justify-between">
                  <NameButton>
                    <span className="text-2xl sm:text-base md:text-3xl">
                      Suvadeep
                    </span>
                  </NameButton>
                  <span className="text-base sm:text-sm md:text-base h-1">
                    <ReactCountryFlag countryCode="LU" />
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <NameButton>
                    <span className="text-2xl sm:text-xl md:text-3xl">
                      Mukherjee
                    </span>
                  </NameButton>
                  <span className="text-base sm:text-sm md:text-base h-8">
                    <ReactCountryFlag countryCode="IN" />
                  </span>
                </div>
              </div>
            </div>

            {/* URL Path Section */}
            <div className="flex-1 min-w-0">
              <div className="backdrop-blur-md bg-white/30 rounded-2xl border border-gray-700/50 shadow-lg p-1">
                <div className="flex items-center justify-between h-6 sm:h-7 md:h-8 px-1 sm:px-2 gap-1 sm:gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleNavClick("home")}
                      className="hover:opacity-70 transition-opacity"
                      aria-label="Home"
                    >
                      <FaApple className="text-cyan-400 text-xl sm:text-sm md:text-base" />
                    </button>

                    <span className="text-gray-500 text-lg sm:text-sm md:text-base">
                      ›
                    </span>

                    <button
                      onClick={() => handleNavClick("home")}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <span className="text-gray-700 text-lg sm:text-sm md:text-base">
                        {getCurrentSection()?.id === "home" ? (
                          <FaHome />
                        ) : (
                          <FaFolder />
                        )}
                      </span>
                    </button>

                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 text-lg sm:text-sm md:text-base">
                        ~
                      </span>
                      <span className="text-gray-500 text-lg sm:text-sm md:text-base">
                        /
                      </span>
                      <span className="text-gray-700 flex-1 text-lg sm:text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap">
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
                    className="text-gray-700 focus:outline-none p-0.5 sm:p-1"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? (
                      <AiOutlineClose className="text-sm sm:text-base md:text-lg" />
                    ) : (
                      <AiOutlineMenu className="text-sm sm:text-base md:text-lg" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-full mt-2 mx-2">
              <div className="backdrop-blur-md bg-white/90 rounded-lg shadow-lg border border-gray-200/50 overflow-hidden">
                <nav className="flex flex-col">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleNavClick(section.id)}
                      className={`flex items-center gap-2 px-2 sm:px-3 md:px-4 py-2 md:py-3 text-left transition-colors duration-200 text-sm sm:text-base md:text-lg 
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
    </nav>
  );
};

export default Navbar;
