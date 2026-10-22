// Content for the site, mirrored from the design artifact.
// lvl: 1 working · 2 proficient · 3 advanced ; src: ind | aca | both

export const phases = [
  { no: "01", name: "Requirements & Analysis", what: "Elicit needs, map as-is vs to-be, define scope", ind: { y: 3, l: 2 }, aca: { y: 5, l: 3 },
    skills: [["Requirements elicitation",3,"both"],["Stakeholder interviews",3,"aca"],["As-is / to-be journey mapping",3,"aca"],["Service blueprints",3,"aca"],["Gap analysis",2,"aca"],["Scope & client management",2,"ind"],["Miro",2,"both"]] },
  { no: "02", name: "Hypothesis & Research Design", what: "Frame the question, design the study, size it", ind: { y: 1, l: 1 }, aca: { y: 5, l: 3 },
    skills: [["Hypothesis development",3,"aca"],["Experimental design",3,"aca"],["Survey design",3,"aca"],["Power analysis",2,"aca"],["Focus groups & interviews",3,"aca"],["LimeSurvey",3,"aca"]] },
  { no: "03", name: "UX Design & Prototyping", what: "User flows, information architecture, wireframes", ind: { y: 1, l: 2 }, aca: { y: 5, l: 3 },
    skills: [["UX strategy",2,"both"],["User flows",2,"both"],["Information architecture",2,"aca"],["Wireframes & prototypes",3,"both"],["Figma",2,"both"],["Miro",2,"both"]] },
  { no: "04", name: "Solution Architecture", what: "System design, APIs, data model, agent routing", ind: { y: 3, l: 2 }, aca: { y: 4, l: 2 },
    skills: [["System design",2,"both"],["REST API design",3,"both"],["Data modelling (MongoDB)",2,"both"],["Agentic workflow design",2,"aca"],["Generator / evaluator routing",2,"aca"]] },
  { no: "05", name: "Build / Development", what: "Full-stack build, AI integration", ind: { y: 3, l: 3 }, aca: { y: 5, l: 3 },
    skills: [["React JS",3,"both"],["Tailwind CSS",3,"both"],["Python",3,"both"],["FastAPI",3,"both"],["MongoDB",3,"both"],["Git",3,"both"],["LangChain / Hugging Face / CrewAI",2,"aca"]] },
  { no: "06", name: "Testing & Validation", what: "Moderated pilots, UAT, blind & held-out validation", ind: { y: 3, l: 2 }, aca: { y: 4, l: 3 },
    skills: [["Moderated usability pilots",3,"aca"],["User acceptance testing",2,"ind"],["Blind validation",3,"aca"],["Held-out validation",2,"aca"],["Enterprise QA / delivery",2,"ind"]] },
  { no: "07", name: "Deployment & Delivery", what: "Ship to production, CI/CD, release lifecycle", ind: { y: 3, l: 2 }, aca: { y: 3, l: 2 },
    skills: [["Docker",2,"both"],["Kubernetes",2,"both"],["AWS",2,"both"],["GitHub Actions (CI/CD)",2,"both"],["Vercel",3,"aca"],["Git-based release",3,"both"],["Enterprise release lifecycle",2,"ind"]] },
  { no: "08", name: "Evaluation & Experimentation", what: "Controlled experiments, A/B, measure impact", ind: { y: 1, l: 1 }, aca: { y: 5, l: 3 },
    skills: [["Controlled experiments / RCT",3,"aca"],["A/B testing",3,"aca"],["Randomisation design",3,"aca"],["Behavioural logging",3,"aca"],["Outcome measurement",3,"aca"],["Interface evaluation",2,"ind"]] },
  { no: "09", name: "Data Management & Analysis", what: "Clean, query, model and interpret the data", ind: { y: 2, l: 2 }, aca: { y: 5, l: 3 },
    skills: [["Advanced statistical methods",3,"aca"],["Mixed-effects & Bayesian models",3,"aca"],["SQL",3,"both"],["Machine learning",2,"both"],["Thematic analysis",3,"aca"],["Python",3,"both"],["R",2,"aca"],["STATA",2,"aca"],["MAXQDA",3,"aca"],["Data pipelines & management",2,"both"]] },
];

