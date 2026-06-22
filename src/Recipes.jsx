import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
function Recipes() {
  var [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes([...data.recipes]);
      });
  }, []);
  return (
    <div>
      <div className="d-flex flex-wrap align-items-start">
        <ul className="w-50">
          {recipes?.map((recipe) => {
            return (
              <li>
                <Link to={`recipeDetails/${recipe.id}`}>{recipe.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-50">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
