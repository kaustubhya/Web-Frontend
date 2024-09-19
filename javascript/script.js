const container = document.querySelector('.container');
const card = document.querySelector('.card');
const h1 = document.querySelector('h1')

// Already 1 is created so we do from 2 to 100
for(let i = 2; i < 101; i++) {
  const newCard = card.cloneNode();
  // document mein new card create nahi hua, memory mein copy create hua hai bas
  newCard.innerText = i;
  container.appendChild(document.body);
  // donot do document.appendChild as only one element is allowed on document
}