export const lenses = {
  full: { set: null, note: "<b>The full loop.</b> Most roles own one slice of this. I have worked hands-on across all of it, in industry and in research." },
  ba:   { set: [1,2,6,8,9], note: "<b>Business analyst:</b> requirements and analysis, research design, validation, and the experimentation and data work that back a decision." },
  pm:   { set: [1,2,3,4,5,6,7,8,9], note: "<b>Project / product lead:</b> every stage lights up. Owning the whole loop, not one slice, is the end-to-end signal a delivery or management role looks for." },
  dev:  { set: [4,5,6,7], note: "<b>Developer:</b> solution architecture, build, testing and deployment — the hands-on engineering core." },
  data: { set: [2,8,9], note: "<b>Data &amp; research:</b> study design, controlled experimentation, and the statistical analysis behind the result." },
};
export const lensButtons = [
  ["full", "Full cycle"], ["ba", "Business analyst"], ["pm", "Project / product"], ["dev", "Developer"], ["data", "Data & research"],
];

export const projects = [
  { cats:["ai","research","product"], title:"MIRAGE", year:"2025 –", status:{t:"Ongoing",k:"amber"}, image:"media/proj-mirage.png",
    blurb:"A calibrated AI persona a security team can phish instead of an employee — six apps and a generator-plus-evaluator model router, validated by 187 professionals.",
    problem:"Phishing real staff to test them is slow, legally contested and spends trust — and susceptibility drops with repeated exposure, so the measurement degrades the thing it measures.",
    approach:"Six applications, a generator-plus-evaluator model router, and a validation harness (held-out set, control arm, human test-retest ceiling, pre-fixed drift threshold, role-swap ablation). 480 real workplace emails across ten job clusters became 160 traceable stimuli.",
    outcome:"187 professionals validated the material across 2,992 realism ratings. Four of seven stages shipped; the one open design decision is written up and escalated rather than hidden.",
    stats:[["187","validating"],["160","stimuli"],["6","apps"]],
    tags:["LLM Agents","Generator-Evaluator","FastAPI","MongoDB","EU AI Act"],
    links:{ source:"https://github.com/svdpmukherjee" } },
  { cats:["research","product","ai"], title:"Integrity messaging", year:"2026", status:{t:"Live",k:"live"}, image:"media/proj-cheating.jpg",
    blurb:"A live anagram-game platform that A/B-tests pre-exam integrity messages. Concept-based wording cut full cheating 42% with no hit to honest scores.",
    problem:"Online assessment is stuck between proctoring (costs privacy and trust) and doing nothing (unfair to honest students). The pre-exam message is the cheap middle option, and nobody designs it.",
    approach:"Replaced the intuition-written honour code with a blind-validated library of 45 messages across 15 psychological concepts, built a live platform (React, FastAPI, MongoDB, 18 endpoints) and ran it as a controlled experiment. An evaluator-optimizer LLM workflow with a human gate wrote the copy.",
    outcome:"Full cheating fell 42% with no cost to scores (honest candidates scored 17% higher) or satisfaction. Delivered over five sprints in seven months as three open-sourced repos.",
    stats:[["1,232","users"],["42%","less cheating"],["3","repos"]],
    tags:["Behavioural Experiment","LLM Evaluator-Optimizer","React","FastAPI","A/B"],
    links:{ live:"https://anagram-solving-game-study.vercel.app", source:"https://github.com/svdpmukherjee", extra:[{l:"Preprint (arXiv:2602.04450)",u:"https://arxiv.org/abs/2602.04450"}] } },
  { cats:["research","product"], title:"Privacy-preserving proctoring", year:"2024", status:{t:"Published",k:"soft"}, image:"media/proj-proctoring.jpg",
    blurb:"A nine-expert service-design study specifying exactly what a remote-proctoring reviewer needs to see — and measuring what people will actually accept.",
    problem:"Proctoring is mandated rather than chosen, records far more than the assessment needs, and no document states what a reviewer actually needs. The privacy trade-off was argued in the literature and specified nowhere.",
    approach:"A nine-expert workshop across three disciplines, 30 stimuli with region-by-region obfuscation (synthetic faces — no real person depicted), and a 259-person within-subject study (55 Bonferroni-corrected pairwise tests) measuring perceived privacy and willingness to accept.",
    outcome:"A region-by-region specification a vendor can be held to, plus a measured adoption risk: the methods that score best on privacy are the ones people refuse. Read against EU AI Act Annex III.",
    stats:[["259","participants"],["9","experts"],["55","tests"]],
    tags:["Service Design","Usable Privacy","Within-subject","MAXQDA","EU AI Act"],
    links:{ extra:[{l:"Publication (ACM)",u:"https://dl.acm.org/doi/10.1145/3688459.3688474"},{l:"OSF materials",u:"https://osf.io/3prv8/?view_only=40c7e78d248342e8b770d7098e923360"}] } },
];
export const projectFilters = [["all","All"],["ai","Applied AI"],["research","Research"],["product","Product"]];

