import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Database,
  BarChart,
  Code,
  GitBranch,
  Layout,
  PieChart,
  Users,
} from "lucide-react";
import ProcessStep from "./ProcessStep";

const Project2Explain = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

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
          Balancing Academic Integrity and User Experience in Online Assessments
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A Large-Scale Study of Privacy-Non-Invasive Anti-Cheating
          Interventions
        </p>
      </motion.div>

      {/* Challenge Section */}
      <motion.div className="mb-16" {...fadeIn}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">The Challenge</h2>
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed mb-4">
              Unproctored online assessments face critical challenges in
              maintaining both integrity and positive user experience:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  Finding the right balance between preventing cheating and
                  maintaining a positive test experience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  Previous interventions lacked systematic design and evaluation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span>
                  Limited understanding of how interventions affect user
                  experience and test performance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <span className="font-semibold">
                  Need for privacy-preserving solutions that maintain test
                  credibility without compromising user experience
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Research Process */}
      <div className="mb-16 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Research Approach
        </h2>

        <ProcessStep
          number="1"
          title="Experimental Design Phase"
          description={
            <>
              Designed a comprehensive between-subjects experiment with{" "}
              <span className="font-semibold">997 participants</span>. Created
              systematic variations of intervention messages and developed
              sophisticated detection methods using trap websites. Built a
              realistic test simulation environment with integrated
              interventions.
            </>
          }
          hasImage={true}
        />

        <ProcessStep
          number="2"
          title="Technical Implementation"
          description={
            <>
              Developed a full-stack online test portal with integrated
              intervention system. Created{" "}
              <span className="font-semibold">
                trap websites with unique answer generation
              </span>
              . Implemented sophisticated cheating detection algorithm and built
              robust data collection pipeline.
            </>
          }
          hasImage={true}
        />

        <ProcessStep
          number="3"
          title="Large-Scale User Study"
          description={
            <>
              Conducted experiment with diverse participant pool across
              different demographics. Collected comprehensive{" "}
              <span className="font-semibold">mixed-methods data</span>{" "}
              including quantitative metrics and qualitative insights.
              Implemented robust statistical analysis using regression models.
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
            icon={FileText}
            title="Research Design"
            skills={[
              "Mixed-methods experimental design",
              "Statistical analysis expertise",
              "Survey design and implementation",
              "Qualitative data analysis",
            ]}
          />

          <SkillCard
            icon={Code}
            title="Technical Development"
            skills={[
              "Full-stack web development",
              "Database design and management",
              "API development",
              "Security implementation",
            ]}
          />

          <SkillCard
            icon={BarChart}
            title="Data Analysis"
            skills={[
              "Statistical modeling",
              "Regression analysis",
              "Data visualization",
              "Qualitative coding",
            ]}
          />

          <SkillCard
            icon={Layout}
            title="Research Methods"
            skills={[
              "Survey methodology",
              "User experience evaluation",
              "Ethics in human subjects research",
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
                  Cost-effective cheating prevention without privacy invasion
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>
                  Privacy-preserving solutions maintaining test credibility
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>
                  Evidence-based recommendations for assessment design
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
                <span>
                  Integration with AI systems for adaptive interventions
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>Real-time intervention customization</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                <span>Development of standardized intervention frameworks</span>
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
            Key Research Findings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-blue-600 mb-2">
                Effectiveness Metrics
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>42% overall reduction in cheating behavior</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>
                    Honor code reminders showed 50% decrease in cheating
                  </span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>No significant negative impact on user experience</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-blue-600 mb-2">
                Analysis Methods
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>Binary logistic regression for cheating behavior</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>OLS regression for user experience analysis</span>
                </li>
                <li className="flex items-start gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                  <span>Qualitative coding for thematic analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Results Visualization */}
        <motion.div
          className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
          {...fadeIn}
        >
          <h3 className="font-semibold text-gray-800 mb-4">
            Comparative Analysis of Intervention Effects
          </h3>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
            <img
              src="/api/placeholder/800/400"
              alt="Intervention analysis results"
              className="object-contain rounded-lg"
            />
          </div>
          <p className="text-gray-600 text-sm">
            Analysis showed that honor code reminders and warning messages were
            most effective in preventing cheating while maintaining positive
            user experience. The study demonstrated that privacy-non-invasive
            interventions can effectively balance integrity and user experience.
          </p>
        </motion.div>
      </div>

      {/* Academic Publication */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Research Publication
        </h2>
        <motion.div
          className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl"
          {...fadeIn}
        >
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <FileText className="text-blue-500 w-8 h-8" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Published in Computers & Education
                </h3>
                <p className="text-sm text-gray-600">September 2023</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project2Explain;
