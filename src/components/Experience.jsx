import { Col, SectionHead } from "./Layout";
import { expInd, expAca } from "../data";

// Headline matrix currently hidden (see commented block below); keep for reference.
// const MATRIX = [
//   ["9", "Delivery stages owned"],
//   ["1,678", "Study participants"],
//   ["3", "Live platforms shipped"],
//   ["3", "Funding bids (FNR·AWS·MS)"],
// ];

// Small trophy mark for rows that carry an award.
function AwardIcon() {
  return (
    <svg className="aw-ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function Timeline({ rows }) {
  return (
    <div className="tl">
      {rows.map((r) => (
        <div className="tl-item" key={r.when + r.what}>
          <div className="when">{r.when}</div>
          <div className="what">{r.what}</div>
          <div className="where">{r.where}</div>
          {r.award && (
            <div className="award" title={r.award}><AwardIcon />{r.award}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead title="Experience and Education" index="05 / 10" />
      <Col className="pad">
        {/* Headline matrix hidden:
          MATRIX.map(([n, c]) => <div className="mx" key={c}>…</div>) */}
        <div className="track-cols">
          <div className="track-col">
            <div className="col-h"><span className="cdot ind" /> Industry <span className="yrs">~3 yrs</span></div>
            <Timeline rows={expInd} />
          </div>
          <div className="track-col">
            <div className="col-h"><span className="cdot aca" /> Academic / research <span className="yrs">~5 yrs</span></div>
            <Timeline rows={expAca} />
          </div>
        </div>
      </Col>
    </section>
  );
}
