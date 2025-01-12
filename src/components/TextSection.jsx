import TechStack from "./TechStack";
import Highlight from "./Highlight";
import { useScrollEffects } from "./ScrollEffects";

const TextSection = () => {
  useScrollEffects();
  return (
    <div className="px-4 py-32 " id="skills">
      <div className="space-y-8 reveal">
        {/* Vision Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">My Vision</h2>
          <div className="space-y-4 text-xl text-gray-600">
            <p>
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
            <p>
              My work combines technical expertise with human behavior research
              to create solutions that are both{" "}
              <Highlight delay={900} color="#0000FF" style="circular_1">
                robust
              </Highlight>{" "}
              and ethically sound. By{" "}
              <Highlight delay={600} color="#00ff00" style="rectangular">
                bridging technology and human needs
              </Highlight>
              , I ensure privacy and user experience remain paramount in every
              solution.
            </p>
            <p>
              While AI offers powerful capabilities, my interest emphasizes{" "}
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
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Technical and Research Skill Stack
          </h2>
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default TextSection;
