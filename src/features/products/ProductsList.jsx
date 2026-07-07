import React from "react";
import { useGetAllProductsQuery } from "../../services/productsApi";

function ProductsList() {
  const { isLoading, data } = useGetAllProductsQuery();
  console.log(data);
  return (
    <div>
      {isLoading && <b>Loading....</b>}
      {!isLoading && (
        <ul>
          {data?.products?.map((product) => {
            return <li>{product.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
