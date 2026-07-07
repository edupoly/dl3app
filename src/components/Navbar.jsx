import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Revolt
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <Link class="nav-link" to="/counter">
              Counter
            </Link>
            <Link class="nav-link" to="/todolist">
              Todolist
            </Link>
            <Link class="nav-link" to="/products">
              Products
            </Link>
            <Link class="nav-link" to="/recipes">
              Recipes
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
