import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Total() {
  const { cartItems } = useSelector((state) => state.cartR);
  const { userDetails } = useSelector((state) => state.userR);
  const navigate = useNavigate();

  console.log(cartItems);
  function checkoutFn() {
    if (userDetails) {
      navigate("/payment");
    } else {
      navigate("/login");
    }
  }
  return (
    <div>
      <h1>
        Total : Rs.
        {cartItems?.reduce((a, b) => {
          return a + b.price * b.count;
        }, 0)}
      </h1>
      <button
        onClick={() => {
          checkoutFn();
        }}
        className="btn btn-primary"
      >
        Check out
      </button>
    </div>
  );
}

export default Total;
