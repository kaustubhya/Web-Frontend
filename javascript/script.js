const card = document.querySelector('.card');
const container = document.querySelector('.container');

let count = 0;

card.addEventListener('click', function() {
const newCard = document.createElement('div')
newCard.classList.add('card')
count++;
newCard.innerText = count;
container.append(newCard);
});

