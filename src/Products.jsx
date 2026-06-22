import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Products() {
  var [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);
  return (
    <div className="mybox">
      <h1>Products</h1>
      <ul>
        {products?.map((product) => {
          return (
            <li>
              <Link to={`/productDetails/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
