import { useState, useEffect } from "react";
import profilepic1 from "../assets/portrait_4.jpg";
import profilepic2 from "../assets/portrait_5.jpg";

const ProfilePicture = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Reset to front face after initial animation
    const timer = setTimeout(() => {
      setIsLoaded(false);
    }, 2000); // 2 seconds for two complete spins
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!isLoaded) {
      // Only allow click-to-flip after initial animation
      setIsHovered(!isHovered);
    }
  };

  return (
    <div className="relative w-full h-full p-4 sm:p-8 lg:p-12">
      <div
        className="relative w-full h-full perspective-1000"
        onClick={handleClick}
        onMouseEnter={() => !isLoaded && setIsHovered(true)}
        onMouseLeave={() => !isLoaded && setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full preserve-3d ${
            isLoaded
              ? "animate-initial-spin"
              : isHovered
              ? "rotate-y-180 transition-transform duration-1000"
              : "rotate-y-0 transition-transform duration-1000"
          }`}
        >
          {/* First Image (Front) */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full rounded-full border-4 border-blue-500/40 shadow-2xl shadow-blue-500/20 overflow-hidden">
              <img
                src={profilepic1}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Second Image (Back) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full rounded-full border-4 border-blue-500/40 shadow-2xl shadow-blue-500/20 overflow-hidden">
              <img
                src={profilepic2}
                alt="Profile 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes initialSpin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(720deg);
          }
        }

        .animate-initial-spin {
          animation: initialSpin 2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
};

export default ProfilePicture;
