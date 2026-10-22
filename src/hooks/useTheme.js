import { useEffect, useState, useCallback } from "react";

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
export function useActiveSection(ids, offset = 180) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset;
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);
  return active;
}
