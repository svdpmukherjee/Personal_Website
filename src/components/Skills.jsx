import { Col, SectionHead } from "./Layout";

const CARDS = [
  { role: "Business analysis", h: "Analyse & improve the process", p: "Elicit requirements, map how work runs today versus how it should, find the real bottleneck, and turn it into a specification a team can build against.", ev: "I take conflicting requirements from stakeholders in different fields and turn them into one clear specification a team can build from." },
  { role: "Product development", h: "Own delivery from scope to release", p: "Run a multi-year programme with its own scope, sprints, risks and stakeholders — and win the funding that pays for it.", ev: "I've run software projects end to end — setting the scope, planning the work, managing risk, and helping secure the funding behind them." },
  { role: "Engineering", h: "Build the solution myself", p: "Full-stack: React and TypeScript on the front, Python / FastAPI and REST APIs behind, running on Docker, Kubernetes, AWS and Vercel. Plus LLM agent workflows.", ev: "I've built and shipped live, full-stack web applications that real users depend on, and released the code openly." },
  { role: "Research & data", h: "Decide with evidence, not opinion", p: "Design the study, run it, and do the statistics — mixed-effects and Bayesian models in Python, R, SQL and STATA — so a decision rests on data.", ev: "I design and run studies, then do the analysis myself, so a decision can rest on evidence rather than opinion." },
  { role: "Communication & compliance", h: "Explain it to anyone, and keep it compliant", p: "Turn technical detail into language a non-specialist can act on, and keep the work inside GDPR and the EU AI Act — the part most builds get wrong.", ev: "I explain technical work to non-specialists, present it to wider audiences, and keep projects within data-protection and AI regulations.", wide: true },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead title="What I bring" index="02 / 10" />
      <Col className="pad">
        <div className="cards">
          {CARDS.map((c) => (
            <div key={c.role} className={`card${c.wide ? " wide" : ""}`}>
              <span className="role">{c.role}</span>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <div className="ev">{c.ev}</div>
            </div>
          ))}
        </div>
      </Col>
    </section>
  );
}
