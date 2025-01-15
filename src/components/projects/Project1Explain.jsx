import React from "react";
import { motion } from "framer-motion";
import { Camera, Github, FileText, BookOpen } from "lucide-react";
import ProcessStep from "./ProcessStep";
import result from "../../assets/result.jpg";

const Project1Explain = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  //   const ProcessStep = ({ number, title, description }) => (
  //     <motion.div
  //       className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  //       {...fadeIn}
  //     >
  //       <div className="flex items-start gap-4">
  //         <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 font-bold">
  //           {number}
  //         </div>
  //         <div>
  //           <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
  //           <div className=" leading-relaxed">{description}</div>
  //         </div>
  //       </div>
  //     </motion.div>
  //   );

  const SkillCard = ({ icon: Icon, title, skills }) => (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
      {...fadeIn}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
          Balancing The Perception of Cheating Detection, Privacy and Fairness
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A Mixed-Methods Study of Visual Data Obfuscation in Remote Proctoring
        </p>
      </motion.div>

      {/* Challenge Section */}
      <motion.div className="mb-16" {...fadeIn}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h2>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Remote exam proctoring using webcam recordings faces several
              critical challenges that impact both the effectiveness of cheating
              prevention and the test-taking experience:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  Privacy concerns arise when webcam recordings capture
                  sensitive personal information like family members, religious
                  items, or living conditions that aren't relevant to cheating
                  detection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  Test-takers worry about how unknown reviewers might use or
                  judge their video recordings, affecting their comfort and
                  performance during exams
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  AI systems integrated in proctoring used to detect suspicious
                  behavior may have biases that unfairly flag certain students,
                  potentially influencing human reviewers to make incorrect
                  cheating accusations
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="font-semibold">
                  Need to balance effective cheating prevention with student
                  privacy and fair treatment, while keeping the solution
                  practical for institutions to implement
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Research Process */}
      <div className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          My Research Approach
        </h2>

        <ProcessStep
          number="1"
          title="Expert Insights Phase"
          description={
            <>
              Conducted in-depth interviews with{" "}
              <span className="font-semibold">9 specialists</span> across
              e-assessment, computer vision, and usable privacy fields. Used
              <span className="font-semibold">
                {" "}
                interactive Miro workshops
              </span>{" "}
              for knowledge mapping and visual exercises to understand
              privacy-security trade-offs in applying visual obfuscation
              techniques in proctored videos
            </>
          }
          hasImage={true}
        />

        <ProcessStep
          number="2"
          title="Technical Design & Prototyping"
          description={
            <>
              Leveraged Adobe Photoshop's state-of-the-art{" "}
              <span className="font-semibold">Generative AI</span> feature to
              create realistic images of test-taking video using webcam,
              implementing various{" "}
              <span className="font-semibold">
                privacy-protecting techniques
              </span>{" "}
              including deepfake technology, 3D avatars, and silhouette-based
              masking. Generated{" "}
              <span className="font-semibold">22 high-fidelity images</span> for
              testing
            </>
          }
          hasImage={true}
        />

        <ProcessStep
          number="3"
          title="Large-Scale User Study"
          description={
            <>
              Designed and conducted a comprehensive{" "}
              <span className="font-semibold">study with 259 participants</span>{" "}
              recruited through <span className="font-semibold">Prolific</span>.
              Created extensive surveys and applied rigorous statistical
              analysis{" "}
              <span className="font-semibold">
                using mixed-effects models for survey data analysis
              </span>
            </>
          }
          hasImage={true}
        />
      </div>

      {/* Technical Skills */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            icon={Camera}
            title="Visual Design"
            skills={[
              "Advanced Adobe Photoshop",
              "Image manipulation",
              "Prototype creation",
              "UI/UX design",
            ]}
          />

          <SkillCard
            icon={Github}
            title="Technical Implementation"
            skills={[
              "Survey design using LimeSurvey and deployment in Prolific",
              "Statistical analysis with STATA",
              "Data visualization with R",
              "Qualitative analysis using MAXQDA",
            ]}
          />

          <SkillCard
            icon={FileText}
            title="Research Methods"
            skills={[
              "Mixed-methods research design",
              "Scientific documentation",
              "Statistical modeling",
              "User study coordination",
            ]}
          />

          <SkillCard
            icon={BookOpen}
            title="Domain Knowledge"
            skills={[
              "Privacy-preserving technologies",
              "Human-centered design",
              "Remote proctoring systems",
              "Academic publishing",
            ]}
          />
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Impact & Future Directions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            {...fadeIn}
          >
            <h3 className="font-semibold text-gray-800 mb-4">Business Value</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>
                  Developed practical guidelines for privacy-protecting features
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>
                  Created scalable solutions balancing security with privacy
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>
                  Provided evidence-based recommendations for improved UX
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
            {...fadeIn}
          >
            <h3 className="font-semibold text-gray-800 mb-4">
              Future Exploration
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>Real-time implementation of privacy features</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>AI-integration for privacy protection</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>Standardized privacy guidelines development</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* Results Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Research Results & Analysis
        </h2>

        {/* Statistical Analysis */}
        <motion.div
          className="mb-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
          {...fadeIn}
        >
          <h3 className="font-semibold text-gray-800 mb-4">
            Statistical Expertise Demonstrated
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-blue-600 mb-2">
                Advanced Statistical Methods
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>
                    Linear Mixed-Effects Models (LMEMs) for repeated measures
                    analysis
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>
                    Post-hoc pairwise comparisons with Bonferroni corrections
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>
                    Robust standard errors for non-normal distributions
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-600 mb-2">
                Data Analysis Tools
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>STATA for complex statistical modeling</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>MAXQDA for qualitative thematic analysis</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>Data visualization using R's ggplot2 libraries</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Key Findings */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        {/* Visualization 1 */}
        <motion.div
          className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
          {...fadeIn}
        >
          <h3 className="font-semibold text-gray-800 mb-4">
            The Balance Between Privacy Perception, Cheating Information
            Sufficiency and Fairness Perception For Different Obfuscation
            Techniques Applied in Different Video Regions
          </h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
            <img
              src={result}
              alt="Privacy protection analysis"
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-sm">
            Analysis showed that advanced methods like 3D avatars can provide
            significantly better balance compared to conventional method like
            blurring, but users indicated conventional blurring as most
            preferred technique instead - Beauty of research!
          </p>
        </motion.div>

        {/* Visualization 2 */}
        {/* <motion.div
          className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
          {...fadeIn}
        >
          <h3 className="font-semibold text-gray-800 mb-4">
            User Experience Impact
          </h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
            <img
              src="/ux_results.png"
              alt="User experience analysis"
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-sm">
            The study revealed significant improvements in user comfort and
            acceptance when using region-specific privacy protection methods.
          </p>
        </motion.div> */}
        {/* </div> */}
      </div>

      {/* Paper Presentation */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Research Presentation
        </h2>
        <motion.div
          className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
          {...fadeIn}
        >
          <div className="flex justify-center mb-4">
            <div className="aspect-w-16 aspect-h-9 ">
              <iframe
                src="https://www.youtube.com/embed/biVz1H69Pow?si=kLlhbqhq5LU1Dekp"
                title="Research Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg "
              />
            </div>
          </div>
          <p className="text-gray-700 text-center">
            Watch my conference presentation for a detailed overview of the
            research methodology and findings
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Project1Explain;
