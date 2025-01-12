import TechStack from "./TechStack";
import Highlight from "./Highlight";
import { useScrollEffects } from "./ScrollEffects";

const TextSection = () => {
  useScrollEffects();
  return (
    <div className="px-4 py-16 max-w-sm mx-auto" id="skills">
      <div className="space-y-12 ">
        {/* Vision Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-2  shadow-lg reveal">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">My Vision</h2>
          <div className="space-y-4 text-base text-gray-600">
            <p className="leading-relaxed">
              In today's digital landscape, creating{" "}
              <Highlight delay={300} color="#ef59e8" style="circular_1">
                meaningful solutions
              </Highlight>{" "}
              requires understanding both human needs and technological
              capabilities. My research focuses on designing and developing
              digital solutions that{" "}
              <Highlight delay={600} color="#FFFF00" style="rectangular">
                prioritizes user experiences.
              </Highlight>
            </p>
            <p className="leading-relaxed">
              My work combines technical expertise with human behavior research
              to create solutions that are both{" "}
              <Highlight delay={900} color="#0000FF" style="circular_1">
                robust
              </Highlight>{" "}
              and ethically sound.
            </p>
            <p className="leading-relaxed">
              By{" "}
              <Highlight delay={600} color="#00ff00" style="rectangular">
                bridging technology and human needs
              </Highlight>
              , I ensure privacy and user experience remain paramount in every
              solution. While AI offers powerful capabilities, my interest
              emphasizes{" "}
              <Highlight delay={1200} color="#dd0000" style="circular_1">
                responsible innovation
              </Highlight>{" "}
              where technology amplifies human agency.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="reveal">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Technical and Research Skills
          </h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default TextSection;
