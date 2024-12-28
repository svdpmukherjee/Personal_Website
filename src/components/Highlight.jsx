import { useRef, useEffect, useState } from "react";
import { highlightStyles } from "../config/highlightStyles";

const Highlight = ({
  children,
  delay = 0,
  color = "#FFE11A",
  style = "circular",
}) => {
  const textRef = useRef(null);
  const [textSize, setTextSize] = useState({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const highlightStyle = highlightStyles[style];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const updateSize = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setTextSize({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    if (textRef.current) {
      observer.observe(textRef.current);
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(textRef.current);
      updateSize();
      return () => {
        observer.disconnect();
        resizeObserver.disconnect();
      };
    }
  }, [children]);

  const svgWidth = textSize.width * (style.includes("circular") ? 1.3 : 1.15);
  const svgHeight = textSize.height * (style.includes("circular") ? 2.5 : 2);
  const xOffset = (svgWidth - textSize.width) / 2;
  const yOffset = textSize.height * (style.includes("circular") ? 0.7 : 0.5);

  const getAnimationClass = () => {
    if (!isVisible) return "";
    if (style.includes("circular")) return "highlight-path-circular";
    return "highlight-path-rectangular";
  };

  return (
    <span className="relative inline-flex items-center">
      <span ref={textRef} className="relative z-10">
        {children}
      </span>
      <svg
        className="absolute -z-10"
        style={{
          width: svgWidth,
          height: svgHeight,
          left: -xOffset,
          top: -yOffset,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.5s ease-out",
          transitionDelay: `${delay}ms`,
        }}
        viewBox={highlightStyle.viewBox}
        preserveAspectRatio="none"
      >
        <path
          d={highlightStyle.path}
          className={getAnimationClass()}
          fill={color}
          fillOpacity="0"
          stroke={color}
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animationDelay: `${delay}ms`,
            animationDuration: `${style.includes("circular") ? 2000 : 1000}ms`,
          }}
        />
      </svg>
    </span>
  );
};

export default Highlight;
