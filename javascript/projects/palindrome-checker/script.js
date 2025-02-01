const text = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

let textValue = "";


button.addEventListener("click", () => {

  textValue = text.value.trim(); // Get the latest input value and trim whitespace
  // no need of input event listener

  if(textValue === "") {
    alert('Please input a value');
    return;
  }

    function removeSpecialChars(str) {
      return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    }
    
    let cleanedText = removeSpecialChars(textValue);
  
    function palindromeCheck(str) {
      let ptr1 = 0;
      let ptr2 = str.length - 1;
  
      while (ptr1 < ptr2) {
        if (str[ptr1] !== str[ptr2]) {
          return false;
        }
  
        ptr1++;
        ptr2--;
      }
      return true;
    }
  
    if (palindromeCheck(cleanedText)) {
      result.innerText = `${textValue} is a palindrome`;
      // console.log(`${textValue} is a palindrome`);
    } else {
      result.innerText = `${textValue} is not a palindrome`;
      // console.log(`${textValue} is NOT a palindrome`);
    }
  
});
