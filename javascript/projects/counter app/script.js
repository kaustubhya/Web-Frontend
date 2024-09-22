const counterValue = document.querySelector('.counter-value h1');

const inc = document.querySelector('.increment-buttons .inc');
const dec = document.querySelector('.increment-buttons .dec');

const valueChange = document.querySelector('#myIncDec');


let count = 0;


// Increment functionality
inc.addEventListener('click', () => {
    count = count + +(valueChange.value);
    counterValue.innerText = count;
    // console.log(count);

})


// Decrement functionality
dec.addEventListener('click', () => {
    count = count - +(valueChange.value);
    counterValue.innerText = count;
    // console.log(count);

})


// Reset functionality

const reset = document.querySelector('.reset button');

reset.addEventListener('click', function() {
    count = 0;
    counterValue.innerText = count;
})

