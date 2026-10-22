import { Col, SectionHead } from "./Layout";
import { expInd, expAca } from "../data";

const MATRIX = [
  ["9", "Delivery stages owned"],
  ["1,678", "Study participants"],
  ["3", "Live platforms shipped"],
  ["3", "Funding bids (FNR·AWS·MS)"],
];

function Timeline({ rows }) {
  return (
    <div className="tl">
      {rows.map((r) => (
        <div className="tl-item" key={r.when + r.what}>
          <div className="when">{r.when}</div>
          <div className="what">{r.what}</div>
          <div className="where">{r.where}</div>
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience">
      <SectionHead title="Experience" index="05 / 10" />
      <Col className="pad">
        <div className="matrix">
          {MATRIX.map(([n, c]) => (
            <div className="mx" key={c}><div className="n">{n}</div><div className="c">{c}</div></div>
          ))}
        </div>
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
