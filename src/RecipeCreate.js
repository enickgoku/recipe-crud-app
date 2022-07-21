import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: '',
  }

  const [formData, setFormData] = useState(initialState)  

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    createRecipe({
      ...formData,
    })
    setFormData(initialState)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="ten-col">
              <label htmlFor="name">
                <input 
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td className="ten-col">
              <label htmlFor="cuisine">
                <input 
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td className="ten-col">
              <label htmlFor="photo">
                <input 
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td className="thirty-col">
              <label htmlFor="ingredients">
                <textarea 
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td className="thirty-col">
              <label htmlFor="preparation">
                <textarea 
                  id="preparation"
                  type="text"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>
            <td className="ten-col">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
