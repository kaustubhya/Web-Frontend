const input = document.querySelector("#input-str");
const lowerCase = document.querySelector(".inner-container-1");
const upperCase = document.querySelector(".inner-container-2");
const camelCase = document.querySelector(".inner-container-3");
const pascalCase = document.querySelector(".inner-container-4");
const snakeCase = document.querySelector(".inner-container-5");
const kebabCase = document.querySelector(".inner-container-6");
const trimCase = document.querySelector(".inner-container-7");
const result = document.querySelector('.result')

function lCase(input) {
  lowerCase.innerText = input.toLowerCase(); 
}

function uCase(input) {
    upperCase.innerText = input.toUpperCase();
}

function sCase(input) {
    snakeCase.innerText = input.replaceAll(" ", "_");
}

function kCase(input) {
    kebabCase.innerText = input.replaceAll(" ", "-");
}

function trimFunc(input) {
    // trimCase.innerText = input.replace(/\s+/g, '');
    trimCase.innerText = input
    .split(' ')
    .join('');
}

function cCase(input) {
    camelCase.innerText = input
    .split(' ')
    .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join('');

    // here we first split the chars based on spaces and then used map to traverse the array of split
    // here we kept track of index and where index is 0, we left it as it is but for other indices, we converted the first letter of that word to uppercase
    // then we used slice(1) to join the other all words from index = 1 of a word (index = 0 is made to uppercase, we are talking about the inner index here)
    // finally we joined them using join('') to remove the spaces
}

function pCase(input) {
    pascalCase.innerText = input
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}


input.addEventListener("input", (e) => {

    // for (let i = 0; i < 7; i++) {
    //     result.children[i].style.height = '60px';
    // }
    
    lCase(e.target.value);
    uCase(e.target.value);
    sCase(e.target.value);
    kCase(e.target.value);
    trimFunc(e.target.value);
    cCase(e.target.value);
    pCase(e.target.value);
})
