import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const SunIcon = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
const MoonIcon = (p) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
);

const TOP_LINKS = [
  ["about", "About"], ["cycle", "Cycle"], ["projects", "Projects"],
  ["experience", "Experience"], ["teaching", "Teaching"], ["stack", "Stack"], ["contact", "Contact"],
];
const MOBILE_LINKS = [
  ["about", "About"], ["skills", "What I bring"], ["cycle", "Delivery cycle"], ["projects", "Projects"],
  ["experience", "Experience"], ["teaching", "Teaching"], ["stack", "Tech stack"], ["github", "GitHub"],
  ["contact", "Contact"], ["languages", "Languages"],
];

export default function Nav() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const ThemeIcon = dark ? SunIcon : MoonIcon;

  return (
    <header className="nav">
      <div className="col anchored">
        <span className="cnr tl" /><span className="cnr tr" />
        <div className="nav-col">
          <a href="#top" className="brand">Suvadeep</a>
          <nav className="nav-links">
            {TOP_LINKS.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
            <button className="icirc" id="theme" aria-label="Toggle theme" title="Toggle theme" onClick={toggle}><ThemeIcon /></button>
          </nav>
          <div className="nav-mob">
            <button className="icirc" aria-label="Toggle theme" onClick={toggle}><ThemeIcon width="15" height="15" /></button>
            <button className="icirc" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mmenu${open ? " show" : ""}`}>
        <div className="col">
          {MOBILE_LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </div>
    </header>
  );
}
