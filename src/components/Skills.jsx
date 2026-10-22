import { Col, SectionHead } from "./Layout";

const CARDS = [
  { role: "Business analysis", h: "Analyse & improve the process", p: "Elicit requirements, map how work runs today versus how it should, find the real bottleneck, and turn it into a specification a team can build against.", ev: "Reconciled conflicting needs across nine experts in three disciplines into one buildable specification a vendor could be held to." },
  { role: "Project / product", h: "Own delivery from scope to release", p: "Run a multi-year programme with its own scope, sprints, risks and stakeholders — and win the funding that pays for it.", ev: "Delivered a six-application AI programme end to end; contributed to FNR, Amazon and Microsoft funding applications." },
  { role: "Engineering", h: "Build the solution myself", p: "Full-stack: React and TypeScript on the front, Python / FastAPI and REST APIs behind, running on Docker, Kubernetes, AWS and Vercel. Plus LLM agent workflows.", ev: "Shipped live platforms used by 1,232 and 187 people, open-sourced across three repositories." },
  { role: "Research & data", h: "Decide with evidence, not opinion", p: "Design the study, run it, and do the statistics — mixed-effects and Bayesian models in Python, R, SQL and STATA — so a decision rests on data.", ev: "Ran a 1,232-person controlled experiment that cut cheating 42%, and a 259-person within-subject study." },
  { role: "Communication & compliance", h: "Explain it to anyone, and keep it compliant", p: "Turn technical detail into language a non-specialist can act on, and keep the work inside GDPR and the EU AI Act — the part most builds get wrong.", ev: "Taught HCI to computer-science students · published and presented at ACM venues · read my own designs against EU AI Act Annex III for minimisation, oversight and contestability.", wide: true },
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
