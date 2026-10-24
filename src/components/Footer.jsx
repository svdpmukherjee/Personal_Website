import { useEffect, useState } from "react";
import { Col, GapBand } from "./Layout";
import { email, socials } from "../data";
import me from "../assets/bg-image.jpg";

const GH = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>);
const LI = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" /></svg>);
const SC = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zM4 14v3.5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V14l-8 4.4z" /></svg>);
const ML = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);
const Play = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m10 9 5 3-5 3V9z" fill="currentColor" stroke="none" /></svg>);

const CONTACTS = [
  [socials.github, "GitHub", GH, true],
  [socials.linkedin, "LinkedIn", LI, true],
  [socials.scholar, "Scholar", SC, true],
  [`mailto:${email}`, "Mail", ML, false],
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [clock, setClock] = useState("Luxembourg");

  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1500); };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(email).then(done).catch(done);
    else done();
  };

  useEffect(() => {
    const tick = () => {
      try {
        const t = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Luxembourg", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(new Date());
        setClock(`Luxembourg · ${t}`);
      } catch (e) { setClock("Luxembourg"); }
    };
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer>
      <GapBand height={44} />
      <div className="band head stripes">
        <div className="col anchored">
          <span className="cnr tl" /><span className="cnr tr" /><span className="cnr bl" /><span className="cnr br" />
          <div className="sh"><h2>Scrolled this far?</h2></div>
        </div>
      </div>
      <Col className="pad foot-cta">
        <p>If you&apos;ve read this far, let&apos;s connect and talk about the role.</p>
      </Col>
      <Col>
        <div className="contact-grid">
          {CONTACTS.map(([href, label, Icon, ext]) => (
            <a key={label} className="cg" href={href} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined}>
              <span className="ib"><Icon /></span>{label}
            </a>
          ))}
        </div>
      </Col>
      <Col className="pad">
        <div className="mailrow">
          <span>{email}</span>
          <button className="copy-btn" onClick={copy}>{copied ? "copied" : "copy"}</button>
        </div>
      </Col>

      <GapBand height={20} />
      <div className="personal">
        <Col className="pad">
          <div className="pers-grid">
            <div className="pers-photo"><img src={me} alt="Me, away from the desk" loading="lazy" /></div>
            <div className="pers-txt">
              <span className="pers-kick">Off the clock</span>
              <h3>A life outside the work</h3>
              <p>When I am not working, I am usually spending quality time with my family, or exploring a new place with a backpack, or behind a drum kit practicing for the next gig. Good work, good life, and a good beat — that is the balance I try to keep.</p>
              {/* <div className="pers-tags"><span>👨‍👩‍👧 Family</span><span>🌍 Travelling</span><span>🥁 Drumming</span></div> */}
              <a className="pers-vid" href="https://www.youtube.com/watch?v=scUNnMiSQ38" target="_blank" rel="noopener noreferrer"><Play /> Watch me perform in a gig ↗</a>
            </div>
          </div>
        </Col>
      </div>

      <GapBand height={20} />
      <Col className="pad foot-bottom">
        <p className="mono">© {new Date().getFullYear()} · content is up to date</p>
        <p className="liveline mono"><span className="ping" /> <span>{clock}</span></p>
      </Col>
    </footer>
  );
}
