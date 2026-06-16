import { useEffect, useRef } from "react";
import "./index.css";
function App() {
  var r1 = useRef();
  var r2 = useRef();
  function show(ev) {
    r1.current.innerText = ev.target.value;
    // document.getElementById("d1").innerText = ev.target.value;
  }
  useEffect(() => {
    r2.current.focus();
  }, []);
  return (
    <div className="mybox">
      <h1>Welcome to Modern Application Development</h1>
      <input
        type="text"
        onKeyUp={(ev) => {
          show(ev);
        }}
        ref={r2}
      />
      <div ref={r1}></div>
    </div>
  );
}

export default App;
// state (useState hook)
// action (function)
// ui (JSX)
