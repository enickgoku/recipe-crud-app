import React from "react"

function RecipeView({ recipes, deleteRecipe }) {
    const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => (
        <tr key={index}>
          <td className="ten-col">{name}</td>
          <td className="ten-col">{cuisine}</td>
          <td><img alt="recipe-pic" src={photo}></img></td>
          <td className="content_td thirty-col"><p>{ingredients}</p></td>
          <td className="content_td thirty-col"><p>{preparation}</p></td>
          <td className="ten-col">
          <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
          </td>
        </tr>
    ))
    return (
        rows
    )
}

export default RecipeView
