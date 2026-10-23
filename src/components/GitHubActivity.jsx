import { useEffect, useState } from "react";
import { Col, SectionHead } from "./Layout";
import { socials } from "../data";
// Static snapshot, kept only as an offline fallback if the live API is unreachable.
import ghchart from "../design/ghchart.svg?raw";

const USER = "svdpmukherjee";
// Public, CORS-enabled contribution API — no token needed. `?y=last` = trailing 12 months.
const API = `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`;

// Tiles currently hidden (see commented block in render); keep for reference.
// const TILES = [
//   ["@svdpmukherjee", "Profile"],
//   ["3", "Open-sourced project repos"],
//   ["Full-stack", "React · FastAPI · MongoDB"],
// ];

const fmtDate = (s) =>
  new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

export default function GitHubActivity() {
  const [days, setDays] = useState(null); // null = loading, [] handled, array = data
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(API)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then((d) => { if (alive) setDays(d.contributions || []); })
      .catch(() => { if (alive) { setError(true); setDays([]); } });
    return () => { alive = false; };
  }, []);

  // Split the flat day list into weeks (columns of 7).
  const weeks = [];
  if (days && days.length) {
    for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  }
  const total = days ? days.reduce((s, d) => s + d.count, 0) : 0;

  return (
    <section id="github">
      <SectionHead title="GitHub Activity" index="08 / 10" />
      <Col className="pad">
        {/* <div className="gh-tiles">
          {TILES.map(([n, c]) => (
            <div className="gh-tile" key={c}><div className="n">{n}</div><div className="c">{c}</div></div>
          ))}
        </div> */}
        <div className="gh-graph">
          <div className="cap">
            <span>
              
              {days && !error ? ` ${total.toLocaleString()} Contributions` : ""} in last 12 months
              {days === null && <span className="gh-live" title="Loading live data" />}
            </span>
            <a className="gh-link" href={socials.github} target="_blank" rel="noopener noreferrer">View on GitHub (@{USER}) ↗</a>
          </div>

          {error ? (
            // API unreachable — fall back to the static snapshot so something always shows.
            <div className="ghsvg" dangerouslySetInnerHTML={{ __html: ghchart }} />
          ) : (
            <>
              <div className={`ghgrid${days === null ? " loading" : ""}`}>
                {weeks.map((wk, w) => (
                  <div className="wk" key={w}>
                    {wk.map((d) => (
                      <span
                        key={d.date}
                        className={`dy l${d.level}`}
                        title={`${d.count === 0 ? "No" : d.count} contribution${d.count === 1 ? "" : "s"} on ${fmtDate(d.date)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="gh-legend">
                less
                {[0, 1, 2, 3, 4].map((l) => <span key={l} className={`dy l${l}`} />)}
                more
              </div>
            </>
          )}
        </div>
      </Col>
    </section>
  );
}
