import profilepic1 from "../assets/portrait_4.jpg";
import profilepic2 from "../assets/portrait_2.jpg";
import { useState } from "react";

// Profile Picture Container Component with 3D Flip
const ProfilePicture = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full p-4 sm:p-8 lg:p-12">
      <div
        className="relative w-full h-full perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-1000 preserve-3d ${
            isHovered ? "rotate-y-180" : "rotate-y-0"
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
