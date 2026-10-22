import { useState } from "react";
import { Col, SectionHead } from "./Layout";
import { techCats, tech } from "../data";

export default function TechStack() {
  const [cat, setCat] = useState("All");
  return (
    <section id="stack">
      <SectionHead title="Tech stack" index="07 / 10" />
      <Col className="pad">
        <div className="ts-tabs">
          {techCats.map((c) => (
            <button key={c} className={`ts-tab${cat === c ? " active" : ""}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="ts-grid">
          {tech.map(([name, cats]) => {
            const hidden = !(cat === "All" || cats.includes(cat));
            return (
              <span key={name} className={`tsk${hidden ? " hidden" : ""}`}><span className="cd" />{name}</span>
            );
          })}
        </div>
      </Col>
    </section>
  );
}
