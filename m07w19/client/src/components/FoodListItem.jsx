import './FoodListItem.scss';

const FoodListItem = (props) => {
  console.log(props);

  return (
    <div className="food-item">
      <h2>Food: {props.food.name}</h2>
      <h3>Price: ${props.food.price}</h3>
      <h3>Calories: {props.food.calories}</h3>
    </div>
  );
};

export default FoodListItem;
