import { useEffect, useState } from "react";
import { Col, GapBand } from "./Layout";
import { email, quotes } from "../data";

export default function Footer() {
  const [qi, setQi] = useState(0);
  const [fade, setFade] = useState(false);
  const [clock, setClock] = useState("Luxembourg");

  useEffect(() => {
    const t = setInterval(() => {
      setFade(true);
      setTimeout(() => { setQi((i) => (i + 1) % quotes.length); setFade(false); }, 400);
    }, 6000);
    return () => clearInterval(t);
  }, []);

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
        <p>If you&apos;ve read this far, we probably align on how software gets built. Let&apos;s talk about the role.</p>
        <a className="talk" href={`mailto:${email}`}>Let&apos;s talk →</a>
      </Col>
      <GapBand height={20} />
      <div className="quoteband">
        <Col>
          <div className="quote">
            <div className="qm">&ldquo;</div>
            <p style={{ opacity: fade ? 0 : 1 }}>{quotes[qi].t}</p>
            <div className="qa" style={{ opacity: fade ? 0 : 1 }}>— {quotes[qi].a}</div>
          </div>
        </Col>
      </div>
      <GapBand height={20} />
      <Col className="pad foot-bottom">
        <p>Built by <b style={{ color: "var(--fg)" }}>Suvadeep Mukherjee</b> · Luxembourg</p>
        <p className="mono">© {new Date().getFullYear()} · prototype, content still being refined</p>
        <p className="liveline mono"><span className="ping" /> <span>{clock}</span></p>
      </Col>
    </footer>
  );
}
