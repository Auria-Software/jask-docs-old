const tagStyles = {
  margin: "0.25rem",
  padding: "0.25rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#FDECFF",
  color: "#9826A8",
  fontSize: "10px",
};

const betaStyles = {
  margin: "0.25rem",
  padding: "0.25rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#FFE5E5",
  color: "#E72E30",
  fontSize: "10px",
};

/** Badge « New » seul (à insérer à côté d’un libellé dans du MDX). */
export const newLabel = <span style={tagStyles}>New</span>;

/** Libellé de navigation + badge « New » (pour `_meta.js` / sidebar). */
export function NewLabel({ children }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        flexWrap: "wrap",
      }}
    >
      <span>{children}</span>
      <span style={tagStyles}>New</span>
    </span>
  );
}

export const betaLabel = <span style={betaStyles}>Beta</span>;
