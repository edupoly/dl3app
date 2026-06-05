function Practice() {
  var a = 120;
  var b = 3;
  var c = "Harisha";
  var ar = ["deepika", "alia", "Sonakshi", "Katrina"];
  var student = {
    firstname: "Jyothi",
    age: 20,
    gender: "Female",
  };

  return (
    <div className="mybox">
      <h1>Lets understand JSX</h1>
      <h2>{10 + 20}</h2>
      <h2>{a + b}</h2>
      <h2>{a * b}</h2>
      <h2>{a ** b}</h2>
      <h2>{c.toUpperCase()}</h2>
      <ul>
        <li>{ar[0]}</li>
        <li>{ar[1]}</li>
        <li>{ar[2]}</li>
      </ul>
      <ol>
        {ar.map((h) => {
          return <li>{h}</li>;
        })}
      </ol>
      <h1>{student.firstname}</h1>
      <h2>{student.gender}</h2>
    </div>
  );
}

export default Practice;
