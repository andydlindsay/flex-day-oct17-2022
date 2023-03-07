import {useEffect, useState} from 'react';
import axios from 'axios';
import FoodListItem from "./FoodListItem";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('/api/foods')
      .then((response) => {
        console.log(response.data);
        setFoods(response.data);
      });
  }, []);

  const mappedFoods = foods.map((food) => {
    return <FoodListItem key={food.id} food={food} />;
  })

  return (
    <div>
      <h2>FoodList component header!!!</h2>
      { mappedFoods }
    </div>
  );
};

export default FoodList;
