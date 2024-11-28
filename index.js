// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userEmail = document.querySelector("#email").value;
  let userLevel = document.querySelector("#level").value;
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userEmail, userLevel, userHours });
});
// Validate the user's input
// Check if the user has selected a level - check level entered; check selected "Beginner" or "Advanced"; conditional statements
// Check if the user has provided an email address - check email entered, valid format (e.g., name@domain.com).
// Check if the user has specified at least one hour of study - must be => 1
// Check if the number of hours requested is within the allowed range - <= to mx number allowed in level
// Calculate the total cost
// Display the total cost to the user
