import { Col, SectionHead } from "./Layout";

export default function Teaching() {
  return (
    <section id="teaching">
      <SectionHead title="Teaching" index="06 / 10" />
      <Col className="pad">
        <p className="intro">I like making hard things usable for other people — in a lecture hall and in a hands-on workshop.</p>
        <div className="teach">
          <div className="tcard">
            <div className="tk">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" /></svg> Course · Bachelor
            </div>
            <h3>Human-Computer Interaction</h3>
            <div className="org">University of Luxembourg · computer-science undergraduates</div>
            <p>Taught the HCI fundamentals and ran the studio side: students took a problem from concept to a tested prototype, and I coached their project ideas along the way.</p>
            <div className="pills">
              {["HCI concepts", "Information architecture", "Prototyping", "Project ideation", "Design critique"].map((t) => (
                <span className="pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="tcard">
            <div className="tk">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg> Webinar · hands-on <span className="aud">10+ attendees</span>
            </div>
            <h3>Building with AI agents</h3>
            <div className="org">Live session · from concept to a working agentic app</div>
            <p>Walked a mixed audience through agentic development end to end — the concepts on a shared Miro board, then a live hands-on build of <b style={{ color: "var(--fg)" }}>StudyPal</b>, an LLM study assistant, so everyone left with running code.</p>
            <div className="tlinks">
              <a href="https://miro.com/app/board/uXjVH6HPTsM=/" target="_blank" rel="noopener noreferrer">Miro teaching board ↗</a>
              <a href="https://github.com/svdpmukherjee/StudyPal" target="_blank" rel="noopener noreferrer">StudyPal repo ↗</a>
            </div>
          </div>
        </div>
      </Col>
    </section>
  );
}
