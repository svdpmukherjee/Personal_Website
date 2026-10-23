import { useState } from "react";
import { Col, SectionHead } from "./Layout";
import { phases, lenses, lensButtons } from "../data";

const DEPTH = { 0: "—", 1: "working", 2: "proficient", 3: "advanced" };
const yrLabel = (y) => (y >= 5 ? "5+ yr" : y === 0 ? "—" : `${y} yr`);
const yrPct = (y) => (Math.min(y, 5) / 5) * 100;
const lvlPct = (l) => (l / 3) * 100;

function Dots({ lvl }) {
  return (
    <span className="dots" title={DEPTH[lvl]}>
      {[1, 2, 3].map((i) => <i key={i} className={i <= lvl ? "on" : ""} />)}
    </span>
  );
}

// Two equal-length bars per track: hands-on years and depth, same colour.
function Gauge({ cap, pct, empty }) {
  return (
    <div className={`tgauge${empty ? " none" : ""}`}>
      <span className="gcap">{cap}</span>
      <div className="tbar"><i style={{ width: `${pct}%` }} /></div>
    </div>
  );
}

function Track({ cls, label, d }) {
  return (
    <div className={`trk ${cls}${d.y === 0 ? " none" : ""}`}>
      <span className="tlab">{label}</span>
      <Gauge cap={yrLabel(d.y)} pct={yrPct(d.y)} empty={d.y === 0} />
      <Gauge cap={DEPTH[d.l]} pct={lvlPct(d.l)} empty={d.l === 0} />
    </div>
  );
}

function Phase({ p, idx, lensSet }) {
  const [open, setOpen] = useState(false);
  const on = !lensSet || lensSet.indexOf(idx) > -1;
  const cls = `ph${open ? " open" : ""}${!on ? " dim" : ""}${lensSet && on ? " hot" : ""}`;
  return (
    <div className={cls}>
      <button className="ph-head" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span className="ph-no">{p.no}</span>
        <div><div className="ph-name">{p.name}</div></div>
        <div className="ph-bars"><Track cls="ind" label="Industry" d={p.ind} /><Track cls="aca" label="Research" d={p.aca} /></div>
        <span className="ph-chev">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
        </span>
      </button>
      <div className="ph-body"><div><div className="ph-inner">
        <h4>Tools &amp; methods in this stage</h4>
        <div className="chips">
          {p.skills.map(([name, lvl, src]) => (
            <span className="sk" key={name}><span className={`src ${src}`} />{name}<Dots lvl={lvl} /></span>
          ))}
        </div>
      </div></div></div>
    </div>
  );
}

export default function DeliveryCycle() {
  const [lens, setLens] = useState("full");
  const set = lenses[lens].set;

  return (
    <section id="cycle">
      <SectionHead title="Delivery cycle" index="03 / 10" />
      <Col className="pad">
        <p className="intro">Most roles own one stage of this loop. I have worked hands-on across all nine — in industry and in research. Pick a role to see which stages it draws on, or open a stage for the actual tools and how deep each one goes.</p>
        <div className="lens-row" role="group" aria-label="View the cycle as a role">
          {lensButtons.map(([key, label]) => (
            <button key={key} className="lens" aria-pressed={lens === key} onClick={() => setLens(key)}>{label}</button>
          ))}
        </div>
        <p className="lens-note" dangerouslySetInnerHTML={{ __html: lenses[lens].note }} />
        <div className="scale-key">
          <span className="key-item"><span className="sw ind" /> Industry</span>
          <span className="key-item"><span className="sw aca" /> Research</span>
          <span className="key-item"><span className="ruler">Left bar = hands-on years (0 → 5+)</span></span>
          <span className="key-item"><span className="ruler">Right bar = depth (working → advanced)</span></span>
        </div>
        <div className="cyclist">
          {phases.map((p, i) => <Phase key={p.no} p={p} idx={i + 1} lensSet={set} />)}
        </div>
      </Col>
    </section>
  );
}
