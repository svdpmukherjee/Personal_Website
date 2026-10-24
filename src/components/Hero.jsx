import { useEffect, useRef, useState } from "react";
import { Col } from "./Layout";
import { roles } from "../data";
import cover from "../assets/cover_photo.png";
import suvo1 from "../assets/suvo1.jpg";
import suvo2 from "../assets/suvo2.jpg";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [anim, setAnim] = useState(false);
  const [photo, setPhoto] = useState(0);
  const beamRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setAnim(true);
      setTimeout(() => { setRoleIdx((i) => (i + 1) % roles.length); setAnim(false); }, 320);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Swap the photo each time the scanning beam completes one pass, so the next
  // image is revealed exactly when the beam wraps back to the top.
  useEffect(() => {
    const el = beamRef.current;
    if (!el) return;
    const onPass = () => setPhoto((p) => 1 - p);
    el.addEventListener("animationiteration", onPass);
    return () => el.removeEventListener("animationiteration", onPass);
  }, []);

  return (
    <>
      <Col>
        <div className="banner">
          <img className="banner-img" src={cover} alt="" />
          <div className="fade" />
        </div>
      </Col>

      <Col className="pad">
        <div className="idrow">
          <div className="idmain">
            <div className="avatar">
              <img className={photo === 0 ? "on" : ""} src={suvo1} alt="Suvadeep Mukherjee" />
              <img className={photo === 1 ? "on" : ""} src={suvo2} alt="Suvadeep Mukherjee" />
              <div className="scan" style={{ zIndex: 2 }} /><div className="beam" ref={beamRef} style={{ zIndex: 2 }} />
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
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg> Esch-sur-Alzette,Luxembourg
                </span>
                <span>·</span>
                <span className="mi"><span className="ping" /> Open to new roles</span>
              </div>
            </div>
          </div>
        </div>
      </Col>

      <Col className="pad" style={{ paddingTop: ".2rem" }}>
        <p className="tagline">I design, build and evaluate <em>technical solutions, end to end</em> - grounded in user needs and guided by business goals.</p>
        {/* <p className="lede">I began in enterprise software engineering and moved into applied research. Across both, the work is the same: understand what people actually need, <b>shape the process</b>, <b>build the software</b>, and <b>measure whether it worked</b>.</p> */}
        <div className="cta-row">
          <a className="btn primary" href="#cycle">Where I fit in the product lifecycle →</a>
          <a className="btn" href="#projects">Projects</a>
          <a className="btn" href="#contact">Contact</a>
        </div>
      </Col>
    </>
  );
}
