const img = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";
  console.log(xhr);


  xhr.addEventListener("load", () => {
    img.src = xhr.response.message;
    // console.log(JSON.parse(xhr.response));
    console.log(xhr.response);
    // normally it takes time for an api to send data in response, so we used a load event listener here.
    // This will give us the response output when the response has been loaded.
  });



  // setup the request
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  // convention, use uppercase for request type for all browser compatibility

  // send the request
  xhr.send();
});
