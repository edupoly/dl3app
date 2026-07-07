import { useGetAllProductsQuery } from "../../services/productsApi";

function Products() {
  var { isLoading, data } = useGetAllProductsQuery();
  console.log(isLoading);
  console.log(data);
  return (
    <div className="mybox">
      <h1>Products</h1>
      {isLoading && <b>Loading....</b>}
      <ul className="d-flex flex-wrap justify-content-evenly list-unstyled">
        {isLoading == false &&
          data?.products.map((product) => {
            return (
              <li className="border p-2 m-2" style={{ width: "150px" }}>
                <img src={product.thumbnail} className="w-100" alt="" />
                <b>{product.title.slice(0, 10)}</b>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Products;
