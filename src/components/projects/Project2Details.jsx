import honor from "../../assets/honor.png";
import warning from "../../assets/warning.png";
import monitoring from "../../assets/monitoring.png";

const Project2Details = () => {
  const researchGaps = [
    {
      title: "Lack of Systematic Design",
      description:
        "Previous privacy-non-invasive interventions, such as students committing to honor codes or showing them warnings of punishment were not systematically designed or studied",
    },
    {
      title: "Methodological Issues",
      description:
        "Previous studies suffered from self-reporting bias and unreliable detection mechanisms, leading to unnoticed false negatives in cheating instances",
    },
    {
      title: "Limited User Perspective",
      description:
        "Interventions' impact on student' exam experience and exam performance remained unexplored",
    },
  ];

  const interventions = [
    {
      image: honor,
      title: "Honor Code Reminder",
      description: "Appeals to moral principles and restores ethical behavior",
    },
    {
      image: warning,
      title: "Warning Message",
      description: "Warns about consequences of cheating",
    },
    {
      image: monitoring,
      title: "Monitoring Message",
      description: "Informs about activity tracking without specifics",
    },
  ];

  const approachHighlights = [
    {
      title: "Privacy-Preserving Design",
      description:
        "Evaluated interventions that prevent cheating without collecting personal data or controlling devices",
    },
    {
      title: "Smart Cheating Detection for Experimental Purpose",
      description:
        "Created trap websites with unique answer generation to track both browser and device changes, minimizing false negatives of cheating instances",
    },
    {
      title: "Mixed Methods Approach",
      description:
        "Combined quantitative metrics with qualitative insights to understand intervention effectiveness and user experience",
    },
    {
      title: "User-Centric Evaluation",
      description:
        "Assessed impacts on user experience and test-taking self-efficacy to ensure real-world applicability",
    },
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-bold text-gray-600">
        As a privacy-conscious educator trusting students in unsupervised online
        exams, how do you minimize exam cheating?
      </h3>
      <p className="text-md  text-gray-600">
        Without relying on tools like webcams, keyboard, or mouse tracking to
        safeguard students' privacy, simple text-based interventions have been
        effective in preventing cheating
      </p>

      {/* Research Gaps Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Research Gaps
        </h3>
        <div className="space-y-3">
          {researchGaps.map((gap, index) => (
            <div key={index} className="bg-amber-50 p-3 rounded-lg">
              <h4 className="font-medium text-red-600">{gap.title}</h4>
              <p className="text-gray-600 text-sm mt-1">{gap.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interventions Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">
          Three Text-Based Interventions Were Shown During a Simulated Exam:
          <span className="text-gray-500">
            {" "}
            Ranging from Moral Appeal to Instilling Fear of Getting Caught
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interventions.map((intervention, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-100 p-4 rounded-lg w-full h-48 flex items-center justify-center">
                <img
                  src={intervention.image}
                  alt={intervention.title}
                  className="object-contain h-full"
                />
              </div>
              <h4 className="font-medium  text-gray-700 mt-3">
                {intervention.title}
              </h4>
              <p className="text-gray-400 text-sm text-center mt-1">
                {intervention.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Our Innovative Approach
        </h3>
        <div className="space-y-3">
          {approachHighlights.map((highlight, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-700">{highlight.title}</h4>
              <p className="text-gray-600 text-sm mt-1">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project2Details;
