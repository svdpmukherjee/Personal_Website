import { useState, useEffect } from "react";
import { Col, SectionHead } from "./Layout";
import { projects, projectFilters } from "../data";

// Number of masonry columns, kept in sync with the grid breakpoint so each
// column flows independently and expanding one card never shifts the others.
function useColCount() {
  const [n, setN] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 680px)").matches ? 2 : 1
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 680px)");
    const on = () => setN(mq.matches ? 2 : 1);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return n;
}

const Globe = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></svg>);
const GH = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>);
const Doc = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>);
const Play = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m10 9 5 3-5 3V9z" fill="currentColor" stroke="none" /></svg>);

function Card({ p }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`pc${open ? " open" : ""}`}>
      <div className="pc-shot">
        <div className="st" />
        <span className={`pstatus ${p.status.k}`}>
          {p.status.k === "live" && <span className="ping sm" />}
          {p.status.t}
        </span>
        <div className="ret"><i className="a" /><i className="b" /><i className="c" /><i className="d" /></div>
        <span className="rec"><b />REC</span>
        {p.image && <img src={p.image} alt={`${p.title} preview`} loading="lazy" />}
      </div>
      <div className="pc-top"><div className="pc-title">{p.title}</div><div className="pc-year">{p.year}</div></div>
      <p className="pc-blurb">{p.blurb}</p>
      <button className="pc-toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "Hide details" : "More details"}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </button>
      <div className="pc-drawer">
        <div>
          <div className="pc-pao">
            <div className="blk"><h5>Problem</h5><p>{p.problem}</p></div>
            <div className="blk"><h5>Approach</h5><p>{p.approach}</p></div>
            <div className="blk"><h5>Outcome</h5><p className="out">{p.outcome}</p></div>
          </div>
          {p.stats && (
            <div className="pc-stats">
              {p.stats.map(([n, c]) => (<div key={c}><div className="n">{n}</div><div className="c">{c}</div></div>))}
            </div>
          )}
        </div>
      </div>
      <div className="pc-foot">
        <div className="pc-tags">{p.tags.map((t) => <span className="ptag" key={t}>{t}</span>)}</div>
        <div className="pc-ic">
          {p.links.live && <a href={p.links.live} target="_blank" rel="noopener noreferrer" aria-label="Live site"><Globe /></a>}
          {p.links.source && <a href={p.links.source} target="_blank" rel="noopener noreferrer" aria-label="Repository"><GH /></a>}
          {p.links.video && <a href={p.links.video} target="_blank" rel="noopener noreferrer" aria-label="Video"><Play /></a>}
          {(p.links.extra || []).map((x) => (
            <a key={x.u} href={x.u} target="_blank" rel="noopener noreferrer" aria-label={x.l}><Doc /></a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const shown = projects.filter((p) => filter === "all" || p.cats.includes(filter));
  const colCount = useColCount();
  const cols = Array.from({ length: colCount }, () => []);
  shown.forEach((p, i) => cols[i % colCount].push(p));

  return (
    <section id="projects">
      <SectionHead title="Projects" index="04 / 10" />
      <Col className="pad">
        <div className="filters">
          {projectFilters.map(([f, label]) => (
            <button key={f} className="chip-f" aria-pressed={filter === f} onClick={() => setFilter(f)}>{label}</button>
          ))}
        </div>
        <div className="pgrid">
          {cols.map((col, ci) => (
            <div className="pcol" key={ci}>
              {col.map((p) => <Card key={p.title} p={p} />)}
            </div>
          ))}
        </div>
      </Col>
    </section>
  );
}
