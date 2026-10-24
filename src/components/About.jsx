import { Col, SectionHead } from "./Layout";

const SNAP = [
  "8+ yrs across research & industry combined",
  "Published & presented at conferences",
  "PhD & Postdoc in Luxembourg",
  "EU-based (open to remote opportunities)",
  "Builds full-stack & validates with users",
  "English: C2, German: B1, Luxembourgish: A2"
];

// Short, honest lens on each domain I've actually worked in.
const SECTORS = [
  ["FinTech", "Engineered back-office card-and-payments systems for American Express, inside a large regulated delivery organisation."],
  ["Socio-technical security", "Designed and built privacy-preserving remote proctoring solution and anti-phishing tools, validated with hundreds of users and domain experts."],
  ["Education & assessment", "Shipped a live exam simulator with a research-backed cheating detection and prevention solution, tested on 1000+ examinees."],
  ["Smart products", "Designed and user-tested smart-lighting interactions at Signify (formerly Philips Lighting)."],
];

export default function About() {
  return (
    <section id="about">
      <SectionHead title="About me" index="01 / 10" />
      <Col className="pad">
        <div className="about-frame">
          <p className="about-lead">
            <span className="hl">I combine</span> user research, product thinking and hands-on engineering to take digital products from a problem to a working system, then test whether they actually help. I work out <b>what is worth building before committing to it</b>, and judge success by usefulness, not just delivery.
          </p>
          <p className="about-lead">
            <span className="hl">My background</span> spans software engineering, user experience (UX) research and applied AI. Through research-led projects I have uncovered user and stakeholder needs, designed and built the applications, deployed them for real users, and evaluated the outcomes through experiments and data analysis.
          </p>
          <p className="about-lead">
            This approach is <span className="hl">not tied to one industry</span>. Therefore, I am looking to bring it to <span className="hl">technical product development roles</span>, helping shape what gets built, contributing hands-on to it, and using evidence to guide product decisions.
          </p>
        </div>

        <div className="sectors">
          <h3>Domains I have worked in</h3>
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
