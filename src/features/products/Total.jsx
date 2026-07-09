import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Total() {
  const { cartItems } = useSelector((state) => state.cartR);
  console.log(cartItems);
  return (
    <div>
      <h1>
        Total : Rs.
        {cartItems?.reduce((a, b) => {
          return a.price * a.count + b.price * b.count;
        })}
      </h1>
      <Link to="/payment" className="btn btn-primary">
        Check out
      </Link>
    </div>
  );
}

export default Total;
