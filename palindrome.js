const inputField = document.getElementById("input");
const submitBtn = document.getElementById("submit-btn");
const resultDisplay = document.getElementById("resultDisplay"); // ✅ target paragraph

submitBtn.addEventListener("click", palindromeCheck);

function palindromeCheck() {
  const str = inputField.value.trim();
  const clearWord = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const clearStr = clearWord.split("").reverse().join("");
  const allSame = new Set(clearWord).size === 1;

  inputField.value = "";

  resultDisplay.classList.remove("palindrome", "not-palindrome");
  resultDisplay.style.color = "";

  if (str === "" || str.length < 3) {
    resultDisplay.textContent = "⚠️ Please enter at least 3 characters";
    resultDisplay.style.color = "red";
    return;
  }

    if (allSame) {
      resultDisplay.textContent = "❌ All characters are the same — not allowed";
      resultDisplay.classList.add('not-palindrome');
      return;
    }

    if (clearWord === clearStr) {
      resultDisplay.textContent = `✅ YAYYY!!! ${str} is a palindrome`;
      resultDisplay.classList.add("palindrome");
    } 
    else {
      resultDisplay.textContent = `❌ OOOPPS ${str} is not a palindrome`;
      resultDisplay.classList.add("not-palindrome");
    }  

  // Optional: focus input again
  inputField.focus();
}
