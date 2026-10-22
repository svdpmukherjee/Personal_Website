import { Col, SectionHead } from "./Layout";

const SNAP = [
  "8+ yrs across industry & research",
  "PhD & postdoc, HCI · Luxembourg",
  "Ships full-stack & runs the study",
  "Finance roots: Infosys / Amex",
  "Published & presented at ACM venues",
  "EU-based · open to remote / relocation",
];

export default function About() {
  return (
    <section id="about">
      <SectionHead title="About" index="01 / 10" />
      <Col className="pad">
        <div className="bul"><span className="m">•</span><p>I started as a software engineer at <b>Infosys</b>, building and maintaining enterprise applications for the American Express account inside a large, regulated delivery organisation. That taught me how real IT projects run.</p></div>
        <div className="bul"><span className="m">•</span><p>I then spent several years learning to ask a sharper question — <b>not &ldquo;can we build it?&rdquo; but &ldquo;is it worth building, and will people actually use it?&rdquo;</b> — through an MSc in Eindhoven and a PhD in Luxembourg, where I designed the studies, shaped the services and built the platforms myself.</p></div>
        <div className="bul"><span className="m">•</span><p>What I care about now is what a good business cares about: <b>improving how work gets done</b>, with software as the tool rather than the goal.</p></div>
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
