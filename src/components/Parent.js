import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="parent" style={{ backgroundColor: "violet" }}>
      <h1>Parent Component</h1>
      <Child showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Parent;
