"use client";

const newStyles = {
  margin: "0.25rem",
  padding: "0.15rem 0.35rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#FDECFF",
  color: "#9826A8",
  fontSize: "10px",
};

const betaStyles = {
  margin: "0.25rem",
  padding: "0.15rem 0.35rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#FFE5E5",
  color: "#E72E30",
  fontSize: "10px",
};

/** "New" badge — use inline in MDX or as sidebar label: <NewLabel /> or <NewLabel>Odoo</NewLabel> */
export function NewLabel({ children }) {
  const badge = <span style={newStyles}>New</span>;
  if (!children) return badge;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", flexWrap: "wrap" }}>
      <span>{children}</span>
      {badge}
    </span>
  );
}

/** "Beta" badge — use inline in MDX or as sidebar label: <BetaLabel /> or <BetaLabel>Feature</BetaLabel> */
export function BetaLabel({ children }) {
  const badge = <span style={betaStyles}>Beta</span>;
  if (!children) return badge;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", flexWrap: "wrap" }}>
      <span>{children}</span>
      {badge}
    </span>
  );
}
