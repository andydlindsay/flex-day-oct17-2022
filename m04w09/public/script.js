console.log('hello');

const url = 'https://my-json-server.typicode.com/andydlindsay/chef-andy/recipes';

// $.ajax({
//   method: 'GET',
//   url: url,
//   success: (response) => {
//     console.log(response);
//   },
//   error: (error) => {
//     console.log(error);
//   }
// });

// $.get(url, (response) => {
//   console.log('response inside callback', response);
// });

$.get(url)
  .then((response) => {
    console.log('response inside promise', response);
  });

