import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="ten-col">Name</th>
            <th className="ten-col">Cuisine</th>
            <th className="ten-col">Photo</th>
            <th className="thirty-col">ingredients</th>
            <th className="thirty-col">Preparation</th>
            <th className="ten-col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <RecipeView recipes={recipes} deleteRecipe={deleteRecipe}  />
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
