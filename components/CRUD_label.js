"use client";

// Couleurs alignées sur Postman (sidebar / sélecteur de méthode)
const METHOD_COLORS = {
  GET: { color: "#0E7D38", background: "#E6F4EA" },
  POST: { color: "#C17A00", background: "#FFF8E6" },
  PUT: { color: "#097BED", background: "#E8F2FF" },
  PATCH: { color: "#9012FE", background: "#F3E8FF" },
  DELETE: { color: "#C91C2F", background: "#FDE8EA" },
  HEAD: { color: "#0B5E2A", background: "#E6F4EA" },
  OPTIONS: { color: "#D81B60", background: "#FCE4F0" },
};

const baseStyles = {
  margin: "0.25rem",
  padding: "0.25rem 0.4rem",
  borderRadius: "0.25rem",
  fontWeight: "600",
  fontSize: "10px",
  letterSpacing: "0.02em",
};

function methodBadge(method) {
  const { color, background } = METHOD_COLORS[method];
  return (
    <span style={{ ...baseStyles, color, background }}>{method}</span>
  );
}

/** Badge HTTP — sidebar ou MDX : <MethodLabel method="POST" /> ou <MethodLabel method="POST">Titre</MethodLabel> */
export function MethodLabel({ method, children }) {
  const badge = methodBadge(method);
  if (!children) return badge;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        flexWrap: "wrap",
      }}
    >
      {badge}
      <span>{children}</span>
    </span>
  );
}

export const getLabel = methodBadge("GET");
export const postLabel = methodBadge("POST");
export const putLabel = methodBadge("PUT");
export const patchLabel = methodBadge("PATCH");
export const deleteLabel = methodBadge("DELETE");
export const headLabel = methodBadge("HEAD");
export const optionsLabel = methodBadge("OPTIONS");
