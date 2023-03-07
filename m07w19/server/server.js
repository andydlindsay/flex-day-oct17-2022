const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = 8000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // populates req.body
app.use(express.static('../client/build'));
// app.use(cors());

// require routers
const foodRouter = require('./routers/food-router');

// use our routers
app.use('/api/foods', foodRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
