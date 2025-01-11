import { useRef, useEffect } from "react";
import TechStack from "./TechStack";
import Highlight from "./Highlight";

const TextSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      id="skills"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Vision Section */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-2xl sm:text-4xl font-bold mb-8 gradient-text scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
            My Vision
          </h2>
          <div className="text-md sm:text-md text-gray-600 dark:text-gray-300 space-y-6">
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
              In today's digital landscape, creating{" "}
              <Highlight delay={300} color="#ef59e8" style="circular_1">
                meaningful solutions
              </Highlight>{" "}
              requires understanding both human needs and technological
              capabilities. My research focuses on designing and developing
              digital solutions that{" "}
              <Highlight delay={600} color="#FFFF00" style="rectangular">
                prioritizes user experiences.
              </Highlight>{" "}
            </p>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
              My work combines technical expertise with human behavior research
              to create solutions that are both{" "}
              <Highlight delay={900} color="#0000FF" style="circular_1">
                robust
              </Highlight>{" "}
              and ethically sound. By{" "}
              <Highlight delay={600} color="#00ff00" style="rectangular">
                bridging technology and human needs,
              </Highlight>{" "}
              , I ensure privacy and user experience remain paramount in every
              solution.
              {/* <Highlight delay={600} color="#FFFF00" style="rectangular">
                technical expertise
              </Highlight>{" "} */}
              {/* to develop working solutions and{" "} */}
              {/* <Highlight delay={900} color="#00ff00" style="circular_1">
                analytical skills
              </Highlight>{" "}
              to validate and improve user experience. */}
            </p>
            <p className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
              While AI offers powerful capabilities, my interest emphasizes
              <Highlight delay={1200} color="#dd0000" style="circular_1">
                responsible innovation
              </Highlight>{" "}
              where technology amplifies human agency. I develop frameworks
              where AI enhances human capabilities while preserving privacy,
              trust, and meaningful control.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="scroll-reveal opacity-0 translate-y-5 transition-all duration-600">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text">
            Technical and Research Skill Stack
          </h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default TextSection;

// import React, { useState, useEffect, useRef } from "react";
// import TechStack from "./TechStack";

