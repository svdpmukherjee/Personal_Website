// Layout primitives: the narrow dashed centre column, the striped section-header
// band, and the striped gap spacers.

export function Col({ className = "", children, as: Tag = "div", ...rest }) {
  return (
    <Tag className={`col ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export function SectionHead({ title, index }) {
  return (
    <div className="band head stripes">
      <div className="col anchored">
        <span className="cnr tl" /><span className="cnr tr" /><span className="cnr bl" /><span className="cnr br" />
        <div className="sh">
          <h2>{title}</h2>
          {index && <span className="aside">{index}</span>}
        </div>
      </div>
    </div>
  );
}

export function GapBand({ height = 28 }) {
  return (
    <div className="gap stripes" style={{ height: `${height}px` }}>
      <div className="col" />
    </div>
  );
}
