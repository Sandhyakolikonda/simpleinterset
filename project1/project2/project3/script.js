// Get the form and result elements
const form = document.getElementById("interestForm");
const resultElement = document.getElementById("result");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get input values
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);

  // Calculate simple interest
  const simpleInterest = (principal * rate * time) / 100;

  // Display the result
  resultElement.textContent = `Simple Interest: ₹${simpleInterest.toFixed(2)}`;
});