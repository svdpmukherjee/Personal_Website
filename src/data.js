// Content for the site, mirrored from the design artifact.
// lvl: 1 working · 2 proficient · 3 advanced ; src: ind | aca | both
import projMirage from "./assets/proj-mirage.png";
// import projCheating from "./assets/proj-cheating.jpg";
import projCheating from "./assets/proj-cheating.gif";
import projProctoring from "./assets/proj-proctoring.png";

export const phases = [
  { no: "01", name: "Requirements & Analysis", ind: { y: 3, l: 2 }, aca: { y: 5, l: 3 },
    skills: [["Requirements elicitation",3,"both"],["Stakeholder interviews",3,"aca"],["As-is / to-be journey mapping",3,"aca"],["Service blueprints",3,"aca"],["Gap analysis",2,"aca"],["Scope & client management",2,"ind"],["Miro",2,"both"]] },
  { no: "02", name: "Hypothesis & Research Design", ind: { y: 1, l: 1 }, aca: { y: 5, l: 3 },
    skills: [["Hypothesis development",3,"aca"],["Experimental design",3,"aca"],["Survey design",3,"aca"],["Power analysis",2,"aca"],["Focus groups & interviews",3,"aca"],["LimeSurvey",3,"aca"]] },
  { no: "03", name: "UX Design & Prototyping", ind: { y: 1, l: 2 }, aca: { y: 5, l: 3 },
    skills: [["UX strategy",2,"both"],["User flows",2,"both"],["Information architecture",2,"aca"],["Wireframes & prototypes",3,"both"],["Figma",2,"both"],["Miro",2,"both"]] },
  { no: "04", name: "Solution Architecture", ind: { y: 3, l: 2 }, aca: { y: 4, l: 2 },
    skills: [["System design",2,"both"],["REST API design",3,"both"],["Data modelling (MongoDB)",2,"both"],["Agentic workflow design",2,"aca"],["Generator / evaluator routing",2,"aca"]] },
  { no: "05", name: "Build / Development", ind: { y: 3, l: 3 }, aca: { y: 5, l: 3 },
    skills: [["React JS",3,"both"],["Tailwind CSS",3,"both"],["Python",3,"both"],["FastAPI",3,"both"],["MongoDB",3,"both"],["Git",3,"both"],["LangChain",2,"aca"],["Hugging Face",2,"aca"]] },
  { no: "06", name: "Testing & Validation", ind: { y: 3, l: 2 }, aca: { y: 4, l: 3 },
    skills: [["Moderated usability pilots",3,"aca"],["User acceptance testing",2,"ind"],["Blind validation",3,"aca"],["Held-out validation",2,"aca"],["Enterprise QA / delivery",2,"ind"]] },
  { no: "07", name: "Deployment & Delivery", ind: { y: 3, l: 2 }, aca: { y: 3, l: 2 },
    skills: [["Docker",2,"both"],["Kubernetes",2,"both"],["AWS",2,"both"],["GitHub Actions (CI/CD)",2,"both"],["Vercel",3,"aca"],["Git-based release",3,"both"],["Enterprise release lifecycle",2,"ind"]] },
  { no: "08", name: "Evaluation & Experimentation", ind: { y: 1, l: 1 }, aca: { y: 5, l: 3 },
    skills: [["Controlled experiments / RCT",3,"aca"],["A/B testing",3,"aca"],["Randomisation design",3,"aca"],["Behavioural logging",3,"aca"],["Outcome measurement",3,"aca"],["Interface evaluation",2,"ind"]] },
  { no: "09", name: "Data Management & Analysis", ind: { y: 2, l: 2 }, aca: { y: 5, l: 3 },
    skills: [["Advanced statistical methods",3,"aca"],["Mixed-effects & Bayesian models",3,"aca"],["SQL",3,"both"],["Machine learning",2,"both"],["Thematic analysis",3,"aca"],["Python",3,"both"],["R",2,"aca"],["STATA",2,"aca"],["MAXQDA",3,"aca"],["Data pipelines & management",2,"both"]] },
];

