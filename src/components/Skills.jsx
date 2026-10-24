import { Col, SectionHead } from "./Layout";

// One capability per card. The bold line is the claim a recruiter scans; the
// evidence line underneath is the proof — the part they actually want to see.
const CARDS = [
  { role: "Business analysis",
    h: "I identify and understand the problem before code gets written",
    ev: "I turn conflicting requirements from stakeholders in different fields into one clear specification a team can build from." },
  { role: "Product development",
    h: "I own delivery from first scope to final release",
    ev: "I run software projects end to end: by setting the scope, planning the work, managing risk, and helping secure the funding behind them." },
  { role: "Engineering",
    h: "I build and ship the solution myself",
    ev: "I have shipped live, full-stack web apps for target users using tech stacks, APIs and cloud - with the code released openly." },
  { role: "Research & data",
    h: "I prove whether it actually worked",
    ev: "I design and run studies, then do the statistical analysis myself, so a decision rests on evidence instead of opinion." },
  { role: "Communication & compliance", wide: true,
    h: "I make it clear, and keep it compliant",
    ev: "I explain technical work to non-specialists, present it to wider audiences, and keep projects within data-protection and AI regulations." },
];

export default function Skills() {
  return (
    <section id="skills">
      <SectionHead title="How I can contribute" index="02 / 10" />
      <Col className="pad">
        <div className="cards">
          {CARDS.map(({ role, h, ev, wide }) => (
            <div key={role} className={`card${wide ? " wide" : ""}`}>
              <span className="role">{role}</span>
              <h3>{h}</h3>
              <p className="ev">{ev}</p>
            </div>
          ))}
        </div>
      </Col>
    </section>
  );
}
