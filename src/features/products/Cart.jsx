import { useDispatch, useSelector } from "react-redux";
import Total from "./Total";
import { decCartItemCount, incCartItemCount } from "./cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cartR);
  console.log(cartItems);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Cart</h1>
      <div className="d-flex">
        <div className="w-75">
          {cartItems?.map((item) => {
            return (
              <div class="card mb-3 mx-5">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={item.thumbnail}
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  {/* <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{item.title}</h5>
                      <p class="card-text">
                        <button
                          onClick={() => {
                            dispatch(incCartItemCount(item));
                          }}
                          className="btn btn-success me-2"
                        >
                          +
                        </button>
                        {item.count}
                        <button
                          onClick={() => {
                            dispatch(decCartItemCount(item));
                          }}
                          className="btn btn-danger ms-2"
                        >
                          -
                        </button>
                      </p>
                      <p class="card-text">
                        <small class="text-body-secondary">
                          Rs. {item.price * item.count}
                        </small>
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-25">
          <Total></Total>
        </div>
      </div>
    </div>
  );
}

export default Cart;
