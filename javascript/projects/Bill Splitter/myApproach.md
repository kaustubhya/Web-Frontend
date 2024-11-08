For tip container and tip

```js
const tip5 = document.querySelector('.tip-1');
const tip10 = document.querySelector('.tip-2');
const tip15 = document.querySelector('.tip-3');
const tip25 = document.querySelector('.tip-4');
const tip50 = document.querySelector('.tip-5');
const tip75 = document.querySelector('.tip-6');


tip5.addEventListener('click', (e) => {
  e.preventDefault();
  tipPercentage = 0.05;
})

tip10.addEventListener('click', (e) => {
  e.preventDefault();
  tipPercentage = 0.10;
})

tip15.addEventListener('click', (e) => {
  e.preventDefault();
  tipPercentage = 0.15;
})

tip25.addEventListener('click', (e) => {
  e.preventDefault();
  tipPercentage = 0.25;
})
tip50.addEventListener('click', (e) => {
  e.preventDefault();
  tipPercentage = 0.50;
})
tip75.addEventListener('click', (e) => {
  e.preventDefault();
  tipPercentage = 0.75;
})
```