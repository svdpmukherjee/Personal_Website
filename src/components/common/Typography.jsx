// Main heading
export const MainHeading = ({ children, className = "" }) => (
  <h1
    className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${className}`}
  >
    {children}
  </h1>
);

// Section headings
export const SectionHeading = ({ children, className = "" }) => (
  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${className}`}>
    {children}
  </h2>
);

// Card or subsection headings
export const SubHeading = ({ children, className = "" }) => (
  <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold ${className}`}>
    {children}
  </h3>
);

// Body text for main content
export const BodyText = ({ children, className = "" }) => (
  <p className={`text-sm sm:text-base lg:text-lg text-gray-600 ${className}`}>
    {children}
  </p>
);

// Smaller text for secondary information
export const SmallText = ({ children, className = "" }) => (
  <span
    className={`text-xs sm:text-sm lg:text-base text-gray-500 ${className}`}
  >
    {children}
  </span>
);

// Link text
export const LinkText = ({ children, className = "", href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className={`text-sm sm:text-base lg:text-lg text-blue-600 hover:text-blue-700 ${className}`}
  >
    {children}
  </a>
);
