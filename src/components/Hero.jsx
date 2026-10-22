import { useEffect, useMemo, useState } from "react";
import { Col } from "./Layout";
import { roles } from "../data";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [anim, setAnim] = useState(false);
  const [photo, setPhoto] = useState(0);

  const stars = useMemo(
    () => Array.from({ length: 26 }, () => ({
      left: (Math.random() * 100).toFixed(1),
      top: (Math.random() * 70).toFixed(1),
      opacity: (0.3 + Math.random() * 0.6).toFixed(2),
    })),
    []
  );

  useEffect(() => {
    const t = setInterval(() => {
      setAnim(true);
      setTimeout(() => { setRoleIdx((i) => (i + 1) % roles.length); setAnim(false); }, 320);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setPhoto((p) => 1 - p), 3600);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <Col>
        <div className="banner">
          <div className="stars">
            {stars.map((s, i) => (
              <i key={i} style={{ left: `${s.left}%`, top: `${s.top}%`, opacity: s.opacity }} />
            ))}
          </div>
          <div className="grid-v" /><div className="grid-h" /><div className="fade" />
        </div>
      </Col>

      <Col className="pad">
        <div className="idrow">
          <div className="idmain">
            <div className="avatar">
              <img className={photo === 0 ? "on" : ""} src={`${import.meta.env.BASE_URL}media/suvo1.jpg`} alt="Suvadeep Mukherjee" />
              <img className={photo === 1 ? "on" : ""} src={`${import.meta.env.BASE_URL}media/suvo2.jpg`} alt="Suvadeep Mukherjee" />
              <div className="scan" style={{ zIndex: 2 }} /><div className="beam" style={{ zIndex: 2 }} />
            </div>
            <div>
              <h1 className="name">Suvadeep Mukherjee</h1>
              <div className="subrot">
                <span style={{ transform: anim ? "translateY(-14px)" : "translateY(0)", opacity: anim ? 0 : 1 }}>
                  {roles[roleIdx]}
                </span>
              </div>
              <div className="metaline">
                <span className="mi">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg> Luxembourg
                </span>
                <span>·</span>
                <span className="mi"><span className="ping" /> Open to new roles</span>
              </div>
            </div>
          </div>
          <span className="kbadge">PhD · HCI &amp; Applied AI</span>
        </div>
      </Col>

      <Col className="pad" style={{ paddingTop: ".2rem" }}>
        <p className="tagline">I connect a business problem to a <em>working solution</em>, end to end.</p>
        <p className="lede">I began in enterprise software engineering and moved into applied research. Across both, the work is the same: understand what people actually need, <b>shape the process</b>, <b>build the software</b>, and <b>measure whether it worked</b>.</p>
        <div className="cta-row">
          <a className="btn primary" href="#cycle">Where I work in the cycle →</a>
          <a className="btn" href="#projects">Projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </Col>
    </>
  );
}
