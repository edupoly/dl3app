import { useGetAllProductsQuery } from "../../services/productsApi";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { isLoading, data } = useGetAllProductsQuery();
  return (
    <div>
      {isLoading && <b>Loading....</b>}
      {!isLoading && (
        <ul className="d-flex flex-wrap justify-content-center list-unstyled">
          {data?.products?.map((product) => {
            return (
              <li className="m-2" key={product.id}>
                <ProductCard product={product}></ProductCard>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
