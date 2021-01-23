import React from "react";

function indexB({ history }) {
  return (
    <div>
      <h1>Component B</h1>
      <button className="button" onClick={() => history.push("ComponentA")}>
        Component A
      </button>
      <button className="button" onClick={() => history.push("ComponentC")}>
        Component C
      </button>
    </div>
  );
}

export default indexB;
