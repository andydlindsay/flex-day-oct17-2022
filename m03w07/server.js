const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const languages = require('./languages.json');
// console.log(languages);

const port = 3000;
const app = express();

// configure view engine
app.set('view engine', 'ejs');

// set up middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// users object
const users = {
  abc: {
    id: 'abc',
    email: 'a@a.com',
    password: '1234'
  }
};

// GET /protected
app.get('/protected', (req, res) => {
  // retrieve the user's cookie
  const userId = req.cookies.userId;

  // check if the user is logged in
  if (!userId) {
    return res.status(401).send('you are not allowed to be here');
  }

  // retrieve the user's information from the `users` object
  const user = users[userId];

  const templateVars = {
    email: user.email
  };

  res.render('protected', templateVars);
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  console.log('req.body', req.body);
  const email = req.body.email;
  const password = req.body.password;

  // did they give us an email and a password
  if (!email || !password) {
    return res.status(400).send('please provide an email and a password');
  }

  // find the user by their email address
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we NOT find someone?
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // console.log('foundUser', foundUser);

  // do the passwords NOT match
  if (foundUser.password !== password) {
    return res.status(400).send('the passwords do not match');
  }

  // happy path! the user is who they say they are!
  // set the cookie
  res.cookie('userId', foundUser.id);

  // redirect the user
  res.redirect('/protected');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the user's cookie
  res.clearCookie('userId');

  // send the user somewhere
  res.redirect('/login');
});

// GET /languages/:languagePref
app.get('/languages/:languagePref', (req, res) => {
  // retrieve the user's preference from the url parameter
  const languagePref = req.params.languagePref;

  // set a cookie in the user's browser based off their language preference
  res.cookie('language', languagePref);

  // redirect the user to the homepage
  res.redirect('/home');
});

// GET /home
app.get('/home', (req, res) => {
  // console.log('req.cookies', req.cookies);

  const languagePref = req.cookies.language;

  const templateVars = {
    heading: languages.homeHeadings[languagePref],
    body: languages.homeBodies[languagePref]
  };

  // console.log('templateVars', templateVars);

  res.render('home', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  const languagePref = req.cookies.language;

  const templateVars = {
    heading: languages.aboutHeadings[languagePref],
    body: languages.aboutBodies[languagePref]
  };

  res.render('about', templateVars);
});

// start the server up
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
