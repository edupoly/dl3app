import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/user/userSlice";
import { clearCart } from "../features/products/cartSlice";
function Navbar() {
  const { cartItems } = useSelector((state) => state.cartR);
  const { userDetails } = useSelector((state) => state.userR);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function logoutFn() {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            style={{ width: "100px" }}
            src="https://png.pngtree.com/png-vector/20250513/ourmid/pngtree-e-commerce-logo-design-with-f-letter-vector-png-image_16209651.png"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" aria-disabled="true">
                Cart({cartItems.length})
              </Link>
            </li>
            {userDetails?.token && (
              <button
                className="btn btn-danger"
                onClick={() => {
                  logoutFn();
                }}
              >
                Logout
              </button>
            )}
            {!userDetails && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
