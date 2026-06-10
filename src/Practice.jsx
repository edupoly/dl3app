import { useState } from "react";

function Practice() {
  var [c, updateC] = useState(100); //useState is a hook//return array of two
  function abc() {
    // c = 200;
    updateC(200);
    console.log(c);
  }
  return (
    <div className="mybox">
      <h2>Practice : {c}</h2>
      <button
        onClick={() => {
          abc();
        }}
      >
        Change Cvalue
      </button>
    </div>
  );
}

export default Practice;
