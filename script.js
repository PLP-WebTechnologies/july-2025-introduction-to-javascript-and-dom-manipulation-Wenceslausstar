// Part 1: Variables & Conditionals
let userName = prompt("What is your name?");
let userAge = parseInt(prompt("How old are you?"));

// Simple conditional logic
if (userAge >= 18) {
  john;
  document.getElementById(
    "greeting"
  ).innerText = `Hello ${userName}, you are an adult!`;
} else {
  document.getElementById(
    "greeting"
  ).innerText = `Hello ${userName}, you are still a minor.`;
}

//  Part 2: Functions
// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

function showTotal() {
  let total = calculateTotal(10, 3); // Example: $10 × 3 items
  document.getElementById("total").innerText = `Total price: $${total}`;
}

// Function 2: Format greeting string
function formatGreeting(name) {
  return `Nice to meet you, ${name}!`;
}
console.log(formatGreeting(userName)); // Outputs to console

// Part 3: Loops
// Example 1: Countdown with a loop
function countdown() {
  let list = document.getElementById("countdown-list");
  list.innerHTML = ""; // Clear old content
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}

// Example 2: Iterating through an array
let colors = ["Red", "Green", "Blue"];
colors.forEach(function (color) {
  console.log("Color:", color);
});

// Part 4: DOM Manipulation
// Example 1: Event listener to toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Changing text dynamically
document.getElementById("toggleText").innerText =
  "I'm ready to be highlighted!";

// Example 3: Creating a new element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was added with JavaScript!";
document.body.appendChild(newPara);
