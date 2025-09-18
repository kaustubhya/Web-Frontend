const words = ["Kaustubhya", "Sai Kiran", "Ajay", "Dhruv"];
const words2 = ["Developer", "God", "Villian", "Noob Person"];

const span1 = document.querySelector(".one");
const span2 = document.querySelector(".two");

function autoType(words, element, delay) {
  let letterIndex = 0;
  let reverse = false;
  let skipUpdate = 0;
  let currentIndex = 0;

  const setOne = setInterval(() => {

    if(skipUpdate) {
      skipUpdate--;
      return
    }

    let currentWord = words[currentIndex];

    if (!reverse) {
      skipUpdate = 2;
      element.innerText = currentWord.slice(0, letterIndex + 1);
      letterIndex++;

      if (letterIndex === currentWord.length) {
        skipUpdate = 6;
        reverse = true;
      }
    } else {
      element.innerText = currentWord.slice(0, letterIndex - 1);
      letterIndex--;

      if (letterIndex === 0) {
        reverse = false;
        currentIndex = (currentIndex + 1) % words.length;
      }
    }
  }, delay);
}

autoType(words, span1, 100);
autoType(words2, span2, 200);