// const TextSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Custom highlighter paths with their specific viewBox settings
//   const highlightStyles = {
//     circular: {
//       path: "M29.22,6.64c-9.7,2-18.12,9.1-21.6,18.41-.92,2.47-1.47,5.06-1.67,7.68-.35,4.39-.25,8.9-.07,13.3.21,5.22,1.72,10.37,4.49,14.8,6.02,9.61,17.39,14.49,28.02,16.99,11.47,2.69,23.84,2.34,34.51-3.02,9.68-4.86,17.14-13.63,19-24.46.68-3.97.49-8.07.48-12.08-.01-3.16-.05-6.28-.8-9.37-1.23-5.06-4-9.63-7.59-13.37-8.18-8.52-19.9-12.25-31.24-14.26C40.92-.86,28.17-.76,17.47,5.31c-4.65,2.64-8.62,6.32-11.4,10.9-2.94,4.84-4.54,10.38-5.32,15.95-.39,2.75-.57,5.52-.63,8.29-.11,4.81-.21,9.69.11,14.5.39,5.71,1.8,11.42,5.09,16.17,1.5,2.17,3.36,4.05,5.53,5.55-.04-.03.04-1.65.04-1.46.01-1.18.02-2.36.02-3.54,0-1.18,0-2.36-.02-3.54,0-.21.11-1.37-.04-1.46-4.17-2.87-7.08-7.17-8.74-11.9-.96-2.73-1.51-5.6-1.78-8.48-.07-.79-.12-1.58-.16-2.38-.16-3.9-.15,8.9,0,4.75.05-1.48.15-2.96.31-4.43,1.09-10.3,4.94-20.34,13.5-26.67,8.85-6.55,20.16-8.25,30.91-7.37,5.84.48,11.67,1.58,17.31,3.17,5.33,1.51,10.54,3.61,15.18,6.66,8.38,5.5,14.36,13.99,14.92,24.16-.66-12.11.13-9.87-.03-7.06-.02.4-.06.81-.1,1.21-.06.6-.14,1.19-.24,1.78-.21,1.25-.49,2.49-.84,3.7-.71,2.44-1.72,4.79-2.98,7-2.49,4.35-6.04,8.05-10.13,10.93-8.76,6.16-19.63,8.38-30.2,7.54-5.73-.46-11.39-1.75-16.8-3.67-4.87-1.72-9.6-4-13.67-7.2-3.95-3.11-7.11-7.07-9.08-11.72-.95-2.26-1.62-4.63-2-7.05-.09-.57-.16-1.15-.22-1.73-.04-.39-.06-.78-.09-1.17,0-.06,0-.13,0-.19-.12-2.63-.13-.25-.01,7.13.07-1.36.2-2.7.45-4.04,1.69-9.09,8.04-16.91,16.35-20.85,2.08-.99,4.27-1.71,6.53-2.17.2-.04.05-4.59.05-5,0-.38-.18-4.97-.05-5h0Z",
//       viewBox: "0 0 92.41 79.44",
//       height: "h-16",
//       yOffset: "-2.5em",
//       scale: "scale(1.2, 1)",
//     },
//     rigid: {
//       path: "M68.46.9c1.55,0,3.11.08,4.65-.02,1.34-.1,2.68-.11,4.03-.12.99,0,1.98.04,2.97.12.38.03.76.03,1.14-.02.55-.08,1.1-.11,1.66-.1,2.14.03,4.26-.13,6.38-.33.99-.09,1.98-.11,2.97-.18,4.08-.26,8.18-.29,12.27-.17,2.48.07,4.95.33,7.44.31,1.26,0,2.5-.18,3.76-.18.88,0,1.57.4,2.3.75.34.16.54.51.62.91.35,1.72.65,3.44.72,5.2,0,.2,0,.43.09.6.52,1.15.42,2.4.63,3.6.36,2.07.43,4.18.92,6.23.05.2.1.4.09.61-.06,1.22.35,2.36.59,3.52.1.45-.04.88.04,1.3.27,1.35.23,2.74.66,4.06.08.24.13.52.12.78-.12,2.01.37,3.95.61,5.92.04.35.09.7.08,1.05-.03.61-.25.87-.85.9-1.48.08-2.95.19-4.46.08-3-.21-5.97-.71-8.97-.9-2.51-.15-5.02-.21-7.53-.25-2.65-.04-5.32-.12-7.88-.99-1.24-.42-2.54-.47-3.81-.51-1.81-.05-3.62-.17-5.43-.23-5.84-.2-11.69-.25-17.53-.14-2.66.05-5.32.04-7.97.19-1.98.11-3.96.31-5.94.42-1.9.1-3.78.33-5.67.45-3.03.2-6.05.42-9.07.78-2.2.26-4.42.43-6.61.79-2.54.41-5.11.52-7.61,1.16-.59.15-1.21.18-1.81.3-2.58.51-5.17.93-7.71,1.61-.99.26-1.99.47-2.99.7-.67.15-1.3.11-1.76-.46-.75-.93-1.85-1.51-2.48-2.57-.2-.33-.58-.48-.94-.62-1.47-.61-2.01-1.86-2.25-3.3-.06-.38-.14-.74-.24-1.1-.35-1.27-.62-2.55-.82-3.85-.15-.95-.23-1.92-.51-2.84-.15-.51-.22-1.03-.2-1.56.01-.58-.15-1.09-.54-1.53-.56-.63-.78-1.34-.58-2.19.21-.83.01-1.64-.35-2.38-.32-.65-.33-1.26-.06-1.94.26-.65.18-1.3-.23-1.92-.57-.88-.53-1.02.18-1.81.42-.47.92-.77,1.53-.97,5-1.66,10.15-2.72,15.29-3.87,3.42-.77,6.88-1.37,10.33-1.97,2.07-.36,4.17-.55,6.25-.82,1.62-.21,3.24-.46,4.86-.61,2.04-.19,4.05-.52,6.1-.64,1.86-.11,3.72-.32,5.58-.47,1.11-.09,2.21-.14,3.32-.22,1.16-.08,2.33-.18,3.49-.27.23-.02.47-.06.7-.06,3.48.06,6.95-.32,10.43-.21Z",
//       viewBox: "0 0 123.19 39.16",
//       height: "h-12",
//       yOffset: "-1em",
//       scale: "scale(1.1, 1.2)",
//     },
//     dashed: {
//       path: "M4.7,47.2c.95.06,1.93.09,2.91.2,1.2.14,1.35.28,1.33,1.36-.03,1.52-.12,3.04-.23,4.56-.13,1.7-.3,3.39-.47,5.09-.14,1.43-1.24,2.29-2.33,3.14-.07.06-.18.11-.27.11-1.73.04-3.44.04-5.03-.72-.46-.22-.62-.57-.61-.99.01-.58.04-1.16.11-1.74.4-3.02.83-6.05,1.23-9.07.22-1.69.46-1.91,2.28-1.93.35,0,.69-.01,1.08-.02Z [...rest of the dashed path]",
//       viewBox: "0 0 85.08 64.4",
//       height: "h-14",
//       yOffset: "-1.5em",
//       scale: "scale(1.3, 1.1)",
//     },
//   };

