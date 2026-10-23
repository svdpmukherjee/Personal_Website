import { navItems } from "../data";
import { useActiveSection } from "../hooks/useTheme";

const IDS = navItems.map(([id]) => id);

export default function SideRail() {
  const active = useActiveSection(IDS, { syncUrl: true });
  return (
    <aside className="siderail">
      <h3>Index</h3>
      {navItems.map(([id, label]) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
          {active === id ? <span className="ping sm" /> : <span className="bar" />}{label}
        </a>
      ))}
    </aside>
  );
}
