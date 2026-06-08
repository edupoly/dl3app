import { useState } from "react";

function Practice() {
  function abc() {
    alert("How are you doing???");
  }
  var a = 100;
  var b = 200;
  function adding() {
    alert(a + b);
  }
  var [n, updateNfn] = useState("");
  function xyz(ev) {
    // var v = document.getElementById("d1").value;
    // var v = ev.target.value;
    updateNfn(ev.target.value);
    document.getElementById("d2").innerText = v;
  }
  return (
    <div className="mybox">
      <h3>Practice Component</h3>
      <button
        onClick={() => {
          abc();
        }}
      >
        Say HI
      </button>
      <button
        onClick={() => {
          adding();
        }}
      >
        Add
      </button>
      <br />
      <br />
      <input
        type="text"
        onKeyUp={(event) => {
          xyz(event);
        }}
      />
      <h1>
        {/* Entered Text:<span id="d2"></span> */}
        Entered Text:<span>{n}</span>
      </h1>
    </div>
  );
}

export default Practice;
