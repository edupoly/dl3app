import { Link } from "react-router-dom";
import { useGetAllRecipesQuery } from "../../services/recipesApi";

function Recipes() {
  var { isLoading, data } = useGetAllRecipesQuery();
  return (
    <div className="m-2 p-2 border">
      <h1>Recipes</h1>
      {isLoading && <b>Loading....</b>}
      {!isLoading && (
        <ul className="d-flex flex-wrap justify-content-evenly list-unstyled">
          {data?.recipes?.map((recipe) => {
            return (
              <li className="w-25 p-2 m-2">
                <Link to={`/recipeDetails/${recipe.id}`}>
                  <b>{recipe.name}</b>
                  <img src={recipe.image} className="w-100" alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Recipes;
