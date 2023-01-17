const pg = require('pg');

// const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // collection of clients (default 5 clients)

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

const verb = process.argv[2];
const id = process.argv[3];
// console.log(verb);

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newVillain = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $1 WHERE id = $2;', [newVillain, id])
      .then(() => {
        console.log('the villain has been updated');
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const villainMovie = process.argv[4];
    const query = 'INSERT INTO movie_villains (villain, movie) VALUES ($1, $2);';

    client.query(query, [villainName, villainMovie])
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${villainName}`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('the villain has been vanquished');
        client.end();
      });
    break;

  default:
    console.log('please use one of the BREAD verbs');
    client.end();
}