//   const Highlight = ({
//     children,
//     delay = 0,
//     color = "#FFE11A",
//     style = "circular",
//   }) => {
//     const highlightStyle = highlightStyles[style];

//     return (
//       <span className="relative inline-block whitespace-nowrap">
//         <span className="relative z-10">{children}</span>
//         <svg
//           className={`absolute -left-4 -right-4 ${highlightStyle.height} -z-10
//             ${isVisible ? "highlight-svg" : "opacity-0"}`}
//           style={{
//             transitionDelay: `${delay}ms`,
//             transform: highlightStyle.scale,
//             top: highlightStyle.yOffset,
//           }}
//           viewBox={highlightStyle.viewBox}
//           preserveAspectRatio="none"
//         >
//           <path
//             d={highlightStyle.path}
//             className="highlight-path"
//             fill={color}
//             fillOpacity="0.5"
//           />
//         </svg>
//       </span>
//     );
//   };

//   return (
//     <div
//       ref={sectionRef}
//       className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
//       id="skills"
//     >
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//         {/* Vision Section */}
//         <div className="lg:sticky lg:top-24 lg:self-start">
//           <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text">
//             My Vision
//           </h2>
//           <div className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 space-y-6">
//             <p>
//               Identifying a problem is just the beginning - finding solutions
//               can take many paths! I've focused on developing critical thinking
//               to find{" "}
//               <Highlight delay={300} color="#ef59e8" style="circular">
//                 user-centric solutions
//               </Highlight>
//               .
//             </p>
//             <p>
//               This requires both{" "}
//               <Highlight delay={600} color="#ffa624" style="rigid">
//                 technical expertise
//               </Highlight>{" "}
//               to develop working solutions and{" "}
//               <Highlight delay={900} color="#ffa624" style="dashed">
//                 analytical skills
//               </Highlight>{" "}
//               to validate and improve user experience.
//             </p>
//             <p>
//               While AI helps bridge skill gaps quickly, the human perspective
//               remains essential in{" "}
//               <Highlight delay={1200} color="#ef59e8" style="circular">
//                 creating meaningful solutions
//               </Highlight>
//               .
//             </p>
//           </div>
//         </div>

//         {/* Tech Stack Section */}
//         <div>
//           <h2 className="text-3xl sm:text-4xl font-bold mb-8 gradient-text">
//             Technical and Research Skill Stack
//           </h2>
//           <TechStack />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextSection;
