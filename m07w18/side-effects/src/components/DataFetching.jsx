import {useEffect, useState} from 'react';
import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';

const DataFetching = () => {
  const [ingredients, setIngredients] = useState([{id: 100, name: 'Butter'}]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const ingredientPromise = axios.get(`${baseUrl}/ingredients`);
    const recipePromise = axios.get(`${baseUrl}/recipes`);

    const promises = [ingredientPromise, recipePromise];

    Promise.all(promises)
      .then((response) => {
        console.log(response);

        const newIngredients = response[0].data;
        const newRecipes = response[1].data;

        // setIngredients(newIngredients);
        // setIngredients([...ingredients, ...newIngredients]);
        setIngredients((prev) => {
          return [...prev, ...newIngredients];
        });
        setRecipes(newRecipes);
      });
  }, []);

  const mappedIngredients = ingredients.map((ingredient) => {
    return <p key={ingredient.id}>Ingredient: {ingredient.name} ({ingredient.id})</p>
  });

  return (
    <div>
      <h2>Data Fetching!!</h2>
      <h2>Num recipes: {recipes.length}</h2>
      { mappedIngredients }
    </div>
  );
};

export default DataFetching;
