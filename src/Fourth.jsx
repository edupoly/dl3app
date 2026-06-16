import MyContext from "./MyContext";
import { useContext } from "react";

function Nalugu(props) {
  var m = useContext(MyContext);
  console.log(m);
  return (
    <div className="mybox">
      <h3>
        Fourth Component {props.z} {m.name}
      </h3>
    </div>
  );
}
export default Nalugu;
