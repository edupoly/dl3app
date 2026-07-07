import { useParams } from "react-router-dom";
import { useGetRecipeDetailsQuery } from "../../services/recipesApi";

function RecipeDetails() {
  var { id } = useParams();
  var { isLoading, data } = useGetRecipeDetailsQuery(id);
  return (
    <div>
      {isLoading && <b>Loading...</b>}
      {!isLoading && (
        <div>
          <h1> {data.name}RecipeDetails</h1>
          <img src={data.image} alt="" />
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
