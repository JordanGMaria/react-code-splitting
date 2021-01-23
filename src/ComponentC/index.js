import React from "react";

function indexC({ history}) {
  return (
    <div>
      <h1>Component C</h1>
      <button className="button" onClick={() => history.push("ComponentA")}>
        Component A
      </button>
      <button className="button" onClick={() => history.push("ComponentB")}>
        Component B
      </button>
    </div>
  );
}

export default indexC;
