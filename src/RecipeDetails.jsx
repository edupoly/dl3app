import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  var { id } = useParams();
  var [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe({ ...data });
      });
  }, [id]);
  return (
    <div>
      <h1>{recipe?.name}</h1>
      <img className="img-fluid" src={recipe.image} alt="" />
    </div>
  );
}

export default RecipeDetails;