export const lenses = {
  // full: { set: null, note: "<b>The full loop.</b> Most roles own one slice of this. I have worked hands-on across all of it, in industry and in research." },
  pm:   { set: [1,2,3,4,5,6,7,8,9], note: "<b>Project / product lead:</b> every stage lights up. Owning the whole loop, not one slice, is the end-to-end signal a delivery or management role looks for." },
  ba:   { set: [1,2,6,8,9], note: "<b>Business analyst:</b> requirements and analysis, research design, validation, and the experimentation and data work that back a decision." },
  dev:  { set: [4,5,6,7], note: "<b>Developer:</b> solution architecture, build, testing and deployment — the hands-on engineering core." },
  data: { set: [2,8,9], note: "<b>Data &amp; research:</b> study design, controlled experimentation, and the statistical analysis behind the result." },
};
export const lensButtons = [
  ["pm", "Product management"], ["ba", "Business analysis"], ["dev", "Development"], ["data", "Data & research"],
];

export const projects = [
  { cats:["ai","research","product"], title:"How can we calibrate and validate AI-personas to simulate organizational phishing behavior at scale?", year:"2026", status:{t:"In development",k:"amber"}, image:projMirage,
    blurb:"Set of calibrated AI personas a security team can phish instead of employees at the intersection of Social Engineering, AI and Behavioral Science.",
    problem:"Phishing real staff to test them is slow, legally contested and spends trust, and susceptibility drops with repeated exposure, so the measurement degrades the thing it measures.",
    approach:"The idea is to calibrate AI agents to match why each employee reacts to phishing, not just whether they click. Role-specific email stimuli across ten job clusters go to 1000+ working professionals, whose clicks, traits and written reasoning estimate each person's decision 'mechanism'. A two-model loop, namely, a low-cost simulator LLM paired with a stronger calibrator LLM, rewrites each persona until the agent reasons like its human target. A four-level validity framework then checks how well the agents generalise to unseen emails, and every calibrated agent ships as a portable artifact that survives model upgrades.",
    outcome:"Currently in progress. Results will be added here once the evaluation is complete.",
    tags:["LLM Agents","Generator-Evaluator","Behavior Modelling", "FARM stack","EU AI Act"],
    links:{ source:"https://github.com/svdpmukherjee/CYPEARL" } },
  { cats:["research","product","ai"], title:"How do theory-based design solutions contribute to a fair and valid unsupervised remote assessment system?", year:"2025", status:{t:"Live",k:"live"}, image:projCheating,
    blurb:"A live anagram-game platform that A/B-tests pre-exam behavioral theory-based integrity messages. A simple well-crafted motivational message can cut cheating tendency upto 42% without compromising honest students' performances.",
    problem:"Online assessment is stuck between proctoring (costs privacy and trust) and doing nothing (unfair to honest students). The pre-exam message is the cheap middle option, and nobody designs it.",
    approach:"Replaced the intuition-written honour code with a blind-validated library of 45 messages across 15 psychological concepts, built a live platform (React, FastAPI, MongoDB, 18 endpoints) and ran it as a controlled experiment with 1000+ participants. An evaluator-optimizer LLM workflow with a human gate framed those messages.",
    outcome:"Cheating in totality fell ~42% with no cost to scores (honest candidates scored 17% higher) or satisfaction. Delivered over five sprints in seven months as three open-sourced repos.",
    tags:["Large-scale Behavioural Experiment","LLM Evaluator-Optimizer","React","FastAPI","A/B"],
    links:{ live:"https://anagram-solving-game-study.vercel.app", source:"https://github.com/svdpmukherjee/game-behavior-intervention-study", extra:[{l:"Preprint (arXiv:2602.04450)",u:"https://arxiv.org/abs/2602.04450"}] } },
  { cats:["research","product"], title:"How does preserving privacy in a remote proctoring system increase user acceptance?", year:"2024", status:{t:"Published",k:"soft"}, image:projProctoring,
    blurb:"A nine-expert service-design study specifying exactly what a remote-proctoring reviewer needs to see; and measuring what people will actually accept.",
    problem:"In a high-stake exam, proctoring is mandated rather than chosen, records far more than the assessment needs, and no document states what a reviewer actually needs. The privacy trade-off was argued in the literature and specified nowhere.",
    approach:"A nine-expert workshop across three disciplines, 30 stimuli with region-by-region obfuscation (using synthetic faces, so no real person depicted), and a 259-person within-subject study (55 Bonferroni-corrected pairwise tests) measuring perceived privacy and willingness to accept.",
    outcome:"A region-by-region specification a vendor can be held to, plus a measured adoption risk: the methods that score best on privacy are the ones people refuse. Read against EU AI Act Annex III.",
    tags:["Service Design","Usable Privacy","Within-subject","MAXQDA","Figma","Adobe Firefly"],
    links:{ video:"https://www.youtube.com/watch?v=biVz1H69Pow", extra:[{l:"Publication (ACM)",u:"https://dl.acm.org/doi/10.1145/3688459.3688474"},{l:"OSF materials",u:"https://osf.io/3prv8/?view_only=40c7e78d248342e8b770d7098e923360"}] } },
];
export const projectFilters = [["all","All"],["ai","Applied AI"],["product","Product Development"]];

