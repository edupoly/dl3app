import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  var { id } = useParams();
  var [product, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts({ ...data });
      });
  }, [id]);
  return (
    <div className="mybox">
      <h1>{product?.title}</h1>
      <img src={product.thumbnail} alt="" />
    </div>
  );
}

export default ProductDetails;
