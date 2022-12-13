$(document).ready(() => {

  console.log('hello');

  $('h2'); // selector
  $('<h2>'); // <h2></h2>

  // $('<h2>').addClass('heading').text('Welcome');

  // $(`<h2 class="heading">${greeting}</h2>`);

  const createDogElement = (dog) => {
    const $dogArticle = $(`  
      <article class="dog">
        <header>
          <h2>Name: ${dog.name}</h2>
          <h2 class="identity">ID: ${dog.id}</h2>
        </header>
        <p>Breed: ${dog.breed}<p>
        <hr/>
        <footer>
          <h4>Weight: ${dog.weight}lbs</h4>
        </footer>
      </article>
    `);

    return $dogArticle;
  };

  // grab the dog container from the DOM
  const $dogContainer = $('#dog-container');

  const renderDogs = (dogs) => {
    $dogContainer.empty();

    for (const dog of dogs) {
      // create the dog element
      const $dogArticle = createDogElement(dog);

      // add the new dog element to the DOM
      $dogContainer.prepend($dogArticle);
    }
  };

  // renderDogs(dogs);

  const fetchDogs = () => {
    $.get('/dogs', (dogs) => {
      renderDogs(dogs);
    });
  };

  fetchDogs();

  // grab the new dog form
  const $form = $('#new-dog');

  // register a callback for the submission event
  $form.on('submit', (event) => {
    event.preventDefault();
    console.log('the form has submitted');

    const data = $form.serialize();
    console.log(data);

    // clear the name input
    $("#new-dog").val('');

    $.post('/dogs', data, (response) => {
      console.log('post response', response);

      fetchDogs();
    });

  });

});
