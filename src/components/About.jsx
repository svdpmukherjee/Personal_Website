import { Col, SectionHead } from "./Layout";

const SNAP = [
  "8+ yrs across industry & research combined",
  "Published & presented at conferences",
  "PhD & Postdoc in Luxembourg",
  "EU-based (open to remote opportunities)",
  "Ships full-stack & runs the study",  
  "English: C2, German: B1, Luxembourgish: A2"
];

// Short, honest lens on each domain I've actually worked in.
const SECTORS = [
  ["FinTech", "Software engineer on back-office card-and-payments systems for American Express, inside a large regulated delivery organisation."],
  ["Socio-technical security", "Human-centred work on privacy-preserving proctoring and phishing resilience."],
  ["Education & assessment", "Research and live platforms exploring online learning and exam integrity."],
  ["Connected products", "UX research on smart-lighting products at Signify (Philips Lighting)."],
];

export default function About() {
  return (
    <section id="about">
      <SectionHead title="About" index="01 / 10" />
      <Col className="pad">
        <p className="about-lead">
          <strong className="italic">Should we build this solution to the problems identified and would this actually work?</strong> Those are the questions I keep coming back to. I have taken solutions through their <b>whole arc — idea, design, build, live deployment, and measuring whether they really worked</b>. Most of that came from research: an MSc and a PhD in Human-Computer Interaction, where I was the engineer, the designer and the analyst at once, delivering products that real users could use.
        </p>
        <p className="about-lead">
          My experience is not tied to one industry. Understanding what people need, building it properly, and proving whether it helped is the <b>same discipline in fintech, in a product team, or wherever a solution has to earn its keep</b>. I am looking for a role at that meeting point of engineering, research and business sense.
        </p>

        <div className="sectors">
          <h4>Domains I have worked</h4>
          <div className="sec-grid">
            {SECTORS.map(([l, d]) => (
              <div className="sec" key={l}><span className="sl">{l}</span><p>{d}</p></div>
            ))}
          </div>
        </div>

        <div className="snap">
          <h4>Snapshot</h4>
          <ul>
            {SNAP.map((s) => (
              <li key={s}><span className="d" />{s}</li>
            ))}
          </ul>
        </div>
      </Col>
    </section>
  );
}
