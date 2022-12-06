const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8001;

// config
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/flex', (req, res) => {
  res.render('flex');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
