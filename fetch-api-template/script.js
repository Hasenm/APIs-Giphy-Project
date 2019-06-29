// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked
let button = document.querySelector(' #mainButton');
let searchterm = document.querySelector('#input')
console.log(button);

button.addEventListener('click', e => {
  console.log("button pressed!")
  let usertext = searchterm.value
  sendApiRequest(usertext);
})


// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
async function sendApiRequest(term) {
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=4cR9CgjAFBYHMm7Lmq8BQgCIwcL94iL3&q=${term}&limit=25&offset=0&rating=G&lang=en`)
    console.log(response)
    let gifs = await response.json(); 
    let myURL = getImageURLfrom(gifs, 5);
    addImageToScreen(myURL); 
};

// Get a specific image URL ending in .gif from your JSON search results. Pass it on to the next function.
function getImageURLfrom(myJSON, i) {
  console.log("function working");
  console.log(myJSON.data[i].images.original.url);
  return myJSON.data[i].images.original.url

};

// querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  let wrapper = document.querySelector('#wrapper');
  wrapper.innerHTML += `<img src="${myURL}">`
};



// Playtime challenges:
// Find something / someone else (rewrite the endpoint so that we aren't searching for Ryan Gosling)
// Instead of getting the first image, get a random image from the JSON results
// REPLACE the contents of the wrapper instead of adding onto them
// Make all your images the same height so that they line up nicely
