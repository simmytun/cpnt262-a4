// Asynchronous fetch(): request the JSON array from the new JSON endpoint using fetch().




fetch(`${window.location.origin}/api/v0/gallery`)
  .then(function(response) {


    
    // JSON 'data' returned from server
    //We need to convert it in a Javascript object
    return response.json();
  })
  .then(function(music) {
    //`data`Javascript
    console.log(music);
    let outputHTML = '';

    // Loop through `foods` array using `array.forEach()`. 
    // Create an image card for each image and append the `<figure>` card to the `outputHTML` variable.
    music.forEach(function(music) {
    

      outputHTML += 
        `<section class="container">
        <figure class="card">
          <img src=${music.image_path} alt="${music.title}">
          <figcaption> 
            <h1>[${music.title}]</h1>
            
            <a href="${music.url}" alt="${music.credit}">${music.credit}</a>
          </figcaption>
        </figure>
        </section>`;

    });

    //Send output to Dom
    document.querySelector('.gallery').innerHTML = outputHTML;
  })

  .catch(function(error) {
      if (error)
    console.log('nope sorry!');
  });