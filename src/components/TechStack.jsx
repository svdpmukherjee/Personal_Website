import { useState } from "react";
import { Col, SectionHead } from "./Layout";
import { techCats, tech } from "../data";
// Local brand/glyph icons for tech that skillicons.dev doesn't carry.
import sqlIcon from "../assets/icons/sql.svg";
import langchainIcon from "../assets/icons/langchain.svg";
import huggingfaceIcon from "../assets/icons/huggingface.svg";
import maxqdaIcon from "../assets/icons/maxqda.svg";
import limesurveyIcon from "../assets/icons/limesurvey.svg";

// Mainstream stack served on demand by skillicons.dev (no local asset to ship).
const SKILL = {
  "Python": "python", "JavaScript": "js", "TypeScript": "ts", "R": "r",
  "React": "react", "Tailwind CSS": "tailwind", "HTML / CSS": "html", "Figma": "figma",
  "FastAPI": "fastapi", "MongoDB": "mongodb",
  "Docker": "docker", "Kubernetes": "kubernetes", "GitHub Actions": "githubactions",
  "AWS": "aws", "Vercel": "vercel", "Git": "git",
};
// Everything skillicons lacks, bundled locally.
const LOCAL = {
  "SQL": sqlIcon, "LangChain": langchainIcon, "Hugging Face": huggingfaceIcon,
  "MAXQDA": maxqdaIcon, "LimeSurvey": limesurveyIcon,
};

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
            const src = SKILL[name] ? `https://skillicons.dev/icons?i=${SKILL[name]}` : LOCAL[name];
            return (
              <span key={name} className={`tsk${hidden ? " hidden" : ""}`}>
                {src ? <img className="ti" src={src} alt="" loading="lazy" /> : <span className="cd" />}
                {name}
              </span>
            );
          })}
        </div>
      </Col>
    </section>
  );
}
