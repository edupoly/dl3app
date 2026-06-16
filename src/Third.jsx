import Nalugu from "./Fourth";
function Third(props) {
  return (
    <div className="mybox">
      <h1>Third One {props.y}</h1>
      <Nalugu z={props.y}></Nalugu>
    </div>
  );
}
export default Third;