export const expInd = [
  { when: "2021 Apr - Sep", what: "Data Analyst", where: "Sterlite EdIndia Foundation, India" },
  { when: "2016 Jan - Oct", what: "UX Research Intern", where: "Signify (Philips Lighting), Netherlands" },
  { when: "2011 – 2014", what: "Senior Software Engineer (Financial Services and Insurance)", where: "Infosys Limited, India (client: American Express)", award: "Best Performer, two quarters" },
];
export const expAca = [
  { when: "2026 Jan - Sep", what: "Postdoctoral Researcher", where: "SnT, University of Luxembourg" },
  { when: "2021 – 2025", what: "Doctoral Researcher", where: "SnT & FHSE, University of Luxembourg", award: "Excellent PhD Thesis Award" },
  { when: "2014 – 2016", what: "M.Sc., Human-Technology Interaction", where: "Eindhoven University of Technology, NL", award: "ALSP Scholarship holder" },
  { when: "2007 – 2011", what: "B.Tech, Information Technology", where: "Heritage Institute of Technology, India" },
];

export const techCats = ["All", "Languages", "Frontend", "Backend & Data", "AI / ML", "DevOps", "Research"];
export const tech = [
  ["Python",["Languages","Backend & Data","AI / ML"]],["JavaScript",["Languages","Frontend"]],["TypeScript",["Languages","Frontend"]],
  ["SQL",["Languages","Backend & Data"]],["R",["Languages","Backend & Data"]],["STATA",["Backend & Data"]],
  ["React",["Frontend"]],["Tailwind CSS",["Frontend"]],["HTML / CSS",["Frontend"]],["Figma",["Frontend","Research"]],
  ["FastAPI",["Backend & Data"]],["REST APIs",["Backend & Data"]],["MongoDB",["Backend & Data"]],
  ["LangChain",["AI / ML"]],["Hugging Face",["AI / ML"]],["LLM agent workflows",["AI / ML"]],["Machine learning",["AI / ML","Backend & Data"]],
  ["Docker",["DevOps"]],["Kubernetes",["DevOps"]],["GitHub Actions",["DevOps"]],["AWS",["DevOps"]],["Vercel",["DevOps"]],["Git",["DevOps"]],
  ["Mixed-effects & Bayesian stats",["Research","Backend & Data"]],["Thematic analysis",["Research"]],["MAXQDA",["Research"]],["LimeSurvey",["Research"]],
];

export const languages = [
  { ll: "English", lv: "Proficient", w: 92 },
  { ll: "German", lv: "B1 · learning", w: 58 },
  { ll: "Luxembourgish", lv: "A2", w: 34 },
  { ll: "Bengali", lv: "Native", w: 100 },
];

export const roles = ["Product development", "Business analysis", "Applied AI"];
export const quotes = [
  { t: "Understand what people need, build the thing, then measure whether it worked.", a: "How I work" },
  { t: "The hard part is not can we build it, but is it worth building.", a: "Principle" },
  { t: "Own the whole loop, not one slice of it.", a: "On delivery" },
];

export const navItems = [
  ["about", "About"], ["skills", "How I can contribute"], ["cycle", "Product lifecycle"], ["projects", "Projects"],
  ["experience", "Experience"], ["teaching", "Teaching"], ["stack", "Tech stack"], ["github", "GitHub"],
  ["languages", "Languages"],
];

export const email = "svdp.mukherjee@gmail.com";
export const socials = {
  github: "https://github.com/svdpmukherjee",
  linkedin: "https://linkedin.com/in/svdpmukherjee",
  scholar: "https://scholar.google.com/citations?user=BOmtS4sAAAAJ&hl=en",
};
