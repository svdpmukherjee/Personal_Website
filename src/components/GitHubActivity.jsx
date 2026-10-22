import { Col, SectionHead } from "./Layout";
import { socials } from "../data";
// A dated snapshot of the real contribution graph, themed to inherit the page
// colours. Regenerate it from https://ghchart.rshah.org/<user> when refreshing.
import ghchart from "../design/ghchart.svg?raw";

const TILES = [
  ["@svdpmukherjee", "Profile"],
  ["3", "Open-sourced project repos"],
  ["Full-stack", "React · FastAPI · MongoDB"],
];

export default function GitHubActivity() {
  return (
    <section id="github">
      <SectionHead title="GitHub" index="08 / 10" />
      <Col className="pad">
        <div className="gh-tiles">
          {TILES.map(([n, c]) => (
            <div className="gh-tile" key={c}><div className="n">{n}</div><div className="c">{c}</div></div>
          ))}
        </div>
        <div className="gh-graph">
          <div className="cap">
            <span>Contribution activity · last 12 months</span>
            <a className="gh-link" href={socials.github} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
          </div>
          <div className="ghsvg" dangerouslySetInnerHTML={{ __html: ghchart }} />
        </div>
      </Col>
    </section>
  );
}
