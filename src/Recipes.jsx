import { useEffect, useState } from "react";
function Recipes() {
  var [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.recipes);
        setRecipes([...data.recipes]);
      });
  }, []);
  return (
    <div className="mybox">
      <h3>Recipes</h3>
      <ul className=" d-flex flex-wrap justify-content-evenly">
        {recipes.map((recipe) => {
          return (
            <div className="card m-1" style={{ width: "15rem" }}>
              <img src={recipe.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="card-text">{recipe.ingredients}</p>
                <a href="#" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Recipes;
