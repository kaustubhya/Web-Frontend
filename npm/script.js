import axios from 'axios';
import Quotes from 'inspirational-quotes';

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  console.log(Quotes.getRandomQuote()); // return any random quote