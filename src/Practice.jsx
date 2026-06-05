function Practice() {
  var a = 120;
  var b = 3;
  var c = "Harisha";
  var ar = ["deepika", "alia", "Sonakshi"];
  return (
    <div className="mybox">
      <h1>Lets understand JSX</h1>
      <h2>{10 + 20}</h2>
      <h2>{a + b}</h2>
      <h2>{a * b}</h2>
      <h2>{a ** b}</h2>
      <h2>{c.toUpperCase()}</h2>
      <ul></ul>
    </div>
  );
}

export default Practice;
