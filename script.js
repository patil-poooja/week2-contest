let count = 0;
const counterDisplay = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const clearButton = document.getElementById("clear");
const errorDisplay = document.getElementById("error");

decrementButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counterDisplay.textContent = count;
  } else {
   // alert(count);
    errorDisplay.textContent = "Error: Cannot go below 0";
    document.getElementById('error').style.display = 'block';
  }
});

incrementButton.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
  errorDisplay.textContent = ""; // Clear error message
});

clearButton.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
  errorDisplay.textContent = ""; // Clear error message
});