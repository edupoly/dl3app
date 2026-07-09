import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartR);
  function isInCart() {
    return cartItems.find((prod) => {
      if (prod.id === product.id) {
        return true;
      }
    });
  }
  return (
    <div className="card" style={{ width: "12rem" }}>
      <img src={product.thumbnail} className="card-img-top" alt="..." />
      <div className="card-body d-flex justify-content-center flex-column align-items-center">
        <b className="card-title">{product.title.slice(0, 15)}</b>
        {!isInCart() && (
          <button
            onClick={() => {
              dispatch(addToCart({ ...product, count: 1 }));
            }}
            className="btn btn-primary"
          >
            Add To Cart
          </button>
        )}
        {isInCart() && (
          <Link to="/cart" className="btn btn-warning">
            Goto Cart
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
