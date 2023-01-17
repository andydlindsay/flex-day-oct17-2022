require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const pg = require('pg');

const app = express();
const port = process.env.PORT || 54321;

app.use(morgan('dev'));

const Client = pg.Client;

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const client = new Client(config);

client.connect(() => {
  console.log('connected to the database');
});

// GET /villains
app.get('/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains;')
    .then((response) => {
      res.json(response.rows);
      // res.render('template', {villains: response.rows});
      // res.send(response.rows);
    });
});

// GET /villains/:id
app.get('/villains/:id', (req, res) => {
  const id = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      res.json(response.rows[0]);
    });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