export const expInd = [
  { when: "2011 – 2014", what: "Senior Software Engineer — Finance & Banking", where: "Infosys (client: American Express)" },
  { when: "2016", what: "UX Research Intern", where: "Signify (Philips Lighting), Netherlands" },
  { when: "2021", what: "Data Analyst", where: "Sterlite EdIndia Foundation, India" },
];
export const expAca = [
  { when: "2021 – 2026", what: "Doctoral & Postdoctoral Researcher, HCI", where: "SnT & FHSE, University of Luxembourg" },
  { when: "2014 – 2016", what: "M.Sc., Human-Technology Interaction", where: "Eindhoven University of Technology, NL" },
  { when: "2007 – 2011", what: "B.Tech, Information Technology", where: "Heritage Institute of Technology, India" },
];

export const techCats = ["All", "Languages", "Frontend", "Backend & Data", "AI / ML", "DevOps", "Research"];
export const tech = [
  ["Python",["Languages","Backend & Data","AI / ML"]],["JavaScript",["Languages","Frontend"]],["TypeScript",["Languages","Frontend"]],
  ["SQL",["Languages","Backend & Data"]],["R",["Languages","Backend & Data"]],["STATA",["Backend & Data"]],
  ["React",["Frontend"]],["Tailwind CSS",["Frontend"]],["HTML / CSS",["Frontend"]],["Figma",["Frontend","Research"]],
  ["FastAPI",["Backend & Data"]],["REST APIs",["Backend & Data"]],["MongoDB",["Backend & Data"]],
  ["LangChain",["AI / ML"]],["Hugging Face",["AI / ML"]],["CrewAI",["AI / ML"]],["LLM agent workflows",["AI / ML"]],["Machine learning",["AI / ML","Backend & Data"]],
  ["Docker",["DevOps"]],["Kubernetes",["DevOps"]],["GitHub Actions",["DevOps"]],["AWS",["DevOps"]],["Vercel",["DevOps"]],["Git",["DevOps"]],
  ["Mixed-effects & Bayesian stats",["Research","Backend & Data"]],["Thematic analysis",["Research"]],["MAXQDA",["Research"]],["LimeSurvey",["Research"]],
];

export const languages = [
  { ll: "English", lv: "Proficient", w: 92 },
  { ll: "German", lv: "B1 · learning", w: 58 },
  { ll: "Luxembourgish", lv: "A2", w: 34 },
  { ll: "Bengali", lv: "Native", w: 100 },
];

export const roles = ["Business analysis", "Product development", "Applied AI"];
export const quotes = [
  { t: "Understand what people need, build the thing, then measure whether it worked.", a: "How I work" },
  { t: "The hard part is not can we build it, but is it worth building.", a: "Principle" },
  { t: "Own the whole loop, not one slice of it.", a: "On delivery" },
];

export const navItems = [
  ["about", "About"], ["skills", "What I bring"], ["cycle", "Delivery cycle"], ["projects", "Projects"],
  ["experience", "Experience"], ["teaching", "Teaching"], ["stack", "Tech stack"], ["github", "GitHub"],
  ["contact", "Contact"], ["languages", "Languages"],
];

export const email = "svdp.mukherjee.lux@gmail.com";
export const socials = {
  github: "https://github.com/svdpmukherjee",
  linkedin: "https://linkedin.com/in/svdpmukherjee",
  scholar: "https://scholar.google.com/citations?user=BOmtS4sAAAAJ&hl=en",
};
