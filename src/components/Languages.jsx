import { Col, SectionHead } from "./Layout";
import { languages } from "../data";

export default function Languages() {
  return (
    <section id="languages">
      <SectionHead title="Languages I speak" index="10 / 10" />
      <Col className="pad">
        <div className="langrid">
          {languages.map((l) => (
            <div className="lcard" key={l.ll}>
              <div className="ll">{l.ll}</div>
              <div className="lv">{l.lv}</div>
              <div className="lbar"><i style={{ width: `${l.w}%` }} /></div>
            </div>
          ))}
        </div>
      </Col>
    </section>
  );
}
