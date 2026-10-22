import { useState } from "react";
import { Col, SectionHead } from "./Layout";
import { email, socials } from "../data";

const GH = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.69c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>);
const LI = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21H9z" /></svg>);
const SC = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9zM4 14v3.5c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V14l-8 4.4z" /></svg>);
const ML = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 1500); };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(email).then(done).catch(done);
    else done();
  };
  const links = [
    [socials.github, "GitHub", GH, true],
    [socials.linkedin, "LinkedIn", LI, true],
    [socials.scholar, "Scholar", SC, true],
    [`mailto:${email}`, "Mail", ML, false],
  ];

  return (
    <section id="contact">
      <SectionHead title="Contact" index="09 / 10" />
      <Col>
        <div className="contact-grid">
          {links.map(([href, label, Icon, ext]) => (
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
    </section>
  );
}
