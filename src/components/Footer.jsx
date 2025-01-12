import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/svdpmukherjee",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/svdpmukherjee",
      icon: FaGithubSquare,
      color: "hover:text-gray-900",
    },
    {
      name: "Google Scholar",
      href: "https://scholar.google.com/citations?user=BOmtS4sAAAAJ",
      icon: SiGooglescholar,
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="space-y-8 md:w-1/2">
          {/* Main Info */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Suvadeep Mukherjee
            </h3>
            <p className="text-gray-400 max-w-md">
              PhD Researcher in Human-Computer Interaction at University of
              Luxembourg, focusing on privacy and security in remote examination
              systems.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${item.color} transition-colors`}
                aria-label={item.name}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Info */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:text-right">
          <div className="space-y-4">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
              <a
                href="mailto:suvadeep.mukherjee@uni.lu"
                className="text-gray-400 hover:text-white transition-colors"
              >
                suvadeep.mukherjee@uni.lu
              </a>
            </div>

            {/* Last Updated */}
            <div className="text-sm text-gray-400">
              <p>Last updated: January 12, 2025</p>
              <p className="mt-1">
                © 2025 Suvadeep Mukherjee. All rights reserved.
              </p>
            </div>

            {/* Structured Data for SEO */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "Suvadeep Mukherjee",
                jobTitle: "PhD Researcher in Human-Computer Interaction",
                affiliation: {
                  "@type": "Organization",
                  name: "University of Luxembourg",
                },
                url: "https://your-portfolio-url.com",
                sameAs: [
                  "https://linkedin.com/in/svdpmukherjee",
                  "https://github.com/svdpmukherjee",
                  "https://scholar.google.com/citations?user=BOmtS4sAAAAJ",
                ],
              })}
            </script>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
