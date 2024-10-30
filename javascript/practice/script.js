const card = document.querySelector('.card');
const container = document.querySelector('.container');

let count = 1;

card.addEventListener('click', function() {
const newCard = document.createElement('div')
newCard.classList.add('card')
newCard.innerText = count;
count++;
container.append(newCard);
});