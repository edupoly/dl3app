import Third from "./Third";
import Nalugu from "./Fourth";

function Second(props) {
  return (
    <div className="mybox">
      <h1>Second Component {props.x}</h1>
      <Third y={props.x}></Third>
    </div>
  );
}
export default Second;
