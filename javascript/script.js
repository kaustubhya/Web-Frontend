const textInp = document.querySelector('#myInput');
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log('Hello World');
});