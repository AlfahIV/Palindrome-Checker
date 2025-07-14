const inputField = document.getElementById ('input');
const submitBtn = document.getElementById('submit-btn');
const resultDisplay = document.getElementById('resultDisplay'); // ✅ target paragraph

submitBtn.addEventListener('click', palindromeCheck);

function palindromeCheck(){

const str = inputField.value.trim();
const clearWord = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const clearStr = clearWord.split('').reverse().join('');
const emptyInput = inputField.value = "";


  resultDisplay.classList.remove('palindrome', 'not-palindrome'); 


  if(str === ""){
    resultDisplay.innerHTML = "Please input a word"
    resultDisplay.style.color = "red"
    emptyInput;
  } if(clearWord === clearStr){
    resultDisplay.textContent = `✅ YAYYY!!! ${str} is a palindrome`;
    resultDisplay.classList.add('palindrome')
      emptyInput;
    }else{ 
    resultDisplay.textContent = `❌ AHHH ${str} is not a palindrome`;
    resultDisplay.classList.add('not-palindrome')
    emptyInput
    }
};
