function Practice(props) {
  console.log(props);
  return (
    <div className="mybox">
      <h1>Practice {props.x}</h1>
      <input type="text" id="d1" />
      <button
        onClick={() => {
          props.chname(document.getElementById("d1").value);
        }}
      >
        Change the name
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          props.chup();
        }}
      >
        Make name UpperCase
      </button>
    </div>
  );
}

export default Practice;
