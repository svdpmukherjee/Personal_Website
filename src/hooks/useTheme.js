import { useEffect, useRef, useState, useCallback } from "react";

// Dark-first; OS "light" is honoured unless the visitor overrides via the toggle.
function computeDark() {
  const set = document.documentElement.getAttribute("data-theme");
  if (set) return set === "dark";
  return !window.matchMedia("(prefers-color-scheme: light)").matches;
}

export function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) document.documentElement.setAttribute("data-theme", saved);
    } catch (e) { /* ignore */ }
    setDark(computeDark());
  }, []);

  const toggle = useCallback(() => {
    const next = computeDark() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* ignore */ }
    setDark(next === "dark");
  }, []);

  return { dark, toggle };
}

// Tracks which section id is currently in view for the side rail / nav.
// With syncUrl, it also keeps the address bar in step: `#section` while inside
// a section, and a clean URL (no hash) when the visitor is back at the top.
export function useActiveSection(ids, { offset = 180, syncUrl = false } = {}) {
  const [active, setActive] = useState("");
  const lastRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset;
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) cur = id;
      }
      if (window.scrollY < 12) {
        cur = ""; // at the very top → no section
      } else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        // At the very bottom the page can't scroll far enough to put the last
        // section under the offset line, so pin it explicitly.
        cur = ids[ids.length - 1];
      }
      setActive(cur);
      if (syncUrl && cur !== lastRef.current) {
        lastRef.current = cur;
        // Pulse the matching section header ("you are here").
        document.querySelectorAll("section.sec-active").forEach((el) => el.classList.remove("sec-active"));
        if (cur) document.getElementById(cur)?.classList.add("sec-active");
        // Keep the address bar in step; clean URL (no hash) when back at the top.
        const url = cur ? `#${cur}` : window.location.pathname + window.location.search;
        history.replaceState(null, "", url);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset, syncUrl]);
  return active;
}
