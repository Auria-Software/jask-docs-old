const getStyles = {
  margin: "0.25rem",
  padding: "0.25rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#d7fae0",
  color: "#02611a",
  fontSize: "10px",
};

const postStyles = {
  margin: "0.25rem",
  padding: "0.25rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#c9dfff",
  color: "#022861",
  fontSize: "10px",
};

const deleteStyles = {
  margin: "0.25rem",
  padding: "0.25rem",
  borderRadius: "0.25rem",
  fontWeight: "400",
  background: "#fccad0",
  color: "#6b0c17",
  fontSize: "10px",
};

export const getLabel = <span style={getStyles}>GET</span>;
export const postLabel = <span style={postStyles}>POST</span>;
export const deleteLabel = <span style={deleteStyles}>DELETE</span>;
