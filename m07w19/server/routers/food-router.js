const express = require('express');
const router = express.Router();

const foods = {
  abc: {
    id: 'abc',
    name: 'hamburger',
    price: 2.99,
    calories: 450
  },
  def: {
    id: 'def',
    name: 'cheese burger',
    price: 3.49,
    calories: 600
  },
};

// GET /api/foods/ => return raw data
router.get('/', (req, res) => {
  const foodsArr = Object.values(foods);
  res.json(foodsArr);
});

// GET /api/foods/:foodId
router.get('/:foodId', (req, res) => {
  const foodId = req.params.foodId;
  const food = foods[foodId];
  res.json(food);
});

// PATCH /api/foods/:foodId
router.patch('/:foodId', (req, res) => {
  const foodId = req.params.foodId;
  const food = foods[foodId];

  const newName = req.body.newName;
  const newPrice = req.body.newPrice;

  food.name = newName;
  food.price = newPrice;

  res.json(food);
});

// POST /api/foods
router.post('/', (req, res) => {
  const {name, price, calories} = req.body;

  const id = Math.random().toString(36).substring(2, 5);

  const newFood = {
    id,
    name,
    price,
    calories
  };

  foods[id] = newFood;
  console.log(foods);

  res.status(201).json(newFood);
});

// DELETE /api/foods/:foodId
router.delete('/:foodId', (req, res) => {
  const foodId = req.params.foodId;
  delete foods[foodId];

  res.status(200).send('food deleted successfully');
});

module.exports = router;
