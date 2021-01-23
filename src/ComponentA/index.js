import React from "react";

function indexA({ history }) {
  return (
    <div>
      <h1>Component A</h1>
      <button className="button" onClick={() => history.push("ComponentB")}>
        Component B
      </button>
      <button className="button" onClick={() => history.push("ComponentC")}>
        Component C
      </button>
    </div>
  );
}

export default indexA;
