import React from "react";

function Child({ showModal, setShowModal }) {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h3>Child Componeny</h3>
      <button onClick={()=>setShowModal(!showModal)}>Show Modal</button>
      {showModal && (
        <div>
          <h5>Modal Component</h5>
          <p>This is the modal content.</p>
        </div>
      )}
    </div>
  );
}

export default Child;
